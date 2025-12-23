import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portafolio: Santiago Cardenas",
  description:
    "Portafolio del ingeniero de sistemas Santiago Cardenas, experto en soluciones tecnológicas innovadoras y aplicaciones web de calidad.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://santic.netlify.app",
  },
  openGraph: {
    locale: "es_ES",
    type: "website",
    title: "Mi Portafolio",
    description:
      "Portafolio del ingeniero de sistemas Santiago Cardenas, experto en soluciones tecnológicas innovadoras y aplicaciones web de calidad.",
    url: "https://santic.netlify.app/",
    images: [
      {
        url: "https://santic.netlify.app/assets/img/sc.png",
        width: 1200,
        height: 630,
        alt: "Santiago Cardenas Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portafolio",
    description:
      "Portafolio del ingeniero de sistemas Santiago Cardenas, experto en soluciones tecnológicas innovadoras y aplicaciones web de calidad.",
    images: ["https://santic.netlify.app/assets/img/sc.png"],
  },
  icons: {
    icon: "/assets/img/sc.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
