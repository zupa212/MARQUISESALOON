import { Metadata } from "next";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { JsonLd, getLocalBusinessSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Gallery | Η δουλειά μας | Marquise Salon",
    description: "Δείτε φωτογραφίες από τις δημιουργίες μας. Απόλυτες τεχνικές χρώματος, balayage και premium styling στο Marquise Salon.",
};

export default function GalleryPage() {
    // Using reliable unsplash identifiers to ensure they load nicely as placeholders
    const images = [
        "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <JsonLd data={getLocalBusinessSchema()} />

            <div className="container mx-auto px-6 md:px-12">
                <SectionReveal>
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h1 className="text-5xl font-serif text-foreground mb-6">Gallery</h1>
                        <p className="text-lg text-foreground/70">
                            Η τέχνη της κομμωτικής απόλυτα προσαρμοσμένη στη δική σας μοναδικότητα.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {images.map((src, idx) => (
                        <SectionReveal key={idx} delay={idx * 0.1}>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                <Image
                                    src={src}
                                    alt={`Marquise Salon Work ${idx + 1}`}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
