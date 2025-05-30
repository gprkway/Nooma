'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Pencil } from 'lucide-react';

export default function DreamLog() {
  const [dreams, setDreams] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTip, setShowTip] = useState(false);

  // Format date for dividers
  const formatDate = (date) => {
    const today = new Date();
    const dreamDate = new Date(date);
    
    if (dreamDate.toDateString() === today.toDateString()) {
      return 'Today';
    }
    
    return dreamDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Group dreams by date
  const groupedDreams = dreams.reduce((groups, dream) => {
    const date = new Date(dream.timestamp).toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(dream);
    return groups;
  }, {});

  // Handle typing state and tip
  const handleTyping = () => {
    setIsTyping(true);
    
    setTimeout(() => {
      setShowTip(true);
      setTimeout(() => setShowTip(false), 3000);
    }, 1500);

    setTimeout(() => setIsTyping(false), 3000);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleTyping();
  };

  // Handle save dream
  const handleSaveDream = () => {
    if (inputValue.trim()) {
      const newDream = {
        text: inputValue.trim(),
        timestamp: new Date().toISOString(),
        id: Date.now() // Add unique ID for future edit functionality
      };
      
      setDreams(prevDreams => [newDream, ...prevDreams]);
      setInputValue('');
      setShowTip(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f6f2] text-black">
      <Header />
      
      <main className="pb-32 pt-16"> {/* Increased bottom padding for input */}
        <div className="flex flex-col items-center px-6">
          {/* Dreams container */}
          <div className="w-full max-w-md overflow-y-auto max-h-[calc(100vh-16rem)] pt-2">
            {Object.entries(groupedDreams).map(([date, dateDreams]) => (
              <div key={date} className="mb-6">
                <div className="text-sm text-gray-500 mb-3 px-1">
                  {formatDate(date)}
                </div>
                {dateDreams.map((dream) => (
                  <div 
                    key={dream.id} 
                    className="mb-4 animate-fade-up group"
                  >
                    <div className="relative bg-[#f9f6f2] text-black rounded-lg px-4 py-3 shadow
                      transition-all duration-300 hover:shadow-md hover:border hover:border-black/5
                      group-hover:translate-y-[-2px]">
                      {dream.text}
                      <button 
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100
                          transition-opacity duration-200 p-1 rounded-full
                          hover:bg-black/5"
                        aria-label="Edit dream"
                      >
                        <Pencil size={14} className="text-gray-400" />
                      </button>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {new Date(dream.timestamp).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Sticky note input - positioned at bottom when dreams exist */}
          <div className={`w-full max-w-md ${dreams.length > 0 ? 'fixed bottom-20 left-1/2 -translate-x-1/2' : 'mt-8'}`}>
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              placeholder="What did you dream?"
              className="w-full h-32 bg-white shadow-md rounded-xl px-4 py-3
                resize-none focus:outline-none focus:ring-2 focus:ring-black/20
                transition-all duration-200"
            />
          </div>
        </div>
      </main>

      {/* Floating tip */}
      {showTip && (
        <div className="fixed bottom-[4rem] left-1/2 -translate-x-1/2 z-50
          bg-white text-xs rounded-full px-3 py-1 shadow-md
          transition-all duration-300">
          Tap sparkle to save dream
        </div>
      )}

      {/* Button wrapper with glow */}
      <div 
        onClick={handleSaveDream}
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300
          ${isTyping ? 'shadow-[0_0_20px_rgba(159,122,234,0.6)]' : ''}
          cursor-pointer`}
      >
        <BottomNav />
      </div>
    </div>
  );
} 