import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF8F3] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Main Hero Section */}
        <section className="relative py-16 sm:py-24 px-6 max-w-7xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#F5E8CE] text-[#995512] mb-6 border border-[#E8DCC4]">
            <span>✨ Welcome to Bhaktivas</span>
            <span>•</span>
            <span>Your Daily Spiritual Companion</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#2D1F1A] tracking-tight leading-tight max-w-4xl mx-auto">
            Experience Peace, Wisdom & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D48A29] to-[#995512]">
              Daily Devotion
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#6B5B53] max-w-2xl mx-auto leading-relaxed">
            Start every day with divine purpose through Srimad Bhagavad Gita, powerful alarms, soulful bhajans, Panchang, live darshan, and daily wisdom.
          </p>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/gita"
              className="rounded-full bg-gradient-to-r from-[#D48A29] to-[#b8741e] px-8 py-3.5 font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 text-base"
            >
              <span>📖 Read Bhagavad Gita (भगवद्गीता)</span>
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.bhaktivas"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#2D1F1A] hover:bg-[#422F28] px-8 py-3.5 font-semibold text-white transition shadow-md hover:shadow-lg text-base"
            >
              Download App 📲
            </a>
          </div>

          {/* Featured Bhagavad Gita Hero Banner Card */}
          <div className="mt-16 text-left relative rounded-3xl bg-gradient-to-r from-[#2D1F1A] via-[#3D2C25] to-[#2D1F1A] text-white p-8 sm:p-12 shadow-2xl border border-[#422F28] overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D48A29]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#D48A29] text-white">
                  <span>🪔 FEATURED SECTION</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-100 leading-snug">
                  श्रीमद्भगवद्गीता (Srimad Bhagavad Gita)
                </h2>
                <p className="text-sm sm:text-base text-[#C4B4A5] leading-relaxed">
                  Explore all 18 Chapters and 700 Shlokas with original Sanskrit Devanagari text, Roman transliteration, Hindi and English translations, word-by-word meanings (Padachheda), and detailed commentary.
                </p>
                <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-amber-200">
                  <span>✔ 18 Full Chapters</span>
                  <span>•</span>
                  <span>✔ 700 Verses & Meaning</span>
                  <span>•</span>
                  <span>✔ Direct Search</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch lg:items-end">
                <Link
                  href="/gita"
                  className="px-8 py-4 rounded-2xl bg-[#D48A29] hover:bg-[#b8741e] text-white font-bold text-center shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Start Reading Chapters ➔
                </Link>
                <Link
                  href="/gita/chapter-1"
                  className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-center border border-white/20 backdrop-blur-sm transition-all"
                >
                  Chapter 1 (अर्जुन विषाद योग)
                </Link>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-[#2D1F1A] mb-8">
              Everything You Need For Your Spiritual Journey
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
              <FeatureCard icon="📖" title="Bhagavad Gita" desc="18 Chapters & 700 Shlokas with full meaning" href="/gita" highlighted />
              <FeatureCard icon="🎶" title="Bhajans" desc="Soulful devotional songs & chants" href="/bhajans" />
              <FeatureCard icon="🖼️" title="Wallpapers" desc="Divine HD wallpapers for mobile" href="/wallpapers" />
              <FeatureCard icon="📅" title="Panchang" desc="Daily auspicious timings & tithi" href="#panchang" />
              <FeatureCard icon="✨" title="Horoscope" desc="Daily astrological insights" href="#horoscope" />
              <FeatureCard icon="⏰" title="Devotional Alarm" desc="Wake up to mantras & bhajans" href="#alarm" />
              <FeatureCard icon="📲" title="Devotional Status" desc="Daily WhatsApp status videos" href="#status" />
              <FeatureCard icon="🎧" title="Motivational Audio" desc="Inspiring spiritual discourses" href="#audio" />
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc, href, highlighted }) {
  return (
    <Link
      href={href}
      className={`group rounded-3xl p-6 transition-all duration-300 border ${
        highlighted
          ? 'bg-white border-[#D48A29] shadow-md hover:shadow-xl ring-2 ring-[#D48A29]/20'
          : 'bg-white border-[#E8DCC4] shadow-sm hover:shadow-lg hover:border-[#D48A29]'
      }`}
    >
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="font-bold text-[#2D1F1A] text-lg group-hover:text-[#D48A29] transition-colors">
        {title}
      </h4>
      <p className="text-xs text-[#6B5B53] mt-1.5 leading-relaxed">
        {desc}
      </p>
    </Link>
  );
}