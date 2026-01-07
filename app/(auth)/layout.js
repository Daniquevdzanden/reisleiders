// Import van Google Fonts via Next.js
import {
  Paytone_One,
  Baloo_Da_2,
  Caveat,
  Caveat_Brush,
} from "next/font/google";

// Globale CSS import
import "../globals.css";

// Configuratie van de Paytone One font
const paytone = Paytone_One({
  variable: "--font-paytone", // CSS variabele die we later kunnen gebruiken
  weight: "400", // Standaard gewicht van het lettertype
});

// Configuratie van de Baloo Da 2 font
const baloo = Baloo_Da_2({
  variable: "--font-baloo",
  weight: ["400", "500", "600", "700", "800"], // Meerdere gewichten beschikbaar
});

// Configuratie van de Caveat font
const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"], // Meerdere gewichten beschikbaar
});

// Configuratie van de Caveat Brush font
const caveatBrush = Caveat_Brush({
  variable: "--font-caveat-brush",
  weight: "400", // Standaard gewicht
});

// Metadata voor de pagina (titels en beschrijving voor SEO)
export const metadata = {
  title: "Inloggen - Reisleiders", // Titel van de pagina
  description: "Inloggen bij Reisleiders", // Beschrijving van de pagina
};

// Layout component voor authenticatie pagina's
export default function AuthLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      {/* html-element met taalinstelling en achtergrondkleur */}
      <body
        className={`${paytone.variable} ${baloo.variable} ${caveat.variable} ${caveatBrush.variable} antialiased h-full`}
        // Voegt alle fonts toe via CSS variabelen en maakt tekst glad (antialiased)
      >
        {children} {/* Plaats hier de inhoud van de pagina */}
      </body>
    </html>
  );
}
