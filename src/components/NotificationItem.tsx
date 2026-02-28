import React from "react";
import { Icon } from "./ui/Icon";
import { clsx } from "clsx";

export interface Notification {
    id: string;
    title: string;
    message: string;
    time: string;
    iconName: string;
    type: "success" | "offer" | "system" | "delivery" | "points";
    isRead: boolean;
}

interface NotificationItemProps {
    notification: Notification;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
    const getIconColor = (type: string) => {
        switch (type) {
            case "delivery":
            case "success":
                return "text-primary bg-primary-light/30 dark:bg-primary/10";
            case "offer":
                return "text-accent-green bg-accent-green/10";
            default:
                return "text-zinc-500 bg-zinc-100 dark:bg-zinc-800";
        }
    };

    return (
        <div
            className={clsx(
                "rounded-2xl p-4 shadow-soft border relative flex gap-4 items-start",
                !notification.isRead
                    ? "bg-primary-light/10 dark:bg-primary/5 border-primary/20"
                    : "bg-surface-light dark:bg-surface-dark border-zinc-50 dark:border-zinc-800",
                notification.isRead && "opacity-80"
            )}
        >
            {!notification.isRead && (
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"></div>
            )}
            <div
                className={clsx(
                    "w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center shadow-sm",
                    getIconColor(notification.type)
                )}
            >
                <span className="material-symbols-outlined">{notification.iconName}</span>
            </div>
            <div className="flex-1 pr-4">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                        {notification.title}
                    </h3>
                    <span className="text-xs text-zinc-400 font-medium whitespace-nowrap ml-2">
                        {notification.time}
                    </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {notification.message}
                </p>
            </div>
        </div>
    );
};
