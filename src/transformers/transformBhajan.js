import { buildContentUrl } from "@/utils/linkBuilder";

export function transformBhajan(doc, locale = "en") {
  return {
    id: doc.id,

    type: "bhajan",

    title: doc.title?.[locale] ?? doc.title?.en,

    subtitle: doc.artist?.[locale] ?? doc.artist?.en,

    image: doc.artworkUrl,
    url: buildContentUrl(doc.type, doc.id),

    description:
      doc.description ||
      `Listen to "${doc.title?.[locale] ?? doc.title?.en}" on Bhaktivas.`,

    isPremium: doc.isPremium,

    metadata: {
      deity: doc.deity,

      duration: doc.duration,

      album: doc.album?.[locale] ?? doc.album?.en,
    },

    raw: doc,
  };
}
