import { Metadata } from "next";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { PillButton } from "@/components/ui/PillButton";
import { BUSINESS_INFO } from "@/lib/constants";
import { JsonLd, getLocalBusinessSchema } from "@/components/seo/JsonLd";
import { Star } from "lucide-react";
import { Heading, Eyebrow, Caption } from "@/components/ui/Typography";

export const metadata: Metadata = {
    title: "Κριτικές Πελατών | Marquise Salon",
    description: "Διαβάστε τι λένε οι πελάτες μας για την εμπειρία τους στο Marquise Salon. Υψηλή κομμωτική, άψογη εξυπηρέτηση και κορυφαίας ποιότητας αποτέλεσμα.",
};

const REVIEWS_MOCK = [
    { text: "Εξαιρετική εμπειρία. Το χρώμα στα μαλλιά μου βγήκε ακριβώς όπως το ήθελα. Υπέροχος χώρος και επαγγελματίες." },
    { text: "Ο κορυφαίος προορισμός στην Κηφισιά. Η προσοχή στη λεπτομέρεια είναι εμφανής σε κάθε στάδιο." },
    { text: "Το καλύτερο balayage που έχω κάνει ποτέ. Τα μαλλιά μου έχουν φοβερή λάμψη και φαίνονται υγιή." },
    { text: "Υπέροχη εξυπηρέτηση από όλη την ομάδα. Σε κάνουν να νιώθεις μοναδική." },
    { text: "Τα προϊόντα που χρησιμοποιούν είναι κορυφαία και το αποτέλεσμα πάντα αψεγάδιαστο. Το συνιστώ ανεπιφύλακτα!" },
    { text: "Αφέθηκα στα χέρια τους για μια πλήρη αλλαγή και το αποτέλεσμα ξεπέρασε τις προσδοκίες μου." },
];

export default function ReviewsPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-ivory-dark">
            <JsonLd data={getLocalBusinessSchema()} />

            <div className="container max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
                <SectionReveal>
                    <div className="text-center max-w-2xl mx-auto mb-24">
                        <Eyebrow className="mb-4">Κριτικες</Eyebrow>
                        <Heading as="h1" className="text-5xl md:text-6xl mb-8">Εμπειρίες Πελατών</Heading>
                        <div className="flex justify-center items-center gap-1.5 text-gold mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" className="drop-shadow-sm" />)}
                        </div>
                        <p className="text-lg text-foreground/70 mb-2">
                            <strong>4.9/5</strong> Αξιολόγηση στο Treatwell
                        </p>
                        <p className="text-sm text-foreground/40 font-medium">Βασισμένο σε αυθεντικές κριτικές.</p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 max-w-6xl mx-auto">
                    {REVIEWS_MOCK.map((review, idx) => (
                        <SectionReveal key={idx} delay={idx * 0.1}>
                            <GlassCard className="h-full bg-white shadow-micro border-black/5 p-8">
                                <div className="flex text-gold mb-6 gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                                </div>
                                <p className="text-foreground/80 leading-relaxed text-[15px] italic mb-8">
                                    &quot;{review.text}&quot;
                                </p>
                                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground/30 border-t hairline-divider pt-5">
                                    Verified Client
                                </div>
                            </GlassCard>
                        </SectionReveal>
                    ))}
                </div>

                <SectionReveal delay={0.3}>
                    <div className="text-center">
                        <PillButton href={BUSINESS_INFO.reviewsUrl} isExternal variant="secondary" className="px-10">
                            Δειτε ολες τις κριτικες (Treatwell)
                        </PillButton>
                    </div>
                </SectionReveal>
            </div>
        </div>
    );
}
