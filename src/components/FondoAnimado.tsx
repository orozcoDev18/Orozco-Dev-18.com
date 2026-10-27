"use client";

import { useEffect, useRef } from "react";

/**
 * Fondo de la página: partículas a la deriva, dos auroras que respiran y un foco
 * que sigue al cursor. Todo CSS; aquí solo se publica la posición del ratón.
 */
export default function FondoAnimado() {
  const foco = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Un puntero fino es lo único que mueve el foco: en táctil no hay nada que seguir.
    if (!window.matchMedia("(hover: hover)").matches) return;

    let pendiente = 0;
    const alMover = (e: PointerEvent) => {
      cancelAnimationFrame(pendiente);
      pendiente = requestAnimationFrame(() => {
        foco.current?.style.setProperty("--x", `${e.clientX}px`);
        foco.current?.style.setProperty("--y", `${e.clientY}px`);
        foco.current?.style.setProperty("opacity", "1");
      });
    };

    window.addEventListener("pointermove", alMover, { passive: true });
    return () => {
      cancelAnimationFrame(pendiente);
      window.removeEventListener("pointermove", alMover);
    };
  }, []);

  return (
    <div aria-hidden className="fondo-animado">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="particulas particulas-1" />
      <div className="particulas particulas-2" />
      <div className="particulas particulas-3" />
      <div ref={foco} className="foco" />
    </div>
  );
}
