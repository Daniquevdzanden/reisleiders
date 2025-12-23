import {
  Paytone_One,
  Baloo_Da_2,
  Caveat,
  Caveat_Brush,
} from "next/font/google";
import "../globals.css";

const paytone = Paytone_One({
  variable: "--font-paytone",
  weight: "400",
});

const baloo = Baloo_Da_2({
  variable: "--font-baloo",
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

const caveatBrush = Caveat_Brush({
  variable: "--font-caveat-brush",
  weight: "400",
});

export const metadata = {
  title: "Inloggen - Reisleiders",
  description: "Inloggen bij Reisleiders",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={`${paytone.variable} ${baloo.variable} ${caveat.variable} ${caveatBrush.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
