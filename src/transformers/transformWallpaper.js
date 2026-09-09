import { buildContentUrl } from "@/utils/linkBuilder";

const DEITY_STATIC_POSTERS = {
  krishna: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_001.webp',
  hanuman: 'https://cdn.bhaktivas.com/wallpapers/hanuman/mobile/static/hanuman_001.webp',
  ram: 'https://cdn.bhaktivas.com/wallpapers/rama/mobile/static/rama_001.webp',
  rama: 'https://cdn.bhaktivas.com/wallpapers/rama/mobile/static/rama_001.webp',
  durga: 'https://cdn.bhaktivas.com/wallpapers/durga/mobile/static/durga_001.webp',
  lakshmi: 'https://cdn.bhaktivas.com/wallpapers/lakshmi/mobile/static/lakshmi_001.webp',
  ganesha: 'https://cdn.bhaktivas.com/wallpapers/ganesha/mobile/static/ganesha_001.webp',
  ganesh: 'https://cdn.bhaktivas.com/wallpapers/ganesha/mobile/static/ganesha_001.webp',
  khatu_shyam: 'https://cdn.bhaktivas.com/wallpapers/khatu_shyam/mobile/static/khatu_shyam_001.webp',
  khatu: 'https://cdn.bhaktivas.com/wallpapers/khatu_shyam/mobile/static/khatu_shyam_001.webp',
  shiva: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
};

export function transformWallpaper(doc, locale = "en") {
  let m3u8Url = doc.hlsUrl || null;
  let mp4Url = null;

  const propsToScan = [
    doc.videoUrl,
    doc.video,
    doc.hlsUrl,
    doc.video_url,
    doc.mediaUrl,
    doc.imageUrl,
    doc.downloadUrl,
    doc.thumbnailUrl,
  ];

  propsToScan.forEach((u) => {
    if (!u || typeof u !== 'string') return;
    if (u.includes('.m3u8')) {
      if (!m3u8Url) m3u8Url = u;
    } else if (u.includes('.mp4') || u.includes('.webm') || u.includes('/video/') || u.includes('/live/')) {
      if (!mp4Url) mp4Url = u;
    }
  });

  const rawDeity = (doc.deity || doc.category || 'shiva').toLowerCase();
  let deityKey = 'shiva';
  for (const key of Object.keys(DEITY_STATIC_POSTERS)) {
    if (rawDeity.includes(key)) {
      deityKey = key;
      break;
    }
  }

  // Preserve exact Firestore video URL for video wallpapers
  const activeVideoUrl = doc.videoUrl || doc.video || mp4Url || m3u8Url || null;
  const isLive = doc.artStyle === 'live' || Boolean(doc.videoUrl) || Boolean(doc.video) || Boolean(doc.hlsUrl) || doc.type === 'live' || Boolean(mp4Url);

  // Preserve exact static artwork image from Firestore, falling back to matching deity static artwork if imageUrl is an .mp4
  const rawImage = doc.imageUrl || doc.mediaUrl || doc.image || doc.thumbnailUrl;
  const isVideoStr = (url) => typeof url === 'string' && (url.includes('.mp4') || url.includes('.m3u8') || url.includes('/live/') || url.includes('/video/'));
  
  const defaultDeityPoster = DEITY_STATIC_POSTERS[deityKey] || DEITY_STATIC_POSTERS.shiva;

  const validThumb = (doc.thumbnailUrl && !doc.thumbnailUrl.includes('_thumb.') && !isVideoStr(doc.thumbnailUrl))
    ? doc.thumbnailUrl
    : (doc.posterUrl || doc.poster || (!isVideoStr(rawImage) ? rawImage : null)) || defaultDeityPoster;

  const titleVal = typeof doc.title === 'string' ? doc.title : (doc.title?.[locale] ?? doc.title?.en ?? doc.title?.hi ?? 'Devotional Wallpaper');

  return {
    id: doc.id || doc._id || `wallpaper-${Math.random().toString(36).substring(2, 9)}`,
    type: "wallpaper",
    title: titleVal,
    subtitle: doc.category || doc.deity || 'Deity',
    category: doc.category || doc.deity || 'Devotional',
    artStyle: isLive ? 'live' : (doc.artStyle || 'static'),
    image: validThumb,
    imageUrl: validThumb,
    thumbnailUrl: validThumb,
    videoUrl: isLive ? activeVideoUrl : null,
    hlsUrl: m3u8Url,
    mp4Url: activeVideoUrl,
    downloadUrl: doc.downloadUrl || activeVideoUrl || validThumb,
    resolution: doc.resolution || (isLive ? '4K Ultra HD Live' : '4K Ultra HD'),
    description:
      doc.description ||
      `Download the "${titleVal}" devotional wallpaper on Bhaktivas.`,
    url: buildContentUrl(doc.type || "wallpapers", doc.id || doc._id || ''),
    isPremium: Boolean(doc.isPremium),
    metadata: {
      device: doc.device || 'mobile',
      artStyle: isLive ? 'live' : (doc.artStyle || 'static'),
    },
    raw: doc,
  };
}
