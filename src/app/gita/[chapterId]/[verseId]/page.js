import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GitaVerseDetail from '@/components/gita/GitaVerseDetail';
import { getVerse } from '@/lib/gitaService';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const verse = getVerse(resolvedParams.chapterId, resolvedParams.verseId);

  if (!verse) {
    return { title: 'Verse Not Found | Bhaktivas' };
  }

  return {
    title: `भगवद्गीता अध्याय ${verse.chapter_id} श्लोक ${verse.shloka_no} - Sanskrit, Hindi & English Meaning | Bhaktivas`,
    description: verse.hindi || verse.english || `Read Srimad Bhagavad Gita Chapter ${verse.chapter_id} Verse ${verse.shloka_no} with Sanskrit Devanagari text, word meanings, and commentary.`,
  };
}

export default async function VersePage({ params }) {
  const resolvedParams = await params;
  const verse = getVerse(resolvedParams.chapterId, resolvedParams.verseId);

  if (!verse) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FBF8F3] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#7C6A5D] mb-8 overflow-x-auto pb-2">
          <Link href="/" className="hover:text-[#D48A29] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/gita" className="hover:text-[#D48A29] transition-colors">
            श्रीमद्भगवद्गीता
          </Link>
          <span>/</span>
          <Link
            href={`/gita/chapter-${verse.chapter_id}`}
            className="hover:text-[#D48A29] transition-colors"
          >
            अध्याय {verse.chapter_id}
          </Link>
          <span>/</span>
          <span className="text-[#2D1F1A]">श्लोक {verse.shloka_no}</span>
        </nav>

        {/* Shloka Detail Component */}
        <GitaVerseDetail verse={verse} />
      </main>

      <Footer />
    </div>
  );
}
