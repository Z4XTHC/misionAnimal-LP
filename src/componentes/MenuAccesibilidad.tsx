/**
 * MenuAccesibilidad
 * Botón flotante que despliega un panel de opciones de accesibilidad:
 * - Aumentar/Disminuir tamaño de fuente
 * - Activar/Desactivar Modo Oscuro
 * - Activar/Desactivar Alto Contraste
 * Ubicado en la esquina inferior derecha de la pantalla.
 */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ContrastIcon from '@mui/icons-material/Contrast';
import CloseIcon from '@mui/icons-material/Close';
import { useAccesibilidad } from '../contextos/ContextoAccesibilidad';

export default function MenuAccesibilidad() {
  const [abierto, setAbierto] = useState(false);
  const { tamanoFuente, modoOscuro, altoContraste, aumentarFuente, disminuirFuente, toggleModoOscuro, toggleAltoContraste } =
    useAccesibilidad();

  return (
    <Box
      sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1400 }}
      role="complementary"
      aria-label="Menú de accesibilidad"
    >
      {/* Panel desplegable */}
      <Fade in={abierto}>
        <Paper
          elevation={4}
          sx={{
            position: 'absolute',
            bottom: 64,
            right: 0,
            width: 240,
            borderRadius: 2,
            overflow: 'hidden',
            display: abierto ? 'block' : 'none',
          }}
          role="dialog"
          aria-label="Opciones de accesibilidad"
          aria-modal="false"
        >
          {/* Encabezado */}
          <Box
            sx={{
              bgcolor: 'primary.main',
              px: 2,
              py: 1.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#FFFFFF' }}>
              Accesibilidad
            </Typography>
            <IconButton
              size="small"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar menú de accesibilidad"
              sx={{ color: '#FFFFFF', p: 0.5 }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Tamaño de fuente */}
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Tamaño de texto
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              <Tooltip title="Disminuir texto">
                <span>
                  <IconButton
                    onClick={disminuirFuente}
                    disabled={tamanoFuente <= 12}
                    aria-label={`Disminuir tamaño de fuente, tamaño actual ${tamanoFuente}px`}
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main' },
                    }}
                    size="small"
                  >
                    <TextDecreaseIcon fontSize="small" />
                  </IconButton>
                </span>
              </Tooltip>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ flex: 1, textAlign: 'center', color: 'text.primary' }}
                aria-live="polite"
                aria-label={`Tamaño de fuente: ${tamanoFuente} píxeles`}
              >
                {tamanoFuente}px
              </Typography>
              <Tooltip title="Aumentar texto">
                <span>
                  <IconButton
                    onClick={aumentarFuente}
                    disabled={tamanoFuente >= 24}
                    aria-label={`Aumentar tamaño de fuente, tamaño actual ${tamanoFuente}px`}
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main' },
                    }}
                    size="small"
                  >
                    <TextIncreaseIcon fontSize="small" />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>
          </Box>

          <Divider />

          {/* Modo oscuro */}
          <Box
            sx={{
              px: 2,
              py: 1.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { bgcolor: 'action.hover' },
            }}
            component="button"
            onClick={toggleModoOscuro}
            aria-pressed={modoOscuro}
            aria-label={modoOscuro ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}
            style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {modoOscuro ? (
                <LightModeIcon sx={{ color: 'warning.main' }} aria-hidden="true" />
              ) : (
                <DarkModeIcon sx={{ color: 'text.secondary' }} aria-hidden="true" />
              )}
              <Typography variant="body2" fontWeight={500} color="text.primary">
                {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
              </Typography>
            </Box>
            <Box
              sx={{
                width: 36,
                height: 20,
                borderRadius: 10,
                bgcolor: modoOscuro ? 'primary.main' : 'action.disabledBackground',
                position: 'relative',
                transition: 'background-color 0.2s',
              }}
              aria-hidden="true"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 2,
                  left: modoOscuro ? 18 : 2,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  bgcolor: '#FFFFFF',
                  transition: 'left 0.2s',
                  boxShadow: 1,
                }}
              />
            </Box>
          </Box>

          <Divider />

          {/* Alto contraste */}
          <Box
            sx={{
              px: 2,
              py: 1.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { bgcolor: 'action.hover' },
            }}
            component="button"
            onClick={toggleAltoContraste}
            aria-pressed={altoContraste}
            aria-label={altoContraste ? 'Desactivar alto contraste' : 'Activar alto contraste'}
            style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <ContrastIcon sx={{ color: altoContraste ? 'primary.main' : 'text.secondary' }} aria-hidden="true" />
              <Typography variant="body2" fontWeight={500} color="text.primary">
                Alto Contraste
              </Typography>
            </Box>
            <Box
              sx={{
                width: 36,
                height: 20,
                borderRadius: 10,
                bgcolor: altoContraste ? 'primary.main' : 'action.disabledBackground',
                position: 'relative',
                transition: 'background-color 0.2s',
              }}
              aria-hidden="true"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 2,
                  left: altoContraste ? 18 : 2,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  bgcolor: '#FFFFFF',
                  transition: 'left 0.2s',
                  boxShadow: 1,
                }}
              />
            </Box>
          </Box>
        </Paper>
      </Fade>

      {/* FAB principal */}
      <Tooltip title={abierto ? 'Cerrar accesibilidad' : 'Opciones de accesibilidad'} placement="left">
        <Fab
          color="primary"
          onClick={() => setAbierto((prev) => !prev)}
          aria-label={abierto ? 'Cerrar menú de accesibilidad' : 'Abrir menú de accesibilidad'}
          aria-expanded={abierto}
          aria-controls="menu-accesibilidad-panel"
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: '#5FA8A0' },
            '&:focus-visible': { outline: '3px solid', outlineColor: 'secondary.main', outlineOffset: '2px' },
          }}
          size="medium"
        >
          <AccessibilityNewIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}
