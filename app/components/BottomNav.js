'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, User, Eye, Sparkles } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { 
      name: 'Home',
      path: '/',
      icon: Home
    },
    { 
      name: 'Insights',
      path: '/insights',
      icon: Eye
    },
    { 
      name: 'Dream',
      path: '/dream',
      icon: Sparkles,
      isCenter: true
    },
    { 
      name: 'Shop',
      path: '/shop',
      icon: ShoppingBag
    },
    { 
      name: 'Profile',
      path: '/profile',
      icon: User
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white z-50">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            if (item.isCenter) {
              return (
                <Link 
                  key={item.path}
                  href={item.path}
                  className="w-12 h-12 -mt-6 grid place-items-center"
                >
                  <button 
                    className="w-12 h-12 rounded-full flex items-center justify-center
                      bg-[#f7f5f2] text-black ring-1 ring-gray-300
                      shadow-md shadow-black/5 hover:shadow-[0_0_8px_rgba(0,0,0,0.05)]
                      transition-all duration-200"
                  >
                    <Sparkles 
                      size={20}
                      strokeWidth={1.5}
                      className="text-black"
                    />
                  </button>
                </Link>
              );
            }
            
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative flex flex-col items-center justify-center w-full
                  transition-all duration-200"
              >
                <div className={`relative p-2 rounded-full transition-all
                  ${item.name === 'Insights' 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-white/60 hover:text-white'}`}
                >
                  <Icon 
                    size={20} 
                    className={`transition-transform duration-200
                      ${isActive ? 'scale-110' : ''}`}
                    strokeWidth={1.5}
                  />
                </div>

                <span className={`text-[10px] font-medium mt-1 transition-colors
                  ${isActive ? 'text-white' : 'text-white/60'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 