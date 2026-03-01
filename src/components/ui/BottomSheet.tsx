import * as React from "react";
import { cn } from "../../lib/utils";
import { Icon } from "./Icon";

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function BottomSheet({
    isOpen,
    onClose,
    title,
    children,
    className,
}: BottomSheetProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex flex-col justify-end">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-[fade-in_0.3s_ease-out]"
                onClick={onClose}
            />
            <div
                className={cn(
                    "relative w-full bg-white dark:bg-surface-dark rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] flex flex-col pt-3 pb-8 px-5 animate-[slide-up_0.3s_ease-out]",
                    className
                )}
                style={{ maxHeight: '90vh' }}
            >
                <div className="w-12 h-1.5 bg-zinc-200 dark:bg-white/10 rounded-full mx-auto mb-4" />
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {title}
                    </h3>
                    <button onClick={onClose} className="p-2 -mr-2 text-zinc-400 hover:text-zinc-900 dark:text-white/40 dark:hover:text-white rounded-full transition-colors flex items-center justify-center">
                        <Icon name="close" className="text-2xl" />
                    </button>
                </div>
                <div className="overflow-y-auto flex-1 overscroll-contain">
                    {children}
                </div>
            </div>
        </div>
    );
}
