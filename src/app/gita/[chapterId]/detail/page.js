import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getChapterByNo } from '@/lib/gitaService';

import BlockRenderer from '@/components/gita/BlockRenderer';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const chapter = getChapterByNo(resolvedParams.chapterId);

  if (!chapter) {
    return { title: 'Chapter Not Found | Bhaktivas' };
  }

  return {
    title: `अध्याय ${chapter.chapter_no}: ${chapter.chapter_name} (${chapter.english_name}) - विस्तृत व्याख्या एवं सार | Bhaktivas`,
    description: chapter.short_description || `Read detailed explanation, commentary, and summary of Chapter ${chapter.chapter_no} of Srimad Bhagavad Gita in Hindi and Hinglish.`,
  };
}

export default async function ChapterDetailPage({ params }) {
  const resolvedParams = await params;
  const chapter = getChapterByNo(resolvedParams.chapterId);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FBF8F3] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#7C6A5D] mb-6 overflow-x-auto pb-2">
          <Link href="/" className="hover:text-[#D48A29] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/gita" className="hover:text-[#D48A29] transition-colors">
            श्रीमद्भगवद्गीता
          </Link>
          <span>/</span>
          <Link
            href={`/gita/chapter-${chapter.chapter_no}`}
            className="hover:text-[#D48A29] transition-colors"
          >
            अध्याय {chapter.chapter_no}
          </Link>
          <span>/</span>
          <span className="text-[#2D1F1A]">विस्तार से पढ़ें</span>
        </nav>

        {/* Hero Header Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#2D1F1A] via-[#3D2C25] to-[#2D1F1A] text-white p-8 sm:p-10 mb-10 shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#D48A29] text-white mb-3">
                <span>विस्तृत व्याख्या (Detailed Overview)</span>
                <span>•</span>
                <span>अध्याय {chapter.chapter_no}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-100 mb-2">
                {chapter.full_chapter_name}
              </h1>
              <p className="text-sm text-[#C4B4A5] leading-relaxed max-w-2xl">
                {chapter.short_description}
              </p>
            </div>

            {/* Link to All Verses */}
            <Link
              href={`/gita/chapter-${chapter.chapter_no}`}
              className="px-6 py-3.5 rounded-2xl bg-[#D48A29] hover:bg-[#b8741e] text-white font-bold text-sm shadow-md transition-all shrink-0 flex items-center gap-2"
            >
              <span>✨ सभी {chapter.verses_count} श्लोक देखें</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Full Block Renderer Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E8DCC4] shadow-sm mb-12">
          {chapter.blocks && chapter.blocks.length > 0 ? (
            <BlockRenderer blocks={chapter.blocks} />
          ) : (
            <p className="text-base text-[#6B5B53] py-8 text-center">
              Detailed description for this chapter is being loaded.
            </p>
          )}
        </div>

        {/* Bottom Action Bar */}
        <div className="pt-6 border-t border-[#E8DCC4] flex flex-col sm:flex-row items-center justify-between gap-4">
          {chapter.chapter_no > 1 ? (
            <Link
              href={`/gita/chapter-${chapter.chapter_no - 1}/detail`}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-[#F5E8CE] border border-[#E8DCC4] text-[#2D1F1A] font-semibold text-sm transition-all shadow-2xs"
            >
              ← पिछला अध्याय ({chapter.chapter_no - 1}) का विस्तार
            </Link>
          ) : (
            <div />
          )}

          <Link
            href={`/gita/chapter-${chapter.chapter_no}`}
            className="px-6 py-3 rounded-full bg-[#D48A29] hover:bg-[#b8741e] text-white font-bold text-sm shadow-sm transition-all"
          >
            अध्याय {chapter.chapter_no} के सभी श्लोक पढ़ें ➔
          </Link>

          {chapter.chapter_no < 18 ? (
            <Link
              href={`/gita/chapter-${chapter.chapter_no + 1}/detail`}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-[#F5E8CE] border border-[#E8DCC4] text-[#2D1F1A] font-semibold text-sm transition-all shadow-2xs"
            >
              अगला अध्याय ({chapter.chapter_no + 1}) का विस्तार →
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
