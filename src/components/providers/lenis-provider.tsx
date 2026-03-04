"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect, useState } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
    const [isReducedMotion, setIsReducedMotion] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check for reduced motion
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setIsReducedMotion(mediaQuery.matches);

        const onChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
        mediaQuery.addEventListener("change", onChange);

        // Check device type (only enable on desktop to avoid jank)
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => {
            mediaQuery.removeEventListener("change", onChange);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    // Use native scroll fallback for mobile or reduced motion
    if (isReducedMotion || isMobile) {
        return <>{children}</>;
    }

    // Exact configuration from requirements
    return (
        <ReactLenis
            root
            options={{
                duration: 1.1,
                easing: (t: number) => 1 - Math.pow(1 - t, 3), // cubic out
                smoothWheel: true,
                touchMultiplier: 1.0,
            }}
        >
            {children}
        </ReactLenis>
    );
}
