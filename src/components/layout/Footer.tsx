import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-ivory/80 pt-24 pb-12 relative overflow-hidden">
            {/* Premium subtle noise over charcoal */}
            <div className="absolute inset-0 z-0 bg-dot-pattern opacity-[0.03] pointer-events-none"></div>

            <div className="container max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 border-b hairline-divider border-white/10 pb-16 mb-8">

                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-8">
                            <span className="font-serif text-3xl tracking-tight text-white drop-shadow-sm">
                                Marquise
                            </span>
                        </Link>
                        <p className="text-[15px] text-white/60 leading-relaxed mb-8 max-w-xs">
                            Premium hair color, balayage, and styling in Kifisia, Athens.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href={BUSINESS_INFO.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ivory/60 hover:text-gold transition-colors text-sm font-medium"
                            >
                                Instagram
                            </a>
                            <a
                                href={BUSINESS_INFO.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ivory/60 hover:text-gold transition-colors text-sm font-medium"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl tracking-tight text-white mb-6">Υπηρεσιες</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/services" className="hover:text-gold transition-colors">Ολες οι Υπηρεσιες</Link></li>
                            <li><Link href="/hair-color" className="hover:text-gold transition-colors">Hair Color & Balayage</Link></li>
                            <li><span className="opacity-60">Styling & Blowdry</span></li>
                            <li><span className="opacity-60">Treatments</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl tracking-tight text-white mb-6">Πλοηγηση</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
                            <li><Link href="/reviews" className="hover:text-gold transition-colors">Κριτικες</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors">Επικοινωνια</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl tracking-tight text-white mb-6">Επικοινωνια</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors block leading-relaxed">
                                    {BUSINESS_INFO.address}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${BUSINESS_INFO.phone.replace(/s+/g, '')}`} className="hover:text-gold transition-colors inline-block mt-2">
                                    {BUSINESS_INFO.phone}
                                </a>
                            </li>
                            <li className="pt-4">
                                <a
                                    href={BUSINESS_INFO.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium bg-gold text-white hover:bg-gold-light transition-colors"
                                >
                                    Κλεισε Ραντεβου
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-xs text-ivory/40">
                    <p>&copy; {currentYear} Marquise Salon. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>Website designed for premium experience.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
