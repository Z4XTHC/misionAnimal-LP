/**
 * tema.ts
 * Configuración del tema MUI para Misión Animal.
 * Colores extraídos de la identidad visual de la organización.
 */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

/** Crea el tema claro (por defecto) de la aplicación */
function crearTema(modoOscuro: boolean, altoContraste: boolean) {
  const primario = altoContraste ? '#005F5A' : '#7DBFB8';
  const secundario = altoContraste ? '#5C3D1E' : '#8D735B';
  const fondoPrincipal = modoOscuro ? '#121212' : altoContraste ? '#000000' : '#FAFAFA';
  const fondoPapel = modoOscuro ? '#1E1E1E' : altoContraste ? '#000000' : '#FFFFFF';
  const textoColor = modoOscuro ? '#FFFFFF' : altoContraste ? '#FFFFFF' : '#212121';

  const tema = createTheme({
    palette: {
      mode: modoOscuro || altoContraste ? 'dark' : 'light',
      primary: {
        main: primario,
        contrastText: altoContraste ? '#FFFF00' : '#FFFFFF',
      },
      secondary: {
        main: secundario,
        contrastText: '#FFFFFF',
      },
      background: {
        default: fondoPrincipal,
        paper: fondoPapel,
      },
      text: {
        primary: textoColor,
        secondary: modoOscuro ? '#B0BEC5' : altoContraste ? '#FFFF00' : '#616161',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 500 },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 500 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { boxShadow: '0 1px 3px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.08)' },
        },
      },
    },
  });

  return responsiveFontSizes(tema);
}

export default crearTema;
