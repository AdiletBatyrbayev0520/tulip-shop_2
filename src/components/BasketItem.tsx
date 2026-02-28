import React from "react";
import { Icon } from "./ui/Icon";
import { BasketItem as BasketItemType } from "../types";

interface BasketItemProps {
    item: BasketItemType;
    onRemove: (id: number) => void;
    onMinus: (id: number, currentQty: number) => void;
    onPlus: (id: number, delta: number) => void;
}

export const BasketItem: React.FC<BasketItemProps> = ({ item, onRemove, onMinus, onPlus }) => {
    return (
        <div className="flex gap-4 p-3 bg-white dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/10 shadow-sm relative group">
            <div
                className="w-24 h-24 shrink-0 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url("${item.image_url}")` }}
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
                        onClick={() => onRemove(item.id)}
                        className="text-zinc-400 dark:text-white/40 hover:text-red-500 transition-colors"
                    >
                        <Icon name="delete" className="text-xl" />
                    </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-primary font-bold text-lg">${item.price}</p>
                    <div className="flex items-center bg-background-light dark:bg-white/10 rounded-lg p-1 gap-3">
                        <button
                            onClick={() => onMinus(item.id, item.quantity)}
                            className="w-6 h-6 flex items-center justify-center bg-white dark:bg-white/10 rounded text-zinc-900 dark:text-white shadow-sm active:scale-95"
                        >
                            <Icon name="remove" className="text-xs font-bold" />
                        </button>
                        <span className="text-sm font-semibold w-4 text-center">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => onPlus(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center bg-primary rounded text-white shadow-sm active:scale-95"
                        >
                            <Icon name="add" className="text-xs font-bold" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
