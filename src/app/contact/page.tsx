import { Metadata } from "next";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { PillButton } from "@/components/ui/PillButton";
import { BUSINESS_INFO } from "@/lib/constants";
import { JsonLd, getLocalBusinessSchema } from "@/components/seo/JsonLd";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import { Heading, Eyebrow } from "@/components/ui/Typography";

export const metadata: Metadata = {
    title: "Επικοινωνία | Marquise Salon Κηφισιά",
    description: "Βρείτε μας στη Λεωφόρο Κηφισίας 244 & Παπαδιαμάντη 2 στην Κηφισιά. Κλείστε το ραντεβού σας για premium υπηρεσίες κομμωτηρίου.",
};

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <JsonLd data={getLocalBusinessSchema()} />

            <div className="container max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
                <SectionReveal>
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <Eyebrow className="mb-4">Επικοινωνια</Eyebrow>
                        <Heading as="h1" className="text-5xl md:text-6xl mb-6">Είμαστε δίπλα σας</Heading>
                        <p className="text-lg text-foreground/70">
                            Είμαστε εδώ για να συζητήσουμε την ιδανική λύση για τα μαλλιά σας.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Info Side */}
                    <SectionReveal direction="right" delay={0.1}>
                        <div className="flex flex-col gap-6">

                            <GlassCard hoverEffect={false} className="bg-white/40 shadow-micro border-black/5 p-8">
                                <div className="flex gap-5">
                                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                                        <MapPin className="text-gold" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif mb-2 text-foreground">Διεύθυνση</h3>
                                        <p className="text-foreground/70 leading-relaxed mb-4 text-sm">
                                            {BUSINESS_INFO.address}
                                        </p>
                                        <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] uppercase tracking-wider font-semibold text-gold hover:text-gold/70 transition-colors">
                                            Λήψη Οδηγιών &rarr;
                                        </a>
                                    </div>
                                </div>
                            </GlassCard>

                            <GlassCard hoverEffect={false} className="bg-white/40 shadow-micro border-black/5 p-8">
                                <div className="flex gap-5">
                                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                                        <Phone className="text-gold" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif mb-2 text-foreground">Τηλέφωνο</h3>
                                        <p className="text-foreground/80 leading-relaxed mb-4 text-xl font-medium">
                                            <a href={`tel:${BUSINESS_INFO.phone.replace(/s+/g, '')}`} className="hover:text-gold transition-colors">{BUSINESS_INFO.phone}</a>
                                        </p>
                                        <p className="text-sm text-foreground/60">
                                            Καλέστε μας για να κλείσετε ραντεβού ή για οποιαδήποτε διευκρίνιση.
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>

                            <GlassCard hoverEffect={false} className="bg-white/40 shadow-micro border-black/5 p-8">
                                <div className="flex gap-5">
                                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                                        <Clock className="text-gold" size={24} />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-xl font-serif mb-4 text-foreground">Ωράριο Λειτουργίας</h3>
                                        <ul className="text-foreground/70 space-y-3 w-full text-sm">
                                            <li className="flex justify-between border-b border-black/5 pb-2"><span>Δευτέρα</span> <span className="text-foreground/40">Κλειστά</span></li>
                                            <li className="flex justify-between border-b border-black/5 pb-2"><span>Τρ-Πε-Πα</span> <span className="font-medium text-foreground">10:00 - 20:00</span></li>
                                            <li className="flex justify-between border-b border-black/5 pb-2"><span>Τετάρτη</span> <span className="font-medium text-foreground">10:00 - 18:00</span></li>
                                            <li className="flex justify-between border-b border-black/5 pb-2"><span>Σάββατο</span> <span className="font-medium text-foreground">09:00 - 17:00</span></li>
                                            <li className="flex justify-between"><span>Κυριακή</span> <span className="text-foreground/40">Κλειστά</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </SectionReveal>

                    {/* Connect & Map Side */}
                    <SectionReveal direction="left" delay={0.2}>
                        <div className="flex flex-col gap-6 h-full">

                            {/* Map Placeholder */}
                            <div className="relative flex-grow min-h-[300px] rounded-3xl overflow-hidden shadow-lg border border-black/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
                                    alt="Marquise Salon Location"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20">
                                    <PillButton href={BUSINESS_INFO.mapsUrl} isExternal variant="secondary" className="w-full bg-white text-foreground hover:bg-gray-100 shadow-xl">
                                        Άνοιγμα στους Χάρτες
                                    </PillButton>
                                </div>
                            </div>

                            {/* Booking CTA */}
                            <GlassCard className="bg-charcoal text-white border-transparent w-full text-center py-10" hoverEffect={false}>
                                <h3 className="text-2xl font-serif mb-4">On-line Booking 24/7</h3>
                                <p className="text-white/70 mb-8 max-w-sm mx-auto text-sm">
                                    Κλείστε το επόμενο ραντεβού σας εύκολα και γρήγορα μέσω της πλατφόρμας του Treatwell.
                                </p>
                                <PillButton href={BUSINESS_INFO.bookingUrl} isExternal variant="secondary" className="w-full sm:w-auto px-10">
                                    Κλεισε Ραντεβου
                                </PillButton>
                            </GlassCard>

                            {/* Socials */}
                            <div className="flex justify-center gap-4 mt-4">
                                <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-ivory text-foreground hover:bg-gold hover:text-white transition-colors">
                                    <Instagram size={24} />
                                </a>
                                <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-ivory text-foreground hover:bg-gold hover:text-white transition-colors">
                                    <Facebook size={24} />
                                </a>
                            </div>

                        </div>
                    </SectionReveal>

                </div>
            </div>
        </div>
    );
}
