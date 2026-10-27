import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import FondoAnimado from "@/components/FondoAnimado";
import { perfil } from "@/data/perfil";

const geist = Geist({ subsets: ["latin"], variable: "--fuente-geist" });

export const metadata: Metadata = {
  title: `${perfil.nombre} — ${perfil.rol}`,
  description: perfil.subtitulo,
  openGraph: {
    title: `${perfil.nombre} — ${perfil.rol}`,
    description: perfil.subtitulo,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="font-sans">
        <FondoAnimado />
        {children}
      </body>
    </html>
  );
}
