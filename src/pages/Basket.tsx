import { useState } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";

export default function Basket() {
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery",
  );

  return (
    <div className="flex flex-col w-full h-full pb-40">
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-zinc-100 dark:border-white/10">
        <Link
          to="/shop"
          className="text-zinc-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </Link>
        <h2 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          My Basket
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-zinc-900 dark:text-white">
            <span className="material-symbols-outlined fill">shopping_bag</span>
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">
              2
            </span>
          </button>
        </div>
      </header>

      <div className="p-4 flex flex-col gap-4">
        {/* Cart Items */}
        <div className="flex gap-4 p-3 bg-white dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/10 shadow-sm relative group">
          <div
            className="w-24 h-24 shrink-0 rounded-xl bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnxf9EwEeSfiRuSoF0RrAsOMw3tz0yx968qWZeJu2xRUkb4eUxqGVwk3pLh4VlYsk7aQXTyu8qCBgCtBn-WkfivND-8EiA_ZAv0u84tgvPXYyu0q0lC70oGV8kEWV_cSY0O2OOBvOUsKBkPc0VOjlD6iIv2khn0HHblPqYJfQ_gxeyQktrAn-cKopXE2xrXoXS62T6vKI4FNPAKhOpZ-mAcKcDF181US4MMHOJELr1PfYPT_pF7gwtxDHmvHTYkGIxyQFKCmRvJU4")',
            }}
          ></div>
          <div className="flex flex-col flex-1 justify-between py-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm">
                  51 Pink Parrots
                </h3>
                <p className="text-xs text-zinc-500 dark:text-white/60 mt-0.5">
                  Fresh Tulips
                </p>
              </div>
              <button className="text-zinc-400 dark:text-white/40 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-xl">
                  delete
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-primary font-bold text-lg">$89</p>
              <div className="flex items-center bg-background-light dark:bg-white/10 rounded-lg p-1 gap-3">
                <button className="w-6 h-6 flex items-center justify-center bg-white dark:bg-white/10 rounded text-zinc-900 dark:text-white shadow-sm active:scale-95">
                  <span className="material-symbols-outlined text-xs font-bold">
                    remove
                  </span>
                </button>
                <span className="text-sm font-semibold w-4 text-center">1</span>
                <button className="w-6 h-6 flex items-center justify-center bg-primary rounded text-white shadow-sm active:scale-95">
                  <span className="material-symbols-outlined text-xs font-bold">
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 p-3 bg-white dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/10 shadow-sm relative group">
          <div
            className="w-24 h-24 shrink-0 rounded-xl bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv2Hxth85v8SnzT4Id3br6wma1uU3JPaYjOXAUHYxGONaWDzqVX-LxYxJlXYyGBEasHtVZ9gJ4QfgEGAE54yNUX3c8ENNVXbNP-OACkbav6lBZJ30Txk_swjxulWYU2MYEev_yi9x8GE1vkYTaeUZ1TXSqraRj6bUuOqiysRQRN23qAc70f6SVsgufpqqPTezRMAkJSbt5j6V6KGQMiL1tHUcCCW5MyFhkyE3Pf8noNSGq15qHkipqWmRA4h2RP9c-refgYbqVqfk")',
            }}
          ></div>
          <div className="flex flex-col flex-1 justify-between py-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm">
                  41 Yellow Suns
                </h3>
                <p className="text-xs text-zinc-500 dark:text-white/60 mt-0.5">
                  Fresh Tulips
                </p>
              </div>
              <button className="text-zinc-400 dark:text-white/40 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-xl">
                  delete
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-primary font-bold text-lg">$75</p>
              <div className="flex items-center bg-background-light dark:bg-white/10 rounded-lg p-1 gap-3">
                <button className="w-6 h-6 flex items-center justify-center bg-white dark:bg-white/10 rounded text-zinc-900 dark:text-white shadow-sm active:scale-95">
                  <span className="material-symbols-outlined text-xs font-bold">
                    remove
                  </span>
                </button>
                <span className="text-sm font-semibold w-4 text-center">1</span>
                <button className="w-6 h-6 flex items-center justify-center bg-primary rounded text-white shadow-sm active:scale-95">
                  <span className="material-symbols-outlined text-xs font-bold">
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
          Checkout Details
        </h3>
        <div className="flex flex-col gap-4">
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                Delivery Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400"
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                  calendar_today
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-2 ml-1">
              Delivery Type
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="delivery_type"
                  className="peer sr-only"
                  checked={deliveryType === "delivery"}
                  onChange={() => setDeliveryType("delivery")}
                />
                <div className="flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-medium text-zinc-500 dark:text-white/60 transition-all peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:font-bold">
                  Delivery
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="delivery_type"
                  className="peer sr-only"
                  checked={deliveryType === "pickup"}
                  onChange={() => setDeliveryType("pickup")}
                />
                <div className="flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-medium text-zinc-500 dark:text-white/60 transition-all peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:font-bold">
                  Pickup
                </div>
              </label>
            </div>
          </div>

          {deliveryType === "delivery" ? (
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                Delivery Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Street, house, apt..."
                  className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400"
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                  location_on
                </span>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                Pickup Location
              </label>
              <div className="relative w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background-light dark:bg-white/10 text-primary">
                  <span className="material-symbols-outlined">map</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    Pickup at Bektembay 79
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-white/60">
                    Open until 9:00 PM
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2">
            <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
              Order Note (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Leave a note for the florist..."
              className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400 resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[72px] left-0 right-0 z-40 bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-t border-zinc-100 dark:border-white/10 px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-zinc-500 dark:text-white/60 font-medium">
            Total Price
          </span>
          <span className="text-2xl font-extrabold text-zinc-900 dark:text-white">
            $164.00
          </span>
        </div>
        <Link
          to="/orders"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>Complete Order</span>
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
