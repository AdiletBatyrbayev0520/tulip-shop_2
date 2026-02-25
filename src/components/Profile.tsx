import { Edit2, Award, User, Phone, MapPin, LogOut } from 'lucide-react';

export function Profile() {
  return (
    <div className="flex flex-col min-h-screen pb-32">
      <header className="relative px-6 pt-12 pb-8 bg-white rounded-b-[2rem] shadow-sm z-10">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/20">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKXApum7CVnzWye8UbsaepR9nq-mcI8a0Gx6X5mRn4SsYrXaudxPEE0f6YoZv_Mxl41DpsUCB3N5iMfGT7uI-OhmSRxhzfraNRo-v5mBShb2pAyBxM7yJaKz2Dk6odl1RCkM3qBL_acLe_StAa5KMbEAb3cTNne7s3GKGZn92cpevikqJHthuQvBoKMGuZ7bLfSi4_HRF6nv2sdToKMJha3siuvoFZa66jnMpLmrg25C-tO7X5fA8-tVyGO5KKnWSTdxpwq2bX62U" 
                alt="User Avatar" 
                className="w-full h-full rounded-full object-cover shadow-sm"
              />
            </div>
            <button className="absolute bottom-1 right-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-600 transition-colors">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">Sarah Anderson</h1>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-amber-100 px-4 py-1.5 rounded-full border border-amber-200 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <Award className="w-5 h-5 text-amber-500" />
            <span className="text-amber-700 font-bold text-sm tracking-wide uppercase">Gold Client</span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-8 space-y-8">
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
                <User className="w-5 h-5 text-zinc-400 mr-3" />
                <input type="text" defaultValue="Sarah Anderson" className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 font-medium text-sm outline-none" />
                <Edit2 className="w-4 h-4 text-zinc-300" />
              </div>
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Phone</label>
              <div className="flex items-center border-b border-zinc-200 pb-2 focus-within:border-primary transition-colors">
                <Phone className="w-5 h-5 text-zinc-400 mr-3" />
                <input type="tel" defaultValue="+1 (555) 123-4567" className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 font-medium text-sm outline-none" />
                <Edit2 className="w-4 h-4 text-zinc-300" />
              </div>
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Delivery Address</label>
              <div className="flex items-center border-b border-zinc-200 pb-2 focus-within:border-primary transition-colors">
                <MapPin className="w-5 h-5 text-zinc-400 mr-3" />
                <input type="text" defaultValue="123 Floral Lane, Blossom City" className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 font-medium text-sm outline-none" />
                <Edit2 className="w-4 h-4 text-zinc-300" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-zinc-800 mb-4 px-1">Settings</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <button className="w-full flex items-center justify-between px-5 py-4 hover:bg-red-50 transition-colors group text-left">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400 group-hover:text-red-500">
                  <LogOut className="w-5 h-5 ml-1" />
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
