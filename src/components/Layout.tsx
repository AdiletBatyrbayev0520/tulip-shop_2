import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'local_florist', label: 'Shop' },
    { path: '/search', icon: 'search', label: 'Search' },
    { path: '/orders', icon: 'receipt_long', label: 'Orders', badge: 2 },
    { path: '/profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {children}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-white/90 backdrop-blur-lg px-4 pb-8 pt-3 border-t border-[#f4f0f2]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/checkout');
          return (
            <Link key={item.path} to={item.path} className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-[#89616f]'}`}>
              <div className="relative">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                  {item.icon}
                </span>
                {item.badge && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold border-2 border-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-[10px] font-bold leading-none tracking-tight">{item.label}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
