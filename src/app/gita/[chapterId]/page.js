import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GitaVerseCard from '@/components/gita/GitaVerseCard';
import { getChapterByNo } from '@/lib/gitaService';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const chapter = getChapterByNo(resolvedParams.chapterId);

  if (!chapter) {
    return { title: 'Chapter Not Found | Bhaktivas' };
  }

  return {
    title: `अध्याय ${chapter.chapter_no}: ${chapter.chapter_name} (${chapter.english_name}) - Srimad Bhagavad Gita | Bhaktivas`,
    description: chapter.short_description || `Read all verses of Chapter ${chapter.chapter_no} (${chapter.chapter_name}) of Bhagavad Gita with Sanskrit, Hindi, and English translations.`,
  };
}

export default async function ChapterPage({ params }) {
  const resolvedParams = await params;
  const chapter = getChapterByNo(resolvedParams.chapterId);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FBF8F3] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#7C6A5D] mb-6 overflow-x-auto pb-2">
          <Link href="/" className="hover:text-[#D48A29] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/gita" className="hover:text-[#D48A29] transition-colors">
            श्रीमद्भगवद्गीता
          </Link>
          <span>/</span>
          <span className="text-[#2D1F1A]">अध्याय {chapter.chapter_no}</span>
        </nav>

        {/* Chapter Header Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#2D1F1A] via-[#3D2C25] to-[#2D1F1A] text-white p-8 sm:p-10 mb-10 shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#D48A29] text-white mb-3">
                <span>अध्याय {chapter.chapter_no}</span>
                <span>•</span>
                <span>{chapter.english_name}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-100 mb-2">
                {chapter.full_chapter_name}
              </h1>
              <p className="text-sm text-[#C4B4A5] leading-relaxed max-w-3xl">
                {chapter.short_description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-end md:items-center gap-4 shrink-0">
              <Link
                href={`/gita/chapter-${chapter.chapter_no}/detail`}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 backdrop-blur-sm transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>📖 विस्तार से पढ़ें</span>
              </Link>
              <div className="flex flex-col items-end">
                <span className="text-3xl font-black text-[#D48A29]">
                  {chapter.verses_count}
                </span>
                <span className="text-xs text-[#C4B4A5] font-semibold uppercase tracking-wider">
                  Total Verses (श्लोक)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Verses Section */}
        <div className="mb-6 flex items-center justify-between pb-3 border-b border-[#E8DCC4]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2D1F1A]">
            अध्याय {chapter.chapter_no} के सभी श्लोक (Verses List)
          </h2>
          <span className="text-xs font-semibold text-[#7C6A5D]">
            Showing 1-{chapter.verses_count} of {chapter.verses_count}
          </span>
        </div>

        {/* Verses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapter.verses.map((verse) => (
            <GitaVerseCard key={verse.id} verse={verse} />
          ))}
        </div>

        {/* Chapter Navigation Controls */}
        <div className="mt-12 pt-8 border-t border-[#E8DCC4] flex items-center justify-between">
          {chapter.chapter_no > 1 ? (
            <Link
              href={`/gita/chapter-${chapter.chapter_no - 1}`}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-[#F5E8CE] border border-[#E8DCC4] text-[#2D1F1A] font-semibold text-sm transition-all"
            >
              ← पिछला अध्याय ({chapter.chapter_no - 1})
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/gita"
            className="text-xs font-bold text-[#995512] hover:text-[#D48A29] uppercase tracking-wider bg-[#F5E8CE] px-4 py-2.5 rounded-full"
          >
            All Chapters
          </Link>

          {chapter.chapter_no < 18 ? (
            <Link
              href={`/gita/chapter-${chapter.chapter_no + 1}`}
              className="px-5 py-3 rounded-2xl bg-[#D48A29] hover:bg-[#b8741e] text-white font-semibold text-sm transition-all"
            >
              अगला अध्याय ({chapter.chapter_no + 1}) →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
