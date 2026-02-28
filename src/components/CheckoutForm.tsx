import React, { useEffect, useState } from "react";
import { Input } from "./ui/Input";
import { Icon } from "./ui/Icon";
import { DeliveryType } from "../types";
import { api } from "../lib/api";

export interface CheckoutFormData {
    fullName: string;
    phone: string;
    deliveryDate: string;
    deliveryType: DeliveryType;
    cityId: string;
    streetLine: string;
    orderNote: string;
}

interface CheckoutFormProps {
    formData: CheckoutFormData;
    onChange: <K extends keyof CheckoutFormData>(field: K, value: CheckoutFormData[K]) => void;
}

export function CheckoutForm({ formData, onChange }: CheckoutFormProps) {
    const [cities, setCities] = useState<{ city_id: number; city_name: string }[]>([]);

    useEffect(() => {
        api.getCities().then(setCities).catch(console.error);
    }, []);

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
                        <Input
                            type="text"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => onChange("fullName", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                            Phone Number
                        </label>
                        <Input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => onChange("phone", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                            Delivery Date
                        </label>
                        <Input
                            type="date"
                            icon={<Icon name="calendar_today" className="text-[20px]" />}
                            value={formData.deliveryDate}
                            onChange={(e) => onChange("deliveryDate", e.target.value)}
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
                                checked={formData.deliveryType === "delivery"}
                                onChange={() => onChange("deliveryType", "delivery")}
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
                                checked={formData.deliveryType === "pickup"}
                                onChange={() => onChange("deliveryType", "pickup")}
                            />
                            <div className="flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-medium text-zinc-500 dark:text-white/60 transition-all peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:font-bold">
                                Pickup
                            </div>
                        </label>
                    </div>
                </div>

                {formData.deliveryType === "delivery" ? (
                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                                City
                            </label>
                            <div className="relative">
                                <select
                                    className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white appearance-none"
                                    value={formData.cityId}
                                    onChange={(e) => onChange("cityId", e.target.value)}
                                >
                                    <option value="" disabled>Select City</option>
                                    {cities.map(c => (
                                        <option key={c.city_id} value={c.city_id}>{c.city_name}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-400 dark:text-white/40">
                                    <Icon name="expand_more" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                                Street Address
                            </label>
                            <Input
                                type="text"
                                placeholder="Street, house, apt..."
                                icon={<Icon name="location_on" className="text-[20px]" />}
                                value={formData.streetLine}
                                onChange={(e) => onChange("streetLine", e.target.value)}
                            />
                        </div>
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
                        value={formData.orderNote}
                        onChange={(e) => onChange("orderNote", e.target.value)}
                        className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400 resize-none"
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
