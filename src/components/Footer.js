import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D1F1A] text-[#F3EAD8] mt-auto border-t border-[#422F28]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Bhaktivas Logo"
                className="w-10 h-10 object-contain rounded-xl"
              />
              <span className="text-2xl font-bold text-white tracking-tight">Bhaktivas</span>
            </div>
            <p className="text-sm text-[#C4B4A5] leading-relaxed max-w-md">
              Your daily spiritual companion for Bhagavad Gita shlokas, peace, daily alarms, live darshan, Panchang, and devotion.
            </p>
            <p className="text-xs text-[#A89484] italic">
              ॥ यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ॥
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-[#422F28] pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C4B4A5]">
              <li>
                <Link href="/gita" className="hover:text-[#D48A29] transition-colors">
                  श्रीमद्भगवद्गीता (Bhagavad Gita)
                </Link>
              </li>
              <li>
                <Link href="/bhajans" className="hover:text-[#D48A29] transition-colors">
                  Soulful Bhajans
                </Link>
              </li>
              <li>
                <Link href="/wallpapers" className="hover:text-[#D48A29] transition-colors">
                  Divine Wallpapers
                </Link>
              </li>
              <li>
                <Link href="/#panchang" className="hover:text-[#D48A29] transition-colors">
                  Daily Panchang
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Support */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-[#422F28] pb-2">
              Legal & Info
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C4B4A5]">
              <li>
                <Link href="/privacy" className="hover:text-[#D48A29] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#D48A29] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D48A29] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#422F28] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#A89484]">
          <p>© {new Date().getFullYear()} Bhaktivas. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with devotion for seekers worldwide 🕉️
          </p>
        </div>
      </div>
    </footer>
  );
}
