import React from "react";
import { Link } from "react-router-dom";
import { Bouquet } from "../types";

interface BouquetCardProps {
    bouquet: Bouquet;
    variant?: "shop" | "trending";
    onBuy?: (bouquet: Bouquet) => void;
}

export const BouquetCard: React.FC<BouquetCardProps> = ({ bouquet, variant = "shop", onBuy }) => {
    const imageUrl = bouquet.image_url || "https://via.placeholder.com/300x400?text=No+Image";

    if (variant === "trending") {
        return (
            <Link to="/shop" className="min-w-[150px] w-[150px] flex-none group">
                <div className="aspect-[4/3] rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden mb-2 shadow-sm group-hover:ring-2 ring-primary transition-all">
                    <img
                        className="h-full w-full object-cover"
                        src={imageUrl}
                        alt={bouquet.name}
                    />
                </div>
                <p className="font-bold text-sm dark:text-white truncate">
                    {bouquet.name}
                </p>
                <p className="text-primary font-bold text-sm">${bouquet.price}</p>
            </Link>
        );
    }

    // default 'shop' layout
    return (
        <div className="flex flex-col gap-3 pb-4 bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 dark:border-white/10">
            <div
                className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover bg-zinc-100"
                style={{ backgroundImage: `url("${imageUrl}")` }}
            ></div>
            <div className="px-3 pb-3 flex flex-col gap-1">
                <p className="text-zinc-900 dark:text-white text-[15px] font-bold leading-tight">
                    {bouquet.name}
                </p>
                <div className="flex items-center justify-between mt-1">
                    <p className="text-primary text-base font-bold">${bouquet.price}</p>
                    {onBuy && (
                        <button
                            onClick={() => onBuy(bouquet)}
                            className="bg-primary text-white rounded-lg px-3 py-1.5 text-xs font-bold active:scale-95 transition-transform"
                        >
                            Buy
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
