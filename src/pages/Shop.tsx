import { useState } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Bouquet } from "../types";
import { Icon } from "../components/ui/Icon";
import { Modal } from "../components/ui/Modal";
import { GoogleSignInButton } from "../components/GoogleSignInButton";
import { BouquetCard } from "../components/BouquetCard";

import { api, handleGoogleSignIn } from "../lib/api";

import { useEffect } from "react";

const COLORS = ["All Flowers", "Red", "Yellow", "Pink", "Mixed", "White", "Purple"];
const COUNTS = [5, 11, 21, 51, 101];

export default function Shop() {
  const { isLoggedIn, addToBasket, basketCount } = useAppContext();
  const [bouquets, setBouquets] = useState<Bouquet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("All Flowers");
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingItem, setPendingItem] = useState<Bouquet | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchBouquets = async () => {
      setIsLoading(true);
      try {
        const data = await api.getBouquets({
          color: selectedColor === "All Flowers" ? undefined : selectedColor,
          flower_quantity: selectedCount || undefined,
        });
        if (isMounted) setBouquets(data);
      } catch (error) {
        console.error("Failed to fetch bouquets:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchBouquets();
    return () => { isMounted = false; };
  }, [selectedColor, selectedCount]);

  const handleBuy = (bouquet: Bouquet) => {
    if (isLoggedIn) {
      addToBasket(bouquet);
    } else {
      setPendingItem(bouquet);
      setIsModalOpen(true);
    }
  };

  const handleSignIn = () => {
    handleGoogleSignIn(pendingItem);
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      <header className="fixed w-full top-0 left-0 z-40 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-zinc-100 dark:border-white/10">
        <div className="text-primary flex size-10 shrink-0 items-center justify-center">
          <Icon name="local_florist" className="text-3xl" />
        </div>
        <h2 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Fresh Tulips
        </h2>
        <div className="flex w-10 items-center justify-end">
          <Link to="/basket" className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-zinc-900 dark:text-white">
            <Icon name="shopping_bag" />
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
        {isLoading ? (
          Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 pb-4 bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 dark:border-white/10 animate-pulse"
              >
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 aspect-[4/5]" />
                <div className="px-3 pb-3 flex flex-col gap-2">
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4" />
                  <div className="flex justify-between mt-1">
                    <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3" />
                    <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-12" />
                  </div>
                </div>
              </div>
            ))
        ) : bouquets.length === 0 ? (
          <div className="col-span-2 py-10 text-center text-zinc-500">
            No bouquets found matching your selection.
          </div>
        ) : (
          bouquets.map((bouquet) => (
            <div key={bouquet.id}>
              <BouquetCard
                bouquet={bouquet}
                variant="shop"
                onBuy={handleBuy}
              />
            </div>
          ))
        )}
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome Back"
        description="Sign in to track your orders and save your favorite bouquets."
        iconName="local_florist"
        iconClassName="text-primary text-4xl"
        iconContainerClassName="bg-primary/10"
        footer={
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 text-xs font-medium text-[#89616f] dark:text-white/40 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Continue as Guest
          </button>
        }
      >
        <GoogleSignInButton onClick={handleSignIn} variant="solid" />
      </Modal>
    </div >
  );
}
