import { buildContentUrl } from "@/utils/linkBuilder";

export function transformBhajan(doc, locale = "en") {
  return {
    id: doc.id,
    type: "bhajan",
    title: doc.title?.[locale] ?? doc.title?.en ?? doc.title,
    subtitle: doc.artist?.[locale] ?? doc.artist?.en ?? doc.artist,
    image: doc.artworkUrl || doc.imageUrl || doc.mediaUrl,
    artworkUrl: doc.artworkUrl || doc.imageUrl,
    audioUrl: doc.audioUrl || doc.mediaUrl,
    videoUrl: doc.videoUrl,
    hlsUrl: doc.hlsUrl,
    downloadUrl: doc.downloadUrl || doc.audioUrl,
    url: buildContentUrl(doc.type || "bhajans", doc.id),
    description:
      doc.description ||
      `Listen to "${doc.title?.[locale] ?? doc.title?.en ?? doc.title}" on Bhaktivas.`,
    isPremium: doc.isPremium,
    metadata: {
      deity: doc.deity,
      duration: doc.duration,
      album: doc.album?.[locale] ?? doc.album?.en ?? doc.album,
    },
    raw: doc,
  };
}
