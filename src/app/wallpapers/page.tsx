import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SafeImage from '@/components/media/SafeImage';
import VideoPlayer from '@/components/media/VideoPlayer';
import { getWallpapers } from '@/services/wallpaperService';

export default async function WallpapersPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const isWebView = resolvedSearchParams?.webview === 'true' || resolvedSearchParams?.app === 'true';

  // Fetch max 10 random wallpapers
  const wallpapers = await getWallpapers(10);

  console.log('[WallpapersPage Logs] Loaded Wallpapers Count:', wallpapers.length);
  wallpapers.forEach((w, i) => {
    console.log(`[WallpapersPage Log #${i + 1}] ID: ${w.id} | Title: ${typeof w.title === 'string' ? w.title : w.title?.hi} | Image URL: ${w.image}`);
  });

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#3A2E2A] flex flex-col font-sans">
      {!isWebView && <Navbar />}

      {/* Header */}
      <header className="bg-[#3A2E2A] text-[#FBF7F0] py-14 px-6 text-center border-b-4 border-[#E38B29]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E38B29]/20 border border-[#E38B29] px-4 py-1 rounded-full mb-4">
            <span className="text-xl">🖼️</span>
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E38B29]">DEVOTIONAL WALLPAPERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">Divine 4K Wallpapers</h1>
          <p className="text-base sm:text-lg text-[#E0D4C5] leading-relaxed max-w-2xl mx-auto mb-4">
            High-definition devotional wallpapers of Hindu deities. Full 4K Ultra HD downloads are available in the Bhaktivas Mobile App.
          </p>
          <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs text-[#FCE4CB] font-semibold border border-white/15">
            Showing max 10 random view-only previews
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        
        {/* Wallpapers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {wallpapers.map((wallpaper, index) => {
            const checkIsVideo = (url) => typeof url === 'string' && (url.includes('.mp4') || url.includes('.m3u8') || url.includes('/live/') || url.includes('/video/'));
            const isLive = wallpaper.artStyle === 'live' || Boolean(wallpaper.videoUrl) || Boolean(wallpaper.hlsUrl) || Boolean(wallpaper.mp4Url) || checkIsVideo(wallpaper.imageUrl);
            const videoSrc = wallpaper.videoUrl || wallpaper.hlsUrl || wallpaper.mp4Url || (checkIsVideo(wallpaper.imageUrl) ? wallpaper.imageUrl : null) || wallpaper.downloadUrl;
            const imageSrc = wallpaper.imageUrl || wallpaper.thumbnailUrl || wallpaper.image;
            const displayTitle = typeof wallpaper.title === 'string' ? wallpaper.title : wallpaper.title?.hi || wallpaper.title?.en || 'Devotional Wallpaper';

            return (
              <Link
                key={wallpaper.id || index}
                href="/download"
                className="group bg-white rounded-2xl overflow-hidden border border-[#F0E6D8] hover:border-[#E38B29] shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                {/* Media Preview Container */}
                <div className="relative aspect-[3/4] bg-[#FBF7F0] overflow-hidden">
                  {isLive && videoSrc ? (
                    <VideoPlayer
                      src={videoSrc}
                      poster={imageSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                    />
                  ) : (
                    <SafeImage
                      src={imageSrc}
                      alt={displayTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      fallbackIcon="🖼️"
                    />
                  )}

                  {/* Resolution & Type Badge */}
                  <div className={`absolute top-2 left-2 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${isLive ? 'bg-[#E38B29]' : 'bg-black/60'}`}>
                    {isLive ? '🎥 LIVE 4K' : (wallpaper.resolution || '4K Ultra HD')}
                  </div>
                </div>

                {/* Info & CTA */}
                <div className="p-3 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <span className="text-[10px] font-bold text-[#E38B29] uppercase tracking-wider block mb-0.5">
                      {wallpaper.subtitle || wallpaper.category || 'Deity'}
                    </span>
                    <h3 className="font-extrabold text-[#3A2E2A] text-xs sm:text-sm group-hover:text-[#E38B29] transition-colors truncate">
                      {displayTitle}
                    </h3>
                  </div>

                  <div className="mt-3">
                    <span className="w-full inline-flex items-center justify-center gap-1 text-[11px] font-extrabold text-white bg-[#3A2E2A] group-hover:bg-[#E38B29] py-1.5 rounded-xl transition-colors">
                      🔒 Download 4K in App
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Download App CTA Card */}
        <div className="mt-12 bg-[#FFF8F0] rounded-3xl p-8 border-2 border-[#FCE4CB] text-center shadow-xs">
          <h2 className="text-2xl font-extrabold text-[#3A2E2A] mb-2">Want to set 4K Ultra HD wallpapers on your phone?</h2>
          <p className="text-sm text-[#5A4E45] max-w-xl mx-auto mb-6">
            Direct gallery downloads, live wallpaper animations, and lock screen setups are available exclusively in the Bhaktivas Mobile App.
          </p>
          <Link
            href="/download"
            className="inline-block bg-[#E38B29] hover:bg-[#c9781d] text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-md transition-all"
          >
            Download App for 4K Wallpapers 📲
          </Link>
        </div>
      </main>

      {!isWebView && <Footer />}
    </div>
  );
}
