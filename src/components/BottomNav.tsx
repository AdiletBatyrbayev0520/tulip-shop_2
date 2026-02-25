import { Link, useLocation } from 'react-router-dom';
import { Flower2, ShoppingBasket, ReceiptText, User } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: '/shop', icon: Flower2, label: 'Shop' },
    { path: '/basket', icon: ShoppingBasket, label: 'Basket' },
    { path: '/orders', icon: ReceiptText, label: 'Orders' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-zinc-100 pb-safe shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-around items-center pt-3 pb-2">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center group w-16 relative"
            >
              <div className="relative">
                <Icon 
                  className={cn(
                    "w-6 h-6 mb-1 transition-colors",
                    isActive ? "text-primary" : "text-zinc-400 group-hover:text-primary"
                  )} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {item.label === 'Orders' && isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary border-2 border-white rounded-full"></span>
                )}
              </div>
              <span 
                className={cn(
                  "text-[10px] transition-colors",
                  isActive ? "font-semibold text-primary" : "font-medium text-zinc-400 group-hover:text-primary"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
