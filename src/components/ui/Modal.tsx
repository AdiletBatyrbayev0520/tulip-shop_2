import * as React from "react";
import { cn } from "../../lib/utils";
import { Icon } from "./Icon";

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    title: string;
    description?: string;
    iconName?: string;
    iconClassName?: string;
    iconContainerClassName?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

export function Modal({
    isOpen,
    onClose,
    title,
    description,
    iconName,
    iconClassName,
    iconContainerClassName,
    children,
    footer,
    className,
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div
                className={cn(
                    "w-full max-w-[320px] bg-white dark:bg-[#2A151C] rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center animate-fade-in-up",
                    className
                )}
            >
                {iconName && (
                    <div className={cn("mb-6 rounded-full p-4", iconContainerClassName)}>
                        <Icon name={iconName} className={cn("text-4xl", iconClassName)} />
                    </div>
                )}

                <h3 className="text-2xl font-bold text-[#181113] dark:text-white mb-2">
                    {title}
                </h3>

                {description && (
                    <p className="text-[#89616f] dark:text-white/60 text-sm mb-6 leading-relaxed">
                        {description}
                    </p>
                )}

                <div className="w-full flex flex-col gap-3">
                    {children}
                </div>

                {footer || (onClose && (
                    <button
                        onClick={onClose}
                        className="mt-4 text-xs font-medium text-[#89616f] dark:text-white/40 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                        Close
                    </button>
                ))}
            </div>
        </div>
    );
}
