import { NextResponse } from 'next/server';

export async function GET() {
  const appleAppSiteAssociation = {
    applinks: {
      apps: [],
      details: [],
    },
  };

  return NextResponse.json(appleAppSiteAssociation, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
