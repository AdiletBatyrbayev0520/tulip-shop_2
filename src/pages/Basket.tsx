import { useState } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Icon } from "../components/ui/Icon";
import { Input } from "../components/ui/Input";
import { Modal } from "../components/ui/Modal";

export default function Basket() {
  const { basket, basketCount, basketTotal, updateQuantity, removeFromBasket } = useAppContext();
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);

  const handleMinus = (id: number, currentQuantity: number) => {
    if (currentQuantity === 1) {
      setItemToRemove(id);
    } else {
      updateQuantity(id, -1);
    }
  };

  const confirmRemove = () => {
    if (itemToRemove !== null) {
      removeFromBasket(itemToRemove);
      setItemToRemove(null);
    }
  };

  return (
    <div className="flex flex-col w-full h-full pb-40">
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-zinc-100 dark:border-white/10">
        <Link
          to="/shop"
          className="text-zinc-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10"
        >
          <Icon name="arrow_back" className="text-2xl" />
        </Link>
        <h2 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          My Basket
        </h2>
        <div className="flex w-10 items-center justify-end">
          <Link to="/basket" className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-zinc-900 dark:text-white">
            <Icon name="shopping_bag" className="fill" />
            {basketCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">
                {basketCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      <div className="p-4 flex flex-col gap-4">
        {basket.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-zinc-500 dark:text-white/60">
            <Icon name="shopping_basket" className="text-6xl mb-4 opacity-50" />
            <p className="text-lg font-medium">Your basket is empty</p>
            <Link to="/shop" className="mt-4 text-primary font-bold hover:underline">Go to Shop</Link>
          </div>
        ) : (
          basket.map((item) => (
            <div key={item.id} className="flex gap-4 p-3 bg-white dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/10 shadow-sm relative group">
              <div
                className="w-24 h-24 shrink-0 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url("${item.image}")` }}
              ></div>
              <div className="flex flex-col flex-1 justify-between py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-sm">
                      {item.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-white/60 mt-0.5">
                      Fresh Tulips
                    </p>
                  </div>
                  <button
                    onClick={() => setItemToRemove(item.id)}
                    className="text-zinc-400 dark:text-white/40 hover:text-red-500 transition-colors"
                  >
                    <Icon name="delete" className="text-xl" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-primary font-bold text-lg">${item.price}</p>
                  <div className="flex items-center bg-background-light dark:bg-white/10 rounded-lg p-1 gap-3">
                    <button
                      onClick={() => handleMinus(item.id, item.quantity)}
                      className="w-6 h-6 flex items-center justify-center bg-white dark:bg-white/10 rounded text-zinc-900 dark:text-white shadow-sm active:scale-95"
                    >
                      <Icon name="remove" className="text-xs font-bold" />
                    </button>
                    <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center bg-primary rounded text-white shadow-sm active:scale-95"
                    >
                      <Icon name="add" className="text-xs font-bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
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
              <Input
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                Delivery Date
              </label>
              <Input
                type="date"
                icon={<Icon name="calendar_today" className="text-[20px]" />}
              />
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
              <Input
                type="text"
                placeholder="Street, house, apt..."
                icon={<Icon name="location_on" className="text-[20px]" />}
              />
            </div>
          ) : (
            <div>
              <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                Pickup Location
              </label>
              <div className="relative w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background-light dark:bg-white/10 text-primary">
                  <Icon name="map" />
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
            ${basketTotal.toFixed(2)}
          </span>
        </div>
        <Link
          to="/orders"
          className={clsx(
            "w-full font-bold py-3.5 rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2",
            basket.length > 0
              ? "bg-primary hover:bg-primary/90 text-white shadow-primary/30"
              : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 pointer-events-none shadow-none"
          )}
        >
          <span>Complete Order</span>
          <Icon name="arrow_forward" className="text-lg" />
        </Link>
      </div>

      <Modal
        isOpen={itemToRemove !== null}
        onClose={() => setItemToRemove(null)}
        title="Remove Item?"
        description="Do you want to remove this item from basket?"
        iconName="delete"
        iconClassName="text-red-500 text-3xl"
        iconContainerClassName="bg-red-100 dark:bg-red-900/30"
        footer={
          <div className="flex gap-3 w-full">
            <button
              onClick={() => setItemToRemove(null)}
              className="flex-1 bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white h-12 rounded-xl font-bold text-sm transition-transform active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={confirmRemove}
              className="flex-1 bg-red-500 text-white h-12 rounded-xl font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-red-500/30"
            >
              Remove
            </button>
          </div>
        }
      >
        {null}
      </Modal>
    </div>
  );
}
