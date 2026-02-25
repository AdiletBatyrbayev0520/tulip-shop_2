import { ArrowLeft, ShoppingBag, Trash2, Minus, Plus, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Basket() {
  return (
    <div className="flex flex-col min-h-screen pb-40">
      <header className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-zinc-100">
        <Link to="/shop" className="text-zinc-900 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h2 className="text-zinc-900 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">My Basket</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-zinc-900">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">2</span>
          </button>
        </div>
      </header>

      <div className="p-4 flex flex-col gap-4">
        {[
          {
            id: 1,
            name: '51 Pink Parrots',
            desc: 'Fresh Tulips',
            price: 89,
            qty: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnxf9EwEeSfiRuSoF0RrAsOMw3tz0yx968qWZeJu2xRUkb4eUxqGVwk3pLh4VlYsk7aQXTyu8qCBgCtBn-WkfivND-8EiA_ZAv0u84tgvPXYyu0q0lC70oGV8kEWV_cSY0O2OOBvOUsKBkPc0VOjlD6iIv2khn0HHblPqYJfQ_gxeyQktrAn-cKopXE2xrXoXS62T6vKI4FNPAKhOpZ-mAcKcDF181US4MMHOJELr1PfYPT_pF7gwtxDHmvHTYkGIxyQFKCmRvJU4'
          },
          {
            id: 2,
            name: '41 Yellow Suns',
            desc: 'Fresh Tulips',
            price: 75,
            qty: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv2Hxth85v8SnzT4Id3br6wma1uU3JPaYjOXAUHYxGONaWDzqVX-LxYxJlXYyGBEasHtVZ9gJ4QfgEGAE54yNUX3c8ENNVXbNP-OACkbav6lBZJ30Txk_swjxulWYU2MYEev_yi9x8GE1vkYTaeUZ1TXSqraRj6bUuOqiysRQRN23qAc70f6SVsgufpqqPTezRMAkJSbt5j6V6KGQMiL1tHUcCCW5MyFhkyE3Pf8noNSGq15qHkipqWmRA4h2RP9c-refgYbqVqfk'
          }
        ].map(item => (
          <div key={item.id} className="flex gap-4 p-3 bg-white rounded-2xl border border-zinc-100 shadow-sm relative group">
            <div 
              className="w-24 h-24 shrink-0 rounded-xl bg-cover bg-center" 
              style={{ backgroundImage: `url("${item.image}")` }}
            />
            <div className="flex flex-col flex-1 justify-between py-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-zinc-900 text-sm">{item.name}</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{item.desc}</p>
                </div>
                <button className="text-zinc-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-primary font-bold text-lg">${item.price}</p>
                <div className="flex items-center bg-background-light rounded-lg p-1 gap-3">
                  <button className="w-6 h-6 flex items-center justify-center bg-white rounded text-zinc-900 shadow-sm active:scale-95">
                    <Minus className="w-3 h-3 font-bold" />
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">{item.qty}</span>
                  <button className="w-6 h-6 flex items-center justify-center bg-primary rounded text-white shadow-sm active:scale-95">
                    <Plus className="w-3 h-3 font-bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-lg font-bold text-zinc-900 mb-3">Checkout Details</h3>
        <div className="flex flex-col gap-4">
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-zinc-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1 ml-1">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-zinc-400"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="block text-xs font-medium text-zinc-500 mb-2 ml-1">Delivery Type</label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-white border border-zinc-200 rounded-xl">
              <label className="cursor-pointer">
                <input type="radio" name="delivery_type" className="peer sr-only" defaultChecked />
                <div className="flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-medium text-zinc-500 transition-all peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:font-bold">
                  Delivery
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="delivery_type" className="peer sr-only" />
                <div className="flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-medium text-zinc-500 transition-all peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:font-bold">
                  Pickup
                </div>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-500 mb-1 ml-1">Delivery Address</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Street, house, apt..." 
                className="w-full bg-white border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-zinc-400"
              />
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            </div>
          </div>

          <div className="pt-2">
            <label className="block text-xs font-medium text-zinc-500 mb-1 ml-1">Order Note (Optional)</label>
            <textarea 
              placeholder="Leave a note for the florist..." 
              rows={2}
              className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-zinc-400 resize-none"
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-[72px] left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-zinc-100 px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-zinc-500 font-medium">Total Price</span>
          <span className="text-2xl font-extrabold text-zinc-900">$164.00</span>
        </div>
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <span>Complete Order</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
