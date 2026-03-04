"use client";

import { createElement, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function Heading({ className, as = "h2", ...props }: TypographyProps) {
    return createElement(as, {
        className: cn("font-serif text-foreground tracking-tight text-balance", className),
        ...props,
    });
}

export function Subheading({ className, as = "h3", ...props }: TypographyProps) {
    return createElement(as, {
        className: cn("font-serif text-xl tracking-tight text-foreground/90", className),
        ...props,
    });
}

export function Eyebrow({ className, as = "p", ...props }: TypographyProps) {
    return createElement(as, {
        className: cn("text-foreground/50 uppercase tracking-[0.15em] text-xs font-semibold", className),
        ...props,
    });
}

export function Caption({ className, as = "p", ...props }: TypographyProps) {
    return createElement(as, {
        className: cn("text-sm text-foreground/60 leading-relaxed", className),
        ...props,
    });
}
