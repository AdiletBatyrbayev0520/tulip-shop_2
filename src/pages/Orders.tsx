import { Link } from 'react-router-dom';

export default function Orders() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      <div className="px-6 pt-14 pb-6 flex justify-between items-center sticky top-0 bg-background-light/80 backdrop-blur-xl z-40">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Track Orders</h1>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-600">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>

      <div className="px-6 pb-4 flex gap-3 overflow-x-auto no-scrollbar">
        <button className="px-5 py-2 rounded-full bg-primary text-white font-semibold text-sm whitespace-nowrap">All Orders</button>
        <button className="px-5 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 font-medium text-sm whitespace-nowrap">Ordered</button>
        <button className="px-5 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 font-medium text-sm whitespace-nowrap">In Process</button>
      </div>

      <div className="px-6 py-4 space-y-8">
        <section>
          <h2 className="text-lg font-bold text-zinc-900 mb-4">In Process</h2>
          <div className="bg-white rounded-3xl p-5 shadow-soft border border-zinc-100">
            <div className="flex gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-100 shrink-0">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzzK5pq1EySXrDMd38xtFrnsiQ6QD4FJULTlodWEbJNz4NZ16hQT_yRKWi0DcD9nFJkaZGUlCjX_JhH-o10TxmPsRyHgsIDWn94FqJQxJhQ-yseeOSaujaRGQH1ZJcYBKBNAVLRcmZhoWb6rGNoWq9xhaeJLcnPKVOPhDsbtPPzYosvKOqrNN8gX8nPzn_wcJUH0IBXdccBzWI9EBHva1FkqX7XtA35wjrjVuf-LuBZOeKCSp-rHoJifSPReoKFX5FOF7DRvjfxFE" alt="Velvet Crimson" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-lg">Velvet Crimson</h3>
                <span className="inline-block px-2 py-1 bg-accent-green/10 text-accent-green text-[10px] font-bold uppercase tracking-wider rounded-md mt-1 mb-1">In Process</span>
                <p className="text-xs text-zinc-400">#TLP-8829 • 20 Units</p>
                <p className="font-bold text-lg mt-1">$42.00</p>
              </div>
            </div>

            <div className="relative flex justify-between mb-6 px-2">
              <div className="absolute top-1.5 left-4 right-4 h-1 bg-zinc-100 rounded-full"></div>
              <div className="absolute top-1.5 left-4 w-1/2 h-1 bg-accent-green rounded-full"></div>
              
              <div className="relative flex flex-col items-center gap-1 z-10">
                <div className="w-4 h-4 rounded-full bg-accent-green border-2 border-white"></div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase">Ordered</span>
              </div>
              <div className="relative flex flex-col items-center gap-1 z-10">
                <div className="w-4 h-4 rounded-full bg-accent-green border-2 border-white"></div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase">Paid</span>
              </div>
              <div className="relative flex flex-col items-center gap-1 z-10">
                <div className="w-4 h-4 rounded-full bg-accent-green border-2 border-white ring-4 ring-accent-green/20"></div>
                <span className="text-[10px] font-bold text-accent-green uppercase">Delivery</span>
              </div>
              <div className="relative flex flex-col items-center gap-1 z-10">
                <div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-white"></div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase">Arrived</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link to="/orders/8829" className="flex-1 bg-zinc-900 text-white text-sm font-bold py-3 rounded-xl text-center">Track Delivery</Link>
              <button className="flex-1 bg-white border border-zinc-200 text-zinc-900 text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
                Help
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-zinc-900 mb-4">Ordered</h2>
          <div className="bg-white rounded-3xl p-5 shadow-soft border border-zinc-100">
            <div className="flex gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-100 shrink-0">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGynOQwgKr5uH-Br6TGHBt53SvzieO3WFmuthcqLkbaM8KGur4VBC6Fjeu7Tca7BAfBGFMrbTARActr2sj4Cs_MguYtmOFJy6vtZK4ZoBpzC_96xCjH-AdNUlQEoUZM6dOdFVh5uku_ZlWk4HAUwZVv6eI1ZgkmW7bAV14IRtNgFmqzQP-5txl3dpBIQfC3Sl5loxff_bTz8D6v9SiTSVoGXo2VFG9GxpfkOJLMuisKkcsbpIKclbVzVyFctYz_8GqWeShLAVnjE8" alt="Golden Dawn" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-lg">Golden Dawn</h3>
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-md mt-1 mb-1">Ordered</span>
                <p className="text-xs text-zinc-400">#TLP-9012 • 12 Units</p>
                <p className="font-bold text-lg mt-1">$35.50</p>
              </div>
            </div>

            <div className="relative flex justify-between mb-6 px-2">
              <div className="absolute top-1.5 left-4 right-4 h-1 bg-zinc-100 rounded-full"></div>
              <div className="absolute top-1.5 left-4 w-1/4 h-1 bg-primary rounded-full"></div>
              
              <div className="relative flex flex-col items-center gap-1 z-10">
                <div className="w-4 h-4 rounded-full bg-primary border-2 border-white"></div>
                <span className="text-[10px] font-bold text-primary uppercase">Ordered</span>
              </div>
              <div className="relative flex flex-col items-center gap-1 z-10">
                <div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-white"></div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase">Paid</span>
              </div>
              <div className="relative flex flex-col items-center gap-1 z-10">
                <div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-white"></div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase">Delivery</span>
              </div>
              <div className="relative flex flex-col items-center gap-1 z-10">
                <div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-white"></div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase">Arrived</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link to="/orders/9012" className="flex-1 bg-white border border-zinc-200 text-zinc-900 text-sm font-bold py-3 rounded-xl text-center">Order Details</Link>
              <button className="flex-1 bg-primary text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">payments</span>
                Pay
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
