import { useState } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { useAppContext, Bouquet } from "../context/AppContext";

const BOUQUETS = [
  {
    id: 1,
    name: "51 Pink Parrots",
    price: 89,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnxf9EwEeSfiRuSoF0RrAsOMw3tz0yx968qWZeJu2xRUkb4eUxqGVwk3pLh4VlYsk7aQXTyu8qCBgCtBn-WkfivND-8EiA_ZAv0u84tgvPXYyu0q0lC70oGV8kEWV_cSY0O2OOBvOUsKBkPc0VOjlD6iIv2khn0HHblPqYJfQ_gxeyQktrAn-cKopXE2xrXoXS62T6vKI4FNPAKhOpZ-mAcKcDF181US4MMHOJELr1PfYPT_pF7gwtxDHmvHTYkGIxyQFKCmRvJU4",
    color: "Pink",
    count: 51,
  },
  {
    id: 2,
    name: "21 Red Emperors",
    price: 65,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDn7D6hvxC7LL6BHwiQs4KwSmyfVfuVZsKCqoJnUq4n9jUOLfj9B0KnkczVOu3tNir7RfirYLmYj6vlje-IkDVm50dttyT19oqvj27d6K2JUVCBYOa8CCNf5sa2P5B_BL6O5s0HWM9oz8jud1BQQzSzKAjaVCUvwIElnadPwTChvrQbYJRUbq_RTHv-DZr7ufIJYkQOAOYpWIhbMGCXB-hcpPYamQNZAywriEkaumCRtj2RBJ68WEjUkxXfUJgVg_oCVls5onHwNTg",
    color: "Red",
    count: 21,
  },
  {
    id: 3,
    name: "11 Yellow Suns",
    price: 75,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv2Hxth85v8SnzT4Id3br6wma1uU3JPaYjOXAUHYxGONaWDzqVX-LxYxJlXYyGBEasHtVZ9gJ4QfgEGAE54yNUX3c8ENNVXbNP-OACkbav6lBZJ30Txk_swjxulWYU2MYEev_yi9x8GE1vkYTaeUZ1TXSqraRj6bUuOqiysRQRN23qAc70f6SVsgufpqqPTezRMAkJSbt5j6V6KGQMiL1tHUcCCW5MyFhkyE3Pf8noNSGq15qHkipqWmRA4h2RP9c-refgYbqVqfk",
    color: "Yellow",
    count: 11,
  },
  {
    id: 4,
    name: "5 White Lilies",
    price: 49,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzJ6Ke-BgrxX50HJtQtBc_kr-DptlNXAGSaZCuJE_7OtBG4c22AHx6TezGqGXJD6bRfFEBXOJC_KN9a_4m9eil2TNk-8yGGnSwHEp8a8xEEV2EX3-l1Rt_kx8Lwroi4hTA1zoRyLov60Ca-xiE-jIo9R0Tlc_SITwgoXNy5K0Uqd9yXKYb-Zky9W6XSMjS2St916RhjvF4wqu4oybQCvtQAdVhBttcFdgrjT5CnfwS32cScTcrO2Ts-OlIg6cJwQEAQmI3DsJ7UzI",
    color: "Mixed",
    count: 5,
  },
  {
    id: 5,
    name: "51 Purple Dreams",
    price: 95,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtPu93wHcp6pYOO2W-9A53eWhHQ28I7_dQ_Wd-P6xyUHSThYFcnuH9VH15YFq7hD5tVSZmE3GS1gOXAhTbkXgGMLMeX0rrNlikfFu5F8xuHuUqMxubSb6e-DRzAEncaRB-E7Yu_jhuTjTV7fuxubQPz5_5Ej_y4VmzlmpZej1pRfsxzn8hzqVryBrM3LXHUwmupMAYtpewx2EX3Zmfw3-O7WSrVx2BOpTvUWoY7YUE1EfxdCVAbjDcFkfO2fkqDUyVF0lTHujWMxc",
    color: "Mixed",
    count: 51,
  },
  {
    id: 6,
    name: "101 Mixed Joy",
    price: 150,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATCALdBLQFYdhNjnenCriTU68qXmRE9PSFp1OLdmPgyhD5jpvIHU1DmG60zsNuhDTi-m7lyoIdwuPNjxd-sT569SPYWYdchKm13aFwUclC_nL_fNzxM1ozmToLAExIcqRoeajHL2E0q2r742xQhHDPTzDWsjsvtlOcyfFzadpz_BpYJpx-IurD1gUshNF7jgRGYXnRXTXOzfGyILjv2wWq-5n8yYlUPgi9XQGCDU6NjcOU0Oxaso8bJaEsuwZtF7VSDPc-DJjw1E0",
    color: "Mixed",
    count: 101,
  },
];

