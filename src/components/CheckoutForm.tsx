import React from "react";
import { Input } from "./ui/Input";
import { Icon } from "./ui/Icon";
import { DeliveryType } from "../types";

interface CheckoutFormProps {
    deliveryType: DeliveryType;
    setDeliveryType: (type: DeliveryType) => void;
}

export function CheckoutForm({ deliveryType, setDeliveryType }: CheckoutFormProps) {
    return (
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
                        <Input type="text" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                            Phone Number
                        </label>
                        <Input type="tel" placeholder="+1 (555) 000-0000" />
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
    );
}
