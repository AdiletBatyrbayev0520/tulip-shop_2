import { Link, useNavigate } from 'react-router-dom';

export default function CheckoutModal() {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={() => navigate('/')}></div>
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white rounded-t-3xl shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] transform transition-transform duration-300">
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-zinc-300 rounded-full"></div>
        </div>
        
        <div className="px-6 py-4 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Complete Your Order</h1>
            <p className="text-zinc-500 text-sm mt-0.5">Secure checkout — takes less than a minute</p>
          </div>
          <button onClick={() => navigate('/')} className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
            <span className="material-icons text-lg">close</span>
          </button>
        </div>

        <div className="px-6 pb-10 space-y-5">
          <div className="relative group">
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 ml-1">Full Name</label>
            <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
              <span className="material-icons text-zinc-400 mr-3 text-xl">person_outline</span>
              <input className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 placeholder-zinc-400 font-medium outline-none" placeholder="Enter your full name" type="text" />
            </div>
          </div>

          <div className="relative group">
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 ml-1">Bouquet Type</label>
            <div className="relative">
              <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3">
                <span className="material-icons text-zinc-400 mr-3 text-xl">local_florist</span>
                <select className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 font-medium appearance-none cursor-pointer outline-none">
                  <option>51 Pink Tulips Deluxe</option>
                  <option>25 Spring Mixed Tulips</option>
                  <option>101 White Royal Tulips</option>
                  <option>35 Sun-Kissed Yellow Tulips</option>
                </select>
                <span className="material-icons text-primary absolute right-4 pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 ml-1">Phone Number</label>
            <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
              <span className="material-icons text-zinc-400 mr-3 text-xl">phone_iphone</span>
              <input className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 placeholder-zinc-400 font-medium outline-none" placeholder="+1 (___) ___-____" type="tel" />
            </div>
          </div>

          <div className="relative group">
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 ml-1">Special Instructions (Optional)</label>
            <div className="flex items-start bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus-within:border-primary transition-all">
              <span className="material-icons text-zinc-400 mr-3 mt-0.5 text-xl">notes</span>
              <textarea className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 placeholder-zinc-400 font-medium resize-none outline-none" placeholder="e.g. Leave at the front door" rows={2}></textarea>
            </div>
          </div>

          <div className="pt-4 pb-8">
            <Link to="/orders" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-all flex items-center justify-center space-x-2">
              <span className="text-lg">Confirm Order • $89.00</span>
              <span className="material-icons text-xl">chevron_right</span>
            </Link>
            <p className="text-center text-[11px] text-zinc-400 mt-4 leading-tight">
              By clicking confirm, you agree to our <a className="underline" href="#">Terms</a> and <a className="underline" href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
