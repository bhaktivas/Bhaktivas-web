import crypto from 'crypto';

export const MEDIA_PROPERTIES = new Set<string>([
  'imageUrl',
  'thumbnailUrl',
  'videoUrl',
  'audioUrl',
  'downloadUrl',
  'hlsUrl',
  'mediaUrl',
  'artworkUrl',
  'iconUrl',
]);

/**
 * Signs a URL starting with https://cdn.bhaktivas.com using HMAC SHA-256 of `${pathname}:${expires}`.
 * Appends `?token=<hmac_hex>&expires=<expiration_timestamp>`.
 * 
 * @param urlStr The media URL to sign
 * @param ttlSeconds Expiration window in seconds (defaults to 86400 / 24 hours)
 * @returns Pre-signed URL or original string
 */
export function signCdnUrl(urlStr: string, ttlSeconds: number = 86400): string {
  if (!urlStr || typeof urlStr !== 'string') {
    return urlStr;
  }

  const trimmedUrl = urlStr.trim();
  if (!trimmedUrl.startsWith('https://cdn.bhaktivas.com')) {
    return urlStr;
  }

  const secret = process.env.CLOUDFLARE_MEDIA_HMAC_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[cdnSigner] Warning: CLOUDFLARE_MEDIA_HMAC_SECRET environment variable is missing.');
    }
    return urlStr;
  }

  try {
    const urlObj = new URL(trimmedUrl);
    const expires = Math.floor(Date.now() / 1000) + ttlSeconds;
    const pathname = urlObj.pathname;
    const message = `${pathname}:${expires}`;

    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(message);
    const token = hmac.digest('hex');

    urlObj.searchParams.set('token', token);
    urlObj.searchParams.set('expires', expires.toString());

    return urlObj.toString();
  } catch (err) {
    console.error('[cdnSigner] Error parsing/signing CDN URL:', err);
    return urlStr;
  }
}

/**
 * Recursively signs all media properties in document/API response payloads:
 * imageUrl, thumbnailUrl, videoUrl, audioUrl, downloadUrl, hlsUrl, mediaUrl, artworkUrl, iconUrl
 * or any string starting with https://cdn.bhaktivas.com.
 * 
 * @param data Payload object or array
 * @param ttlSeconds Expiration window in seconds (defaults to 86400 / 24 hours)
 * @returns Deeply pre-signed document or array payload
 */
export function signObjectMediaUrls<T>(data: T, ttlSeconds: number = 86400): T {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data === 'string') {
    return signCdnUrl(data, ttlSeconds) as unknown as T;
  }

  if (Array.isArray(data)) {
    return data.map((item) => signObjectMediaUrls(item, ttlSeconds)) as unknown as T;
  }

  if (typeof data === 'object') {
    const copy: Record<string, any> = { ...data };
    for (const key of Object.keys(copy)) {
      const val = copy[key];
      if (typeof val === 'string') {
        if (MEDIA_PROPERTIES.has(key) || val.startsWith('https://cdn.bhaktivas.com')) {
          copy[key] = signCdnUrl(val, ttlSeconds);
        }
      } else if (typeof val === 'object' && val !== null) {
        copy[key] = signObjectMediaUrls(val, ttlSeconds);
      }
    }
    return copy as T;
  }

  return data;
}

const cdnSigner = {
  signCdnUrl,
  signObjectMediaUrls,
  MEDIA_PROPERTIES,
};

export default cdnSigner;
