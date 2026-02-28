import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { api } from "../lib/api";
import { Icon } from "../components/ui/Icon";
import { Modal } from "../components/ui/Modal";
import { BasketItem } from "../components/BasketItem";
import { CheckoutForm, CheckoutFormData } from "../components/CheckoutForm";
import { UserAddress } from "../types";

export default function Basket() {
  const { user, basket, basketCount, basketTotal, updateQuantity, removeFromBasket, clearBasket } = useAppContext();
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    phone: "",
    deliveryDate: "",
    deliveryType: "delivery",
    addressId: "",
    cityId: "",
    streetLine: "",
    orderNote: "",
  });
  const [addresses, setAddresses] = useState<UserAddress[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      api.getUserAddresses(user.id).then(fetchedAddresses => {
        setAddresses(fetchedAddresses);
        if (fetchedAddresses.length > 0) {
          setFormData(prev => ({ ...prev, addressId: fetchedAddresses[0].address_id.toString() }));
        }
      }).catch(console.error);
    }
  }, [user]);

  const handleFormChange = <K extends keyof CheckoutFormData>(field: K, value: CheckoutFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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

  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.deliveryDate.trim() !== "" &&
    (formData.deliveryType === "pickup" ||
      (formData.addressId !== "new" && formData.addressId !== "") ||
      (formData.addressId === "new" && formData.cityId !== "" && formData.streetLine.trim() !== ""));

  const handleSubmitOrder = async () => {
    if (!isFormValid || basket.length === 0) return;
    setIsSubmitting(true);
    try {
      const payload = {
        user_id: user?.id || null,
        customer_notes: formData.orderNote,
        delivery_type: formData.deliveryType === "delivery" ? "DELIVERY" : "PICKUP",
        delivery_address: formData.deliveryType === "delivery" && formData.addressId === "new" ? {
          address_name: "Home",
          street_line: formData.streetLine,
          city_id: parseInt(formData.cityId)
        } : null,
        delivery_address_id: formData.deliveryType === "delivery" && formData.addressId !== "new" && formData.addressId !== "" ? parseInt(formData.addressId) : null,
        delivery_date: new Date(formData.deliveryDate).toISOString(),
        items: basket.map((item) => ({
          bouquet_id: item.id,
          unit_price: item.price,
          item_quantity: item.quantity,
        })),
      };
      await api.createOrder(payload);
      clearBasket();
      navigate("/orders");
    } catch (error) {
      console.error("Failed to create order:", error);
      alert("Something went wrong while placing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-full pb-40 pt-16">
      <header className="fixed w-full top-0 left-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-zinc-100 dark:border-white/10">
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
            <BasketItem
              key={item.id}
              item={item}
              onRemove={setItemToRemove}
              onMinus={handleMinus}
              onPlus={updateQuantity}
            />
          ))
        )}
      </div>

      <div className="flex-1 overflow-y-auto w-full max-w-lg mx-auto bg-surface-light dark:bg-background-dark pb-32">
        <CheckoutForm
          addresses={addresses}
          formData={formData}
          onChange={handleFormChange}
        />
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
        <button
          onClick={handleSubmitOrder}
          disabled={!isFormValid || basket.length === 0 || isSubmitting}
          className={clsx(
            "w-full font-bold py-3.5 rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2",
            isFormValid && basket.length > 0 && !isSubmitting
              ? "bg-primary hover:bg-primary/90 text-white shadow-primary/30"
              : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 pointer-events-none shadow-none"
          )}
        >
          <span>{isSubmitting ? "Processing..." : "Complete Order"}</span>
          {!isSubmitting && <Icon name="arrow_forward" className="text-lg" />}
        </button>
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
