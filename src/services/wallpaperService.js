import { db } from '@/lib/firebaseAdmin';
import { transformWallpaper } from '../transformers/transformWallpaper';
import { signObjectMediaUrls } from '@/lib/cdnSigner';

const FALLBACK_WALLPAPERS = [
  {
    id: 'wallpaper-shiva-static-1',
    title: { hi: 'श्री महाकाल दिव्य रूप', en: 'Shree Mahakal Divine Persona' },
    category: 'Shiva',
    deity: 'Shiva',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
    resolution: '4K Ultra HD',
    downloads: 34200,
    isPremium: false,
  },
  {
    id: 'wallpaper-shiva-static-2',
    title: { hi: 'शिव शंकर रूप', en: 'Shiva Shankar Persona' },
    category: 'Shiva',
    deity: 'Shiva',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
    resolution: '4K Ultra HD',
    downloads: 24900,
    isPremium: false,
  },
  {
    id: 'wallpaper-krishna-static-1',
    title: { hi: 'राधा कृष्ण रास', en: 'Radha Krishna Raas' },
    category: 'Krishna',
    deity: 'Krishna',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_001.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_001.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_001.webp',
    resolution: '4K Ultra HD',
    downloads: 28900,
    isPremium: false,
  },
  {
    id: 'wallpaper-krishna-static-2',
    title: { hi: 'श्री कृष्ण मुरलीधर', en: 'Shree Krishna Murlidhar' },
    category: 'Krishna',
    deity: 'Krishna',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_004.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_004.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_004.webp',
    resolution: '4K Ultra HD',
    downloads: 19800,
    isPremium: false,
  },
  {
    id: 'wallpaper-ram-static-1',
    title: { hi: 'श्री राम दिव्य रूप', en: 'Shree Ram Divine Persona' },
    category: 'Rama',
    deity: 'Rama',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_001.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_001.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_001.webp',
    resolution: '4K Ultra HD',
    downloads: 18400,
    isPremium: false,
  },
  {
    id: 'wallpaper-hanuman-static-1',
    title: { hi: 'पवनपुत्र श्री हनुमान', en: 'Pawanputra Shree Hanuman' },
    category: 'Hanuman',
    deity: 'Hanuman',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/hanuman/mobile/static/hanuman_001.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/hanuman/mobile/static/hanuman_001.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/hanuman/mobile/static/hanuman_001.webp',
    resolution: '4K Ultra HD',
    downloads: 31200,
    isPremium: false,
  },
  {
    id: 'wallpaper-durga-static-1',
    title: { hi: 'माता दुर्गा सिंहवाहिनी', en: 'Maa Durga Simhavahini' },
    category: 'Durga',
    deity: 'Durga',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/lakshmi/mobile/static/lakshmi_001.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/lakshmi/mobile/static/lakshmi_001.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/lakshmi/mobile/static/lakshmi_001.webp',
    resolution: '4K Ultra HD',
    downloads: 14600,
    isPremium: false,
  },
  {
    id: 'wallpaper-ganesh-static-1',
    title: { hi: 'श्री विष्णु नारायण', en: 'Shree Vishnu Narayan' },
    category: 'Vishnu',
    deity: 'Vishnu',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva/mobile/static/shiva_001.webp',
    resolution: '4K Ultra HD',
    downloads: 16900,
    isPremium: false,
  },
  {
    id: 'wallpaper-lakshmi-static-1',
    title: { hi: 'माता लक्ष्मी धनदात्री', en: 'Maa Lakshmi Dhanadatri' },
    category: 'Lakshmi',
    deity: 'Lakshmi',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/lakshmi/mobile/static/lakshmi_001.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/lakshmi/mobile/static/lakshmi_001.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/lakshmi/mobile/static/lakshmi_001.webp',
    resolution: '4K Ultra HD',
    downloads: 13200,
    isPremium: false,
  },
  {
    id: 'wallpaper-khatu-static-1',
    title: { hi: 'राधे रानी दिव्य रूप', en: 'Radhe Rani Divine Persona' },
    category: 'Radha',
    deity: 'Radha',
    artStyle: 'static',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_004.webp',
    thumbnailUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_004.webp',
    downloadUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna/mobile/static/krishna_004.webp',
    resolution: '4K Ultra HD',
    downloads: 21500,
    isPremium: false,
  },
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Fetches dynamic wallpaper data from CMS API or Firestore directly.
 */
export async function getWallpapers(limitCount = 10, locale = 'en') {
  let list = [];

  // 1. Primary Source: Query Firestore db collection 'wallpapers' directly
  if (db) {
    try {
      const snapshot = await db.collection('wallpapers').limit(50).get();
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          list.push(transformWallpaper({ id: doc.id, ...doc.data() }, locale));
        });
      }
    } catch (err) {
      console.warn('[wallpaperService] Error querying Firestore wallpapers collection:', err.message);
    }
  }

  // 2. Secondary Live Source: Try CMS API endpoint if Firestore returned no docs
  if (list.length === 0) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500);

      const res = await fetch('http://localhost:3005/api/wallpapers', {
        signal: controller.signal,
        headers: { 'Accept': 'application/json' },
        cache: 'no-store'
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const rawList = Array.isArray(data) ? data : (data.data || data.wallpapers || []);
        if (rawList.length > 0) {
          list = rawList.map((item) => transformWallpaper(item, locale));
        }
      }
    } catch (cmsErr) {
      // CMS API offline
    }
  }

  // 3. Fallback to default R2 dataset only if Firestore is completely empty/offline
  if (list.length === 0) {
    list = FALLBACK_WALLPAPERS.map((item) => transformWallpaper(item, locale));
  }

  const randomized = shuffleArray(list).slice(0, Math.min(limitCount, list.length));
  return signObjectMediaUrls(randomized);
}

export async function getWallpaper(id, locale = 'en') {
  if (db) {
    try {
      const snapshot = await db.collection('wallpapers').doc(id).get();
      if (snapshot.exists) {
        const data = transformWallpaper({ id: snapshot.id, ...snapshot.data() }, locale);
        return signObjectMediaUrls(data);
      }
    } catch (err) {
      console.warn(`[wallpaperService] Error fetching doc ${id}:`, err.message);
    }
  }

  const fallback = FALLBACK_WALLPAPERS.find((w) => w.id === id) || FALLBACK_WALLPAPERS[0];
  const transformed = transformWallpaper(fallback, locale);
  return signObjectMediaUrls(transformed);
}

