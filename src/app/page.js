import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getBhajans } from '@/services/bhajanService';
import { getWallpapers } from '@/services/wallpaperService';
import { getPanchang } from '@/services/panchangService';

export default async function Home() {
  // Fetch max 10 random items for each section
  const [bhajans, wallpapers, panchangList] = await Promise.all([
    getBhajans(10),
    getWallpapers(10),
    getPanchang(10),
  ]);

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
            Experience Peace, Wisdom &amp; <br className="hidden sm:inline" />
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

            <Link
              href="/download"
              className="rounded-full bg-[#2D1F1A] hover:bg-[#422F28] px-8 py-3.5 font-semibold text-white transition shadow-md hover:shadow-lg text-base"
            >
              Download App 📲
            </Link>
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
                  <span>✔ 700 Verses &amp; Meaning</span>
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

          {/* SECTION 1: DEVOTIONAL BHAJANS PREVIEW (View Only - Max 10) */}
          <section className="mt-20 text-left">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-extrabold text-[#D48A29] uppercase tracking-wider block mb-1">
                  🎵 Soulful Chants &amp; Mantras
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D1F1A]">
                  Devotional Bhajans (भजन एवं आरती)
                </h3>
              </div>
              <Link
                href="/bhajans"
                className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#D48A29] hover:underline"
              >
                View All Bhajans ➔
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bhajans.map((bhajan, idx) => (
                <Link
                  key={bhajan.id || idx}
                  href="/download"
                  className="group bg-white rounded-2xl p-4 border border-[#E8DCC4] hover:border-[#D48A29] shadow-xs hover:shadow-md transition-all flex items-center gap-4"
                >
                  <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-[#FBF8F3] border border-[#E8DCC4]">
                    {bhajan.image ? (
                      <img
                        src={bhajan.image}
                        alt={typeof bhajan.title === 'string' ? bhajan.title : bhajan.title?.hi || 'Bhajan'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl">🎵</div>
                    )}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="text-white text-base">▶</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-[#2D1F1A] text-sm group-hover:text-[#D48A29] transition-colors truncate">
                      {typeof bhajan.title === 'string' ? bhajan.title : bhajan.title?.hi || bhajan.title?.en}
                    </h4>
                    <p className="text-xs text-[#6B5B53] truncate mt-0.5">
                      {typeof bhajan.subtitle === 'string' ? bhajan.subtitle : bhajan.subtitle?.hi || bhajan.artist?.hi || 'Bhaktivas'}
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-extrabold text-white bg-[#2D1F1A] group-hover:bg-[#D48A29] px-3 py-1.5 rounded-xl transition-colors">
                    🔒 Play in App
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 2: DIVINE WALLPAPERS PREVIEW (View Only - Max 10) */}
          <section className="mt-20 text-left">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-extrabold text-[#D48A29] uppercase tracking-wider block mb-1">
                  🖼️ Divine 4K Imagery
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D1F1A]">
                  Devotional Wallpapers (वॉलपेपर)
                </h3>
              </div>
              <Link
                href="/wallpapers"
                className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#D48A29] hover:underline"
              >
                View All Wallpapers ➔
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {wallpapers.map((wallpaper, idx) => (
                <Link
                  key={wallpaper.id || idx}
                  href="/download"
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8DCC4] hover:border-[#D48A29] shadow-xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative aspect-[3/4] bg-[#FBF8F3] overflow-hidden">
                    {wallpaper.image || wallpaper.thumbnailUrl ? (
                      <img
                        src={wallpaper.thumbnailUrl || wallpaper.image}
                        alt={typeof wallpaper.title === 'string' ? wallpaper.title : wallpaper.title?.hi || 'Wallpaper'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl">🖼️</div>
                    )}
                  </div>
                  <div className="p-3 bg-white">
                    <h4 className="font-extrabold text-[#2D1F1A] text-xs group-hover:text-[#D48A29] transition-colors truncate">
                      {typeof wallpaper.title === 'string' ? wallpaper.title : wallpaper.title?.hi || wallpaper.title?.en}
                    </h4>
                    <span className="mt-2 w-full inline-flex items-center justify-center text-[10px] font-extrabold text-white bg-[#2D1F1A] group-hover:bg-[#D48A29] py-1 rounded-lg transition-colors">
                      🔒 Download 4K
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 3: DAILY PANCHANG PREVIEW (View Only - Max 10) */}
          <section className="mt-20 text-left">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-extrabold text-[#D48A29] uppercase tracking-wider block mb-1">
                  📅 Traditional Calendar
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D1F1A]">
                  Daily Panchang &amp; Tithi (दैनिक पंचांग)
                </h3>
              </div>
              <Link
                href="/panchang"
                className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#D48A29] hover:underline"
              >
                View Full Panchang ➔
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {panchangList.map((item, idx) => (
                <Link
                  key={item.id || idx}
                  href="/download"
                  className="group bg-white rounded-2xl p-5 border border-[#E8DCC4] hover:border-[#D48A29] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E8DCC4] pb-3 mb-3">
                      <span className="font-extrabold text-[#2D1F1A] text-base">
                        📅 {typeof item.day === 'string' ? item.day : item.day?.hi || item.day?.en} ({item.date || 'Today'})
                      </span>
                      {item.festival && (
                        <span className="text-[11px] font-extrabold bg-[#F5E8CE] text-[#995512] px-2.5 py-0.5 rounded-full">
                          🎉 {typeof item.festival === 'string' ? item.festival : item.festival?.hi || item.festival?.en}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-[#6B5B53]">
                      <div><strong>तिथि:</strong> {typeof item.tithi === 'string' ? item.tithi : item.tithi?.hi || 'त्रयोदशी'}</div>
                      <div><strong>नक्षत्र:</strong> {typeof item.nakshatra === 'string' ? item.nakshatra : item.nakshatra?.hi || 'मघा'}</div>
                      <div><strong>राहुकाल:</strong> <span className="text-[#995512] font-semibold">{typeof item.rahukaal === 'string' ? item.rahukaal : item.rahukaal?.hi || '15:30 - 17:00'}</span></div>
                      <div><strong>सूर्योदय:</strong> {item.sunrise || '06:04 AM'}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-[#E8DCC4]">
                    <span className="w-full inline-flex items-center justify-center gap-1 text-xs font-extrabold text-white bg-[#2D1F1A] group-hover:bg-[#D48A29] py-2 rounded-xl transition-colors">
                      🔒 View Full Panchang in App
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-[#2D1F1A] mb-8">
              Everything You Need For Your Spiritual Journey
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
              <FeatureCard icon="📖" title="Bhagavad Gita" desc="18 Chapters & 700 Shlokas with full meaning" href="/gita" highlighted />
              <FeatureCard icon="🎶" title="Bhajans" desc="Soulful devotional songs & chants" href="/bhajans" />
              <FeatureCard icon="🖼️" title="Wallpapers" desc="Divine HD wallpapers for mobile" href="/wallpapers" />
              <FeatureCard icon="📅" title="Panchang" desc="Daily auspicious timings & tithi" href="/panchang" />
              <FeatureCard icon="✨" title="Horoscope" desc="Daily astrological insights" href="/download" />
              <FeatureCard icon="⏰" title="Devotional Alarm" desc="Wake up to mantras & bhajans" href="/download" />
              <FeatureCard icon="📲" title="Devotional Status" desc="Daily WhatsApp status videos" href="/download" />
              <FeatureCard icon="🎧" title="Motivational Audio" desc="Inspiring spiritual discourses" href="/download" />
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