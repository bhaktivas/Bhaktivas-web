import Link from 'next/link';

export default function GitaVerseCard({ verse }) {
  const { chapter_id, shloka_no, sanskrit, hindi, english, verse_url } = verse;

  return (
    <Link
      href={verse_url}
      className="group flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-[#E8DCC4] hover:border-[#D48A29] hover:shadow-lg transition-all duration-300"
    >
      <div>
        {/* Shloka Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F5E8CE] text-[#995512] group-hover:bg-[#D48A29] group-hover:text-white transition-colors">
            श्लोक {chapter_id}.{shloka_no}
          </span>
          <span className="text-xs text-[#995512] font-semibold group-hover:underline flex items-center gap-1">
            Read Full Meaning ➔
          </span>
        </div>

        {/* Sanskrit snippet */}
        <p className="text-base sm:text-lg font-serif font-bold text-[#2D1F1A] line-clamp-2 leading-relaxed mb-3 group-hover:text-[#D48A29] transition-colors">
          {sanskrit}
        </p>

        {/* Hindi snippet */}
        <p className="text-sm text-[#52443C] line-clamp-2 leading-relaxed mb-2">
          {hindi}
        </p>

        {/* English snippet */}
        {english && (
          <p className="text-xs text-[#7C6A5D] italic line-clamp-2">
            &ldquo;{english}&rdquo;
          </p>
        )}
      </div>
    </Link>
  );
}
