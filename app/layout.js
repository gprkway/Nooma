import './globals.css';

export const metadata = {
  title: 'Nooma - Your Spiritual Numerology Guide',
  description: 'Discover your hidden code with personalized numerology insights.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-[#f9f6f2] antialiased">
        {/* Main content wrapper with padding for fixed nav */}
        <div className="min-h-full pb-16">
          {children}
        </div>
      </body>
    </html>
  );
}
