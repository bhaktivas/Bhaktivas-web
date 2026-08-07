'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GitaVerseDetail({ verse }) {
  const [copied, setCopied] = useState(false);

  const {
    chapter_id,
    shloka_no,
    sanskrit,
    transliteration,
    hindi,
    english,
    word_meanings,
    commentary,
    explanation,
    chapter_name,
    chapter_english_name,
    prev_verse_url,
    next_verse_url,
    total_verses_in_chapter,
  } = verse;

  const handleCopy = () => {
    const textToCopy = `भगवद्गीता - अध्याय ${chapter_id}, श्लोक ${shloka_no}\n\n${sanskrit}\n\nभावार्थ:\n${hindi}\n\nRead more on Bhaktivas: https://bhaktivas.com/gita/chapter-${chapter_id}/verse-${shloka_no}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-[#2D1F1A] via-[#3D2C25] to-[#2D1F1A] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D48A29] font-bold mb-1">
            <span>अध्याय {chapter_id}</span>
            <span>•</span>
            <span>{chapter_english_name}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-amber-100">
            {chapter_name} — श्लोक {shloka_no}
          </h1>
          <p className="text-xs text-[#C4B4A5] mt-1">
            Verse {shloka_no} of {total_verses_in_chapter} in Chapter {chapter_id}
          </p>
        </div>

        {/* Copy / Share Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#D48A29] hover:bg-[#b8741e] text-white font-semibold text-xs transition-all shadow-md active:scale-95"
        >
          {copied ? (
            <>
              <span>✓</span> Copied Shloka
            </>
          ) : (
            <>
              <span>📋</span> Copy Shloka
            </>
          )}
        </button>
      </div>

      {/* Sanskrit Shloka Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#FBF6EE] p-8 sm:p-12 text-center border-2 border-[#E8DCC4] shadow-md overflow-hidden">
        <div className="text-[#D48A29] text-3xl font-serif mb-4">🪔 ॐ 🪔</div>

        {/* Sanskrit Text */}
        <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D1F1A] leading-loose whitespace-pre-line tracking-wide mb-6">
          {sanskrit}
        </div>

        {/* Transliteration */}
        {transliteration && (
          <div className="pt-6 border-t border-[#E8DCC4]/60 text-sm sm:text-base text-[#6B5B53] font-mono italic leading-relaxed">
            {transliteration}
          </div>
        )}
      </div>

      {/* Translations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Hindi Translation */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#E8DCC4] shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-wider font-bold text-[#D48A29]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D48A29]" />
            हिंदी अनुवाद (Hindi Translation)
          </div>
          <p className="text-base text-[#2D1F1A] leading-relaxed font-medium">
            {hindi}
          </p>
        </div>

        {/* English Translation */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#E8DCC4] shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-wider font-bold text-[#995512]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#995512]" />
            English Translation
          </div>
          <p className="text-base text-[#2D1F1A] leading-relaxed">
            {english || 'English translation currently available in commentary section.'}
          </p>
        </div>

      </div>

      {/* Word-by-Word Meanings (Padachheda) */}
      {word_meanings && (
        <div className="rounded-3xl bg-[#F8F4EE] p-6 sm:p-8 border border-[#E8DCC4] shadow-sm">
          <h3 className="text-lg font-bold text-[#2D1F1A] mb-4 flex items-center gap-2">
            <span>🔍</span> पदच्छेद व शब्दार्थ (Word Meanings)
          </h3>
          <p className="text-sm sm:text-base text-[#52443C] leading-relaxed whitespace-pre-line font-mono bg-white/70 p-5 rounded-2xl border border-[#E8DCC4]/50">
            {word_meanings}
          </p>
        </div>
      )}

      {/* Commentary & Explanation */}
      {(commentary || explanation) && (
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#E8DCC4] shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-[#2D1F1A] flex items-center gap-2 pb-3 border-b border-[#E8DCC4]">
            <span>📜</span> व्याख्या एवं भावार्थ (Commentary & Insight)
          </h3>

          {commentary && (
            <div className="text-base text-[#52443C] leading-relaxed whitespace-pre-line">
              {commentary}
            </div>
          )}

          {explanation && (
            <div className="mt-4 pt-4 border-t border-[#F3EAD8] text-sm text-[#6B5B53] leading-relaxed">
              <strong className="text-[#2D1F1A] block mb-1">विस्तृत स्पष्टीकरण:</strong>
              {explanation}
            </div>
          )}
        </div>
      )}

      {/* Next / Previous Verse Navigation Controls */}
      <div className="pt-6 border-t border-[#E8DCC4] flex items-center justify-between gap-4">
        {prev_verse_url ? (
          <Link
            href={prev_verse_url}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-[#F5E8CE] border border-[#E8DCC4] text-[#2D1F1A] font-semibold text-sm transition-all shadow-sm group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            <span>पिछला श्लोक ({shloka_no - 1})</span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href={`/gita/chapter-${chapter_id}`}
          className="text-xs font-bold text-[#995512] hover:text-[#D48A29] uppercase tracking-wider bg-[#F5E8CE] px-4 py-2.5 rounded-full"
        >
          All Verses (अध्याय {chapter_id})
        </Link>

        {next_verse_url ? (
          <Link
            href={next_verse_url}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#D48A29] hover:bg-[#b8741e] text-white font-semibold text-sm transition-all shadow-sm group"
          >
            <span>अगला श्लोक ({shloka_no + 1})</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>

    </div>
  );
}
