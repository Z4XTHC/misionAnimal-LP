/**
 * HookAnimacionScroll
 * Hook personalizado que detecta si un elemento es visible en el viewport
 * para activar animaciones de entrada con Framer Motion.
 */
import { useRef, useEffect, useState } from 'react';

/** Retorna [ref, esVisible] para animar al hacer scroll */
export function useAnimacionScroll(umbral = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [esVisible, setEsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: umbral }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [umbral]);

  return { ref, esVisible };
}

/**
 * SeccionAnimada
 * Envuelve contenido con animación fade-in + slide-up al entrar al viewport.
 */
import { motion } from 'framer-motion';
import React from 'react';

interface SeccionAnimadaProps {
  children: React.ReactNode;
  demora?: number;
  className?: string;
}

export function SeccionAnimada({ children, demora = 0, className }: SeccionAnimadaProps) {
  const { ref, esVisible } = useAnimacionScroll();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={esVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: demora, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
