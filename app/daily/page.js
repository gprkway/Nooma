'use client';

import { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Daily() {
  const [activeTab, setActiveTab] = useState('numerology');

  const numerologySections = [
    { id: 'life-path', label: 'LIFE PATH', text: 'Your life path number reveals your spiritual journey...' },
    { id: 'luck', label: 'LUCK', text: 'Today\'s lucky number suggests opportunities in...' },
    { id: 'career', label: 'CAREER', text: 'Your career path is influenced by the number...' },
    { id: 'health', label: 'HEALTH', text: 'Your health number indicates a focus on...' },
    { id: 'emotions', label: 'EMOTIONS', text: 'Your emotional number suggests a period of...' }
  ];

  const zodiacSections = [
    { id: 'animal', label: 'ANIMAL SIGN', text: 'Your Chinese zodiac sign reveals your inner nature...' },
    { id: 'yin-yang', label: 'YIN/YANG', text: 'Your energy balance is currently...' },
    { id: 'elements', label: 'LUCKY ELEMENTS', text: 'Your lucky elements for today are...' }
  ];

  const dividers = ['✨', '🌟', '💫', '⭐️', '🌠'];

  return (
    <div className="min-h-screen bg-[#f9f6f2] text-black">
      <Header />
      
      <main className="pb-20">
        {/* Tab switcher */}
        <div className="sticky top-14 z-40 bg-[#f9f6f2] border-b border-black/5">
          <div className="max-w-xl mx-auto px-4 py-3">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('numerology')}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-colors
                  ${activeTab === 'numerology'
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-black/10 hover:bg-black/5'
                  }`}
              >
                Numerology
              </button>
              <button
                onClick={() => setActiveTab('zodiac')}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-colors
                  ${activeTab === 'zodiac'
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-black/10 hover:bg-black/5'
                  }`}
              >
                Chinese Zodiac
              </button>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="max-w-xl mx-auto px-4 py-6">
          <div className="space-y-8">
            {(activeTab === 'numerology' ? numerologySections : zodiacSections).map((section, index) => (
              <div key={section.id}>
                <div className="mb-4">
                  <h3 className="text-xs font-medium tracking-widest text-black/60 uppercase">
                    {section.label}
                  </h3>
                  <p className="mt-2 text-black/80 leading-relaxed">
                    {section.text}
                  </p>
                </div>
                
                {/* Divider with random star emoji */}
                {index < (activeTab === 'numerology' ? numerologySections : zodiacSections).length - 1 && (
                  <div className="flex items-center justify-center py-4 text-black/20">
                    {dividers[index % dividers.length]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
} 