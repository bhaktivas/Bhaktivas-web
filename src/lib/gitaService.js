import gitaChapters from '@/gita.json';

/**
 * Helper to safely extract integer from inputs like "chapter-1", "1", "verse-12", 12
 */
function parseNo(val) {
  if (val === null || val === undefined) return 1;
  const num = parseInt(String(val).replace(/[^0-9]/g, ''), 10);
  return isNaN(num) ? 1 : num;
}

/**
 * Get all 18 Bhagavad Gita chapters with combined metadata and verse counts.
 */
export function getAllChapters() {
  return gitaChapters.map((ch) => ({
    id: ch.id,
    chapter_no: ch.chapterNumber,
    chapter_name: ch.title.hi,
    english_name: ch.title.en,
    slug: `chapter-${ch.chapterNumber}`,
    chapter_url: `/gita/chapter-${ch.chapterNumber}`,
    detail_url: `/gita/chapter-${ch.chapterNumber}/detail`,
    short_description: ch.summary.hi,
    verses_count: ch.verseCount,
    estimatedReadingTime: ch.estimatedReadingTime,
  }));
}

/**
 * Get a specific chapter by chapter number or string like "chapter-1" or "1".
 */
export function getChapterByNo(chapterNo) {
  const num = parseNo(chapterNo);
  const ch = gitaChapters.find((c) => c.chapterNumber === num);
  if (!ch) return null;

  return {
    id: ch.id,
    chapter_no: ch.chapterNumber,
    chapter_name: ch.title.hi,
    full_chapter_name: ch.title.hi,
    english_name: ch.title.en,
    slug: `chapter-${ch.chapterNumber}`,
    chapter_url: `/gita/chapter-${ch.chapterNumber}`,
    detail_url: `/gita/chapter-${ch.chapterNumber}/detail`,
    short_description: ch.summary.hi,
    estimatedReadingTime: ch.estimatedReadingTime,
    verses_count: ch.verseCount,
    blocks: ch.blocks || [],
    verses: (ch.verses || []).map((v) => ({
      id: `${ch.chapterNumber}-${v.verseNumber}`,
      chapter_id: ch.chapterNumber,
      shloka_no: v.verseNumber,
      verse_url: `/gita/chapter-${ch.chapterNumber}/verse-${v.verseNumber}`,
      sanskrit: v.sanskrit,
      transliteration: v.transliteration,
      hindi: v.translation.hi,
      english: v.translation.en,
      word_meanings: v.wordMeanings?.hi || '',
      commentary: v.explanation?.hi || '',
      explanation: v.explanation?.hi || '',
    })),
  };
}

/**
 * Get all verses for a given chapter.
 */
export function getVersesByChapter(chapterNo) {
  const ch = getChapterByNo(chapterNo);
  return ch ? ch.verses : [];
}

/**
 * Get a single verse by chapter number and verse number.
 */
export function getVerse(chapterNo, verseNo) {
  const cNum = parseNo(chapterNo);
  const vNum = parseNo(verseNo);

  const ch = gitaChapters.find((c) => c.chapterNumber === cNum);
  if (!ch) return null;

  const verse = (ch.verses || []).find((v) => v.verseNumber === vNum);
  if (!verse) return null;

  const totalVerses = ch.verses.length;

  return {
    id: `${cNum}-${vNum}`,
    chapter_id: cNum,
    shloka_no: vNum,
    total_verses_in_chapter: totalVerses,
    verse_url: `/gita/chapter-${cNum}/verse-${vNum}`,
    sanskrit: verse.sanskrit,
    transliteration: verse.transliteration,
    hindi: verse.translation.hi,
    english: verse.translation.en,
    word_meanings: verse.wordMeanings?.hi || '',
    commentary: verse.explanation?.hi || '',
    explanation: verse.explanation?.hi || '',
    chapter_name: ch.title.hi,
    chapter_english_name: ch.title.en,
    prev_verse_url: vNum > 1 ? `/gita/chapter-${cNum}/verse-${vNum - 1}` : null,
    next_verse_url: vNum < totalVerses ? `/gita/chapter-${cNum}/verse-${vNum + 1}` : null,
  };
}

/**
 * Search Gita shlokas by text or verse reference.
 */
export function searchGita(query) {
  if (!query || query.trim() === '') return [];
  const q = query.toLowerCase().trim();

  const results = [];

  for (const ch of gitaChapters) {
    for (const s of ch.verses || []) {
      const matchSanskrit = s.sanskrit?.toLowerCase().includes(q);
      const matchHindi = s.translation?.hi?.toLowerCase().includes(q);
      const matchEnglish = s.translation?.en?.toLowerCase().includes(q);
      const matchTransliteration = s.transliteration?.toLowerCase().includes(q);
      const matchRef = `${ch.chapterNumber}.${s.verseNumber}` === q || `${ch.chapterNumber}:${s.verseNumber}` === q;

      if (matchSanskrit || matchHindi || matchEnglish || matchTransliteration || matchRef) {
        results.push({
          chapter_id: ch.chapterNumber,
          shloka_no: s.verseNumber,
          verse_url: `/gita/chapter-${ch.chapterNumber}/verse-${s.verseNumber}`,
          sanskrit: s.sanskrit,
          hindi: s.translation.hi,
          english: s.translation.en,
        });
        if (results.length >= 50) break;
      }
    }
    if (results.length >= 50) break;
  }

  return results;
}
