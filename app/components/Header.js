'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isDaily = pathname === '/daily';

  return (
    <header className="sticky top-0 z-50 bg-[#f9f6f2] border-b border-black/5">
      <div className="max-w-xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left button */}
          <Link
            href="/daily"
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors
              ${isDaily 
                ? 'bg-black text-white' 
                : 'bg-white text-black border border-black/10 hover:bg-black/5'
              }`}
          >
            daily
          </Link>

          {/* Center title */}
          <h1 className="font-serif text-lg tracking-tight">
            nooma
          </h1>

          {/* Right button */}
          <Link
            href="/settings"
            className="px-4 py-1.5 text-sm font-medium rounded-full 
                     bg-white text-black border border-black/10 
                     hover:bg-black/5 transition-colors"
          >
            settings
          </Link>
        </div>
      </div>
    </header>
  );
} 