import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SafeImage from '@/components/media/SafeImage';
import { getBhajans } from '@/services/bhajanService';

export default async function BhajansPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const isWebView = resolvedSearchParams?.webview === 'true' || resolvedSearchParams?.app === 'true';

  // Fetch max 10 random bhajans
  const bhajans = await getBhajans(10);

  console.log('[BhajansPage Logs] Loaded Bhajans Count:', bhajans.length);

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#3A2E2A] flex flex-col font-sans">
      {!isWebView && <Navbar />}

      {/* Header */}
      <header className="bg-[#3A2E2A] text-[#FBF7F0] py-14 px-6 text-center border-b-4 border-[#E38B29]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E38B29]/20 border border-[#E38B29] px-4 py-1 rounded-full mb-4">
            <span className="text-xl">🎵</span>
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E38B29]">DEVOTIONAL BHAJANS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">Soulful Bhajans &amp; Chants</h1>
          <p className="text-base sm:text-lg text-[#E0D4C5] leading-relaxed max-w-2xl mx-auto mb-4">
            Explore curated devotional bhajans, aartis, and mantras. Full audio playback is available in the Bhaktivas Mobile App.
          </p>
          <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs text-[#FCE4CB] font-semibold border border-white/15">
            Showing max 10 random view-only previews
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        
        {/* Bhajans List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bhajans.map((bhajan, index) => (
            <Link
              key={bhajan.id || index}
              href="/download"
              className="group bg-white rounded-2xl p-4 border border-[#F0E6D8] hover:border-[#E38B29] shadow-xs hover:shadow-md transition-all flex items-center gap-4"
            >
              {/* Cover Thumbnail */}
              <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#FBF7F0] border border-[#F0E6D8]">
                <SafeImage
                  src={bhajan.image || bhajan.artworkUrl || bhajan.imageUrl}
                  alt={typeof bhajan.title === 'string' ? bhajan.title : bhajan.title?.hi || 'Bhajan Cover'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackIcon="🎵"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-90 group-hover:bg-black/50 transition-colors">
                  <span className="text-white text-xl">▶</span>
                </div>
              </div>

              {/* Bhajan Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-extrabold bg-[#FFF5EB] text-[#E38B29] px-2 py-0.5 rounded-md border border-[#FCE4CB]">
                    {bhajan.category || bhajan.metadata?.deity || 'Bhajan'}
                  </span>
                  {bhajan.metadata?.duration && (
                    <span className="text-[11px] text-[#8B6B4A] font-medium">⏱️ {bhajan.metadata.duration}</span>
                  )}
                </div>

                <h3 className="font-extrabold text-[#3A2E2A] text-base group-hover:text-[#E38B29] transition-colors truncate">
                  {typeof bhajan.title === 'string' ? bhajan.title : bhajan.title?.hi || bhajan.title?.en}
                </h3>

                <p className="text-xs text-[#6B5B53] truncate mt-0.5">
                  {typeof bhajan.subtitle === 'string' ? bhajan.subtitle : bhajan.subtitle?.hi || bhajan.subtitle?.en || bhajan.artist?.hi || 'Bhaktivas Devotional'}
                </p>
              </div>

              {/* Play CTA */}
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1 text-xs font-extrabold text-white bg-[#3A2E2A] group-hover:bg-[#E38B29] px-3 py-2 rounded-xl transition-colors">
                  🔒 Play in App
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Download App CTA Card */}
        <div className="mt-12 bg-[#FFF8F0] rounded-3xl p-8 border-2 border-[#FCE4CB] text-center shadow-xs">
          <h2 className="text-2xl font-extrabold text-[#3A2E2A] mb-2">Want to listen to full devotional bhajans?</h2>
          <p className="text-sm text-[#5A4E45] max-w-xl mx-auto mb-6">
            Background audio playback, playlists, offline listening, and high-definition audio are available exclusively in the Bhaktivas Mobile App.
          </p>
          <Link
            href="/download"
            className="inline-block bg-[#E38B29] hover:bg-[#c9781d] text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-md transition-all"
          >
            Download App to Play Full Bhajans 📲
          </Link>
        </div>
      </main>

      {!isWebView && <Footer />}
    </div>
  );
}
