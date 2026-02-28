import { Link } from "react-router-dom";
import { Icon } from "../components/ui/Icon";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { Bouquet } from "../types";
import { BouquetCard } from "../components/BouquetCard";

export default function Home() {
  const [trendingBouquets, setTrendingBouquets] = useState<Bouquet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchTrending = async () => {
      try {
        // Fetch a generalized list; in a real app, you might have a dedicated /trending endpoint
        const data = await api.getBouquets();
        if (isMounted) setTrendingBouquets(data.slice(0, 4)); // Get first 4
      } catch (error) {
        console.error("Failed to fetch trending bouquets", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchTrending();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden shadow-xl">
      <div className="absolute inset-0 z-0 h-full w-full">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8HAoCnJoRMro-BCOSN-1imQ-4wE-zChaHAm-g0z4scdMxlIqTLJUfk6YrXppUvKk5LDgkP9NvjGFEky-sMsruCwDgQT0UocpUy2cn01Z8l2P6zPDOWtyZ0KQGhCAEtWJKZe4CCc3G-P6jXX_lwnJyV7Q5bIIowG_zZ-PNg8Hde3PTdT6BRHtBUshEJa0PESWZfawf5VQk8GnWPi-xucWRZGVD1s8sQOmJXU3Un2yZ4D_fattQiUlEhEJb1VgpjX_PeibcSg0En60')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
      </div>
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 pt-10 pb-2">
        <h2 className="text-white text-xl font-extrabold tracking-tight">
          Tulip Shop
        </h2>
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all hover:bg-white/30">
            <Icon name="search" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all hover:bg-white/30">
            <Icon name="chat" />
          </button>
        </div>
      </header>
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center pb-8">
        <div className="max-w-[480px] space-y-2">
          <h1 className="text-white text-3xl font-black leading-[1.1] tracking-[-0.033em] @[480px]:text-4xl">
            Fresh Tulips for Your Loved Ones
          </h1>
          <p className="text-white/90 text-sm font-normal leading-relaxed line-clamp-2">
            Hand-picked, farm-fresh bouquets delivered to your doorstep today.
          </p>
        </div>
        <div className="mt-4 w-full max-w-xs space-y-2">
          <Link
            to="/shop"
            className="flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl h-10 bg-primary text-white text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20"
          >
            <span>Shop Now</span>
            <Icon name="arrow_forward" className="text-sm" />
          </Link>
          <div className="flex items-center justify-center gap-2 text-white/70">
            <Icon name="local_shipping" className="text-sm" />
            <span className="text-[10px] font-medium uppercase tracking-widest">
              Same day delivery available
            </span>
          </div>
        </div>
      </main>

      {/* Trending Now Section */}
      <section className="relative z-10 bg-background-light dark:bg-background-dark p-6 rounded-t-3xl mt-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-background-dark dark:text-white text-xl font-bold">
            Trending Now
          </h3>
          <Link to="/shop" className="text-primary text-sm font-bold">
            See all
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="min-w-[150px] w-[150px] flex-none animate-pulse">
                <div className="aspect-[4/3] rounded-xl bg-zinc-200 dark:bg-zinc-800 mb-2" />
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded mb-1 w-3/4" />
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2" />
              </div>
            ))
          ) : trendingBouquets.map((bouquet) => (
            <div key={bouquet.id}>
              <BouquetCard
                bouquet={bouquet}
                variant="trending"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
