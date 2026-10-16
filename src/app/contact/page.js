import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Bhaktivas - Devotional Support & Feedback',
  description:
    'Get in touch with the Bhaktivas team for support, feature suggestions, bhajan requests, or general inquiries.',
};

export default async function ContactPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const isWebView = resolvedSearchParams?.webview === 'true' || resolvedSearchParams?.app === 'true';

  const contactCards = [
    {
      icon: '✉️',
      title: 'Email Support',
      desc: 'Send your questions or feedback directly to our dedicated support team.',
      actionText: 'support@bhaktivas.com',
      href: 'mailto:support@bhaktivas.com',
      highlight: true,
    },
    {
      icon: '🌐',
      title: 'Official Website',
      desc: 'Explore online scriptures, Panchang, wallpapers, and app updates.',
      actionText: 'bhaktivas.com',
      href: 'https://bhaktivas.com',
      highlight: false,
    },
    {
      icon: '📲',
      title: 'Mobile App Support',
      desc: 'Get help with wallpaper downloads, alarms, or premium subscriptions.',
      actionText: 'Download Mobile App',
      href: '/download',
      highlight: false,
    },
    {
      icon: '📸',
      title: 'Social Channels',
      desc: 'Follow us on Instagram & Facebook for daily quotes, status updates & news.',
      actionText: '@bhaktivas on Instagram',
      href: 'https://instagram.com/bhaktivas',
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: 'How can I report a bug or suggest a new feature?',
      a: 'You can submit your bug report or feature idea using the contact form on this page or by emailing support@bhaktivas.com with your device details and app version.',
    },
    {
      q: 'How do I download 4K wallpapers or set devotional alarms?',
      a: 'Full 4K HD wallpaper downloads, haptic 108 Mala Jap, background audio playback, and custom alarms are available in the Bhaktivas Mobile App. You can download it directly from Google Play or App Store.',
    },
    {
      q: 'Can I request a specific Bhajan, Aarti, or Scripture text?',
      a: 'Yes! We welcome suggestions from our community. Select "Bhajan or Wallpaper Request" in the form above or email us the details.',
    },
    {
      q: 'How do I manage or request deletion of my data?',
      a: 'You can manage local preferences inside the app under Settings. To request complete deletion of your submitted data or cloud profile, please email support@bhaktivas.com.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#3A2E2A] flex flex-col font-sans">
      {!isWebView && <Navbar />}

      {/* Top Banner Header */}
      <header className="bg-[#3A2E2A] text-[#FBF7F0] py-16 px-6 text-center border-b-4 border-[#E38B29]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E38B29]/20 border border-[#E38B29] px-4 py-1.5 rounded-full mb-4">
            <img src="/logo.png" alt="Bhaktivas Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-extrabold tracking-widest text-[#E38B29]">BHAKTIVAS SUPPORT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Contact Us</h1>
          <p className="text-base sm:text-lg text-[#E0D4C5] leading-relaxed max-w-2xl mx-auto">
            We are dedicated to serving your devotional journey. Reach out for technical support, content suggestions, or general inquiries.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 flex flex-col gap-12 w-full">
        
        {/* Contact Cards Grid */}
        <section>
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Reach Out</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E2A]">Ways to Connect</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {contactCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : '_self'}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`group rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  card.highlight
                    ? 'bg-white border-[#E38B29] shadow-md hover:shadow-xl ring-2 ring-[#E38B29]/20'
                    : 'bg-white border-[#F0E6D8] shadow-xs hover:shadow-md hover:border-[#E38B29]'
                }`}
              >
                <div>
                  <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </span>
                  <h3 className="font-extrabold text-[#3A2E2A] text-base group-hover:text-[#E38B29] transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#8B6B4A] leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F0E6D8]">
                  <span className="text-xs font-extrabold text-[#E38B29] group-hover:underline truncate block">
                    {card.actionText} ➔
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Form & Info Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Form Component */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Quick Info & Guidelines */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#FFF8F0] rounded-3xl p-6 sm:p-8 border-2 border-[#FCE4CB] shadow-xs">
              <span className="text-3xl mb-2 block">⏰</span>
              <h3 className="text-lg font-extrabold text-[#3A2E2A] mb-2">
                Response Time Notice
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4E45] leading-relaxed mb-4">
                Our support team reads every message carefully. We typically respond to email inquiries within <strong>24 to 48 hours</strong> on business days.
              </p>
              <div className="bg-white/80 p-3 rounded-2xl border border-[#F0E6D8] text-xs text-[#8B6B4A]">
                💡 <strong>Tip:</strong> For faster assistance regarding app purchases, please include your Order ID or Google Play / App Store email.
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
              <h3 className="text-lg font-extrabold text-[#3A2E2A] mb-3 flex items-center gap-2">
                <span>📍</span> Official Brand &amp; Office
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#5A4E45]">
                <div>
                  <div className="font-bold text-[#3A2E2A]">Platform Name</div>
                  <div>Bhaktivas (भक्तिवास)</div>
                </div>
                <div>
                  <div className="font-bold text-[#3A2E2A]">Official Email</div>
                  <a href="mailto:support@bhaktivas.com" className="text-[#E38B29] font-bold hover:underline">
                    support@bhaktivas.com
                  </a>
                </div>
                <div>
                  <div className="font-bold text-[#3A2E2A]">Website Domain</div>
                  <div>https://bhaktivas.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F0E6D8] shadow-xs">
          <div className="mb-8 text-center md:text-left">
            <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">Help Center</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E2A]">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#FBF7F0] p-5 rounded-2xl border border-[#F0E6D8]">
                <h3 className="font-extrabold text-[#3A2E2A] text-sm sm:text-base mb-2 flex items-start gap-2">
                  <span className="text-[#E38B29]">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4E45] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {!isWebView && <Footer />}
    </div>
  );
}