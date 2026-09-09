import "./globals.css";

export const metadata = {
  title: 'Bhaktivas',
  description:
    'Daily Bhajans, Wallpapers, Books, Meditation & Spiritual Growth.',
  metadataBase: new URL('https://bhaktivas.com'),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
