'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'श्रीमद्भगवद्गीता', href: '/gita', highlight: true },
    { label: 'Bhajans', href: '/bhajans' },
    { label: 'Wallpapers', href: '/wallpapers' },
    { label: 'Panchang', href: '/panchang' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FBF8F3]/90 backdrop-blur-md border-b border-[#E8DCC4] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#D48A29] to-[#995512] flex items-center justify-center text-white text-xl font-bold shadow-md group-hover:scale-105 transition-transform duration-300">
              🪔
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#2D1F1A] group-hover:text-[#D48A29] transition-colors">
                Bhaktivas
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#995512] font-semibold -mt-1">
                Bhakti & Wisdom
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#D48A29] text-white shadow-sm font-semibold'
                      : item.highlight
                      ? 'text-[#995512] font-semibold bg-[#F5E8CE] hover:bg-[#EEDBB8]'
                      : 'text-[#52443C] hover:text-[#2D1F1A] hover:bg-[#F3EAD8]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.bhaktivas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#2D1F1A] hover:bg-[#422F28] text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Get App 📲
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#2D1F1A] hover:bg-[#F3EAD8] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8DCC4] bg-[#FBF8F3] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-[#D48A29] text-white font-semibold'
                    : 'text-[#2D1F1A] hover:bg-[#F3EAD8]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.bhaktivas"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 rounded-xl bg-[#2D1F1A] text-white font-semibold text-sm"
            >
              Download Bhaktivas App 📲
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
