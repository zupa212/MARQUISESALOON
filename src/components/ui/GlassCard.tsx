"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    const baseClasses = "glass-panel rounded-[20px] md:rounded-[28px] p-8 md:p-10 transition-all duration-500 ease-out";

    if (hoverEffect) {
        return (
            <motion.div
                className={cn(baseClasses, className)}
                whileHover={{
                    y: -2,
                    boxShadow: "0 24px 72px rgba(0,0,0,0.12)",
                    backgroundColor: "rgba(255, 255, 255, 0.65)"
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        );
    }

    return <div className={cn(baseClasses, className)}>{children}</div>;
}
