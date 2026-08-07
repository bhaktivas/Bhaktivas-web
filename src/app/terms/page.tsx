import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Bhaktivas Terms & Conditions Component
 * Next.js / React (TypeScript) Page Component
 * Sourced with Tailwind CSS classes for responsive premium UI.
 */
export default async function TermsAndConditions({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const isWebView = resolvedSearchParams?.webview === 'true' || resolvedSearchParams?.app === 'true';

  const navItems = [
    { id: 'acceptance', label: '1. Acceptance of Terms' },
    { id: 'eligibility', label: '2. Eligibility & Minors' },
    { id: 'services-description', label: '3. Description of Services' },
    { id: 'user-responsibilities', label: '4. User Responsibilities & Conduct' },
    { id: 'intellectual-property', label: '5. Intellectual Property' },
    { id: 'public-domain', label: '6. Public Domain & Third-Party Content' },
    { id: 'subscriptions', label: '7. Premium Subscriptions' },
    { id: 'refunds', label: '8. Purchases & Refund Policy' },
    { id: 'disclaimers', label: '9. Horoscope & Devotional Disclaimer' },
    { id: 'alarms-disclaimer', label: '10. Alarm & Reminder Settings' },
    { id: 'notifications', label: '11. Devotional Notifications' },
    { id: 'availability-offline', label: '12. Availability & Offline Usage' },
    { id: 'limitation-liability', label: '13. Limitation of Liability' },
    { id: 'account-security', label: '14. Account & Future Features' },
    { id: 'termination', label: '15. Termination & Suspension' },
    { id: 'changes-terms', label: '16. Changes to Terms & Services' },
    { id: 'governing-law', label: '17. Governing Law & Jurisdiction' },
    { id: 'contact-us', label: '18. Contact Information' },
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
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Terms & Conditions</h1>
          <p className="text-base sm:text-lg text-[#E0D4C5] leading-relaxed max-w-3xl mx-auto mb-6">
            Please read these Terms & Conditions carefully before using the Bhaktivas mobile application or website. By accessing or using our services, you agree to be legally bound by these terms.
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
          {/* Overview Card */}
          <section id="intro" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Overview</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">Welcome to Bhaktivas</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of the <strong>Bhaktivas</strong> mobile application, available on Android and iOS, as well as our official website at <strong>bhaktivas.com</strong> (collectively, the &quot;Services&quot;). Bhaktivas is operated as a complete spiritual &amp; devotional platform providing Daily Panchang, Aarti, Chalisa, 108 Bead Jap Mala Counter, HD Wallpapers, Devotional Bhajans, Horoscope, Literature, Virtual Live Mandir, and Spiritual Alarms.
            </p>
          </section>

          {/* Section 1: Acceptance of Terms */}
          <section id="acceptance" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 01</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">1. Acceptance of Terms</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-3">
              By downloading, installing, registering, accessing, or using Bhaktivas, you represent that you have read, understood, and agreed to be bound by these Terms, along with our <strong>Privacy Policy</strong>.
            </p>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              If you do not agree to these Terms, you must not access or use the application or our website, and should immediately uninstall the application from all devices.
            </p>
          </section>

          {/* Section 2: Eligibility & Minors */}
          <section id="eligibility" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 02</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">2. Eligibility &amp; Minors</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              The Services are intended for individuals who can form legally binding contracts under applicable law. If you are under the age of 18 (or the age of majority in your jurisdiction), you represent that you are accessing the Services with the permission and under the supervision of a parent or legal guardian who agrees to be bound by these Terms.
            </p>
          </section>

          {/* Section 3: Description of Services */}
          <section id="services-description" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 03</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">3. Description of Services</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              Bhaktivas offers various digital content, interactive utilities, and spiritual materials, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#5A4E45]">
              <li><strong>Panchang & Muhurats:</strong> Traditional daily Hindu calendar metrics, Rahukaal, and auspicious times based on location coordinates.</li>
              <li><strong>Mala Counter:</strong> Digital counter tracking jap cycles with haptic feedback.</li>
              <li><strong>Wallpaper Downloads:</strong> High-definition devotional images for personalization.</li>
              <li><strong>Audio Bhajans & Aarti:</strong> Devotional streaming and background audio playback.</li>
              <li><strong>Literature & Scriptures:</strong> Digital library featuring Bhagavad Gita, Chalisa, and traditional texts.</li>
              <li><strong>Horoscope:</strong> Astrological predictions updated daily based on sign selections.</li>
              <li><strong>Spiritual Alarms:</strong> Configurable daily reminders using devotional audio tracks.</li>
            </ul>
          </section>

          {/* Section 4: User Responsibilities & Conduct */}
          <section id="user-responsibilities" className="bg-[#FFF8F0] rounded-3xl p-6 sm:p-8 border-2 border-[#FCE4CB] shadow-sm">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 04</span>
              <h2 className="text-2xl font-extrabold text-[#C66C00]">4. User Responsibilities &amp; Conduct</h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A3E35] leading-relaxed mb-4">
              To preserve the sacred and respectful environment of Bhaktivas, you agree <strong>NOT</strong> to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">Use the app for commercial or commercial reselling</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">Submit abusive, offensive, or hateful feedback</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">Attempt unauthorized server scraping or hacking</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#F0E6D8]">
                <span>❌</span>
                <span className="text-xs sm:text-sm font-bold text-[#3A2E2A]">Circumvent subscription verification barriers</span>
              </div>
            </div>
          </section>

          {/* Section 5: Intellectual Property */}
          <section id="intellectual-property" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 05</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">5. Intellectual Property</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              All proprietary materials in the Services—including software code, user interface designs, custom audio mixes, specific graphics, digital layouts, and branding assets—are the exclusive property of <strong>Bhaktivas</strong> and are protected by applicable trademark, copyright, and database rights.
            </p>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              You are granted a limited, personal, non-exclusive, non-transferable, revocable license to access and use the app for personal, non-commercial purposes.
            </p>
          </section>

          {/* Section 6: Public Domain & Third-Party Content */}
          <section id="public-domain" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 06</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">6. Public Domain &amp; Third-Party Content</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              We present sacred scriptures (e.g., Bhagavad Gita verses, ancient Sanskrit mantras, traditional stotrams) that belong to the shared spiritual heritage and are in the public domain. Bhaktivas does not claim copyright over the original ancient texts. However, any original commentary, translation files, localized summaries, or custom translations created by us remain our intellectual property.
            </p>
          </section>

          {/* Section 7: Premium Subscriptions */}
          <section id="subscriptions" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 07</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">7. Premium Subscriptions</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              Certain features within Bhaktivas require paid subscriptions (e.g., Ad-Free experience, unlimited HD downloads, special alarm profiles). By subscribing, you agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#5A4E45]">
              <li>Pay all subscription fees through Google Play Billing or Apple Store Billing.</li>
              <li>Allow automatic renewal of subscriptions according to the respective App Store billing schedules.</li>
              <li>Manage subscription cancellations directly through your Google or Apple Account settings.</li>
            </ul>
          </section>

          {/* Section 8: Purchases & Refund Policy */}
          <section id="refunds" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 08</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">8. Purchases &amp; Refund Policy</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-4">
              All financial transactions and premium subscriptions are handled directly by Google and Apple app store marketplaces.
            </p>
            <div className="bg-[#FFF5EB] border-l-4 border-[#E38B29] p-4 rounded-xl text-sm text-[#7A4E1A] leading-relaxed">
              <strong>💳 Refund Processing:</strong> Bhaktivas is unable to process refunds directly. Refund requests are subject to the terms and refund criteria of the respective store platforms (Google Play Store Refund Policy or Apple App Store Support).
            </div>
          </section>

          {/* Section 9: Horoscope & Devotional Disclaimer */}
          <section id="disclaimers" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 09</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">9. Horoscope &amp; Devotional Disclaimer</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed mb-3">
              Daily Horoscope (Rashifal), astrological forecasts, and Panchang schedules are provided for educational, cultural, and spiritual guidance purposes only.
            </p>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed font-bold text-[#E38B29]">
              ⚠️ Astrological readings do not constitute medical, financial, legal, or psychological advice. Bhaktivas is not liable for any personal or financial actions taken by users based on forecasts.
            </p>
          </section>

          {/* Section 10: Alarm & Reminder Settings */}
          <section id="alarms-disclaimer" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 10</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">10. Alarm &amp; Reminder Settings</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              Bhaktivas offers custom alarm features to help you structure your daily prayers. We rely on your device system services to trigger these alarms. While we implement optimized background services, we cannot guarantee that alarms will sound in cases of battery optimizer termination, device shutoffs, or unexpected operating system overrides.
            </p>
          </section>

          {/* Section 11: Devotional Notifications */}
          <section id="notifications" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 11</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">11. Devotional Notifications</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              We send push notifications to alert you of auspicious timings, Panchang details, and religious festival reminders. We are not responsible for any delay or failure in delivery of notifications due to local internet outages, system settings, or push notification gateway issues.
            </p>
          </section>

          {/* Section 12: Availability & Offline Usage */}
          <section id="availability-offline" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 12</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">12. Availability &amp; Offline Usage</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              Certain features (like script readings and Jap Mala tracking) are available offline. Audio streaming and real-time horoscope generation require active network access. We reserve the right to temporarily pause, restrict, or modify app features for server maintenance, updates, or other operational necessities.
            </p>
          </section>

          {/* Section 13: Limitation of Liability */}
          <section id="limitation-liability" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 13</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">13. Limitation of Liability</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              To the maximum extent permitted by applicable law, <strong>Bhaktivas</strong> and its developers shall not be liable for any direct, indirect, incidental, punitive, or consequential damages resulting from the use or inability to use the Services, or any content or results generated within the Services.
            </p>
          </section>

          {/* Section 14: Account & Future Features */}
          <section id="account-security" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 14</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">14. Account Security &amp; Data Sync</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              You are responsible for maintaining the confidentiality of your account login information (where applicable). Bhaktivas relies on Firebase backend architecture to store and validate login credentials. We are not liable for any unauthorized access resulting from user negligence.
            </p>
          </section>

          {/* Section 15: Termination & Suspension */}
          <section id="termination" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 15</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">15. Termination &amp; Suspension</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              We reserve the right to suspend or terminate your access to the Services at our sole discretion, without notice, if we believe your conduct violates these Terms, harms our services, or violates the rights of other users.
            </p>
          </section>

          {/* Section 16: Changes to Terms & Services */}
          <section id="changes-terms" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 16</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">16. Changes to Terms &amp; Services</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              We reserve the right to modify these Terms at any time. Any changes will be posted on this page or within the mobile application. Your continued use of the Services after terms are updated constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 17: Governing Law & Jurisdiction */}
          <section id="governing-law" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Section 17</span>
              <h2 className="text-2xl font-extrabold text-[#3A2E2A]">17. Governing Law &amp; Jurisdiction</h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any dispute arising out of these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>

          {/* Section 18: Contact Information */}
          <section id="contact-us" className="bg-[#3A2E2A] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#E38B29]">
            <div className="mb-4">
              <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Support</span>
              <h2 className="text-2xl font-extrabold text-white">18. Contact Information</h2>
            </div>
            <p className="text-sm sm:text-base text-[#E0D4C5] leading-relaxed mb-6">
              If you have any questions, clarifications, or support queries regarding these Terms &amp; Conditions, please reach out to our support team:
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
                  <div className="text-sm text-white font-bold">Bhaktivas Spiritual Companion</div>
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
