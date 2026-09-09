import "./globals.css";

export const metadata = {
  title: 'Bhaktivas - Devotional Alarms, Bhajans, Wallpapers & Panchang',
  description:
    'Daily Bhajans, Wallpapers, Books, Meditation & Spiritual Growth.',
  metadataBase: new URL('https://bhaktivas.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
