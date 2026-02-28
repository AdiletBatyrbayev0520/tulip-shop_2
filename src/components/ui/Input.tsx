import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, ...props }, ref) => {
        if (icon) {
            return (
                <div className="relative w-full">
                    <input
                        type={type}
                        className={cn(
                            "w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400 focus:outline-none transition-colors",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400">
                        {icon}
                    </div>
                </div>
            );
        }

        return (
            <input
                type={type}
                className={cn(
                    "w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/20 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400 focus:outline-none transition-colors",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
