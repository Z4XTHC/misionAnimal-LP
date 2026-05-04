/**
 * ContextoAccesibilidad
 * Provee estado global de accesibilidad: tamaño de fuente, modo oscuro y alto contraste.
 * Persiste las preferencias del usuario en localStorage.
 */
import React, { createContext, useContext, useState, useEffect } from 'react';

interface EstadoAccesibilidad {
  tamanoFuente: number;
  modoOscuro: boolean;
  altoContraste: boolean;
  aumentarFuente: () => void;
  disminuirFuente: () => void;
  toggleModoOscuro: () => void;
  toggleAltoContraste: () => void;
}

const ContextoAccesibilidad = createContext<EstadoAccesibilidad>({
  tamanoFuente: 16,
  modoOscuro: false,
  altoContraste: false,
  aumentarFuente: () => {},
  disminuirFuente: () => {},
  toggleModoOscuro: () => {},
  toggleAltoContraste: () => {},
});

/** Hook para consumir el contexto de accesibilidad desde cualquier componente */
export const useAccesibilidad = () => useContext(ContextoAccesibilidad);

export function ProveedorAccesibilidad({ children }: { children: React.ReactNode }) {
  const [tamanoFuente, setTamanoFuente] = useState<number>(() => {
    const guardado = localStorage.getItem('a11y-tamano-fuente');
    return guardado ? parseInt(guardado) : 16;
  });

  const [modoOscuro, setModoOscuro] = useState<boolean>(() => {
    return localStorage.getItem('a11y-modo-oscuro') === 'true';
  });

  const [altoContraste, setAltoContraste] = useState<boolean>(() => {
    return localStorage.getItem('a11y-alto-contraste') === 'true';
  });

  /** Aplica el tamaño de fuente base al elemento <html> para que rem escale globalmente */
  useEffect(() => {
    document.documentElement.style.fontSize = `${tamanoFuente}px`;
    localStorage.setItem('a11y-tamano-fuente', String(tamanoFuente));
  }, [tamanoFuente]);

  useEffect(() => {
    localStorage.setItem('a11y-modo-oscuro', String(modoOscuro));
  }, [modoOscuro]);

  useEffect(() => {
    localStorage.setItem('a11y-alto-contraste', String(altoContraste));
    if (altoContraste) {
      document.documentElement.setAttribute('data-alto-contraste', 'true');
    } else {
      document.documentElement.removeAttribute('data-alto-contraste');
    }
  }, [altoContraste]);

  const aumentarFuente = () => setTamanoFuente((prev) => Math.min(prev + 2, 24));
  const disminuirFuente = () => setTamanoFuente((prev) => Math.max(prev - 2, 12));
  const toggleModoOscuro = () => setModoOscuro((prev) => !prev);
  const toggleAltoContraste = () => setAltoContraste((prev) => !prev);

  return (
    <ContextoAccesibilidad.Provider
      value={{ tamanoFuente, modoOscuro, altoContraste, aumentarFuente, disminuirFuente, toggleModoOscuro, toggleAltoContraste }}
    >
      {children}
    </ContextoAccesibilidad.Provider>
  );
}

export default ContextoAccesibilidad;
