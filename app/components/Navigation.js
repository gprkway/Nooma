'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PenLine, Sparkles, User } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { 
      name: 'Daily',
      path: '/daily',
      icon: PenLine,
      activeColor: 'text-purple-400'
    },
    { 
      name: 'Insights',
      path: '/insights',
      icon: Sparkles,
      activeColor: 'text-blue-400'
    },
    { 
      name: 'Profile',
      path: '/profile',
      icon: User,
      activeColor: 'text-emerald-400'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`group flex flex-col items-center justify-center w-full h-full
                  transition-all duration-200 relative
                  ${isActive 
                    ? item.activeColor 
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {/* Icon container with glow effect when active */}
                <div className={`relative p-2 rounded-full transition-all duration-200
                  ${isActive ? 'bg-white/5' : 'group-hover:bg-white/5'}`}>
                  <Icon 
                    size={20} 
                    className={`transition-transform duration-200
                      ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-full blur-sm" />
                  )}
                </div>

                {/* Label */}
                <span className={`text-[10px] font-medium mt-1 transition-colors duration-200
                  ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {item.name}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 
                    bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 