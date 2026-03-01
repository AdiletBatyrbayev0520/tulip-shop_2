import React, { useEffect, useState } from "react";
import { Input } from "./ui/Input";
import { Icon } from "./ui/Icon";
import { DeliveryType } from "../types";
import { api } from "../lib/api";
import { BottomSheet } from "./ui/BottomSheet";

export interface CheckoutFormData {
    fullName: string;
    phone: string;
    deliveryDate: string;
    deliveryType: DeliveryType;
    addressId: string;
    addressName: string;
    cityId: string;
    streetLine: string;
    orderNote: string;
}

interface CheckoutFormProps {
    addresses: { address_id: number; address_name?: string; city_id: number; street_line: string }[];
    formData: CheckoutFormData;
    onChange: <K extends keyof CheckoutFormData>(field: K, value: CheckoutFormData[K]) => void;
}

export function CheckoutForm({ addresses, formData, onChange }: CheckoutFormProps) {
    const [cities, setCities] = useState<{ city_id: number; city_name: string }[]>([]);
    const [isAddressSheetOpen, setIsAddressSheetOpen] = useState(false);

    useEffect(() => {
        api.getCities().then(setCities).catch(console.error);
    }, []);

    const selectedAddress = addresses.find(a => a.address_id.toString() === formData.addressId);

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
                                Delivery Address
                            </label>
                            <button
                                type="button"
                                onClick={() => setIsAddressSheetOpen(true)}
                                className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl px-4 py-3 text-sm flex items-center justify-between hover:border-primary transition-colors text-left"
                            >
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Icon name={formData.addressId === "new" ? "add_location" : "location_on"} />
                                    </div>
                                    <div className="flex flex-col truncate">
                                        {formData.addressId === "new" ? (
                                            <>
                                                <span className="font-bold text-zinc-900 dark:text-white truncate">
                                                    {formData.addressName || "New Address"}
                                                </span>
                                                <span className="text-xs text-zinc-500 dark:text-white/60 truncate">
                                                    {formData.streetLine || "Enter address details"}
                                                </span>
                                            </>
                                        ) : selectedAddress ? (
                                            <>
                                                <span className="font-bold text-zinc-900 dark:text-white truncate">
                                                    {selectedAddress.address_name || "Address"}
                                                </span>
                                                <span className="text-xs text-zinc-500 dark:text-white/60 truncate">
                                                    {selectedAddress.street_line}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-zinc-500 font-medium">Select Delivery Address</span>
                                        )}
                                    </div>
                                </div>
                                <Icon name="chevron_right" className="text-zinc-400 shrink-0" />
                            </button>
                        </div>
                        <BottomSheet
                            isOpen={isAddressSheetOpen}
                            onClose={() => setIsAddressSheetOpen(false)}
                            title="Saved Addresses"
                        >
                            <div className="flex flex-col gap-3">
                                {addresses.map(a => (
                                    <button
                                        key={a.address_id}
                                        type="button"
                                        onClick={() => {
                                            onChange("addressId", a.address_id.toString());
                                            setIsAddressSheetOpen(false);
                                        }}
                                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${formData.addressId === a.address_id.toString() ? 'border-primary bg-primary/5' : 'border-zinc-100 dark:border-white/10 hover:border-primary/30'}`}
                                    >
                                        <div className={`flex shrink-0 h-12 w-12 items-center justify-center rounded-full ${formData.addressId === a.address_id.toString() ? 'bg-primary text-white' : 'bg-background-light dark:bg-white/10 text-zinc-500 dark:text-white/60'}`}>
                                            <Icon name={a.address_name?.toLowerCase() === 'home' ? 'home' : a.address_name?.toLowerCase() === 'work' ? 'work' : 'location_on'} className="text-2xl" />
                                        </div>
                                        <div className="flex flex-col flex-1 overflow-hidden">
                                            <span className="font-bold text-lg text-zinc-900 dark:text-white truncate">
                                                {a.address_name || "Address"}
                                            </span>
                                            <span className="text-sm text-zinc-500 dark:text-white/60 truncate">
                                                {a.street_line}
                                            </span>
                                        </div>
                                        {formData.addressId === a.address_id.toString() && (
                                            <Icon name="check_circle" className="text-primary text-2xl shrink-0" />
                                        )}
                                    </button>
                                ))}

                                {formData.addressId !== "new" && (
                                    <button
                                        type="button"
                                        onClick={() => onChange("addressId", "new")}
                                        className="w-full text-left p-4 rounded-xl border-2 border-dashed border-zinc-200 dark:border-white/20 hover:border-primary transition-all flex items-center gap-4 mt-2"
                                    >
                                        <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Icon name="add" className="text-2xl font-bold" />
                                        </div>
                                        <span className="font-bold text-lg text-primary">
                                            + Add new address
                                        </span>
                                    </button>
                                )}

                                {formData.addressId === "new" && (
                                    <div className="mt-4 p-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 flex flex-col gap-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                                                <Icon name="add_location" className="text-primary" />
                                                New Address Details
                                            </h4>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                                                Address Name
                                            </label>
                                            <Input
                                                type="text"
                                                placeholder="e.g., Gym, Home, Office"
                                                icon={<Icon name="label" className="text-[20px]" />}
                                                value={formData.addressName}
                                                onChange={(e) => onChange("addressName", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-zinc-500 dark:text-white/60 mb-1 ml-1">
                                                City
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="w-full bg-white dark:bg-background-dark border border-zinc-200 dark:border-white/20 rounded-xl px-10 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white appearance-none"
                                                    value={formData.cityId}
                                                    onChange={(e) => onChange("cityId", e.target.value)}
                                                >
                                                    <option value="" disabled>Select City</option>
                                                    {cities.map(c => (
                                                        <option key={c.city_id} value={c.city_id}>{c.city_name}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
                                                    <Icon name="location_city" className="text-[20px]" />
                                                </div>
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
                                                icon={<Icon name="streetview" className="text-[20px]" />}
                                                value={formData.streetLine}
                                                onChange={(e) => onChange("streetLine", e.target.value)}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsAddressSheetOpen(false)}
                                            disabled={!(formData.addressName || "").trim() || !formData.cityId || !(formData.streetLine || "").trim()}
                                            className="w-full bg-primary hover:bg-primary/90 disabled:bg-zinc-200 dark:disabled:bg-white/10 text-white font-bold py-3.5 rounded-xl shadow-lg mt-2 transition-all"
                                        >
                                            Confirm New Address
                                        </button>
                                    </div>
                                )}
                            </div>
                        </BottomSheet>
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
