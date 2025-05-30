'use client';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f6f2] text-black">
      <Header />
      
      <main className="pb-20">
        {/* Hero section */}
        <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center px-4">
          {/* Content container */}
          <div className={`relative z-10 max-w-xl mx-auto text-center transition-all duration-1000
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

            {/* Main title */}
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight mb-4">
              Welcome to{' '}
              <span className="italic">Nooma</span>
            </h1>

            {/* Subtitle */}
            <p className="text-black/60 text-lg sm:text-xl mb-12 font-light">
              Your soul's direction awaits
            </p>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-black text-white
                             rounded-full text-sm font-medium tracking-wide
                             transition-all duration-300
                             hover:bg-black/90
                             focus:outline-none focus:ring-2 focus:ring-black/20">
              Start Your Path
            </button>
          </div>

          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Subtle radial gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-[800px] h-[800px] bg-black/[0.02] rounded-full blur-3xl" />

            {/* Roman numerals in a circle */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
              {['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'].map((num, i) => (
                <span
                  key={i}
                  className="absolute text-black/5 text-xs sm:text-sm tracking-widest"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(-11rem) rotate(-${i * 30}deg)`,
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center center',
                  }}
                >
                  {num}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}