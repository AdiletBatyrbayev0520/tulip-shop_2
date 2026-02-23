import { Link, useParams } from 'react-router-dom';

export default function OrderDetails() {
  const { id } = useParams();
  const isPickup = id === '9012'; // Mocking pickup for a specific ID

  return (
    <div className="min-h-screen bg-background-light pb-24">
      <header className="sticky top-0 z-40 bg-background-light/80 backdrop-blur-xl px-6 pt-14 pb-4 border-b border-zinc-100">
        <div className="flex items-center gap-4">
          <Link to="/orders" className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors">
            <span className="material-symbols-outlined text-zinc-900">arrow_back</span>
          </Link>
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 flex-1 text-center pr-8">
            {isPickup ? 'Pickup Order Details' : 'Order Details'}
          </h1>
        </div>
      </header>

      <main className="px-5 py-6 space-y-6">
        <div className="bg-white rounded-[2rem] p-6 shadow-soft border border-zinc-50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-zinc-400 font-medium">Order ID</p>
              <h2 className="text-xl font-bold text-zinc-900">#TLP-{id}</h2>
            </div>
            <span className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full ${isPickup ? 'bg-accent-green/10 text-accent-green' : 'bg-accent-green/10 text-accent-green'}`}>
              {isPickup ? 'Ready for Pickup' : 'In Process'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Placed on Oct 24, 2023</span>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-bold text-zinc-900 mb-4 px-1">Order Progress</h3>
          <div className="bg-white rounded-[2rem] p-6 shadow-soft border border-zinc-50">
            <div className="relative pl-4 space-y-8 before:absolute before:left-[23px] before:top-2.5 before:bottom-2 before:w-0.5 before:bg-zinc-100">
              
              <div className="relative flex gap-5 items-start">
                <div className="absolute -left-0.5 mt-0.5 w-4 h-4 rounded-full border-[3px] border-white bg-accent-green shadow-sm z-10"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5 h-5">
                    <h4 className="text-sm font-bold text-zinc-900 leading-none">Ordered</h4>
                    <span className="text-xs text-zinc-400 leading-none">Oct 24, 10:30 AM</span>
                  </div>
                  <p className="text-xs text-zinc-500">Order has been placed successfully.</p>
                </div>
              </div>

              <div className="relative flex gap-5 items-start">
                <div className="absolute -left-0.5 mt-0.5 w-4 h-4 rounded-full border-[3px] border-white bg-accent-green shadow-sm z-10"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5 h-5">
                    <h4 className="text-sm font-bold text-zinc-900 leading-none">Paid</h4>
                    <span className="text-xs text-zinc-400 leading-none">Oct 24, 10:32 AM</span>
                  </div>
                  <p className="text-xs text-zinc-500">Payment confirmed.</p>
                </div>
              </div>

              <div className="relative flex gap-5 items-start">
                <div className="absolute -left-1 mt-0 w-5 h-5 rounded-full border-[3px] border-white bg-primary ring-4 ring-primary/20 shadow-sm z-10 animate-pulse"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5 h-5">
                    <h4 className="text-sm font-bold text-primary leading-none">{isPickup ? 'Ready for Pickup' : 'Out for Delivery'}</h4>
                    <span className="text-xs text-primary font-medium leading-none">Today, 2:00 PM</span>
                  </div>
                  <p className="text-xs text-zinc-500">{isPickup ? 'Your order is ready at the store.' : 'Your bouquet is on its way.'}</p>
                </div>
              </div>

              <div className="relative flex gap-5 items-start">
                <div className="absolute -left-0.5 mt-0.5 w-4 h-4 rounded-full border-[3px] border-white bg-zinc-200 z-10"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5 h-5">
                    <h4 className="text-sm font-bold text-zinc-400 leading-none">{isPickup ? 'Picked Up' : 'Arrived'}</h4>
                    <span className="text-xs text-zinc-300 leading-none">Pending</span>
                  </div>
                  <p className="text-xs text-zinc-300">{isPickup ? 'Waiting for collection' : 'Expected by 4:00 PM'}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {isPickup ? (
          <section>
            <h3 className="text-lg font-bold text-zinc-900 mb-4 px-1">Pickup Details</h3>
            <div className="bg-white rounded-[2rem] p-6 shadow-soft border border-zinc-50 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center flex-shrink-0 text-accent-green">
                  <span className="material-symbols-outlined text-xl">storefront</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Store Address</p>
                  <p className="text-sm font-bold text-zinc-900 leading-relaxed mt-1">
                    Tulip Shop Main Branch<br/>
                    128 Blossom Avenue, Suite 100<br/>
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
              <button className="w-full mt-2 py-3 px-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-sm font-semibold text-zinc-900 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">map</span>
                View on Map
              </button>
            </div>
          </section>
        ) : (
          <section>
            <h3 className="text-lg font-bold text-zinc-900 mb-4 px-1">Customer Info</h3>
            <div className="bg-white rounded-[2rem] p-6 shadow-soft border border-zinc-50 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Name</p>
                  <p className="text-sm font-bold text-zinc-900">Sophia Anderson</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Phone</p>
                  <p className="text-sm font-bold text-zinc-900">+1 (555) 012-3456</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Delivery Address</p>
                  <p className="text-sm font-bold text-zinc-900 leading-relaxed">
                    4528 Tulip Lane, Apt 4B<br/>
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        <section>
          <h3 className="text-lg font-bold text-zinc-900 mb-4 px-1">Order Summary</h3>
          <div className="bg-white rounded-[2rem] p-6 shadow-soft border border-zinc-50">
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-zinc-100 overflow-hidden flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzzK5pq1EySXrDMd38xtFrnsiQ6QD4FJULTlodWEbJNz4NZ16hQT_yRKWi0DcD9nFJkaZGUlCjX_JhH-o10TxmPsRyHgsIDWn94FqJQxJhQ-yseeOSaujaRGQH1ZJcYBKBNAVLRcmZhoWb6rGNoWq9xhaeJLcnPKVOPhDsbtPPzYosvKOqrNN8gX8nPzn_wcJUH0IBXdccBzWI9EBHva1FkqX7XtA35wjrjVuf-LuBZOeKCSp-rHoJifSPReoKFX5FOF7DRvjfxFE" alt="Velvet Crimson" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-zinc-900">Velvet Crimson</h4>
                    <span className="font-bold text-zinc-900">$42.00</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">Single Bouquet • Qty: 1</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-zinc-100 mb-4"></div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-zinc-500">
                <span>Subtotal</span>
                <span>$42.00</span>
              </div>
              {!isPickup && (
                <div className="flex justify-between text-zinc-500">
                  <span>Delivery Fee</span>
                  <span>$5.00</span>
                </div>
              )}
              <div className="h-px w-full bg-zinc-100 my-2"></div>
              <div className="flex justify-between items-end">
                <span className="font-bold text-zinc-900 text-base">Total Cost</span>
                <span className="font-bold text-primary text-xl">${isPickup ? '42.00' : '47.00'}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
