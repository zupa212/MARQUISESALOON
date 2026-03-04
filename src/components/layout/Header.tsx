"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";
import { BUSINESS_INFO } from "@/lib/constants";

const NAV_LINKS = [
    { href: "/services", label: "Υπηρεσιες" },
    { href: "/hair-color", label: "Χρωμα" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reviews", label: "Κριτικες" },
    { href: "/contact", label: "Επικοινωνια" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? "glass-panel-dark border-b border-black/5 shadow-micro py-3" : "bg-transparent py-6"
                }`}
        >
            <div className="container max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-10 flex items-center group">
                    <span className="font-serif text-2xl tracking-tight text-foreground group-hover:opacity-80 transition-opacity">
                        Marquise
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-[13px] uppercase tracking-wider font-semibold transition-colors hover:text-gold ${pathname === link.href ? "text-gold" : "text-foreground/80"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block z-10">
                    <PillButton href={BUSINESS_INFO.bookingUrl} isExternal variant="primary" className="py-2.5 px-6 text-[13px] uppercase tracking-wider">
                        Κλεισε Ραντεβου
                    </PillButton>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 -mr-2 text-foreground focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center px-6"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`text-3xl font-serif tracking-tight ${pathname === link.href ? "text-gold" : "text-foreground"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="mt-8 flex flex-col items-center gap-4"
                            >
                                <PillButton href={BUSINESS_INFO.bookingUrl} isExternal variant="primary" className="w-full max-w-xs py-3.5">
                                    Κλεισε Ραντεβου
                                </PillButton>
                                <div className="flex items-center justify-center gap-4 mt-4 text-xs font-semibold uppercase tracking-wider text-foreground/40">
                                    <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
                                    <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                                    <a href={`tel:${BUSINESS_INFO.phone.replace(/s+/g, '')}`} className="hover:text-gold transition-colors">{BUSINESS_INFO.phone}</a>
                                </div>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
