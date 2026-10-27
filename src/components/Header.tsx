"use client";

import { useEffect, useState } from "react";
import { Github } from "@/components/Marcas";
import { perfil } from "@/data/perfil";

const enlaces = [
  { href: "#proyectos", texto: "Proyectos" },
  { href: "#stack", texto: "Stack" },
  { href: "#sobre-mi", texto: "Sobre mí" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Header() {
  const [compacto, setCompacto] = useState(false);

  useEffect(() => {
    const alScroll = () => setCompacto(window.scrollY > 24);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      {/* El hero asoma por el hueco de encima de la pildora: lo difuminamos */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-fondo via-fondo/80 to-transparent transition-opacity duration-500 ${
          compacto ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 ${
          compacto ? "cristal shadow-[0_8px_32px_#00000066]" : "border border-transparent"
        }`}
      >
        <a href="#inicio" className="text-sm font-semibold tracking-tight">
          Orozco<span className="text-acento">Dev</span>
        </a>

        <ul className="hidden items-center gap-1 sm:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                className="rounded-lg px-3 py-1.5 text-sm text-apagado transition-colors duration-200 hover:bg-white/5 hover:text-texto"
              >
                {e.texto}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={perfil.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub ${perfil.githubUsuario}`}
          className="flex items-center gap-2 rounded-lg border border-borde bg-superficie px-3 py-1.5 text-sm text-apagado transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-600 hover:text-texto"
        >
          <Github className="size-4" />
          <span className="hidden sm:inline">{perfil.githubUsuario}</span>
        </a>
      </nav>
    </header>
  );
}
