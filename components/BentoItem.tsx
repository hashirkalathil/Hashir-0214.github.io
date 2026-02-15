"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoItemProps {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const BentoItem = ({
    className,
    title,
    description,
    header,
    icon,
    children,
    onClick,
}: BentoItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 glass-panel",
                className
            )}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300 text-xs text-muted-foreground">
                    {description}
                </div>
                {children}
            </div>
        </motion.div>
    );
};
