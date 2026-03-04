"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { hoverLift } from "@/lib/motionPresets";

interface PillButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "icon";
    href?: string;
    isExternal?: boolean;
}

export const PillButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, PillButtonProps>(
    ({ children, className, variant = "primary", href, isExternal, ...props }, ref) => {
        // Base apple-like styles
        const baseStyles =
            "inline-flex items-center justify-center rounded-full text-[15px] font-medium transition-all duration-400 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "glass-button px-8 py-3.5 hover:border-gold shadow-micro",
            secondary: "bg-transparent border border-foreground/20 px-8 py-3.5 hover:bg-white/40 text-foreground",
            outline: "border border-foreground/10 bg-transparent hover:bg-foreground/5 px-8 py-3.5 text-foreground",
            ghost: "bg-transparent hover:bg-black/5 px-6 py-3 text-foreground",
            icon: "glass-button w-12 h-12 shadow-micro flex items-center justify-center p-0 rounded-full hover:border-gold",
        };

        const classes = cn(baseStyles, variants[variant], className);

        // Micro-interactions using defined preset
        const motionProps = {
            whileHover: "hover",
            whileTap: { scale: 0.98 },
            variants: {
                hover: hoverLift.hover as any,
                rest: hoverLift.rest as any
            },
            initial: "rest"
        };

        if (href) {
            if (isExternal) {
                return (
                    <motion.a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes}
                        {...motionProps}
                        {...(props as any)}
                    >
                        {children}
                    </motion.a>
                );
            }
            return (
                <motion.div {...motionProps} className="inline-block">
                    <Link href={href} className={classes} {...(props as any)}>
                        {children}
                    </Link>
                </motion.div>
            );
        }

        return (
            <motion.button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classes}
                {...motionProps}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
PillButton.displayName = "PillButton";
