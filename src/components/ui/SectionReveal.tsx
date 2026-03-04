"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function SectionReveal({ children, className, delay = 0, direction = "up" }: SectionRevealProps) {
    const yOffset = direction === "up" ? 12 : direction === "down" ? -12 : 0;
    const xOffset = direction === "left" ? 12 : direction === "right" ? -12 : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
            className={cn("", className)}
        >
            {children}
        </motion.div>
    );
}
