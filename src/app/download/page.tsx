import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function DownloadAppPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const isWebView = resolvedSearchParams?.webview === 'true' || resolvedSearchParams?.app === 'true';

  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.bhaktivas.app';
  const APP_STORE_URL = 'https://apps.apple.com/app/id6400000000';

  const appFeatures = [
    {
      icon: '🎵',
      title: 'Full Audio & Bhajan Player',
      desc: 'Listen to 1000+ devotional bhajans, aartis, and mantras with background audio playback.',
    },
    {
      icon: '🖼️',
      title: '4K Ultra HD Wallpapers',
      desc: 'Download high-resolution wallpapers of deities directly to your phone gallery.',
    },
    {
      icon: '📅',
      title: 'Daily Panchang & Alarms',
      desc: 'Get precise tithi, Rahukaal alerts, and wake up to auspicious devotional alarms.',
    },
    {
      icon: '🕉️',
      title: '108 Bead Jap Mala Counter',
      desc: 'Track your daily chanting cycles with tactile haptic feedback and streak statistics.',
    },
    {
      icon: '✨',
      title: 'Daily Horoscope & Rashifal',
      desc: 'Receive personalized daily zodiac forecasts and astrological wisdom.',
    },
    {
      icon: '📖',
      title: 'Complete Srimad Bhagavad Gita',
      desc: 'Offline access to all 18 chapters with audio commentary and translations.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#3A2E2A] flex flex-col font-sans">
      {!isWebView && <Navbar />}

      {/* Hero Banner */}
      <header className="bg-[#3A2E2A] text-[#FBF7F0] py-16 px-6 text-center border-b-4 border-[#E38B29] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#E38B29]/20 border border-[#E38B29] px-4 py-1.5 rounded-full mb-6">
            <span className="text-xl">📲</span>
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E38B29]">BHAKTIVAS APP</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
            Unlock Full Devotional Experience <br className="hidden sm:inline" />
            <span className="text-[#E38B29]">On Bhaktivas Mobile App</span>
          </h1>

          <p className="text-base sm:text-lg text-[#E0D4C5] leading-relaxed max-w-2xl mx-auto mb-8">
            Full audio playback, 4K wallpaper downloads, daily Panchang notifications, and interactive Jap Mala are exclusively available in the Bhaktivas app.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#E38B29] hover:bg-[#c9781d] text-white px-7 py-3.5 rounded-2xl font-extrabold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-base"
            >
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <div className="text-[10px] text-amber-100 font-semibold uppercase">Get it on</div>
                <div className="text-sm sm:text-base font-extrabold">Google Play</div>
              </div>
            </a>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-2xl font-extrabold shadow-md hover:-translate-y-0.5 transition-all text-base"
            >
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <div className="text-[10px] text-[#D0C4B5] font-semibold uppercase">Download on the</div>
                <div className="text-sm sm:text-base font-extrabold">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Showcase */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 flex flex-col gap-10">
        
        {/* Notice Card */}
        <div className="bg-[#FFF8F0] rounded-3xl p-6 sm:p-8 border-2 border-[#FCE4CB] text-center shadow-xs">
          <span className="text-3xl mb-2 block">🔒</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#3A2E2A] mb-2">App-Exclusive Content</h2>
          <p className="text-sm sm:text-base text-[#5A4E45] max-w-2xl mx-auto leading-relaxed">
            To ensure secure high-quality streaming and protect rights, full media streaming and HD wallpaper downloads require the <strong>Bhaktivas App</strong>.
          </p>
        </div>

        {/* Features Showcase Grid */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F0E6D8] shadow-xs">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">What you get</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E2A]">App Features &amp; Benefits</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {appFeatures.map((feat, idx) => (
              <div key={idx} className="bg-[#FBF7F0] rounded-2xl p-5 border border-[#F0E6D8] hover:border-[#E38B29] transition-all">
                <span className="text-3xl mb-3 block">{feat.icon}</span>
                <h3 className="text-base font-extrabold text-[#3A2E2A] mb-1">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A4E45] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-[#3A2E2A] text-white rounded-3xl p-8 sm:p-12 text-center border-2 border-[#E38B29] shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Begin Your Devotional Journey Today</h2>
          <p className="text-sm sm:text-base text-[#E0D4C5] max-w-xl mx-auto mb-6 leading-relaxed">
            Join thousands of devotees bringing peace, mantras, and daily wisdom into their lives with Bhaktivas.
          </p>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E38B29] hover:bg-[#c9781d] text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            Download Bhaktivas App Now ➔
          </a>
        </div>
      </main>

      {!isWebView && <Footer />}
    </div>
  );
}
