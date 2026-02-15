import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
    return (
        <div
            className={cn(
                "grid max-w-7xl mx-auto md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4",
                className
            )}
        >
            {children}
        </div>
    );
};
