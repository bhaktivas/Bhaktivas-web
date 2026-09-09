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

    const ttlSeconds = ttlStr ? parseInt(ttlStr, 10) : 86400;
    const signedUrl = signCdnUrl(url, Number.isNaN(ttlSeconds) ? 86400 : ttlSeconds);

    return NextResponse.json({
      signedUrl,
      originalUrl: url,
    });
  } catch (error) {
    console.error('Error in /api/sign-url:', error);
    return NextResponse.json(
      { error: 'Failed to sign media URL' },
      { status: 500 }
    );
  }
}
