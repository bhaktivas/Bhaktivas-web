import { db } from '@/lib/firebaseAdmin';
import { transformBhajan } from '../transformers/transformBhajan';
import { signObjectMediaUrls } from '@/lib/cdnSigner';

const FALLBACK_BHAJANS = [
  {
    id: 'bhajan-1',
    title: { hi: 'श्री हनुमान चालीसा', en: 'Shree Hanuman Chalisa' },
    artist: { hi: 'गोस्वामी तुलसीदास', en: 'Goswami Tulsidas' },
    deity: 'Hanuman',
    duration: '09:45',
    category: 'Chalisa',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/hanuman.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/hanuman.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/hanuman-chalisa.mp3',
    isPremium: false,
  },
  {
    id: 'bhajan-2',
    title: { hi: 'शिव तांडव स्तोत्रम्', en: 'Shiv Tandav Stotram' },
    artist: { hi: 'रावण रचित', en: 'Composed by Ravan' },
    deity: 'Shiva',
    duration: '11:20',
    category: 'Stotram',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/mahadev.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/mahadev.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/shiv-tandav.mp3',
    isPremium: false,
  },
  {
    id: 'bhajan-3',
    title: { hi: 'अच्युतम् केशवम् कृष्ण दामोदरम्', en: 'Achyutam Keshavam Krishna Damodaram' },
    artist: { hi: 'परंपरागत', en: 'Traditional' },
    deity: 'Krishna',
    duration: '07:15',
    category: 'Bhajan',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/krishna.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/achyutam-keshavam.mp3',
    isPremium: false,
  },
  {
    id: 'bhajan-4',
    title: { hi: 'श्री कृष्ण गोविंद हरे मुरारी', en: 'Shri Krishna Govind Hare Murari' },
    artist: { hi: 'भक्ति संगीतांजली', en: 'Bhakti Sangeet' },
    deity: 'Krishna',
    duration: '08:30',
    category: 'Kirtan',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/radha-krishna.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/radha-krishna.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/krishna-govind.mp3',
    isPremium: false,
  },
  {
    id: 'bhajan-5',
    title: { hi: 'गायत्री मंत्र (108 वार)', en: 'Gayatri Mantra (108 Times)' },
    artist: { hi: 'वैदिक जाप', en: 'Vedic Chants' },
    deity: 'Gayatri Mata',
    duration: '24:00',
    category: 'Mantra',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/gayatri.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/gayatri.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/gayatri-mantra.mp3',
    isPremium: false,
  },
  {
    id: 'bhajan-6',
    title: { hi: 'राम सिया राम (मंगल भवन)', en: 'Ram Siya Ram (Mangal Bhavan)' },
    artist: { hi: 'रामचरितमानस', en: 'Ramcharitmanas' },
    deity: 'Rama',
    duration: '06:50',
    category: 'Chaupai',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/ram.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/ram.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/ram-siya-ram.mp3',
    isPremium: false,
  },
  {
    id: 'bhajan-7',
    title: { hi: 'महामृत्युंजय मंत्र', en: 'Mahamrityunjaya Mantra' },
    artist: { hi: 'ऋषि मार्कंडेय', en: 'Sage Markandeya' },
    deity: 'Shiva',
    duration: '15:10',
    category: 'Mantra',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva-lingam.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/shiva-lingam.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/mahamrityunjaya.mp3',
    isPremium: false,
  },
  {
    id: 'bhajan-8',
    title: { hi: 'विष्णु सहस्रनाम स्तोत्रम्', en: 'Vishnu Sahasranamam' },
    artist: { hi: 'महर्षि वेदव्यास', en: 'Maharshi Ved Vyasa' },
    deity: 'Vishnu',
    duration: '28:40',
    category: 'Stotram',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/vishnu.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/vishnu.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/vishnu-sahasranamam.mp3',
    isPremium: false,
  },
  {
    id: 'bhajan-9',
    title: { hi: 'जय अम्बे गौरी (दुर्गा आरती)', en: 'Jai Ambe Gauri (Durga Aarti)' },
    artist: { hi: 'परंपरागत आरती', en: 'Traditional Aarti' },
    deity: 'Durga',
    duration: '07:20',
    category: 'Aarti',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/durga.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/durga.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/jai-ambe-gauri.mp3',
    isPremium: false,
  },
  {
    id: 'bhajan-10',
    title: { hi: 'राधे राधे बरसाने वाली राधे', en: 'Radhe Radhe Barsane Wali Radhe' },
    artist: { hi: 'ब्रज संकीर्तन', en: 'Braj Sankirtan' },
    deity: 'Radha Rani',
    duration: '10:05',
    category: 'Kirtan',
    imageUrl: 'https://cdn.bhaktivas.com/wallpapers/radha.jpg',
    artworkUrl: 'https://cdn.bhaktivas.com/wallpapers/radha.jpg',
    audioUrl: 'https://cdn.bhaktivas.com/audio/radhe-radhe.mp3',
    isPremium: false,
  },
];

/**
 * Utility function to shuffle array items randomly (Fisher-Yates)
 */
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export async function getBhajan(id, locale = 'en') {
  if (db) {
    try {
      const snapshot = await db.collection('bhajans').doc(id).get();
      if (snapshot.exists) {
        const data = transformBhajan({ id: snapshot.id, ...snapshot.data() }, locale);
        return signObjectMediaUrls(data);
      }
    } catch (err) {
      console.warn(`[bhajanService] Error fetching doc ${id}:`, err.message);
    }
  }

  const fallback = FALLBACK_BHAJANS.find((b) => b.id === id) || FALLBACK_BHAJANS[0];
  const transformed = transformBhajan(fallback, locale);
  return signObjectMediaUrls(transformed);
}

/**
 * Fetches max 10 random bhajans from Firestore or fallback dataset.
 */
export async function getBhajans(limitCount = 10, locale = 'en') {
  let list = [];

  if (db) {
    try {
      const snapshot = await db.collection('bhajans').limit(25).get();
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          list.push(transformBhajan({ id: doc.id, ...doc.data() }, locale));
        });
      }
    } catch (err) {
      console.warn('[bhajanService] Error querying bhajans collection:', err.message);
    }
  }

  if (list.length === 0) {
    list = FALLBACK_BHAJANS.map((item) => transformBhajan(item, locale));
  }

  // Shuffle randomly & slice max limitCount (not more than 10)
  const randomized = shuffleArray(list).slice(0, Math.min(limitCount, 10));
  return signObjectMediaUrls(randomized);
}