import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPanchang } from '@/services/panchangService';

export default async function PanchangPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const isWebView = resolvedSearchParams?.webview === 'true' || resolvedSearchParams?.app === 'true';

  // Fetch max 10 panchang records
  const panchangList = await getPanchang(10);

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#3A2E2A] flex flex-col font-sans">
      {!isWebView && <Navbar />}

      {/* Header */}
      <header className="bg-[#3A2E2A] text-[#FBF7F0] py-14 px-6 text-center border-b-4 border-[#E38B29]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E38B29]/20 border border-[#E38B29] px-4 py-1 rounded-full mb-4">
            <span className="text-xl">📅</span>
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E38B29]">DAILY PANCHANG</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">Hindu Panchang &amp; Tithi</h1>
          <p className="text-base sm:text-lg text-[#E0D4C5] leading-relaxed max-w-2xl mx-auto mb-4">
            Auspicious timings, Tithi, Nakshatra, Rahukaal, and festival schedules. Location-accurate alerts and alarms are available in the Bhaktivas Mobile App.
          </p>
          <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs text-[#FCE4CB] font-semibold border border-white/15">
            Showing max 10 daily panchang view-only previews
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        
        {/* Panchang Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {panchangList.map((item, index) => (
            <Link
              key={item.id || index}
              href="/download"
              className="group bg-white rounded-3xl p-6 border border-[#F0E6D8] hover:border-[#E38B29] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Date & Day Badge */}
                <div className="flex items-center justify-between border-b border-[#F0E6D8] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📅</span>
                    <div>
                      <h3 className="font-extrabold text-[#3A2E2A] text-lg">
                        {typeof item.day === 'string' ? item.day : item.day?.hi || item.day?.en || 'आज का पंचांग'}
                      </h3>
                      <span className="text-xs text-[#8B6B4A] font-semibold">{item.date || 'Today'}</span>
                    </div>
                  </div>

                  {item.festival && (
                    <span className="text-xs font-extrabold bg-[#FFF5EB] text-[#E38B29] px-3 py-1 rounded-full border border-[#FCE4CB]">
                      🎉 {typeof item.festival === 'string' ? item.festival : item.festival?.hi || item.festival?.en}
                    </span>
                  )}
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-[#5A4E45]">
                  <div className="bg-[#FBF7F0] p-3 rounded-2xl border border-[#F0E6D8]">
                    <span className="text-[10px] font-bold text-[#8B6B4A] uppercase block">तिथि (Tithi)</span>
                    <span className="font-extrabold text-[#3A2E2A] mt-0.5 block">
                      {typeof item.tithi === 'string' ? item.tithi : item.tithi?.hi || item.tithi?.en || 'त्रयोदशी'}
                    </span>
                  </div>

                  <div className="bg-[#FBF7F0] p-3 rounded-2xl border border-[#F0E6D8]">
                    <span className="text-[10px] font-bold text-[#8B6B4A] uppercase block">नक्षत्र (Nakshatra)</span>
                    <span className="font-extrabold text-[#3A2E2A] mt-0.5 block">
                      {typeof item.nakshatra === 'string' ? item.nakshatra : item.nakshatra?.hi || item.nakshatra?.en || 'नक्षत्र'}
                    </span>
                  </div>

                  <div className="bg-[#FBF7F0] p-3 rounded-2xl border border-[#F0E6D8]">
                    <span className="text-[10px] font-bold text-[#8B6B4A] uppercase block">राहुकाल (Rahukaal)</span>
                    <span className="font-extrabold text-[#C66C00] mt-0.5 block">
                      ⚠️ {typeof item.rahukaal === 'string' ? item.rahukaal : item.rahukaal?.hi || item.rahukaal?.en || '15:30 - 17:00'}
                    </span>
                  </div>

                  <div className="bg-[#FBF7F0] p-3 rounded-2xl border border-[#F0E6D8]">
                    <span className="text-[10px] font-bold text-[#8B6B4A] uppercase block">सूर्योदय / सूर्यास्त</span>
                    <span className="font-extrabold text-[#3A2E2A] mt-0.5 block">
                      🌅 {item.sunrise || '06:04 AM'} - {item.sunset || '06:34 PM'}
                    </span>
                  </div>
                </div>

                {item.auspiciousMuhurat && (
                  <div className="mt-3 bg-[#FFF8F0] p-3 rounded-2xl border border-[#FCE4CB] text-xs text-[#7A4E1A] font-semibold">
                    ✨ {typeof item.auspiciousMuhurat === 'string' ? item.auspiciousMuhurat : item.auspiciousMuhurat?.hi || item.auspiciousMuhurat?.en}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-4 pt-3 border-t border-[#F0E6D8]">
                <span className="w-full inline-flex items-center justify-center gap-1 text-xs font-extrabold text-white bg-[#3A2E2A] group-hover:bg-[#E38B29] py-2.5 rounded-xl transition-colors">
                  🔒 View Full Panchang &amp; Alarms in App
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Download App CTA Card */}
        <div className="mt-12 bg-[#FFF8F0] rounded-3xl p-8 border-2 border-[#FCE4CB] text-center shadow-xs">
          <h2 className="text-2xl font-extrabold text-[#3A2E2A] mb-2">Want daily Rahukaal alerts &amp; custom Panchang alarms?</h2>
          <p className="text-sm text-[#5A4E45] max-w-xl mx-auto mb-6">
            Location-based GPS calculations, custom Muhurat alarms, and festival reminders are available exclusively in the Bhaktivas Mobile App.
          </p>
          <Link
            href="/download"
            className="inline-block bg-[#E38B29] hover:bg-[#c9781d] text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-md transition-all"
          >
            Download App for Panchang Alarms 📲
          </Link>
        </div>
      </main>

      {!isWebView && <Footer />}
    </div>
  );
}
