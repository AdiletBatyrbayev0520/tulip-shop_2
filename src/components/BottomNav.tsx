import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { useAppContext } from "../context/AppContext";

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;
  const { basketCount } = useAppContext();

  const navItems = [
    { name: "Shop", path: "/shop", icon: "local_florist" },
    { name: "Basket", path: "/basket", icon: "shopping_basket" },
    { name: "Orders", path: "/orders", icon: "receipt_long" },
    { name: "Profile", path: "/profile", icon: "person" },
  ];

  // Don't show bottom nav on Home page
  if (path === "/") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-lg border-t border-zinc-100 dark:border-zinc-800 pb-safe z-50">
      <div className="flex justify-around items-center pt-3 pb-8 px-4">
        {navItems.map((item) => {
          const isActive = path.startsWith(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              className={clsx(
                "flex flex-col items-center gap-1 group w-16 transition-colors",
                isActive
                  ? "text-primary"
                  : "text-zinc-400 dark:text-white/60 hover:text-primary",
              )}
            >
              <div className="relative">
                <span
                  className={clsx(
                    "material-symbols-outlined",
                    isActive && "fill",
                  )}
                >
                  {item.icon}
                </span>
                {item.name === "Basket" && basketCount > 0 && (
                  <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">
                    {basketCount}
                  </span>
                )}
                {item.name === "Orders" && isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary border-2 border-white dark:border-surface-dark rounded-full"></span>
                )}
              </div>
              <span
                className={clsx(
                  "text-[10px] leading-none tracking-tight",
                  isActive ? "font-bold" : "font-medium",
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
