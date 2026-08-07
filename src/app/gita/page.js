import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GitaChapterCard from '@/components/gita/GitaChapterCard';
import { getAllChapters } from '@/lib/gitaService';

export const metadata = {
  title: 'श्रीमद्भगवद्गीता (Bhagavad Gita) - All 18 Chapters & 700 Verses | Bhaktivas',
  description:
    'Explore all 18 Chapters and 700 Verses of Srimad Bhagavad Gita with original Sanskrit Shlokas, Devanagari, Hindi and English translations, word meanings, and commentary.',
};

export default function GitaPage() {
  const chapters = getAllChapters();

  return (
    <div className="min-h-screen bg-[#FBF8F3] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#2D1F1A] via-[#3D2C25] to-[#2D1F1A] text-white p-8 sm:p-12 mb-12 shadow-xl overflow-hidden">
          {/* Subtle Golden Pattern Overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D48A29]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#D48A29] text-white mb-4 shadow-sm">
              <span>🪔 श्रीमद्भगवद्गीता</span>
              <span>•</span>
              <span>18 अध्यायों का संपूर्ण सार</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-amber-50 leading-tight mb-4">
              श्रीमद्भगवद्गीता <br className="hidden sm:inline" />
              <span className="text-[#D48A29]">Srimad Bhagavad Gita</span>
            </h1>

            <p className="text-base sm:text-lg text-[#C4B4A5] leading-relaxed mb-6">
              परमेश्वर श्रीकृष्ण द्वारा अर्जुन को कुरुक्षेत्र में दिया गया दिव्य ज्ञान। यहाँ सभी 18 अध्यायों के श्लोक, भावार्थ, और विस्तृत व्याख्या हिंदी एवं अंग्रेजी में उपलब्ध हैं।
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <span className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                📖 18 अध्याय (Chapters)
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                ✨ 700 श्लोक (Verses)
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                🕉️ संस्कृत, हिंदी व अंग्रेजी
              </span>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8DCC4]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D1F1A]">
              अध्याय सूची (Chapters List)
            </h2>
            <p className="text-sm text-[#7C6A5D] mt-1">
              Select a chapter to read its shlokas and complete commentary.
            </p>
          </div>
          <span className="text-xs font-bold text-[#995512] bg-[#F5E8CE] px-3.5 py-1.5 rounded-full border border-[#E8DCC4]">
            18 Chapters
          </span>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {chapters.map((chapter) => (
            <GitaChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
