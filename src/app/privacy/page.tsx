import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Bhaktivas Privacy Policy Component
 * Next.js / React (TypeScript) Page Component
 * Sourced with Tailwind CSS classes for responsive premium UI.
 */
export default async function PrivacyPolicy({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const isWebView = resolvedSearchParams?.webview === 'true' || resolvedSearchParams?.app === 'true';

  const navItems = [
    { id: 'info-collected', label: '1. Info We Collect' },
    { id: 'info-not-collected', label: '2. Info We DO NOT Collect' },
    { id: 'how-we-use', label: '3. How We Use Info' },
    { id: 'devotional-exp', label: '4. Devotional Experience' },
    { id: 'firebase-services', label: '5. Firebase & Cloud' },
    { id: 'notifications', label: '6. Devotional Notifications' },
    { id: 'third-party', label: '7. Third-Party Services' },
    { id: 'purchases', label: '8. Subscriptions & Payments' },
    { id: 'data-storage-security', label: '9. Security & Storage' },
    { id: 'ai-content', label: '10. AI & Generated Content' },
    { id: 'content-ownership', label: '11. Content Ownership' },
    { id: 'community', label: '12. Community & Moderation' },
    { id: 'children-privacy', label: '13. Children\'s Privacy' },
    { id: 'retention-rights', label: '14. Data Rights & Retention' },
    { id: 'transfers-changes', label: '15. Transfers & Updates' },
    { id: 'contact-us', label: '16. Contact Support' },
  ];

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#3A2E2A] flex flex-col font-sans">
      {!isWebView && <Navbar />}

      {/* Top Banner Header */}
      <header className="bg-[#3A2E2A] text-[#FBF7F0] py-16 px-6 text-center border-b-4 border-[#E38B29]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E38B29]/20 border border-[#E38B29] px-4 py-1.5 rounded-full mb-4">
            <span className="text-xl">🕉️</span>
            <span className="text-sm font-extrabold tracking-widest text-[#E38B29]">BHAKTIVAS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-base sm:text-lg text-[#E0D4C5] leading-relaxed max-w-3xl mx-auto mb-6">
            Your trust and spiritual privacy are sacred to us. Learn how we safeguard your personal data while delivering a personalized devotional journey.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full text-[#FCE4CB]">Effective Date: August 8, 2026</span>
            <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full text-[#FCE4CB]">App Version: 4.0+</span>
            <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full text-[#FCE4CB]">Website: bhaktivas.com</span>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* Sticky Desktop Navigation Sidebar */}
        {!isWebView && (
          <aside className="hidden lg:block lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24 bg-white rounded-3xl p-5 border border-[#F0E6D8] shadow-xs">
              <h3 className="text-xs font-extrabold text-[#8B6B4A] uppercase tracking-wider mb-4">Navigation</h3>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#5A4E45] hover:bg-[#FFF5EB] hover:text-[#E38B29] transition-all border border-transparent hover:border-[#FCE4CB]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}

        {/* Policy Content Area */}
        <main className="flex-1 flex flex-col gap-6">
          {/* Introduction Card */}
          <section id="intro" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Overview</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">Welcome to Bhaktivas</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              At <strong>Bhaktivas</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), available at <strong>bhaktivas.com</strong> and via our mobile application, we respect your privacy and are committed to protecting the information you share with us. Bhaktivas is a comprehensive devotional companion designed to enrich your daily spiritual journey through Daily Panchang, Aarti, Chalisa, 108 Bead Jap Mala Counter, HD Wallpapers, Devotional Bhajans, Horoscope, Literature, and Spiritual Alarms.
            </p>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              This Privacy Policy explains what information we collect, how we use it, how it is stored, and your rights regarding your personal data when using our application and web services.
            </p>
          </section>

          {/* Section 1: Information We Collect */}
          <section id="info-collected" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 01</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">1. Information We Collect</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              We collect information to provide, personalize, and improve your spiritual experience. The categories of data we collect include:
            </p>
            <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base text-[#5A4E45]">
              <li>
                <strong>Name & Profile Data:</strong> If voluntarily provided by you (e.g., for personalized status cards or user profile settings).
              </li>
              <li>
                <strong>Rashi (Zodiac Sign):</strong> Your selected Rashi used to generate daily devotional horoscopes and spiritual guidance.
              </li>
              <li>
                <strong>Language Preference:</strong> Your preferred app language (e.g., English, Hindi) for localized scriptures and UI.
              </li>
              <li>
                <strong>Device & System Data:</strong> Device model, OS version, app build version, screen resolution, and hardware identifiers for compatibility.
              </li>
              <li>
                <strong>App Usage & Performance Metrics:</strong> Anonymous crash logs, diagnostic performance data, and event analytics (e.g., screen views, feature interactions).
              </li>
              <li>
                <strong>Push Notification Token:</strong> Firebase Cloud Messaging (FCM) token to send daily Panchang, festival reminders, and devotional updates.
              </li>
              <li>
                <strong>Subscription Status:</strong> Information verifying your active premium subscription tier (processed via Google Play Billing or Apple App Store).
              </li>
              <li>
                <strong>Devotional Activity Data:</strong> Reading progress in scriptures, bookmarked chapters, favorite wallpapers, liked bhajans, and Jap Mala streak counters stored locally or synced.
              </li>
            </ul>
          </section>

          {/* Section 2: Information We DO NOT Collect (Highlighted Box) */}
          <section id="info-not-collected" className="bg-[#FFF8F0] rounded-3xl p-6 sm:p-8 border-2 border-[#FCE4CB] shadow-sm">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 02</span>
              <h2 className="text-2xl font-extrabold text-[#C66C00]">2. Information We DO NOT Collect</h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A3E35] leading-relaxed mb-4">
              To preserve your absolute privacy, Bhaktivas strictly avoids collecting sensitive personal or intrusive device data. <strong>We NEVER collect, store, or access:</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">Bank details, Credit/Debit cards</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">Account Passwords</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">Government-issued IDs (Aadhaar, SSN)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">Address Book & Contacts</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">SMS or Call logs</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">Personal Photos or Videos</span>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Information */}
          <section id="how-we-use" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 03</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">3. How We Use Information</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              We use the collected information solely for spiritual, operational, and service enhancement purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base text-[#5A4E45]">
              <li>
                <strong>Horoscope Personalization:</strong> Utilizing your selected Rashi to compute and deliver accurate daily astrological and devotional guidance.
              </li>
              <li>
                <strong>Progress Syncing & Preference Preservation:</strong> Saving your reading history, Jap Mala progress, alarms, and settings so you can resume seamless worship.
              </li>
              <li>
                <strong>Devotional Notification Delivery:</strong> Alerting you about auspicious Muhurats, daily Panchang, upcoming Hindu festivals, and spiritual announcements.
              </li>
              <li>
                <strong>App Stability & Optimization:</strong> Analyzing crash logs and performance analytics to eliminate bugs, reduce load times, and improve overall app reliability.
              </li>
              <li>
                <strong>Feature Access & Premium Entitlements:</strong> Unlocking ad-free access, HD wallpaper downloads, and exclusive audio features for subscribed users.
              </li>
            </ul>
          </section>

          {/* Section 4: Personalized Devotional Experience */}
          <section id="devotional-exp" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 04</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">4. Personalized Devotional Experience</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              Bhaktivas is tailored around your individual spiritual devotion:
            </p>
            <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base text-[#5A4E45]">
              <li>
                <strong>Rashi & Horoscope:</strong> Your chosen zodiac sign is stored locally or on secure user document stores to fetch relevant daily predictions.
              </li>
              <li>
                <strong>Localization:</strong> Language choices adapt the UI and sacred texts (Bhagavad Gita, Chalisa, Aarti) to your preferred script.
              </li>
              <li>
                <strong>History & Recommendations:</strong> Listening and reading history is evaluated locally or anonymously to recommend relevant bhajans and literature.
              </li>
            </ul>
          </section>

          {/* Section 5: Firebase & Cloud Infrastructure Services */}
          <section id="firebase-services" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 05</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">5. Firebase Services</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              Bhaktivas relies on Google Firebase cloud infrastructure for backend security and reliability. We utilize:
            </p>
            <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base text-[#5A4E45]">
              <li>
                <strong>Firebase Authentication:</strong> For account identity management (when sign-in functionality is used).
              </li>
              <li>
                <strong>Cloud Firestore:</strong> Secure cloud database storing user feedback, FAQs, and synced app data.
              </li>
              <li>
                <strong>Firebase Cloud Messaging (FCM):</strong> Push notification engine for devotional alerts.
              </li>
              <li>
                <strong>Google Analytics for Firebase:</strong> Aggregated, non-personally identifiable usage statistics.
              </li>
              <li>
                <strong>Firebase Crashlytics:</strong> Real-time stack trace monitoring for fast crash diagnostics.
              </li>
              <li>
                <strong>Cloud Functions:</strong> Serverless backend execution for automated daily content updates.
              </li>
            </ul>
          </section>

          {/* Section 6: Devotional Notifications */}
          <section id="notifications" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 06</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">6. Notifications & Preferences</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              Bhaktivas sends push notifications and persistent status bar shortcuts to assist your daily rituals:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#5A4E45] mb-4">
              <li>Daily Panchang & Rahukaal alerts.</li>
              <li>Rashi-specific daily horoscope guidance.</li>
              <li>Hindu festival, Vrat, and Ekadashi reminders.</li>
              <li>New Bhajan releases, wallpaper drops, and feature updates.</li>
            </ul>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              <em>Control:</em> You can customize or disable push notifications at any time via the <strong>More &amp; Settings</strong> screen in the app or through your phone system settings.
            </p>
          </section>

          {/* Section 7: Third-Party Service Providers */}
          <section id="third-party" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 07</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">7. Third-Party Services</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              We partner with industry-leading third-party service providers to power specific app functionality:
            </p>
            <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base text-[#5A4E45]">
              <li>
                <strong>Google Firebase:</strong> Database, analytics, messaging, and crash reporting (<a href="https://policies.google.com/privacy" className="text-[#E38B29] font-bold hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>).
              </li>
              <li>
                <strong>RevenueCat:</strong> In-app subscription management and receipt validation (<a href="https://www.revenuecat.com/privacy" className="text-[#E38B29] font-bold hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>).
              </li>
              <li>
                <strong>Cloudflare R2:</strong> Fast, encrypted content delivery network for audio files and wallpapers (<a href="https://www.cloudflare.com/privacypolicy/" className="text-[#E38B29] font-bold hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>).
              </li>
              <li>
                <strong>Google Play Billing &amp; Apple In-App Purchases:</strong> Payment processing for digital purchases.
              </li>
            </ul>
          </section>

          {/* Section 8: Purchases & Subscriptions */}
          <section id="purchases" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 08</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">8. Purchases & Subscriptions</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              Bhaktivas offers optional premium subscriptions. All financial transactions are managed exclusively by <strong>Google Play Store</strong> (Android) or <strong>Apple App Store</strong> (iOS).
            </p>
            <div className="bg-[#FFF5EB] border-l-4 border-[#E38B29] p-4 rounded-xl text-sm text-[#7A4E1A] leading-relaxed">
              <strong>🔒 Payment Security Guarantee:</strong> Bhaktivas never collects, sees, processes, or stores your credit card numbers, UPI IDs, or banking credentials. Payments are governed entirely by Google or Apple&apos;s billing policies.
            </div>
          </section>

          {/* Section 9: Data Security & Storage */}
          <section id="data-storage-security" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 09</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">9. Data Storage & Security</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              Your data is stored securely using industry-standard encryption protocols in transit (TLS/HTTPS) and at rest within Google Firebase cloud datacenters. We implement reasonable technical, administrative, and physical protections to prevent unauthorized access, loss, or alteration.
            </p>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              While we enforce rigorous protective measures, please note that no internet transmission or electronic storage method can be guaranteed 100% immune against unexpected vulnerabilities.
            </p>
          </section>

          {/* Section 10: AI & Generated Content */}
          <section id="ai-content" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 10</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">10. AI & Generated Content</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              Bhaktivas may incorporate Artificial Intelligence (AI) technologies to assist in generating or translating scripture explanations, astrological insights, and devotional summaries. AI-assisted content is created solely for educational, cultural, and spiritual guidance purposes.
            </p>
          </section>

          {/* Section 11: Content Ownership & Intellectual Property */}
          <section id="content-ownership" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 11</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">11. Content Ownership & Rights</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              All original branding, UI designs, artwork, custom audio compositions, and proprietary software code are the intellectual property of <strong>Bhaktivas</strong>. Ancient scriptures, traditional mantras, and public-domain spiritual texts belong to the shared cultural heritage and are presented with deep reverence.
            </p>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              Unauthorized scraping, commercial copying, or redistribution of Bhaktivas proprietary assets without written authorization is strictly prohibited.
            </p>
          </section>

          {/* Section 12: Community & Moderation */}
          <section id="community" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 12</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">12. Community & Content Moderation</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              If you submit feedback, suggestions, or participate in community sharing features (e.g., status card creation, comments), you agree not to submit offensive, hateful, or abusive content. We reserve the right to review, moderate, or remove user submissions that violate community guidelines.
            </p>
          </section>

          {/* Section 13: Children's Privacy */}
          <section id="children-privacy" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 13</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">13. Children&apos;s Privacy</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              Bhaktivas is a family-friendly devotional app, but it is not directed to children under 13 years of age. We do not knowingly collect personal identifiable information from children under 13. If you believe a child has provided us with personal data, please contact us immediately for deletion.
            </p>
          </section>

          {/* Section 14: Data Rights & Retention */}
          <section id="retention-rights" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 14</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">14. Data Retention & User Rights</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              Reading progress and user preferences are retained while the app remains installed or your cloud profile is active. Anonymous analytics are retained in aggregate form to evaluate app health.
            </p>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-3">
              <strong>Your Privacy Rights:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#5A4E45]">
              <li><strong>Right to Access:</strong> Request a summary of personal information we hold about you.</li>
              <li><strong>Right to Correction:</strong> Update or correct inaccurate preferences via app settings.</li>
              <li><strong>Right to Deletion:</strong> Request complete removal of your submitted data or cloud profile by contacting support.</li>
            </ul>
          </section>

          {/* Section 15: Transfers & Policy Changes */}
          <section id="transfers-changes" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 15</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">15. International Transfers & Updates</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              Your information may be stored and processed on servers outside your state or country of residence where Google Cloud datacenters operate. By using Bhaktivas, you consent to secure cross-border data routing required for service delivery.
            </p>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              We may update this Privacy Policy periodically. Material updates will be announced within the app or on <strong>bhaktivas.com</strong>.
            </p>
          </section>

          {/* Section 16: Contact Us */}
          <section id="contact-us" className="bg-[#3A2E2A] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#E38B29]">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Support</span>
              <h2 className="text-2xl font-extrabold text-white">16. Contact Support</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E0D4C5] leading-relaxed mb-6">
              If you have any questions, concerns, or data deletion requests regarding this Privacy Policy, please reach out to our dedicated support team:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="text-xs text-[#D0C4B5] font-semibold">Support Email</div>
                  <a href="mailto:support@bhaktivas.com" className="text-sm text-[#FCE4CB] font-extrabold hover:underline">support@bhaktivas.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-2xl">🌐</span>
                <div>
                  <div className="text-xs text-[#D0C4B5] font-semibold">Official Website</div>
                  <a href="https://bhaktivas.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#FCE4CB] font-extrabold hover:underline">bhaktivas.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-2xl">🚩</span>
                <div>
                  <div className="text-xs text-[#D0C4B5] font-semibold">Application &amp; Brand</div>
                  <div className="text-sm text-white font-bold">Bhaktivas</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {!isWebView && <Footer />}
    </div>
  );
}
