import { Metadata } from "next";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { PillButton } from "@/components/ui/PillButton";
import { BUSINESS_INFO } from "@/lib/constants";
import { JsonLd, getLocalBusinessSchema } from "@/components/seo/JsonLd";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Heading, Subheading, Eyebrow, Caption } from "@/components/ui/Typography";

export const metadata: Metadata = {
    title: "Balayage & τεχνικές χρώματος | Marquise Salon Κηφισιά",
    description: "Οι κορυφαίες τεχνικές χρώματος, balayage και color correction από τους experts του Marquise Salon στην Κηφισιά. Μάθετε τα πάντα για το τέλειο αποτέλεσμα.",
};

const FAQ_DATA = [
    {
        question: "Πώς μπορώ να κλείσω ραντεβού για χρώμα/balayage;",
        answer: "Μπορείτε να κλείσετε ραντεβού 24/7 μέσω της πλατφόρμας μας στο Treatwell ή καλώντας μας στο +30 210 801 5005. Συνιστούμε ραντεβού για πρώτη διάγνωση αν χρειάζεστε σημαντική αλλαγή χρώματος.",
    },
    {
        question: "Πόσο διαρκεί η διαδικασία ενός balayage;",
        answer: "Η διάρκεια ποικίλλει ανάλογα με το μήκος, την πυκνότητα και τον επιθυμητό βαθμό ανοίγματος. Συνήθως, ένα πλήρες balayage διαρκεί από 3 έως 5 ώρες.",
    },
    {
        question: "Πώς να διατηρήσω το αποτέλεσμα στο σπίτι;",
        answer: "Προτείνουμε επαγγελματικά προϊόντα προστασίας χρώματος και ενυδάτωσης, απουσία υπερβολικής θερμότητας και τακτικό toning/gloss (κάθε 6-8 εβδομάδες) στο σαλόνι μας.",
    },
    {
        question: "Πού βρίσκεται το κομμωτήριο και πού μπορώ να παρκάρω;",
        answer: "Βρισκόμαστε στη Λεωφ. Κηφισίας 244 & Παπαδιαμάντη 2 στην Κηφισιά. Υπάρχει δυνατότητα στάθμευσης στους γύρω δρόμους ή σε ιδιωτικά parking σε κοντινή απόσταση.",
    }
];

function getFAQSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_DATA.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    };
}

export default function HairColorPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-ivory">
            <JsonLd data={getLocalBusinessSchema()} />
            <JsonLd data={getFAQSchema()} />

            <div className="container mx-auto px-6 md:px-12">

                {/* LLM SEO Optimized Intro (Scannable, factual) */}
                <SectionReveal>
                    <div className="max-w-[800px] mx-auto mb-24 text-center">
                        <Eyebrow className="mb-4">Τεχνικες Χρωματος</Eyebrow>
                        <Heading as="h1" className="text-5xl md:text-6xl mb-8">
                            Premium Hair Color & <span className="text-gold italic pr-2">Balayage</span>
                        </Heading>
                        <div className="text-left prose prose-lg prose-p:text-foreground/70 prose-headings:font-serif prose-headings:text-foreground/90 max-w-none mt-16">
                            <p className="text-xl text-balance mb-6">
                                Στο <strong>Marquise Salon</strong> στην Κηφισιά ({BUSINESS_INFO.address}), εξειδικευόμαστε σε προηγμένες τεχνικές χρώματος.
                            </p>
                            <h2 className="text-2xl mt-12 mb-4">Γιατί να επιλέξετε τις τεχνικές μας</h2>
                            <ul className="list-none pl-0 space-y-4">
                                <li className="flex gap-3 items-start"><CircleCheckBig className="text-gold shrink-0 mt-1" size={20} /> <span><strong>Εξατομίκευση:</strong> Προσωποποιημένη προσέγγιση σύμφωνα με τον τόνο του δέρματος και την ποιότητα της τρίχας.</span></li>
                                <li className="flex gap-3 items-start"><CircleCheckBig className="text-gold shrink-0 mt-1" size={20} /> <span><strong>Υγεία της Τρίχας:</strong> Χρήση premium προϊόντων και bond builders κατά τη διαδικασία ξανοίγματος.</span></li>
                                <li className="flex gap-3 items-start"><CircleCheckBig className="text-gold shrink-0 mt-1" size={20} /> <span><strong>Φυσικό Αποτέλεσμα:</strong> Τεχνικές balayage που μεγαλώνουν ομαλά (seamless grow-out) χωρίς αντιαισθητικές γραμμές.</span></li>
                            </ul>
                            <h2 className="text-2xl mt-16 mb-6 text-gold">Color Correction</h2>
                            <p className="leading-relaxed">
                                Η διόρθωση χρώματος απαιτεί απόλυτη τεχνική κατάρτιση. Αφαιρούμε ανεπιθύμητους τόνους, ισορροπούμε το χρώμα και επαναφέρουμε την υγεία των μαλλιών, επιστρέφοντας σας την αυτοπεποίθηση.
                            </p>
                        </div>
                        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
                            <PillButton href={BUSINESS_INFO.bookingUrl} isExternal variant="primary">
                                Κλεισε Ραντεβου για Χρωμα
                            </PillButton>
                        </div>
                    </div>
                </SectionReveal>

                {/* FAQs Section */}
                <SectionReveal delay={0.2}>
                    <div className="max-w-3xl mx-auto mt-32 border-t hairline-divider pt-24">
                        <Heading as="h2" className="text-3xl text-center mb-16">Συχνές Ερωτήσεις</Heading>
                        <div className="grid gap-6">
                            {FAQ_DATA.map((faq, idx) => (
                                <GlassCard key={idx} hoverEffect={true} className="bg-white/40 p-6 md:p-8">
                                    <h3 className="text-lg font-medium text-foreground mb-3">{faq.question}</h3>
                                    <Caption>{faq.answer}</Caption>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </SectionReveal>

            </div>
        </div>
    );
}