const COLORS = ["All Flowers", "Red", "Yellow", "Pink", "Mixed"];
const COUNTS = [5, 11, 21, 51, 101];

export default function Shop() {
  const { isLoggedIn, setIsLoggedIn, addToBasket, basketCount } = useAppContext();
  const [selectedColor, setSelectedColor] = useState("All Flowers");
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingItem, setPendingItem] = useState<Bouquet | null>(null);

  const handleBuy = (bouquet: Bouquet) => {
    if (isLoggedIn) {
      addToBasket(bouquet);
    } else {
      setPendingItem(bouquet);
      setIsModalOpen(true);
    }
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
    if (pendingItem) {
      addToBasket(pendingItem);
      setPendingItem(null);
    }
    setIsModalOpen(false);
  };

  const filteredBouquets = BOUQUETS.filter((b) => {
    if (selectedColor !== "All Flowers" && b.color !== selectedColor)
      return false;
    if (selectedCount !== null && b.count !== selectedCount)
      return false;
    return true;
  });

  return (
    <div className="flex flex-col w-full h-full">
      <header className="sticky top-0 z-40 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-zinc-100 dark:border-white/10">
        <div className="text-primary flex size-10 shrink-0 items-center justify-center">
          <span className="material-symbols-outlined text-3xl">
            local_florist
          </span>
        </div>
        <h2 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Fresh Tulips
        </h2>
        <div className="flex w-10 items-center justify-end">
          <Link to="/basket" className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-zinc-900 dark:text-white">
            <span className="material-symbols-outlined">shopping_bag</span>
            {basketCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">
                {basketCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      <div className="flex gap-3 px-4 pt-4 pb-2 overflow-x-auto no-scrollbar">
        {COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={clsx(
              "flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-5 transition-colors",
              selectedColor === color
                ? "bg-primary text-white shadow-sm font-semibold"
                : "bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/10 text-zinc-900 dark:text-white font-medium",
            )}
          >
            {color}
          </button>
        ))}
      </div>

      <div className="flex gap-2 px-4 pb-4 pt-1 overflow-x-auto no-scrollbar">
        {COUNTS.map((count) => (
          <button
            key={count}
            onClick={() =>
              setSelectedCount(count === selectedCount ? null : count)
            }
            className={clsx(
              "flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors",
              selectedCount === count
                ? "border border-primary bg-primary/10 text-primary font-semibold"
                : "border border-zinc-200 dark:border-white/20 bg-transparent text-zinc-600 dark:text-white/80 font-medium",
            )}
          >
            <span className="text-xs">{count} Tulips</span>
          </button>
        ))}
      </div>

      <div className="px-4 py-2">
        <h1 className="text-2xl font-extrabold tracking-tight">
          Today's Selection
        </h1>
        <p className="text-zinc-500 dark:text-white/60 text-sm">
          Freshly picked from the valley
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        {filteredBouquets.map((bouquet) => (
          <div
            key={bouquet.id}
            className="flex flex-col gap-3 pb-4 bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 dark:border-white/10"
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover"
              style={{ backgroundImage: `url("${bouquet.image}")` }}
            ></div>
            <div className="px-3 pb-3 flex flex-col gap-1">
              <p className="text-zinc-900 dark:text-white text-[15px] font-bold leading-tight">
                {bouquet.name}
              </p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-primary text-base font-bold">
                  ${bouquet.price}
                </p>
                <button 
                  onClick={() => handleBuy(bouquet)}
                  className="bg-primary text-white rounded-lg px-3 py-1.5 text-xs font-bold active:scale-95 transition-transform"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-2">
        <div className="bg-white dark:bg-background-dark border border-zinc-100 dark:border-white/10 px-3 py-1 rounded-lg shadow-lg text-xs font-medium text-primary">
          Chat with our florist
        </div>
        <button className="flex items-center justify-center rounded-full size-14 bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-90 transition-transform">
          <svg
            fill="currentColor"
            height="28px"
            viewBox="0 0 256 256"
            width="28px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
          </svg>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-[320px] bg-white dark:bg-[#2A151C] rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center animate-fade-in-up">
            <div className="mb-6 rounded-full bg-primary/10 p-4">
              <span className="material-symbols-outlined text-primary text-4xl">local_florist</span>
            </div>
            <h3 className="text-2xl font-bold text-[#181113] dark:text-white mb-2">Welcome Back</h3>
            <p className="text-[#89616f] dark:text-white/60 text-sm mb-8 leading-relaxed">
              Sign in to track your orders and save your favorite bouquets.
            </p>
            <button 
              onClick={handleSignIn}
              className="w-full bg-[#181113] dark:bg-white text-white dark:text-[#181113] h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-transform active:scale-95 hover:shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Sign in with Google
            </button>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-xs font-medium text-[#89616f] dark:text-white/40 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Continue as Guest
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
