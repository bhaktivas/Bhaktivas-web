import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Bhaktivas About Page Component
 * Next.js / React (TypeScript) Page Component
 * Sourced with Tailwind CSS classes for responsive premium UI.
 */
export default async function About({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const isWebView = resolvedSearchParams?.webview === 'true' || resolvedSearchParams?.app === 'true';

  const features = [
    { icon: '⏰', title: 'Spiritual Alarms', desc: 'Devotional wake-up alarms.' },
    { icon: '🎵', title: 'Bhajans & Mantras', desc: 'Soothing audio & prayers.' },
    { icon: '📖', title: 'Sacred Literature', desc: 'Gita, Chalisa & scriptures.' },
    { icon: '🕉️', title: 'Mala Jap', desc: 'Digital bead jap counter.' },
    { icon: '🖼️', title: 'Divine Wallpapers', desc: 'Premium HD spiritual images.' },
    { icon: '🎬', title: 'Devotional Status', desc: 'Status cards to share.' },
    { icon: '🏛️', title: 'Live Mandir', desc: 'Virtual darshan experience.' },
    { icon: '📅', title: 'Panchang', desc: 'Daily traditional calendar.' },
    { icon: '♈', title: 'Daily Horoscope', desc: 'Rashi predictions & wisdom.' },
    { icon: '🪔', title: 'Daily Wisdom', desc: 'Spiritual thoughts & quotes.' },
    { icon: '🎉', title: 'Festival Calendar', desc: 'Upcoming Hindu Vrats & festivals.' },
  ];

  const valueProps = [
    { title: 'Beautiful & Intuitive', desc: 'Clean, elegant, premium layout matching traditional aesthetics.' },
    { title: 'Personalized Devotion', desc: 'Content adapted to your preferences, language, and zodiac sign.' },
    { title: 'Daily Inspiration', desc: 'Fresh quotes, Panchang alerts, and spiritual reminders every morning.' },
    { title: 'Curated & Authentic', desc: 'Carefully formatted scriptures, correct translations, and premium audio.' },
    { title: 'Regular Updates', desc: 'Frequent feature additions, new wallpapers, bhajans, and text updates.' },
  ];

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#3A2E2A] flex flex-col font-sans">
      {!isWebView && <Navbar />}

      {/* Top Hero Banner */}
      <header className="bg-[#3A2E2A] text-[#FBF7F0] py-16 px-6 text-center border-b-4 border-[#E38B29]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E38B29]/20 border border-[#E38B29] px-4 py-1.5 rounded-full mb-4">
            <span className="text-xl">🪔</span>
            <span className="text-sm font-extrabold tracking-widest text-[#E38B29]">BHAKTIVAS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">About Bhaktivas</h1>
          <p className="text-lg sm:text-2xl text-[#E38B29] font-bold italic mb-3">
            &quot;जहाँ भक्ति करे वास।&quot;
          </p>
          <p className="text-base sm:text-lg text-[#E0D4C5] leading-relaxed max-w-2xl mx-auto">
            Bhaktivas is a premium devotional companion designed to bring spirituality into your daily life through meaningful modern experiences.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-10">
        
        {/* Intro & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#3A2E2A] mb-3 flex items-center gap-2">
              <span>📱</span> App Introduction
            </h2>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              Bhaktivas is designed to integrate devotion effortlessly into your daily schedule. From waking up to customized spiritual alarms and listening to serene bhajans, to reading public-domain scriptures, analyzing your daily Panchang, or chanting with a haptic Mala counter—we aim to make devotional practice organic, modern, and spiritually rewarding.
            </p>
          </div>

          <div className="bg-[#FFF8F0] rounded-3xl p-6 sm:p-8 border-2 border-[#FCE4CB] shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#C66C00] mb-3 flex items-center gap-2">
              <span>🎯</span> Our Mission
            </h2>
            <p className="text-sm sm:text-base text-[#4A3E35] leading-relaxed">
              Our mission is to make traditional Hindu rituals and spiritual practices accessible, organized, and deeply engaging using modern design and technology. We believe in presenting sacred texts and traditional calendars with the utmost reverence, care, and clarity for today&apos;s digital world.
            </p>
          </div>
        </div>

        {/* What You'll Find - Feature Grid */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
          <div className="mb-6 text-center md:text-left">
            <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Explore features</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E2A]">What You&apos;ll Find</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 bg-[#FBF7F0] rounded-2xl border border-[#F0E6D8] hover:border-[#E38B29] transition-all hover:scale-[1.02] duration-200">
                <span className="text-3xl mb-2">{feature.icon}</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#3A2E2A] mb-1">{feature.title}</h4>
                <p className="text-[10px] sm:text-xs text-[#8B6B4A]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Bhaktivas */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#3A2E2A] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#E38B29]">
          <div>
            <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Value Proposition</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Why Choose Bhaktivas?</h2>
            <p className="text-sm sm:text-base text-[#E0D4C5] leading-relaxed">
              We design every feature from the ground up to respect cultural history while delivering smooth performance and aesthetics. Bhaktivas is built to be a reliable and delightful partner in your search for inner peace.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex gap-3 bg-white/15 p-3.5 rounded-2xl border border-white/10">
                <div className="text-[#E38B29] text-lg font-bold">✓</div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white">{prop.title}</h4>
                  <p className="text-[11px] sm:text-xs text-[#D0C4B5] mt-0.5">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Trust & Version Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Content Guidelines */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#3A2E2A] mb-3 flex items-center gap-2">
              <span>✍️</span> Content &amp; Authenticity
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              <p>
                Original Bhaktivas editorial content, translation reviews, design elements, and status templates are carefully curated and created by our team.
              </p>
              <p>
                Public-domain scriptures (e.g., historical Vedic texts and traditional stotrams) are included with absolute reverence. We continuously check and verify our resources to deliver content with care and authenticity.
              </p>
            </div>
          </div>

          {/* Version Details */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#3A2E2A] mb-3 flex items-center gap-2">
                <span>⚙️</span> Version Information
              </h2>
              <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
                Bhaktivas is constantly being improved with optimizations, performance enhancements, and fresh spiritual features.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-[#FBF7F0] p-4 rounded-2xl border border-[#F0E6D8] text-center">
              <div>
                <div className="text-[10px] sm:text-xs font-bold text-[#8B6B4A] uppercase">App Version</div>
                <div className="text-sm sm:text-base font-extrabold text-[#E38B29] mt-0.5">4.0.2</div>
              </div>
              <div className="border-x border-[#F0E6D8]">
                <div className="text-[10px] sm:text-xs font-bold text-[#8B6B4A] uppercase">Build No.</div>
                <div className="text-sm sm:text-base font-extrabold text-[#E38B29] mt-0.5">142</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-bold text-[#8B6B4A] uppercase">Last Updated</div>
                <div className="text-sm sm:text-base font-extrabold text-[#E38B29] mt-0.5">Aug 2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect With Us Card */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
          <div className="mb-6 text-center md:text-left">
            <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Get in touch</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E2A]">Connect With Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://bhaktivas.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#FBF7F0] p-4 rounded-2xl border border-[#F0E6D8] hover:border-[#E38B29] transition-all">
              <span className="text-2xl">🌐</span>
              <div>
                <div className="text-[10px] text-[#8B6B4A] font-bold uppercase">Website</div>
                <div className="text-sm font-extrabold text-[#3A2E2A]">bhaktivas.com</div>
              </div>
            </a>

            <a href="mailto:support@bhaktivas.com" className="flex items-center gap-3 bg-[#FBF7F0] p-4 rounded-2xl border border-[#F0E6D8] hover:border-[#E38B29] transition-all">
              <span className="text-2xl">✉️</span>
              <div>
                <div className="text-[10px] text-[#8B6B4A] font-bold uppercase">Support Email</div>
                <div className="text-sm font-extrabold text-[#3A2E2A]">support@bhaktivas.com</div>
              </div>
            </a>

            <a href="https://facebook.com/bhaktivas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#FBF7F0] p-4 rounded-2xl border border-[#F0E6D8] hover:border-[#E38B29] transition-all">
              <span className="text-2xl">📘</span>
              <div>
                <div className="text-[10px] text-[#8B6B4A] font-bold uppercase">Facebook</div>
                <div className="text-sm font-extrabold text-[#3A2E2A]">@bhaktivas</div>
              </div>
            </a>

            <a href="https://instagram.com/bhaktivas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#FBF7F0] p-4 rounded-2xl border border-[#F0E6D8] hover:border-[#E38B29] transition-all">
              <span className="text-2xl">📸</span>
              <div>
                <div className="text-[10px] text-[#8B6B4A] font-bold uppercase">Instagram</div>
                <div className="text-sm font-extrabold text-[#3A2E2A]">@bhaktivas</div>
              </div>
            </a>
          </div>
        </section>

        {/* Thank You Card */}
        <section className="bg-[#FFF8F0] rounded-3xl p-6 sm:p-10 border-2 border-[#FCE4CB] shadow-sm text-center">
          <span className="text-3xl sm:text-4xl mb-3 block">🙏</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#3A2E2A] mb-2">Thank You</h2>
          <p className="text-sm sm:text-base text-[#5A4E45] max-w-2xl mx-auto leading-relaxed">
            Thank you for making Bhaktivas a part of your spiritual journey. May your days be filled with devotion, peace, and positivity.
          </p>
        </section>
      </main>

      {!isWebView && <Footer />}
    </div>
  );
}
