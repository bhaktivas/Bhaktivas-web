import Link from 'next/link';

export default function GitaChapterCard({ chapter }) {
  const { chapter_no, chapter_name, english_name, short_description, verses_count } = chapter;

  const detailUrl = `/gita/chapter-${chapter_no}/detail`;
  const versesUrl = `/gita/chapter-${chapter_no}`;

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 shadow-sm border border-[#E8DCC4] hover:border-[#D48A29] hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Background Subtle Gradient Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FDF5EA] to-transparent rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500" />

      <div className="relative z-10">
        {/* Header Badge & Chapter Number */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F5E8CE] text-[#995512] group-hover:bg-[#D48A29] group-hover:text-white transition-colors duration-300">
            <span>अध्याय</span>
            <span>{chapter_no}</span>
          </span>
          <span className="text-xs font-medium text-[#7C6A5D] bg-[#F8F4EE] px-2.5 py-1 rounded-full border border-[#E8DCC4]">
            {verses_count} श्लोक (Verses)
          </span>
        </div>

        {/* Chapter Titles */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#2D1F1A] group-hover:text-[#D48A29] transition-colors leading-snug mb-1">
          {chapter_name}
        </h3>

        {english_name && (
          <p className="text-xs uppercase tracking-wider font-semibold text-[#995512] mb-3">
            {english_name}
          </p>
        )}

        {/* Short Description */}
        <p className="text-sm text-[#6B5B53] line-clamp-3 leading-relaxed mb-6">
          {short_description}
        </p>
      </div>

      {/* Two Action Buttons: Read in Detail & All Verses */}
      <div className="relative z-10 pt-4 border-t border-[#F3EAD8] grid grid-cols-2 gap-3">
        <Link
          href={detailUrl}
          className="w-full text-center px-4 py-2.5 rounded-xl bg-[#F8F4EE] hover:bg-[#F5E8CE] text-[#2D1F1A] hover:text-[#995512] font-semibold text-xs border border-[#E8DCC4] transition-all flex items-center justify-center gap-1.5 shadow-2xs"
        >
          <span>📖 विस्तार से पढ़ें</span>
        </Link>

        <Link
          href={versesUrl}
          className="w-full text-center px-4 py-2.5 rounded-xl bg-[#D48A29] hover:bg-[#b8741e] text-white font-semibold text-xs transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5"
        >
          <span>✨ सभी श्लोक</span>
        </Link>
      </div>
    </div>
  );
}
