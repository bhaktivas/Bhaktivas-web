import { NextRequest, NextResponse } from 'next/server';
import { signCdnUrl } from '@/lib/cdnSigner';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const url = searchParams.get('url');
    const ttlStr = searchParams.get('ttl');

    if (!url) {
      return NextResponse.json(
        { error: 'Missing required query parameter "url"' },
        { status: 400 }
      );
    }

    // Default TTL is 1800 seconds (30 minutes)
    const ttlSeconds = ttlStr ? parseInt(ttlStr, 10) : 1800;
    const signedUrl = signCdnUrl(url, Number.isNaN(ttlSeconds) ? 1800 : ttlSeconds);

    const urlObj = new URL(signedUrl);
    const token = urlObj.searchParams.get('token');
    const expires = urlObj.searchParams.get('expires');

    return NextResponse.json({
      signedUrl,
      originalUrl: url,
      token,
      expires,
    });
  } catch (error) {
    console.error('Error in /api/sign:', error);
    return NextResponse.json(
      { error: 'Failed to sign media URL' },
      { status: 500 }
    );
  }
}
