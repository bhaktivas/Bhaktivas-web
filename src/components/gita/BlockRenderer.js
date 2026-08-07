import Link from 'next/link';

export default function BlockRenderer({ blocks }) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {blocks.map((block) => (
        <RenderBlock key={block.id || `block-${block.order}`} block={block} />
      ))}
    </div>
  );
}

function RenderBlock({ block }) {
  const { type, text, items, sanskrit, transliteration, translation, verseNumber, chapter_id } = block;

  switch (type) {
    case 'heading':
      return (
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D1F1A] mt-8 mb-4 border-b border-[#E8DCC4] pb-3">
          {text?.hi || text?.en || ''}
        </h2>
      );

    case 'subheading':
      return (
        <h3 className="text-xl sm:text-2xl font-bold text-[#995512] mt-6 mb-3">
          {text?.hi || text?.en || ''}
        </h3>
      );

    case 'paragraph':
      return (
        <p className="text-base text-[#52443C] leading-relaxed mb-4">
          {text?.hi || text?.en || ''}
        </p>
      );

    case 'quote':
      return (
        <div className="bg-[#FDF5EA] border-l-4 border-[#D48A29] p-5 rounded-2xl shadow-2xs my-5">
          <p className="text-base text-[#2D1F1A] font-medium leading-relaxed italic">
            {text?.hi || text?.en || ''}
          </p>
        </div>
      );

    case 'divider':
      return <hr className="border-t border-[#E8DCC4] my-8" />;

    case 'bullet_list':
      return (
        <ul className="list-disc list-inside space-y-2.5 my-4 text-[#52443C] pl-2">
          {items?.map((item, idx) => (
            <li key={idx} className="text-base leading-relaxed">
              {item.hi || item.en}
            </li>
          ))}
        </ul>
      );

    case 'numbered_list':
      return (
        <ol className="list-decimal list-inside space-y-2.5 my-4 text-[#52443C] pl-2">
          {items?.map((item, idx) => (
            <li key={idx} className="text-base leading-relaxed">
              {item.hi || item.en}
            </li>
          ))}
        </ol>
      );

    case 'verse':
      return (
        <div className="rounded-3xl bg-[#FFFDF9] p-6 sm:p-8 border border-[#E8DCC4] shadow-sm my-6 hover:border-[#D48A29] transition-all">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#F5E8CE] text-[#995512]">
              श्लोक {verseNumber}
            </span>
            {chapter_id && verseNumber && (
              <Link
                href={`/gita/chapter-${chapter_id}/verse-${verseNumber}`}
                className="text-xs font-bold text-[#D48A29] hover:underline flex items-center gap-1"
              >
                विस्तृत व्याख्या ➔
              </Link>
            )}
          </div>

          {sanskrit && (
            <p className="text-xl sm:text-2xl font-serif font-bold text-[#2D1F1A] leading-relaxed mb-4">
              {sanskrit}
            </p>
          )}

          {transliteration && (
            <p className="text-sm text-[#6B5B53] font-mono italic mb-3">
              {transliteration}
            </p>
          )}

          {translation?.hi && (
            <div className="pt-3 border-t border-[#E8DCC4]/50">
              <span className="text-xs font-bold text-[#995512] uppercase tracking-wider block mb-1">
                हिंदी अर्थ:
              </span>
              <p className="text-base text-[#52443C] leading-relaxed font-medium">
                {translation.hi}
              </p>
            </div>
          )}
        </div>
      );

    case 'footer':
      return (
        <footer className="mt-10 pt-6 border-t border-[#E8DCC4] text-xs text-[#7C6A5D] text-center italic">
          {text?.hi || text?.en || ''}
        </footer>
      );

    default:
      return null;
  }
}
