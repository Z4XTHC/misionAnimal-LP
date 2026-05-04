/**
 * App
 * Componente raíz de Misión Animal.
 * Integra el proveedor de accesibilidad, el tema dinámico y todas las secciones.
 */
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ProveedorAccesibilidad,
  useAccesibilidad,
} from "./contextos/ContextoAccesibilidad";
import crearTema from "./tema/tema";
import BarraNavegacion from "./componentes/BarraNavegacion";
import SeccionHero from "./componentes/SeccionHero";
import SeccionQuienesSomos from "./componentes/SeccionQuienesSomos";
import SeccionComoAyudamos from "./componentes/SeccionComoAyudamos";
import SeccionPuedoAyudar from "./componentes/SeccionPuedoAyudar";
import SeccionCastraciones from "./componentes/SeccionCastraciones";
import SeccionEducacion from "./componentes/SeccionEducacion";
import SeccionNoticias from "./componentes/SeccionNoticias";
import SeccionMaltrato from "./componentes/SeccionMaltrato";
import SeccionContacto from "./componentes/SeccionContacto";
import MenuAccesibilidad from "./componentes/MenuAccesibilidad";

/** Componente interno que accede al contexto y aplica el tema correspondiente */
function AppConTema() {
  const { modoOscuro, altoContraste } = useAccesibilidad();
  const tema = crearTema(modoOscuro, altoContraste);

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />

      <BarraNavegacion />

      <main id="contenido-principal">
        <SeccionHero />
        <SeccionQuienesSomos />
        <SeccionComoAyudamos />
        <SeccionPuedoAyudar />
        <SeccionCastraciones />
        <SeccionEducacion />
        <SeccionNoticias />
        <SeccionMaltrato />
      </main>

      <SeccionContacto />
      <MenuAccesibilidad />
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ProveedorAccesibilidad>
      <AppConTema />
    </ProveedorAccesibilidad>
  );
}
