import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PillButton } from "@/components/ui/PillButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { MapPin, Phone, Instagram, ArrowRight, Star } from "lucide-react";
import { Heading, Eyebrow, Caption } from "@/components/ui/Typography";

export default function Home() {
  return (
    <>
      {/* 1) Hero Section */}
      <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" /> {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80" />
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
            alt="Marquise Salon Interior"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-12">
          <SectionReveal direction="up" delay={0.1}>
            <p className="text-white/80 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Hair • Color • Styling
            </p>
          </SectionReveal>

          <SectionReveal direction="up" delay={0.3}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight drop-shadow-lg">
              Marquise Salon
            </h1>
          </SectionReveal>

          <SectionReveal direction="up" delay={0.5} className="mt-4">
            <div className="glass-panel-dark rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
              <PillButton href={BUSINESS_INFO.bookingUrl} isExternal variant="secondary" className="px-8 py-4 text-base w-full md:w-auto">
                Κλεισε Ραντεβου
              </PillButton>
              <div className="flex items-center gap-4 text-white/90">
                <a href={`tel:${BUSINESS_INFO.phone.replace(/s+/g, '')}`} className="flex items-center gap-2 hover:text-gold transition-colors text-sm font-medium">
                  <Phone size={16} /> Κληση
                </a>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors text-sm font-medium">
                  <MapPin size={16} /> Οδηγιες
                </a>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors text-sm font-medium">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 2) Signature Services */}
      <section className="py-32 relative bg-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Signature Services</h2>
              <p className="text-foreground/70 text-lg text-balance">
                Εξειδικευμένες τεχνικές χρώματος και premium υπηρεσίες περιποίησης, προσαρμοσμένες στις δικές σας ανάγκες.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SectionReveal delay={0.1}>
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-serif mb-3 group-hover:text-gold transition-colors">Color / Balayage / Highlights</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                    Απόλυτη φυσικότητα και λάμψη με τεχνικές balayage και highlights, εξατομικευμένες για εσάς.
                  </p>
                </div>
                <Link href="/hair-color" className="inline-flex items-center text-sm font-medium text-gold hover:text-gold-light transition-colors">
                  Μαθετε περισσοτερα <ArrowRight size={16} className="ml-2" />
                </Link>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-serif mb-3 group-hover:text-gold transition-colors">Color Correction</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                    Ασφαλής και επαγγελματική διόρθωση χρώματος για την επαναφορά της υγείας και της σωστής απόχρωσης των μαλλιών σας.
                  </p>
                </div>
                <Link href="/hair-color" className="inline-flex items-center text-sm font-medium text-gold hover:text-gold-light transition-colors">
                  Δειτε λεπτομερειες <ArrowRight size={16} className="ml-2" />
                </Link>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-serif mb-3 group-hover:text-gold transition-colors">Treatments & Gloss</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                    Θεραπείες επανόρθωσης, ενυδάτωσης και gloss για μεταξένια υφή και μέγιστη προστασία.
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center text-sm font-medium text-gold hover:text-gold-light transition-colors">
                  Υπηρεσιες <ArrowRight size={16} className="ml-2" />
                </Link>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-serif mb-3 group-hover:text-gold transition-colors">Styling / Blowdry</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                    Κομψό και ανθεκτικό styling & χτένισμα για κάθε περίσταση, με έμφαση στη λεπτομέρεια.
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center text-sm font-medium text-gold hover:text-gold-light transition-colors">
                  Ολες οι υπηρεσιες <ArrowRight size={16} className="ml-2" />
                </Link>
              </GlassCard>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* NEW: SEO Color Chart & Consultation Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <SectionReveal direction="right" className="w-full lg:w-1/2">
              {/* Color Chart Wrapper */}
              <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-premium bg-ivory p-4 md:p-8 flex items-center justify-center border border-black/5">
                {/* Decorative background circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-3xl rounded-full pointer-events-none" />

                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-micro border border-black/5">
                  <Image
                    src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000&auto=format&fit=crop"
                    alt="Χρωματολόγιο και Color Consultation για Μπαλαγιάζ"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="left" className="w-full lg:w-1/2 text-left">
              <Eyebrow className="mb-4">COLOR CONSULTATION</Eyebrow>
              <Heading as="h2" className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                Εξειδίκευση στην <span className="italic">Αλλαγή Χρώματος</span>
              </Heading>

              <div className="prose prose-lg text-foreground/70 prose-p:leading-relaxed">
                <p>
                  Αναζητάτε το κορυφαίο <strong>κομμωτήριο στην Κηφισιά</strong> για μια ριζική <strong>αλλαγή χρώματος</strong>; Στο Marquise Salon δίνουμε έμφαση στη λεπτομέρεια, την υγεία της τρίχας και το προσωποποιημένο αποτέλεσμα.
                </p>
                <p>
                  Οι experts μας αναλαμβάνουν το τέλειο <strong>μπαλαγιάζ (balayage)</strong>, φωτεινά highlights αλλά και ένα μοντέρνο <strong>γυναικείο κούρεμα</strong> που προσαρμόζεται μοναδικά στα χαρακτηριστικά του προσώπου σας. Κάθε διαδικασία ξεκινά με λεπτομερή διάγνωση στο χρωματολόγιό μας, για την εύρεση της ιδανικής απόχρωσης.
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <PillButton href={BUSINESS_INFO.bookingUrl} isExternal variant="primary">
                  Επισκεφθειτε μας
                </PillButton>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* 3) Proof / Gallery Teaser */}
      <section className="py-24 relative overflow-hidden">
        <div className="container max-w-[1280px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pt-16 border-t hairline-divider">
              <div className="max-w-xl">
                <h2 className="font-serif text-foreground mb-4">Our Work</h2>
                <p className="text-foreground/70">
                  Το αποτέλεσμα εξαιρετικής τεχνικής και ποιοτικών προϊόντων.
                </p>
              </div>
              <PillButton href="/gallery" variant="secondary" className="shrink-0 w-fit group">
                Gallery <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </PillButton>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3].map((_, idx) => (
              <SectionReveal key={idx} delay={idx * 0.15}>
                <Link href="/gallery" className="block relative aspect-[4/5] rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={`https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000&auto=format&fit=crop&sig=${idx}`} // placeholders
                    alt="Gallery image"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Reviews teaser */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle dot motif */}
        <div className="absolute inset-0 bg-dot-pattern z-0 rotate-180" />
        <div className="container max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10 pt-16 border-t hairline-divider">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex justify-center items-center gap-1.5 text-gold mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="currentColor" className="drop-shadow-sm" />)}
              </div>
              <h2 className="font-serif text-foreground mb-6">Client Experiences</h2>
              <p className="text-foreground/70">
                Η ικανοποίηση των πελατών μας είναι η μεγαλύτερη απόδειξη της ποιότητας των υπηρεσιών μας.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              "Εξαιρετική εμπειρία. Το χρώμα στα μαλλιά μου βγήκε ακριβώς όπως το ήθελα. Υπέροχος χώρος και επαγγελματίες.",
              "Ο κορυφαίος προορισμός στην Κηφισιά. Η προσοχή στη λεπτομέρεια είναι εμφανής σε κάθε στάδιο της διαδικασίας.",
              "Το καλύτερο balayage που έχω κάνει ποτέ. Τα μαλλιά μου έχουν φοβερή λάμψη και φαίνονται υγιή."
            ].map((review, idx) => (
              <SectionReveal key={idx} delay={idx * 0.15}>
                <GlassCard className="h-full bg-white/80 border-white">
                  <div className="flex text-gold mb-4 gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm italic mb-6">
                    &quot;{review}&quot;
                  </p>
                  <div className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                    Verified Client
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>

          <div className="text-center">
            <PillButton href="/reviews" variant="primary">
              Διαβαστε ολες τις κριτικες
            </PillButton>
          </div>
        </div>
      </section>

      {/* 5) Location block */}
      <section className="py-24 relative">
        <div className="container max-w-[1280px] mx-auto px-6 lg:px-12 pt-16 border-t hairline-divider">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <SectionReveal direction="right" className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl w-full relative">
                {/* Map Placeholder using a visual map image */}
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
                  alt="Location map placeholder"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-4 rounded-full shadow-lg flex items-center gap-3 font-medium text-sm">
                  <MapPin className="text-gold" size={20} />
                  Marquise Salon
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="left" className="w-full lg:w-1/2 md:py-12">
              <h2 className="text-4xl font-serif text-foreground mb-8">Επισκεφθείτε μας</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-foreground/50 font-semibold mb-2">Διευθυνση</h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Λεωφ. Κηφισίας 244 & Παπαδιαμάντη 2,<br />
                    Κηφισιά 145 62
                  </p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-foreground/50 font-semibold mb-2">Επικοινωνια</h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    <a href={`tel:${BUSINESS_INFO.phone.replace(/s+/g, '')}`} className="hover:text-gold transition-colors">{BUSINESS_INFO.phone}</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-foreground/50 font-semibold mb-2">Ωραριο</h3>
                  <ul className="text-foreground/80 space-y-1">
                    <li className="flex justify-between max-w-xs"><span>Δευτέρα</span> <span className="text-foreground/50">Κλειστά</span></li>
                    <li className="flex justify-between max-w-xs"><span>Τρ-Πε-Πα</span> <span>10:00 - 20:00</span></li>
                    <li className="flex justify-between max-w-xs"><span>Τετάρτη</span> <span>10:00 - 18:00</span></li>
                    <li className="flex justify-between max-w-xs"><span>Σάββατο</span> <span>09:00 - 17:00</span></li>
                    <li className="flex justify-between max-w-xs"><span>Κυριακή</span> <span className="text-foreground/50">Κλειστά</span></li>
                  </ul>
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <PillButton href={BUSINESS_INFO.mapsUrl} isExternal variant="outline">
                    Ληψη Οδηγιων
                  </PillButton>
                  <PillButton href={BUSINESS_INFO.bookingUrl} isExternal variant="primary">
                    Κλεισε Ραντεβου
                  </PillButton>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA bar - visible only on mobile */}
      <div className="md:hidden fixed bottom-0 inset-x-0 p-4 z-40 bg-white/80 backdrop-blur-xl border-t border-black/5 shadow-[0_-4px_30px_rgba(0,0,0,0.06)]">
        <PillButton href={BUSINESS_INFO.bookingUrl} isExternal variant="primary" className="w-full">
          Κλεισε Ραντεβου
        </PillButton>
      </div>
    </>
  );
}
