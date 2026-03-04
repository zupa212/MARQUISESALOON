// Preset library for high-end, smooth Framer Motion animations
import { Variants, Easing } from "framer-motion";

const EASE_OUT_CUBIC: Easing = [0.22, 1, 0.36, 1]; // Expo-ish out

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: EASE_OUT_CUBIC }
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.55, ease: EASE_OUT_CUBIC }
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.55, ease: EASE_OUT_CUBIC }
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

export const hoverLift = {
    rest: { y: 0, opacity: 1 },
    hover: {
        y: -2,
        filter: "brightness(1.02)",
        transition: { duration: 0.3, ease: EASE_OUT_CUBIC }
    },
};

export const pageTransition: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.45, ease: EASE_OUT_CUBIC } },
    exit: { opacity: 0, transition: { duration: 0.35, ease: EASE_OUT_CUBIC } }
};
