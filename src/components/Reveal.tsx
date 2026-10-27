"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Aparición al entrar en pantalla. Una sola vez, con retardo opcional en cascada. */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const quieto = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={quieto ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
