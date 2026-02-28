import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { Icon } from "../components/ui/Icon";
import { api } from "../lib/api";
import { useAppContext } from "../context/AppContext";

const TABS = ["All Orders", "Ordered", "In Process", "Completed"];

const getTabCategory = (status: string) => {
  if (status === "ORDERED") return "Ordered";
  if (["PAID", "ASSEMBLING", "READY_FOR_PICKUP", "OUT_FOR_DELIVERY"].includes(status)) return "In Process";
  if (["ARRIVED", "PICKED_UP", "DELIVERED"].includes(status)) return "Completed";
  return "Completed"; // Fallback
};

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
        const data: any[] = await api.getUserOrders(user.id);
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

  const ordersByCategory = TABS.slice(1).reduce((acc, tab) => {
    acc[tab] = orders.filter((o) => getTabCategory(o.order_status) === tab);
    return acc;
  }, {} as Record<string, any[]>);

  const sectionsToRender = activeTab === "All Orders"
    ? TABS.slice(1).filter((tab) => ordersByCategory[tab].length > 0)
    : [activeTab].filter(tab => ordersByCategory[tab]?.length > 0);

  const renderBadge = (category: string) => {
    if (category === "Ordered") {
      return <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-light text-primary px-2.5 py-1 rounded-full mt-1.5">Ordered</span>;
    }
    if (category === "In Process") {
      return <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-green/10 text-accent-green px-2.5 py-1 rounded-full mt-1.5">In Process</span>;
    }
    return <span className="text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-2.5 py-1 rounded-full w-fit mt-1.5 mb-2">Completed</span>;
  };

  const renderButtons = (category: string) => {
    if (category === "Ordered") {
      return (
        <div className="flex gap-3">
          <button className="flex-1 py-3.5 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-2xl font-bold text-sm tracking-wide">
            Order Details
          </button>
          <button className="flex-1 py-3.5 bg-primary text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20">
            Pay
          </button>
        </div>
      );
    }
    if (category === "In Process") {
      return (
        <div className="flex gap-3">
          <button className="flex-1 py-3.5 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-zinc-200 dark:shadow-none">
            Track Delivery
          </button>
          <button className="flex-1 py-3.5 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2">
            Help
          </button>
        </div>
      );
    }
    return (
      <div className="flex gap-3">
        <button className="flex-1 py-3.5 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-2xl font-bold text-sm tracking-wide">
          Order Details
        </button>
        <button className="flex-1 py-3.5 bg-primary-light text-primary rounded-2xl font-bold text-sm tracking-wide shadow-none">
          Reorder
        </button>
      </div>
    );
  };

  const renderProgress = (category: string, status: string) => {
    if (category === "Completed") return null;

    if (category === "Ordered") {
      return (
        <div className="px-1 mb-6">
          <div className="relative h-1 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-4">
            <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: "25%" }}></div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-primary mb-1.5 ring-4 ring-primary/20"></div>
              <span className="text-[9px] font-bold text-primary uppercase tracking-tighter">Ordered</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 mb-1.5"></div>
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Paid</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 mb-1.5"></div>
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 mb-1.5"></div>
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Arrived</span>
            </div>
          </div>
        </div>
      );
    }

    // In Process
    const isDelivery = ["OUT_FOR_DELIVERY", "READY_FOR_PICKUP"].includes(status);
    const progress = isDelivery ? "75%" : "50%";

    return (
      <div className="px-1 mb-6">
        <div className="relative h-1 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-4">
          <div className="absolute top-0 left-0 h-full bg-accent-green rounded-full" style={{ width: progress }}></div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-accent-green mb-1.5"></div>
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Ordered</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-accent-green mb-1.5"></div>
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Paid</span>
          </div>
          <div className="flex flex-col items-center">
            <div className={clsx("w-2 h-2 rounded-full mb-1.5", isDelivery ? "bg-accent-green ring-4 ring-accent-green/20" : "bg-zinc-200 dark:bg-zinc-700")}></div>
            <span className={clsx("text-[9px] font-bold uppercase tracking-tighter", isDelivery ? "text-accent-green" : "text-zinc-400")}>Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 mb-1.5"></div>
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Arrived</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background-light dark:bg-background-dark pb-24">
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
                "whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-colors",
                activeTab === tab
                  ? "bg-primary text-white shadow-md shadow-primary/20"
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
          sectionsToRender.length === 0 ? (
            <div className="text-center py-10 text-zinc-500">No orders found for this section.</div>
          ) : (
            sectionsToRender.map((category) => (
              <section key={category}>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 px-1">{category}</h2>
                <div className="space-y-6">
                  {ordersByCategory[category].map((order) => {
                    const firstItem = order.items[0];
                    const unitLabel = order.items.reduce((s: number, i: any) => s + i.item_quantity, 0) + " Units";
                    const price = "$" + order.items.reduce((sum: number, item: any) => sum + (item.unit_price * item.item_quantity), 0).toFixed(2);
                    const formattedDate = new Date(order.delivery_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                    const datePrefix = order.delivery_type === "DELIVERY" ? (category === "Completed" ? "Delivered on:" : "Deliver on:") : "Pickup on:";

                    return (
                      <div key={order.order_id} className="bg-surface-light dark:bg-surface-dark rounded-[2rem] p-5 shadow-soft border border-zinc-50 dark:border-zinc-800">
                        <div className="flex gap-4 mb-5">
                          <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-zinc-100">
                            {firstItem?.bouquet?.pic_url ? (
                              <img src={firstItem.bouquet.pic_url} alt={firstItem.bouquet.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex justify-center items-center text-zinc-300"><Icon name="local_florist" /></div>
                            )}
                          </div>
                          <div className="flex-1 flex flex-col justify-center">
                            <div className="flex justify-between items-start">
                              <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                                {firstItem?.bouquet?.name || "Custom Bouquet"}
                              </h3>
                            </div>
                            {renderBadge(category)}
                            <div>
                              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 mb-0.5">
                                {category === "Completed" ? "" : <span className={category === "Ordered" ? "text-zinc-500" : "text-primary"}>{datePrefix} </span>}
                                {category === "Completed" ? `${datePrefix} ${formattedDate}` : formattedDate}
                              </p>
                              {category !== "Completed" && <p className="text-xs text-zinc-400 mt-1">#{order.order_id.split('-')[0].toUpperCase()} • {unitLabel}</p>}
                              <p className="font-bold text-lg text-zinc-900 dark:text-white mt-1">{price}</p>
                            </div>
                          </div>
                        </div>

                        {renderProgress(category, order.order_status)}
                        {renderButtons(category)}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))
          )
        )}
      </main>
    </div>
  );
}
