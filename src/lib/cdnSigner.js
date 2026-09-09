const crypto = require('crypto');

const MEDIA_PROPERTIES = new Set([
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
 * @param {string} urlStr The media URL to sign
 * @param {number} ttlSeconds Expiration window in seconds (defaults to 86400 / 24 hours)
 * @returns {string} Pre-signed URL or original string
 */
function signCdnUrl(urlStr, ttlSeconds = 86400) {
  if (!urlStr || typeof urlStr !== 'string') {
    return urlStr;
  }

  const trimmedUrl = urlStr.trim();
  if (!trimmedUrl.startsWith('https://cdn.bhaktivas.com')) {
    return urlStr;
  }

  const secret = process.env.CLOUDFLARE_MASTER_SECRET || process.env.CLOUDFLARE_MEDIA_HMAC_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[cdnSigner] Warning: CLOUDFLARE_MASTER_SECRET / CLOUDFLARE_MEDIA_HMAC_SECRET environment variable is missing.');
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
 * @param {any} data Payload object or array
 * @param {number} ttlSeconds Expiration window in seconds (defaults to 86400 / 24 hours)
 * @returns {any} Deeply pre-signed document or array payload
 */
function signObjectMediaUrls(data, ttlSeconds = 86400) {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data === 'string') {
    return signCdnUrl(data, ttlSeconds);
  }

  if (Array.isArray(data)) {
    return data.map((item) => signObjectMediaUrls(item, ttlSeconds));
  }

  if (typeof data === 'object') {
    const copy = { ...data };
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
    return copy;
  }

  return data;
}

module.exports = {
  signCdnUrl,
  signObjectMediaUrls,
  MEDIA_PROPERTIES,
};
module.exports.default = module.exports;
