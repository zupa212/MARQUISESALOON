import { Metadata } from "next";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { PillButton } from "@/components/ui/PillButton";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd, getLocalBusinessSchema } from "@/components/seo/JsonLd";
import { Heading, Subheading, Eyebrow, Caption } from "@/components/ui/Typography";

export const metadata: Metadata = {
    title: "Υπηρεσιες | Υψηλη Κομμωτικη",
    description: "Ανακαλύψτε τις premium υπηρεσίες μας: Color, Balayage, Highlights, Treatments, και Styling στο Marquise Salon στην Κηφισιά.",
};

const SERVICES_LIST = [
    {
        category: "Χρώμα & Τεχνικές",
        items: [
            { name: "Balayage / Highlights", desc: "Προσωποποιημένες τεχνικές για φυσικό, φωτεινό αποτέλεσμα με βάθος." },
            { name: "Color Correction", desc: "Εξειδικευμένη διόρθωση χρώματος με σεβασμό στην υγεία της τρίχας." },
            { name: "Βαφή Ρίζας / Ολική", desc: "Premium βαφές για απόλυτη κάλυψη και ασύγκριτη λάμψη." },
            { name: "Toning / Gloss", desc: "Ανανέωση χρώματος και ενίσχυση λάμψης ανάμεσα στις βαφές." },
        ]
    },
    {
        category: "Περιποίηση & Treatments",
        items: [
            { name: "Ενυδάτωση & Αναδόμηση", desc: "Θεραπείες επαναφοράς υγρασίας και ελαστικότητας." },
            { name: "Keratin Treatment", desc: "Λείανση και πειθαρχία για μεταξένια μαλλιά μεγάλης διάρκειας." },
            { name: "Scalp Care", desc: "Εξειδικευμένη φροντίδα για την υγεία του τριχωτού." },
        ]
    },
    {
        category: "Styling & Κούρεμα",
        items: [
            { name: "Κούρεμα Γυναικείο", desc: "Σύγχρονες γραμμές που αναδεικνύουν τα χαρακτηριστικά σας." },
            { name: "Blowdry / Χτένισμα", desc: "Κομψό styling για κάθε περίσταση με άριστη διάρκεια." },
            { name: "Hair Up", desc: "Βραδινά πιασίματα και ειδικά χτενίσματα." },
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen relative">
            {/* Subtle background motif */}
            <div className="absolute inset-0 bg-dot-pattern z-0 opacity-50" />
            <JsonLd data={getLocalBusinessSchema()} />

            <div className="container max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
                <SectionReveal>
                    <div className="max-w-3xl mx-auto text-center mb-24">
                        <Eyebrow className="mb-4">Οι Υπηρεσιες Μας</Eyebrow>
                        <Heading as="h1" className="text-5xl md:text-6xl mb-6">Υπηρεσιες</Heading>
                        <p className="text-lg md:text-xl text-foreground/70 text-balance">
                            Προσφέρουμε μια ολοκληρωμένη σειρά υπηρεσιών υψηλής κομμωτικής, εμπνευσμένη από τις τελευταίες τάσεις και προσαρμοσμένη απόλυτα στα δικά σας χαρακτηριστικά.
                        </p>
                    </div>
                </SectionReveal>

                <div className="max-w-4xl mx-auto space-y-24">
                    {SERVICES_LIST.map((category, idx) => (
                        <SectionReveal key={idx} delay={idx * 0.1}>
                            <div className="mb-8">
                                <Subheading className="text-gold mb-8 pb-4 border-b hairline-divider">
                                    {category.category}
                                </Subheading>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {category.items.map((item, i) => (
                                        <GlassCard key={i} hoverEffect={true} className="bg-white/40 p-6 md:p-8">
                                            <h3 className="text-lg font-medium text-foreground mb-2">{item.name}</h3>
                                            <Caption>{item.desc}</Caption>
                                        </GlassCard>
                                    ))}
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                <SectionReveal delay={0.4}>
                    <div className="max-w-4xl mx-auto mt-24 flex flex-col md:flex-row items-center justify-between glass-panel-dark rounded-[28px] p-8 md:p-12 shadow-premium bg-charcoal text-ivory">
                        <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                            <Subheading as="h3" className="text-ivory mb-4 text-2xl md:text-3xl">Εξειδίκευση στο Χρώμα</Subheading>
                            <p className="text-white/70 max-w-md text-balance text-sm md:text-base">
                                Μάθετε περισσότερα για τις τεχνικές Balayage και Color Correction, καθώς και συμβουλές συντήρησης.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <PillButton href="/hair-color" variant="secondary" className="whitespace-nowrap border-white/20 text-white hover:bg-white/10 group">
                                Hair Color Guides <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </PillButton>
                            <PillButton href={BUSINESS_INFO.bookingUrl} isExternal variant="primary" className="whitespace-nowrap bg-white text-charcoal hover:border-gold">
                                Κλεισε Ραντεβου
                            </PillButton>
                        </div>
                    </div>
                </SectionReveal>

            </div>
        </div>
    );
}
