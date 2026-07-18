import { buildContentUrl } from "@/utils/linkBuilder";

export function transformWallpaper(doc, locale = "en") {
  return {
    id: doc.id,

    type: "wallpaper",

    title: doc.title?.[locale] ?? doc.title?.en,

    subtitle: doc.category,

    image: doc.imageUrl,

    description:
      doc.description ||
      `Download the "${doc.title?.[locale] ?? doc.title?.en}" devotional wallpaper on Bhaktivas.`,
    url: buildContentUrl(doc.type, doc.id),

    isPremium: doc.isPremium,

    metadata: {
      device: doc.device,

      artStyle: doc.artStyle,
    },

    raw: doc,
  };
}
