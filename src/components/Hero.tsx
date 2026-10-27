"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { Github } from "@/components/Marcas";
import { perfil } from "@/data/perfil";

export default function Hero() {
  const quieto = useReducedMotion();
  const entra = (delay: number) =>
    quieto
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pt-24 pb-16 text-center"
    >
      <div className="rejilla pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[min(90vw,42rem)] -translate-x-1/2 -translate-y-1/3 rounded-full bg-acento/15 blur-[120px]" />

      <motion.div
        {...entra(0)}
        className="cristal mb-7 flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-apagado"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        Available for new opportunities
      </motion.div>

      <motion.h1
        {...entra(0.08)}
        className="max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
      >
        <span className="bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-transparent">
          {perfil.nombre}
        </span>
        <span className="mt-2 block text-2xl text-apagado sm:text-3xl md:text-4xl">
          {perfil.rol}
        </span>
      </motion.h1>

      <motion.p
        {...entra(0.16)}
        className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-apagado sm:text-lg"
      >
        {perfil.subtitulo}
      </motion.p>

      <motion.div {...entra(0.24)} className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
        <a
          href="#proyectos"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_#ffffff26] sm:w-auto"
        >
          Ver Proyectos
          <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
        <a
          href={perfil.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-borde bg-superficie px-6 py-3 text-sm font-medium text-texto transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-800 sm:w-auto"
        >
          <Github className="size-4" />
          GitHub / {perfil.githubUsuario}
        </a>
      </motion.div>

      <motion.p {...entra(0.32)} className="mt-10 flex items-center gap-1.5 text-sm text-zinc-500">
        <MapPin className="size-3.5" />
        {perfil.ubicacion}
      </motion.p>
    </section>
  );
}
