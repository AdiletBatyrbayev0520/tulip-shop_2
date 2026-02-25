import { ArrowLeft, Calendar, User, Phone, MapPin, Truck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export function OrderDetails() {
  const { id } = useParams();

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="sticky top-0 z-40 bg-background-light/80 backdrop-blur-xl px-6 pt-14 pb-4 border-b border-zinc-100">
        <div className="flex items-center gap-4">
          <Link to="/orders" className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors">
            <ArrowLeft className="w-6 h-6 text-zinc-900" />
          </Link>
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 flex-1 text-center pr-8">Order Details</h1>
        </div>
      </header>

      <main className="px-5 py-6 space-y-6">
        <div className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-zinc-400 font-medium">Order ID</p>
              <h2 className="text-xl font-bold text-zinc-900">#TLP-{id || '8829'}</h2>
            </div>
            <span className="px-3 py-1.5 bg-accent-green/10 text-accent-green text-xs font-bold uppercase tracking-wider rounded-full">
              In Process
            </span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Placed on Oct 24, 2023</span>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-bold text-zinc-900 mb-4 px-1">Order Progress</h3>
          <div className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-50">
            <div className="relative pl-4 space-y-8 before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-100">
              <div className="relative flex gap-5 items-center">
                <div className="w-4 h-4 rounded-full border-[3px] border-white bg-accent-green shadow-sm z-10 ml-[15px]"></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Ordered</h4>
                    <p className="text-xs text-zinc-500">Order placed successfully</p>
                  </div>
                  <span className="text-xs text-zinc-400">10:30 AM</span>
                </div>
              </div>
              
              <div className="relative flex gap-5 items-center">
                <div className="w-4 h-4 rounded-full border-[3px] border-white bg-accent-green shadow-sm z-10 ml-[15px]"></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Paid</h4>
                    <p className="text-xs text-zinc-500">Payment confirmed</p>
                  </div>
                  <span className="text-xs text-zinc-400">10:32 AM</span>
                </div>
              </div>
              
              <div className="relative flex gap-5 items-center">
                <div className="w-5 h-5 rounded-full border-[3px] border-white bg-primary ring-4 ring-primary/20 shadow-sm z-10 ml-[13px] animate-pulse"></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-primary">Out for Delivery</h4>
                    <p className="text-xs text-zinc-500">Bouquet on its way</p>
                  </div>
                  <span className="text-xs text-primary font-medium">Today</span>
                </div>
              </div>
              
              <div className="relative flex gap-5 items-center">
                <div className="w-4 h-4 rounded-full border-[3px] border-white bg-zinc-200 z-10 ml-[15px]"></div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400">Arrived</h4>
                    <p className="text-xs text-zinc-300">Pending</p>
                  </div>
                  <span className="text-xs text-zinc-300">--:--</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6">
          <section>
            <h3 className="text-lg font-bold text-zinc-900 mb-4 px-1">Customer Info</h3>
            <div className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-50 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Name</p>
                  <p className="text-sm font-bold text-zinc-900">Sophia Anderson</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Phone</p>
                  <p className="text-sm font-bold text-zinc-900">+1 (555) 012-3456</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
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

          <section>
            <h3 className="text-lg font-bold text-zinc-900 mb-4 px-1">Delivery Info</h3>
            <div className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-50">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center flex-shrink-0 text-accent-green">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Method</p>
                    <p className="text-sm font-bold text-zinc-900">Yandex Delivery</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-zinc-400">N/A</span>
              </div>
            </div>
          </section>
        </div>

        <section>
          <h3 className="text-lg font-bold text-zinc-900 mb-4 px-1">Order Summary</h3>
          <div className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-50">
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
              
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-zinc-100 overflow-hidden flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGynOQwgKr5uH-Br6TGHBt53SvzieO3WFmuthcqLkbaM8KGur4VBC6Fjeu7Tca7BAfBGFMrbTARActr2sj4Cs_MguYtmOFJy6vtZK4ZoBpzC_96xCjH-AdNUlQEoUZM6dOdFVh5uku_ZlWk4HAUwZVv6eI1ZgkmW7bAV14IRtNgFmqzQP-5txl3dpBIQfC3Sl5loxff_bTz8D6v9SiTSVoGXo2VFG9GxpfkOJLMuisKkcsbpIKclbVzVyFctYz_8GqWeShLAVnjE8" alt="Golden Dawn" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-zinc-900">Golden Dawn</h4>
                    <span className="font-bold text-zinc-900">$35.50</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">Single Bouquet • Qty: 1</p>
                </div>
              </div>
            </div>
            
            <div className="h-px w-full bg-zinc-100 mb-4"></div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-zinc-500">
                <span>Subtotal</span>
                <span>$77.50</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Delivery Fee</span>
                <span>$5.00</span>
              </div>
              <div className="h-px w-full bg-zinc-100 my-2"></div>
              <div className="flex justify-between items-end">
                <span className="font-bold text-zinc-900 text-base">Total Cost</span>
                <span className="font-bold text-primary text-xl">$82.50</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
