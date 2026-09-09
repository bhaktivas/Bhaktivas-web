import { db } from '@/lib/firebaseAdmin';
import { signObjectMediaUrls } from '@/lib/cdnSigner';

const FALLBACK_PANCHANG = [
  {
    id: 'panchang-today',
    date: '2026-09-08',
    day: { hi: 'मंगलवार', en: 'Tuesday' },
    tithi: { hi: 'भाद्रपद कृष्ण पक्ष त्रयोदशी', en: 'Bhadrapada Krishna Trayodashi' },
    nakshatra: { hi: 'मघा नक्षत्र', en: 'Magha Nakshatra' },
    yog: { hi: 'परिघ योग', en: 'Parigha Yoga' },
    karan: { hi: 'गर करण', en: 'Gara Karana' },
    rahukaal: { hi: '03:30 PM - 05:00 PM', en: '03:30 PM - 05:00 PM' },
    sunrise: '06:04 AM',
    sunset: '06:34 PM',
    moonrise: '03:45 AM',
    auspiciousMuhurat: { hi: 'अभिजित मुहूर्त: 11:54 AM - 12:44 PM', en: 'Abhijit Muhurat: 11:54 AM - 12:44 PM' },
    festival: { hi: 'प्रदोष व्रत (कृष्ण)', en: 'Pradosh Vrat (Krishna Paksha)' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/today_card.jpg',
  },
  {
    id: 'panchang-tomorrow',
    date: '2026-09-09',
    day: { hi: 'बुधवार', en: 'Wednesday' },
    tithi: { hi: 'भाद्रपद कृष्ण पक्ष चतुर्दशी', en: 'Bhadrapada Krishna Chaturdashi' },
    nakshatra: { hi: 'पूर्वाफाल्गुनी नक्षत्र', en: 'Purva Phalguni Nakshatra' },
    yog: { hi: 'शिव योग', en: 'Shiva Yoga' },
    karan: { hi: 'विष्टि करण', en: 'Vishti Karana' },
    rahukaal: { hi: '12:00 PM - 01:30 PM', en: '12:00 PM - 01:30 PM' },
    sunrise: '06:05 AM',
    sunset: '06:33 PM',
    moonrise: '04:50 AM',
    auspiciousMuhurat: { hi: 'विजय मुहूर्त: 02:24 PM - 03:14 PM', en: 'Vijaya Muhurat: 02:24 PM - 03:14 PM' },
    festival: { hi: 'मासिक शिवरात्रि', en: 'Masik Shivratri' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/tomorrow_card.jpg',
  },
  {
    id: 'panchang-day3',
    date: '2026-09-10',
    day: { hi: 'गुरुवार', en: 'Thursday' },
    tithi: { hi: 'भाद्रपद अमावस्या', en: 'Bhadrapada Amavasya' },
    nakshatra: { hi: 'उत्तराफाल्गुनी नक्षत्र', en: 'Uttara Phalguni Nakshatra' },
    yog: { hi: 'सिद्ध योग', en: 'Siddha Yoga' },
    karan: { hi: 'नाग करण', en: 'Naga Karana' },
    rahukaal: { hi: '01:30 PM - 03:00 PM', en: '01:30 PM - 03:00 PM' },
    sunrise: '06:05 AM',
    sunset: '06:32 PM',
    moonrise: '05:55 AM',
    auspiciousMuhurat: { hi: 'अमृत काल: 08:10 AM - 09:45 AM', en: 'Amrit Kaal: 08:10 AM - 09:45 AM' },
    festival: { hi: 'पिठोरी अमावस्या / कुशोत्पाटिनी अमावस्या', en: 'Pithori Amavasya' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/amavasya_card.jpg',
  },
  {
    id: 'panchang-day4',
    date: '2026-09-11',
    day: { hi: 'शुक्रवार', en: 'Friday' },
    tithi: { hi: 'आश्विन शुक्ल पक्ष प्रतिपदा', en: 'Ashvina Shukla Pratipada' },
    nakshatra: { hi: 'हस्त नक्षत्र', en: 'Hasta Nakshatra' },
    yog: { hi: 'साध्य योग', en: 'Sadhya Yoga' },
    karan: { hi: 'बव करण', en: 'Bava Karana' },
    rahukaal: { hi: '10:30 AM - 12:00 PM', en: '10:30 AM - 12:00 PM' },
    sunrise: '06:06 AM',
    sunset: '06:31 PM',
    moonrise: '06:58 AM',
    auspiciousMuhurat: { hi: 'अभिजित मुहूर्त: 11:53 AM - 12:43 PM', en: 'Abhijit Muhurat: 11:53 AM - 12:43 PM' },
    festival: { hi: 'शारदीय नवरात्रि घटस्थापना', en: 'Navratri Ghatasthapana' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/navratri_card.jpg',
  },
  {
    id: 'panchang-day5',
    date: '2026-09-12',
    day: { hi: 'शनिवार', en: 'Saturday' },
    tithi: { hi: 'आश्विन शुक्ल पक्ष द्वितीया', en: 'Ashvina Shukla Dwitiya' },
    nakshatra: { hi: 'चित्रा नक्षत्र', en: 'Chitra Nakshatra' },
    yog: { hi: 'शुभ योग', en: 'Shubha Yoga' },
    karan: { hi: 'बालव करण', en: 'Balava Karana' },
    rahukaal: { hi: '09:00 AM - 10:30 AM', en: '09:00 AM - 10:30 AM' },
    sunrise: '06:06 AM',
    sunset: '06:30 PM',
    moonrise: '08:02 AM',
    auspiciousMuhurat: { hi: 'ब्रह्म मुहूर्त: 04:32 AM - 05:18 AM', en: 'Brahma Muhurat: 04:32 AM - 05:18 AM' },
    festival: { hi: 'ब्रह्मचारिणी पूजा (द्वितीय नवरात्रि)', en: 'Brahmacharini Puja' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/dwitiya_card.jpg',
  },
  {
    id: 'panchang-day6',
    date: '2026-09-13',
    day: { hi: 'रविवार', en: 'Sunday' },
    tithi: { hi: 'आश्विन शुक्ल पक्ष तृतीया', en: 'Ashvina Shukla Tritiya' },
    nakshatra: { hi: 'स्वाती नक्षत्र', en: 'Swati Nakshatra' },
    yog: { hi: 'शुक्ल योग', en: 'Shukla Yoga' },
    karan: { hi: 'कौलव करण', en: 'Kaulava Karana' },
    rahukaal: { hi: '04:30 PM - 06:00 PM', en: '04:30 PM - 06:00 PM' },
    sunrise: '06:07 AM',
    sunset: '06:29 PM',
    moonrise: '09:07 AM',
    auspiciousMuhurat: { hi: 'गोधूलि मुहूर्त: 06:17 PM - 06:41 PM', en: 'Godhuli Muhurat: 06:17 PM - 06:41 PM' },
    festival: { hi: 'चंद्रघंटा पूजा (तृतीय नवरात्रि)', en: 'Chandraghanta Puja' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/tritiya_card.jpg',
  },
  {
    id: 'panchang-day7',
    date: '2026-09-14',
    day: { hi: 'सोमवार', en: 'Monday' },
    tithi: { hi: 'आश्विन शुक्ल पक्ष चतुर्थी', en: 'Ashvina Shukla Chaturthi' },
    nakshatra: { hi: 'विशाखा नक्षत्र', en: 'Visakha Nakshatra' },
    yog: { hi: 'ब्रह्म योग', en: 'Brahma Yoga' },
    karan: { hi: 'तैतिल करण', en: 'Taitila Karana' },
    rahukaal: { hi: '07:30 AM - 09:00 AM', en: '07:30 AM - 09:00 AM' },
    sunrise: '06:07 AM',
    sunset: '06:28 PM',
    moonrise: '10:12 AM',
    auspiciousMuhurat: { hi: 'अभिजित मुहूर्त: 11:52 AM - 12:42 PM', en: 'Abhijit Muhurat: 11:52 AM - 12:42 PM' },
    festival: { hi: 'कुष्मांडा पूजा (चतुर्थ नवरात्रि)', en: 'Kushmanda Puja' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/chaturthi_card.jpg',
  },
  {
    id: 'panchang-day8',
    date: '2026-09-15',
    day: { hi: 'मंगलवार', en: 'Tuesday' },
    tithi: { hi: 'आश्विन शुक्ल पक्ष पंचमी', en: 'Ashvina Shukla Panchami' },
    nakshatra: { hi: 'अनुराधा नक्षत्र', en: 'Anuradha Nakshatra' },
    yog: { hi: 'ऐन्द्र योग', en: 'Aindra Yoga' },
    karan: { hi: 'गर करण', en: 'Gara Karana' },
    rahukaal: { hi: '03:30 PM - 05:00 PM', en: '03:30 PM - 05:00 PM' },
    sunrise: '06:08 AM',
    sunset: '06:27 PM',
    moonrise: '11:17 AM',
    auspiciousMuhurat: { hi: 'अमृत काल: 02:15 PM - 03:50 PM', en: 'Amrit Kaal: 02:15 PM - 03:50 PM' },
    festival: { hi: 'स्कंदमाता पूजा (पंचम नवरात्रि)', en: 'Skandamata Puja' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/panchami_card.jpg',
  },
  {
    id: 'panchang-day9',
    date: '2026-09-16',
    day: { hi: 'बुधवार', en: 'Wednesday' },
    tithi: { hi: 'आश्विन शुक्ल पक्ष षष्ठी', en: 'Ashvina Shukla Shashthi' },
    nakshatra: { hi: 'ज्येष्ठा नक्षत्र', en: 'Jyeshtha Nakshatra' },
    yog: { hi: 'वैधृति योग', en: 'Vaidhriti Yoga' },
    karan: { hi: 'वणिज करण', en: 'Vanija Karana' },
    rahukaal: { hi: '12:00 PM - 01:30 PM', en: '12:00 PM - 01:30 PM' },
    sunrise: '06:08 AM',
    sunset: '06:26 PM',
    moonrise: '12:20 PM',
    auspiciousMuhurat: { hi: 'ब्रह्म मुहूर्त: 04:34 AM - 05:21 AM', en: 'Brahma Muhurat: 04:34 AM - 05:21 AM' },
    festival: { hi: 'कात्यायनी पूजा (षष्ठम नवरात्रि)', en: 'Katyayani Puja' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/shashthi_card.jpg',
  },
  {
    id: 'panchang-day10',
    date: '2026-09-17',
    day: { hi: 'गुरुवार', en: 'Thursday' },
    tithi: { hi: 'आश्विन शुक्ल पक्ष सप्तमी', en: 'Ashvina Shukla Saptami' },
    nakshatra: { hi: 'मूल नक्षत्र', en: 'Mula Nakshatra' },
    yog: { hi: 'विषकुम्भ योग', en: 'Vishkumbha Yoga' },
    karan: { hi: 'विष्टि करण', en: 'Vishti Karana' },
    rahukaal: { hi: '01:30 PM - 03:00 PM', en: '01:30 PM - 03:00 PM' },
    sunrise: '06:09 AM',
    sunset: '06:25 PM',
    moonrise: '01:21 PM',
    auspiciousMuhurat: { hi: 'अभिजित मुहूर्त: 11:51 AM - 12:41 PM', en: 'Abhijit Muhurat: 11:51 AM - 12:41 PM' },
    festival: { hi: 'कालरात्रि पूजा (सप्तमी महापूजा)', en: 'Kalaratri Puja' },
    imageUrl: 'https://cdn.bhaktivas.com/panchang/saptami_card.jpg',
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
 * Fetches max 10 Panchang items from Firestore or fallback dataset.
 */
export async function getPanchang(limitCount = 10, locale = 'en') {
  let list = [];

  if (db) {
    try {
      const collectionsToTry = ['panchang', 'panchangs', 'dailyPanchang'];
      for (const name of collectionsToTry) {
        const snapshot = await db.collection(name).limit(25).get();
        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          break;
        }
      }
    } catch (err) {
      console.warn('[panchangService] Error querying panchang collection:', err.message);
    }
  }

  if (list.length === 0) {
    list = FALLBACK_PANCHANG;
  }

  const randomized = shuffleArray(list).slice(0, Math.min(limitCount, 10));
  return signObjectMediaUrls(randomized);
}
