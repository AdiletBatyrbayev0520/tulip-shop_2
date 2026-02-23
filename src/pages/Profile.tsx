import { useState } from 'react';

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen bg-background-light items-center justify-center p-6 pb-24">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-soft p-8 flex flex-col items-center text-center">
          <div className="mb-6 rounded-full bg-primary/10 p-4">
            <span className="material-symbols-outlined text-primary text-4xl">local_florist</span>
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-2">Welcome Back</h3>
          <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
            Sign in to track your orders and save your favorite bouquets.
          </p>
          <button onClick={() => setIsLoggedIn(true)} className="w-full bg-zinc-900 text-white h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-transform active:scale-95 hover:shadow-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      <header className="relative px-6 pt-12 pb-8 bg-white rounded-b-[2rem] shadow-soft z-10">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/20">
              <img alt="User Avatar" className="w-full h-full rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKXApum7CVnzWye8UbsaepR9nq-mcI8a0Gx6X5mRn4SsYrXaudxPEE0f6YoZv_Mxl41DpsUCB3N5iMfGT7uI-OhmSRxhzfraNRo-v5mBShb2pAyBxM7yJaKz2Dk6odl1RCkM3qBL_acLe_StAa5KMbEAb3cTNne7s3GKGZn92cpevikqJHthuQvBoKMGuZ7bLfSi4_HRF6nv2sdToKMJha3siuvoFZa66jnMpLmrg25C-tO7X5fA8-tVyGO5KKnWSTdxpwq2bX62U" />
            </div>
            <button className="absolute bottom-1 right-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-600 transition-colors">
              <span className="material-icons text-sm">edit</span>
            </button>
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">Sarah Anderson</h1>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-amber-100 px-4 py-1.5 rounded-full border border-amber-200 shadow-glow-gold">
            <span className="material-icons text-amber-500 text-lg">workspace_premium</span>
            <span className="text-amber-700 font-bold text-sm tracking-wide uppercase">Gold Client</span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-8 space-y-8 pb-32 overflow-y-auto no-scrollbar">
        <section>
          <h2 className="text-lg font-bold text-zinc-800 mb-4 px-1">Overview</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold text-zinc-900 mb-1">24</span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Orders</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-green-50 rounded-bl-full"></div>
              <span className="text-2xl font-bold text-zinc-900 mb-1">Oct 24</span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Last Buy</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary-light rounded-bl-full"></div>
              <span className="text-xl font-bold text-primary mb-1">$1,240</span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Total</span>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-bold text-zinc-800">Personal Info</h2>
            <button className="text-sm font-semibold text-primary">Save Changes</button>
          </div>
          <div className="space-y-4 bg-white p-5 rounded-2xl shadow-sm border border-zinc-100">
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Full Name</label>
              <div className="flex items-center border-b border-zinc-200 pb-2 focus-within:border-primary transition-colors">
                <span className="material-icons text-zinc-400 text-lg mr-3">person</span>
                <input className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 font-medium text-sm outline-none" type="text" defaultValue="Sarah Anderson" />
                <span className="material-icons text-zinc-300 text-sm">edit</span>
              </div>
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Phone</label>
              <div className="flex items-center border-b border-zinc-200 pb-2 focus-within:border-primary transition-colors">
                <span className="material-icons text-zinc-400 text-lg mr-3">phone</span>
                <input className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 font-medium text-sm outline-none" type="tel" defaultValue="+1 (555) 123-4567" />
                <span className="material-icons text-zinc-300 text-sm">edit</span>
              </div>
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Delivery Address</label>
              <div className="flex items-center border-b border-zinc-200 pb-2 focus-within:border-primary transition-colors">
                <span className="material-icons text-zinc-400 text-lg mr-3">location_on</span>
                <input className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 font-medium text-sm outline-none" type="text" defaultValue="123 Floral Lane, Blossom City" />
                <span className="material-icons text-zinc-300 text-sm">edit</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-zinc-800 mb-4 px-1">Settings</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden divide-y divide-zinc-100">
            <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-red-50 transition-colors group text-left">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400 group-hover:text-red-500">
                  <span className="material-icons text-lg">logout</span>
                </div>
                <span className="font-medium text-zinc-700 group-hover:text-red-600 transition-colors">Sign Out</span>
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
