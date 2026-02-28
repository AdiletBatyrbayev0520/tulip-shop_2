import { ComponentProps } from "react";
import { cn } from "../../lib/utils";

export interface IconProps extends ComponentProps<"span"> {
    name: string;
    className?: string;
}

export function Icon({ name, className, ...props }: IconProps) {
    return (
        <span
            className={cn("material-symbols-outlined", className)}
            {...props}
        >
            {name}
        </span>
    );
}
