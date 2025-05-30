'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Sparkles, Compass } from 'lucide-react';

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { 
      name: 'Home',
      path: '/',
      icon: Home,
      activeColor: 'text-[#A58AFF]'
    },
    { 
      name: 'Daily',
      path: '/daily',
      icon: Calendar,
      activeColor: 'text-[#A58AFF]'
    },
    { 
      name: 'Insights',
      path: '/insights',
      icon: Sparkles,
      activeColor: 'text-[#A58AFF]'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 z-50">
      <div className="max-w-screen-xl mx-auto relative">
        {/* Compass icon - brand anchor */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Compass 
            size={20} 
            className="text-white/40" 
          />
        </div>

        {/* Main navigation items */}
        <div className="flex justify-center items-center h-16 px-16">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#A58AFF]/10 to-transparent rounded-full blur-sm" />
                  )}
                </div>

                {/* Label */}
                <span className={`text-[10px] font-medium mt-1 transition-colors duration-200
                  ${isActive ? 'text-[#A58AFF]' : 'text-gray-400 group-hover:text-white'}`}>
                  {item.name}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 
                    bg-gradient-to-r from-transparent via-[#A58AFF]/20 to-transparent rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 