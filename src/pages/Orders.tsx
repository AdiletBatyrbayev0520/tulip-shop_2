import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { Icon } from "../components/ui/Icon";
import { api } from "../lib/api";
import { useAppContext } from "../context/AppContext";

const TABS = ["All Orders", "Ordered", "In Process", "Completed"];

export default function Orders() {
  const [activeTab, setActiveTab] = useState("All Orders");
  const { user } = useAppContext();
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchOrders = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        // Use user ID to fetch orders. The current API may not expose /users/{user_id}/orders
        // so we'll fetch stats if orders endpoint isn't ready, or build the layout for future real arrays
        // For demonstration, simulating an empty array natively if actual orders API isn't built yet
        // In real backend, this would be: const data = await api.getUserOrders(user.id);
        const data: any[] = [];
        if (isMounted) setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchOrders();
    return () => { isMounted = false; };
  }, [user]);

  return (
    <div className="flex flex-col w-full h-full pb-24">
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl px-6 pt-14 pb-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Track Orders
          </h1>
          <Link
            to="/notifications"
            className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center border border-zinc-100 dark:border-zinc-800"
          >
            <Icon name="notifications" className="text-zinc-600 dark:text-zinc-300" />
          </Link>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-3 -mx-2 px-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "whitespace-nowrap px-5 py-2.5 rounded-full text-sm transition-colors",
                activeTab === tab
                  ? "bg-primary text-white font-semibold shadow-md shadow-primary/20"
                  : "bg-white dark:bg-surface-dark text-zinc-500 dark:text-zinc-400 font-medium border border-zinc-100 dark:border-zinc-800",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <main className="px-5 py-4 space-y-8">
        {isLoading ? (
          <div className="flex justify-center items-center py-20 text-zinc-500">
            <Icon name="sync" className="animate-spin text-3xl mb-4" />
            <p>Loading orders...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="flex flex-col justify-center items-center py-20 text-center gap-4">
            <div className="w-20 h-20 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <Icon name="shopping_bag" className="text-4xl text-zinc-300 dark:text-zinc-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-1">No orders yet</h3>
              <p className="text-zinc-500 text-sm max-w-[250px]">When you buy flowers, your fresh bouquet orders will show up here.</p>
            </div>
            <Link to="/shop" className="mt-2 bg-primary text-white font-bold px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Real order mapping goes here */}
          </div>
        )}
      </main>
    </div>
  );
}
