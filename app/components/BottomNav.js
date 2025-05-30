'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sparkles, Compass, ShoppingBag, User } from 'lucide-react';

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
      icon: Sparkles
    },
    { 
      name: 'Path',
      path: '/path',
      icon: Compass,
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
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative flex flex-col items-center justify-center
                  transition-all duration-200
                  ${item.isCenter ? 'w-16 -mt-6' : 'w-full'}`}
              >
                {/* Center tab special styling */}
                {item.isCenter && (
                  <div className={`absolute inset-0 rounded-full transition-colors
                    ${isActive 
                      ? 'bg-white/10' 
                      : 'bg-white/5'
                    }`}
                  />
                )}

                {/* Icon container */}
                <div className={`relative p-2 rounded-full transition-all
                  ${item.isCenter 
                    ? 'bg-white text-black w-12 h-12 flex items-center justify-center'
                    : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Icon 
                    size={item.isCenter ? 24 : 20} 
                    className={`transition-transform duration-200
                      ${isActive && !item.isCenter ? 'scale-110' : ''}`}
                  />
                </div>

                {/* Label - hidden for center tab */}
                {!item.isCenter && (
                  <span className={`text-[10px] font-medium mt-1 transition-colors
                    ${isActive ? 'text-white' : 'text-white/60'}`}>
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 