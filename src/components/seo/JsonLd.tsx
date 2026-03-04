export function JsonLd({ data }: { data: Record<string, any> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Generate base HairSalon schema
export function getLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "HairSalon",
        name: "Marquise Salon",
        image: "https://www.marquisesalon.gr/logo.png", // placeholder
        "@id": "https://www.marquisesalon.gr",
        url: "https://www.marquisesalon.gr",
        telephone: "+302108015005",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Leof. Kifisias 244 & Papadiamanti 2",
            addressLocality: "Kifisia",
            postalCode: "145 62",
            addressCountry: "GR"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 38.073, // approximate
            longitude: 23.812
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Tuesday", "Thursday", "Friday"],
                opens: "10:00",
                closes: "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Wednesday",
                opens: "10:00",
                closes: "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "17:00"
            }
        ],
        sameAs: [
            "https://www.instagram.com/marquisesalon/",
            "https://www.facebook.com/p/Marquise-Salon-100054366407888/",
            "https://www.treatwell.gr/katasthma/marquise-salon/"
        ]
    };
}
