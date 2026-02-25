import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Orders() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="sticky top-0 z-40 bg-background-light/80 backdrop-blur-xl px-6 pt-14 pb-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Track Orders</h1>
          <Link to="/notifications" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-zinc-100">
            <Bell className="w-5 h-5 text-zinc-600" />
          </Link>
        </div>
        
        <div className="flex overflow-x-auto hide-scrollbar gap-3 -mx-2 px-2">
          <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-md shadow-primary/20">
            All Orders
          </button>
          <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-white text-zinc-500 text-sm font-medium border border-zinc-100">
            Ordered
          </button>
          <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-white text-zinc-500 text-sm font-medium border border-zinc-100">
            In Process
          </button>
          <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-white text-zinc-500 text-sm font-medium border border-zinc-100">
            Completed
          </button>
        </div>
      </header>

      <main className="px-5 py-4 space-y-8">
        <section>
          <h2 className="text-lg font-bold text-zinc-900 mb-4 px-1">In Process</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-zinc-100">
              <div className="flex gap-4 mb-5">
                <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-zinc-100">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzzK5pq1EySXrDMd38xtFrnsiQ6QD4FJULTlodWEbJNz4NZ16hQT_yRKWi0DcD9nFJkaZGUlCjX_JhH-o10TxmPsRyHgsIDWn94FqJQxJhQ-yseeOSaujaRGQH1ZJcYBKBNAVLRcmZhoWb6rGNoWq9xhaeJLcnPKVOPhDsbtPPzYosvKOqrNN8gX8nPzn_wcJUH0IBXdccBzWI9EBHva1FkqX7XtA35wjrjVuf-LuBZOeKCSp-rHoJifSPReoKFX5FOF7DRvjfxFE" alt="Velvet Crimson" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex flex-col items-start mb-1">
                    <h3 className="font-bold text-zinc-900 text-base">Velvet Crimson</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-green/10 text-accent-green px-2.5 py-1 rounded-full mt-1.5">In Process</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">#TLP-8829 • 20 Units</p>
                  <p className="font-bold text-lg text-zinc-900 mt-1">$42.00</p>
                </div>
              </div>
              
              <div className="px-1 mb-6">
                <div className="relative h-1 w-full bg-zinc-100 rounded-full overflow-hidden mb-4">
                  <div className="absolute top-0 left-0 h-full bg-accent-green rounded-full" style={{ width: '75%' }}></div>
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
                    <div className="w-2 h-2 rounded-full bg-accent-green mb-1.5 ring-4 ring-accent-green/20"></div>
                    <span className="text-[9px] font-bold text-accent-green uppercase tracking-tighter">Delivery</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 mb-1.5"></div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Arrived</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Link to="/order/8829" className="flex-1 py-3.5 bg-zinc-900 text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-zinc-200 text-center">
                  Track Delivery
                </Link>
                <button className="flex-1 py-3.5 border border-zinc-200 text-zinc-900 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2">
                  Help
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-zinc-900 mb-4 px-1">Ordered</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-zinc-100">
              <div className="flex gap-4 mb-5">
                <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-zinc-100">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGynOQwgKr5uH-Br6TGHBt53SvzieO3WFmuthcqLkbaM8KGur4VBC6Fjeu7Tca7BAfBGFMrbTARActr2sj4Cs_MguYtmOFJy6vtZK4ZoBpzC_96xCjH-AdNUlQEoUZM6dOdFVh5uku_ZlWk4HAUwZVv6eI1ZgkmW7bAV14IRtNgFmqzQP-5txl3dpBIQfC3Sl5loxff_bTz8D6v9SiTSVoGXo2VFG9GxpfkOJLMuisKkcsbpIKclbVzVyFctYz_8GqWeShLAVnjE8" alt="Golden Dawn" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex flex-col items-start mb-1">
                    <h3 className="font-bold text-zinc-900 text-base">Golden Dawn</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-light text-primary px-2.5 py-1 rounded-full mt-1.5">Ordered</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">#TLP-9012 • 12 Units</p>
                  <p className="font-bold text-lg text-zinc-900 mt-1">$35.50</p>
                </div>
              </div>
              
              <div className="px-1 mb-6">
                <div className="relative h-1 w-full bg-zinc-100 rounded-full overflow-hidden mb-4">
                  <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: '25%' }}></div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mb-1.5 ring-4 ring-primary/20"></div>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-tighter">Ordered</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 mb-1.5"></div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Paid</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 mb-1.5"></div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Delivery</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 mb-1.5"></div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Arrived</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 py-3.5 border border-zinc-200 text-zinc-900 rounded-2xl font-bold text-sm tracking-wide">
                  Order Details
                </button>
                <button className="flex-1 py-3.5 bg-primary text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-zinc-900 mb-4 px-1">Completed</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-zinc-100">
              <div className="flex gap-4 mb-5">
                <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-zinc-100">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8C0aufyjcAe-eI3ulUz3ztxmtaK-61QWkeLmJSakxOfyTfGOCAfI4os2K7QzLdPIaeCGJQEYlQx-fSlYg76gSkdGNw49jCkgyWoKoI8WrJISbOGvZ2aJF8vPQrz3l8FYWlhlzw9gImKgfTl6wxUfVyZL3XvAkH_0J1kuy9Otpkk1jZACO0BMpls1jIkrYNVoKRJd_RKacJIP8iojTQN6og9Ss8BTadEryQvzJY67Z-Xmp9Jam6YfTN3KvOofUAYrUaB0A-jUsKOA" alt="Blush Petals" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-zinc-900 text-base">Blush Petals</h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-zinc-100 text-zinc-500 px-2.5 py-1 rounded-full w-fit mt-1.5 mb-2">Completed</span>
                  <div>
                    <p className="text-xs text-zinc-400">Delivered Mar 12</p>
                    <p className="font-bold text-lg text-zinc-900 mt-0.5">$55.00</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 py-3.5 border border-zinc-200 text-zinc-900 rounded-2xl font-bold text-sm tracking-wide">
                  Order Details
                </button>
                <button className="flex-1 py-3.5 bg-primary-light text-primary rounded-2xl font-bold text-sm tracking-wide shadow-none">
                  Reorder
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
