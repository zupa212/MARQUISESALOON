import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BUSINESS_INFO } from "@/lib/constants";

// Configure Body Font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  display: "swap",
});

// Configure Premium Serif Heading Font
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Marquise Salon",
    default: "Marquise Salon | High-end Hair Styling in Kifisia, Athens",
  },
  description:
    "Premium hair color, balayage, and styling at Marquise Salon in Kifisia, Athens. Experience Apple-level minimal luxury.",
  openGraph: {
    title: "Marquise Salon",
    description: "Premium hair color, balayage, and styling in Kifisia, Athens.",
    url: "https://www.marquisesalon.gr",
    siteName: "Marquise Salon",
    locale: "el_GR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans text-base md:text-lg antialiased text-foreground bg-background selection:bg-gold/30 selection:text-foreground`}
      >
        <div className="fixed inset-0 z-[-1] bg-noise opacity-[0.04] pointer-events-none mix-blend-overlay"></div>
        <LenisProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
