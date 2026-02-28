import { Link, useParams } from "react-router-dom";
import { Icon } from "../components/ui/Icon";
import { useEffect, useState } from "react";
import { Order } from "../types";
import { api } from "../lib/api";

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // In a real application, fetch the actual order details by ID
  useEffect(() => {
    let isMounted = true;
    const fetchOrder = async () => {
      setIsLoading(true);
      try {
        // const data = await api.getOrderById(id);
        // Simulate fetch delay, since backend doesn't have an endpoint for direct order fetching exposed in the previous inspection
        setTimeout(() => {
          if (isMounted) setOrder(null); // Simulated null as we don't have the API yet
          if (isMounted) setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Failed to fetch order", error);
        if (isMounted) setIsLoading(false);
      }
    };
    if (id) fetchOrder();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col w-full h-full pb-20 justify-center items-center">
        <Icon name="sync" className="animate-spin text-4xl text-primary" />
        <p className="mt-4 text-zinc-500 font-medium">Loading details...</p>
      </div>
    );
  }

  // Fallback when order isn't found
  if (!order) {
    return (
      <div className="flex flex-col w-full h-full pb-20">
        <header className="sticky top-0 z-40 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 border-b border-zinc-100 dark:border-white/10">
          <Link
            to="/orders"
            className="flex size-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-white/5 active:scale-95 transition-transform text-zinc-900 dark:text-white"
          >
            <Icon name="arrow_back" />
          </Link>
          <h2 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-10">
            Order Not Found
          </h2>
        </header>
        <div className="flex-1 flex flex-col justify-center items-center p-6 text-center">
          <div className="w-16 h-16 bg-zinc-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
            <Icon name="error_outline" className="text-3xl text-zinc-400" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Order Tracking Unavailable</h3>
          <p className="text-zinc-500 text-sm">We couldn't find details for order #{id}. It may have been completed long ago or the ID is incorrect.</p>
          <Link to="/orders" className="mt-6 font-bold text-primary">Return to Orders</Link>
        </div>
      </div>
    );
  }

  // Placeholder values since order structure isn't fully defined yet
  const isPickup = order?.delivery_type === "pickup";

  return (
    <div className="flex flex-col w-full h-full pb-24">
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl px-6 pt-14 pb-4 border-b border-zinc-100 dark:border-zinc-800/50">
        <div className="flex items-center gap-4">
          <Link
            to="/orders"
            className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Icon name="arrow_back" className="text-zinc-900 dark:text-white" />
          </Link>
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white flex-1 text-center pr-8">
            {isPickup ? "Pickup Order Details" : "Order Details"}
          </h1>
        </div>
      </header>

      <main className="px-5 py-6 space-y-6">
        <div className="bg-surface-light dark:bg-surface-dark rounded-[2rem] p-6 shadow-soft border border-zinc-50 dark:border-zinc-800">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-zinc-400 font-medium">Order ID</p>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                #TLP-{id}
              </h2>
            </div>
            <span className="px-3 py-1.5 bg-accent-green/10 text-accent-green text-xs font-bold uppercase tracking-wider rounded-full">
              {isPickup ? "Ready for Pickup" : "In Process"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
            <Icon name="calendar_today" className="text-[18px]" />
            <span>Placed on Oct 24, 2023</span>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 px-1">
            Order Progress
          </h3>
          <div className="bg-surface-light dark:bg-surface-dark rounded-[2rem] p-6 shadow-soft border border-zinc-50 dark:border-zinc-800">
            <div className="relative pl-4 space-y-8 before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-100 dark:before:bg-zinc-800">
              <div className="relative flex gap-5 items-center">
                <div className="w-4 h-4 rounded-full border-[3px] border-white dark:border-surface-dark bg-accent-green shadow-sm z-10 ml-[15px]"></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      Ordered
                    </h4>
                    <p className="text-xs text-zinc-500">
                      Order placed successfully
                    </p>
                  </div>
                  <span className="text-xs text-zinc-400">10:30 AM</span>
                </div>
              </div>

              <div className="relative flex gap-5 items-center">
                <div className="w-4 h-4 rounded-full border-[3px] border-white dark:border-surface-dark bg-accent-green shadow-sm z-10 ml-[15px]"></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      Paid
                    </h4>
                    <p className="text-xs text-zinc-500">Payment confirmed</p>
                  </div>
                  <span className="text-xs text-zinc-400">10:32 AM</span>
                </div>
              </div>

              <div className="relative flex gap-5 items-center">
                <div className="w-5 h-5 rounded-full border-[3px] border-white dark:border-surface-dark bg-primary ring-4 ring-primary/20 shadow-sm z-10 ml-[13px] animate-pulse"></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-primary">
                      {isPickup ? "Ready for Pickup" : "Out for Delivery"}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      {isPickup
                        ? "Your order is ready at the store"
                        : "Bouquet on its way"}
                    </p>
                  </div>
                  <span className="text-xs text-primary font-medium">
                    Today
                  </span>
                </div>
              </div>

              <div className="relative flex gap-5 items-center">
                <div className="w-4 h-4 rounded-full border-[3px] border-white dark:border-surface-dark bg-zinc-200 dark:bg-zinc-700 z-10 ml-[15px]"></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400">
                      {isPickup ? "Picked Up" : "Arrived"}
                    </h4>
                    <p className="text-xs text-zinc-300 dark:text-zinc-600">
                      Pending
                    </p>
                  </div>
                  <span className="text-xs text-zinc-300 dark:text-zinc-600">
                    --:--
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6">
          {isPickup ? (
            <section>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 px-1">
                Pickup Details
              </h3>
              <div className="bg-surface-light dark:bg-surface-dark rounded-[2rem] p-6 shadow-soft border border-zinc-50 dark:border-zinc-800 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center flex-shrink-0 text-accent-green">
                    <Icon name="storefront" className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
                      Store Address
                    </p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white leading-relaxed mt-1">
                      Tulip Shop Main Branch
                      <br />
                      128 Blossom Avenue, Suite 100
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                <button className="w-full mt-2 py-3 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-semibold text-zinc-900 dark:text-white transition-colors flex items-center justify-center gap-2">
                  <Icon name="map" className="text-[18px] text-primary" />
                  View on Map
                </button>
              </div>
            </section>
          ) : (
            <>
              <section>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 px-1">
                  Customer Info
                </h3>
                <div className="bg-surface-light dark:bg-surface-dark rounded-[2rem] p-6 shadow-soft border border-zinc-50 dark:border-zinc-800 space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                      <Icon name="person" className="fill text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
                        Name
                      </p>
                      <p className="text-sm font-bold text-zinc-900 dark:text-white">
                        Sophia Anderson
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                      <Icon name="call" className="fill text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
                        Phone
                      </p>
                      <p className="text-sm font-bold text-zinc-900 dark:text-white">
                        +1 (555) 012-3456
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                      <Icon name="location_on" className="fill text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
                        Delivery Address
                      </p>
                      <p className="text-sm font-bold text-zinc-900 dark:text-white leading-relaxed">
                        4528 Tulip Lane, Apt 4B
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 px-1">
                  Delivery Info
                </h3>
                <div className="bg-surface-light dark:bg-surface-dark rounded-[2rem] p-6 shadow-soft border border-zinc-50 dark:border-zinc-800">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center flex-shrink-0 text-accent-green">
                        <Icon name="local_shipping" className="fill text-xl" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
                          Method
                        </p>
                        <p className="text-sm font-bold text-zinc-900 dark:text-white">
                          Yandex Delivery
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-zinc-400 dark:text-zinc-500">
                      N/A
                    </span>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>

        <section>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 px-1">
            Order Summary
          </h3>
          <div className="bg-surface-light dark:bg-surface-dark rounded-[2rem] p-6 shadow-soft border border-zinc-50 dark:border-zinc-800">
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-zinc-100 overflow-hidden flex-shrink-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzzK5pq1EySXrDMd38xtFrnsiQ6QD4FJULTlodWEbJNz4NZ16hQT_yRKWi0DcD9nFJkaZGUlCjX_JhH-o10TxmPsRyHgsIDWn94FqJQxJhQ-yseeOSaujaRGQH1ZJcYBKBNAVLRcmZhoWb6rGNoWq9xhaeJLcnPKVOPhDsbtPPzYosvKOqrNN8gX8nPzn_wcJUH0IBXdccBzWI9EBHva1FkqX7XtA35wjrjVuf-LuBZOeKCSp-rHoJifSPReoKFX5FOF7DRvjfxFE"
                    alt="Velvet Crimson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-zinc-900 dark:text-white">
                      Velvet Crimson
                    </h4>
                    <span className="font-bold text-zinc-900 dark:text-white">
                      $42.00
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Single Bouquet • Qty: 1
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-zinc-100 overflow-hidden flex-shrink-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGynOQwgKr5uH-Br6TGHBt53SvzieO3WFmuthcqLkbaM8KGur4VBC6Fjeu7Tca7BAfBGFMrbTARActr2sj4Cs_MguYtmOFJy6vtZK4ZoBpzC_96xCjH-AdNUlQEoUZM6dOdFVh5uku_ZlWk4HAUwZVv6eI1ZgkmW7bAV14IRtNgFmqzQP-5txl3dpBIQfC3Sl5loxff_bTz8D6v9SiTSVoGXo2VFG9GxpfkOJLMuisKkcsbpIKclbVzVyFctYz_8GqWeShLAVnjE8"
                    alt="Golden Dawn"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-zinc-900 dark:text-white">
                      Golden Dawn
                    </h4>
                    <span className="font-bold text-zinc-900 dark:text-white">
                      $35.50
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Single Bouquet • Qty: 1
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800 mb-4"></div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                <span>Subtotal</span>
                <span>$77.50</span>
              </div>
              {!isPickup && (
                <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                  <span>Delivery Fee</span>
                  <span>$5.00</span>
                </div>
              )}
              <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800 my-2"></div>
              <div className="flex justify-between items-end">
                <span className="font-bold text-zinc-900 dark:text-white text-base">
                  Total Cost
                </span>
                <span className="font-bold text-primary text-xl">
                  ${isPickup ? "77.50" : "82.50"}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
