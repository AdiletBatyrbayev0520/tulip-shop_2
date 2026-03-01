import { Link, useParams } from "react-router-dom";
import { Icon } from "../components/ui/Icon";
import { useEffect, useState } from "react";
import { OrderDetailsResponse } from "../types";
import { api } from "../lib/api";

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<OrderDetailsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // In a real application, fetch the actual order details by ID
  useEffect(() => {
    let isMounted = true;
    const fetchOrder = async () => {
      setIsLoading(true);
      try {
        const data = await api.getOrderById(id as string);
        if (isMounted) {
          setOrder(data);
          setIsLoading(false);
        }
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
      <div className="relative flex flex-col w-full h-full pb-20 pt-[80px]">
        <header className="fixed w-full top-0 left-0 z-40 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 border-b border-zinc-100 dark:border-white/10">
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
  const isPickup = order?.delivery_type === "PICKUP";

  const formatTime = (dateString: string) => {
    // Append 'Z' to force JavaScript to parse the datestring as a UTC timestamp instead of local time
    const utcString = dateString.endsWith("Z") ? dateString : `${dateString}Z`;
    return new Date(utcString).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="relative flex flex-col w-full h-full pb-24 pt-[110px]">
      <header className="fixed w-full top-0 left-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl px-6 pt-14 pb-4 border-b border-zinc-100 dark:border-zinc-800/50">
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
                #{id?.split('-')[0]}
              </h2>
            </div>
            <span className="px-3 py-1.5 bg-accent-green/10 text-accent-green text-xs font-bold uppercase tracking-wider rounded-full">
              {order.order_status}
            </span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
            <Icon name="calendar_today" className="text-[18px]" />
            <span>Placed on {new Date(order.delivery_date).toLocaleDateString()}</span>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 px-1">
            Order Progress
          </h3>
          <div className="bg-surface-light dark:bg-surface-dark rounded-[2rem] p-6 shadow-soft border border-zinc-50 dark:border-zinc-800">
            <div className="relative pl-4 space-y-8 before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-100 dark:before:bg-zinc-800">
              <div className="relative flex gap-5 items-center">
                <div className={`w-4 h-4 rounded-full border-[3px] border-white dark:border-surface-dark shadow-sm z-10 ml-[15px] ${order.order_status === 'ORDERED' ? 'bg-primary ring-4 ring-primary/20 animate-pulse' : 'bg-accent-green'}`}></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className={`text-sm font-bold ${order.order_status === 'ORDERED' ? 'text-primary' : 'text-zinc-900 dark:text-white'}`}>
                      Ordered
                    </h4>
                    <p className="text-xs text-zinc-500">
                      Order placed successfully
                    </p>
                  </div>
                  {order.order_status === 'ORDERED' && (
                    <span className="text-xs text-primary font-medium">
                      {formatTime(order.last_modified_date)}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative flex gap-5 items-center">
                <div className={`w-4 h-4 rounded-full border-[3px] border-white dark:border-surface-dark shadow-sm z-10 ml-[15px] ${['ORDERED'].includes(order.order_status) ? 'bg-zinc-200 dark:bg-zinc-700' : order.order_status === 'PAID' ? 'bg-primary ring-4 ring-primary/20 animate-pulse' : 'bg-accent-green'}`}></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className={`text-sm font-bold ${['ORDERED'].includes(order.order_status) ? 'text-zinc-400' : order.order_status === 'PAID' ? 'text-primary' : 'text-zinc-900 dark:text-white'}`}>
                      Paid
                    </h4>
                    <p className="text-xs text-zinc-500">Payment confirmed</p>
                  </div>
                  {order.order_status === 'PAID' && (
                    <span className="text-xs text-primary font-medium">
                      {formatTime(order.last_modified_date)}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative flex gap-5 items-center">
                <div className={`w-4 h-4 rounded-full border-[3px] border-white dark:border-surface-dark shadow-sm z-10 ml-[15px] ${['ORDERED', 'PAID', 'ASSEMBLING'].includes(order.order_status) ? 'bg-zinc-200 dark:bg-zinc-700' : (isPickup && order.order_status === 'READY_FOR_PICKUP') || (!isPickup && order.order_status === 'OUT_FOR_DELIVERY') ? 'bg-primary ring-4 ring-primary/20 animate-pulse' : 'bg-accent-green'}`}></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className={`text-sm font-bold ${['ORDERED', 'PAID', 'ASSEMBLING'].includes(order.order_status) ? 'text-zinc-400' : (isPickup && order.order_status === 'READY_FOR_PICKUP') || (!isPickup && order.order_status === 'OUT_FOR_DELIVERY') ? 'text-primary' : 'text-zinc-900 dark:text-white'}`}>
                      {isPickup ? "Ready for Pickup" : "Out for Delivery"}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      {isPickup
                        ? "Your order is ready at the store"
                        : "Bouquet on its way"}
                    </p>
                  </div>
                  {((isPickup && order.order_status === 'READY_FOR_PICKUP') || (!isPickup && order.order_status === 'OUT_FOR_DELIVERY')) && (
                    <span className="text-xs text-primary font-medium">
                      {formatTime(order.last_modified_date)}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative flex gap-5 items-center">
                <div className={`w-4 h-4 rounded-full border-[3px] border-white dark:border-surface-dark z-10 ml-[15px] ${['PICKED_UP'].includes(order.order_status) || ['ARRIVED'].includes(order.order_status) ? 'bg-accent-green' : 'bg-zinc-200 dark:bg-zinc-700'}`}></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className={`text-sm font-bold ${['PICKED_UP'].includes(order.order_status) || ['ARRIVED'].includes(order.order_status) ? 'text-zinc-900 dark:text-white' : 'text-zinc-400'}`}>
                      {isPickup ? "Picked Up" : "Arrived"}
                    </h4>
                    <p className="text-xs text-zinc-300 dark:text-zinc-600">
                      {['PICKED_UP'].includes(order.order_status) || ['ARRIVED'].includes(order.order_status) ? 'Completed' : 'Pending'}
                    </p>
                  </div>
                  {(['PICKED_UP'].includes(order.order_status) || ['ARRIVED'].includes(order.order_status)) && (
                    <span className="text-xs text-zinc-500 font-medium">
                      {new Date(order.last_modified_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  )}
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
                      Almaty
                    </p>
                  </div>
                </div>
                <a href="https://go.2gis.com/8DKg5" target="_blank" rel="noopener noreferrer" className="w-full mt-2 py-3 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-semibold text-zinc-900 dark:text-white transition-colors flex items-center justify-center gap-2">
                  <Icon name="map" className="text-[18px] text-primary" />
                  View on Map
                </a>
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
                        {order.user?.full_name || "Couldn't find user info"}
                      </p>
                    </div>
                  </div>
                  {(order.user?.phone_number) && (
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                        <Icon name="call" className="fill text-xl" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
                          Phone
                        </p>
                        <p className="text-sm font-bold text-zinc-900 dark:text-white">
                          {order.user?.phone_number}
                        </p>
                      </div>
                    </div>
                  )}
                  {(order.delivery_address?.street_line) && (
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                        <Icon name="location_on" className="fill text-xl" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
                          Delivery Address
                        </p>
                        <p className="text-sm font-bold text-zinc-900 dark:text-white leading-relaxed">
                          {order.delivery_address?.city?.city_name}, {order.delivery_address?.street_line}
                        </p>
                      </div>
                    </div>
                  )}
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
              {order.items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-zinc-100 overflow-hidden flex-shrink-0">
                    <img
                      src={item.bouquet.pic_url || "https://placehold.co/400x400/png"}
                      alt={item.bouquet.name || "Bouquet"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-zinc-900 dark:text-white">
                        {item.bouquet.name || "Custom Bouquet"}
                      </h4>
                      <span className="font-bold text-zinc-900 dark:text-white">
                        ${Number(item.unit_price).toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      Qty: {item.item_quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800 mb-4"></div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                <span>Subtotal</span>
                <span>${order.items.reduce((acc, item) => acc + (Number(item.unit_price) * item.item_quantity), 0).toFixed(2)}</span>
              </div>
              <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800 my-2"></div>
              <div className="flex justify-between items-end">
                <span className="font-bold text-zinc-900 dark:text-white text-base">
                  Total Cost
                </span>
                <span className="font-bold text-primary text-xl">
                  ${order.items.reduce((acc, item) => acc + (Number(item.unit_price) * item.item_quantity), 0).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
