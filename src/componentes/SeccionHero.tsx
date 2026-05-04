/**
 * SeccionHero
 * Sección principal con imagen de fondo, overlay suave,
 * título de la ONG y slogan con tipografía robusta.
 */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

/** Scroll suave al hacer clic en el CTA */
function scrollASeccion(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function SeccionHero() {
  return (
    <Box
      id="inicio"
      component="section"
      aria-label="Sección principal de Misión Animal"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/hero-animals.webp"
        alt=""
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Overlay suave */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.48)',
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          px: { xs: 3, md: 6 },
          maxWidth: 800,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Misión Animal
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 400,
              letterSpacing: 2,
              textTransform: 'uppercase',
              mb: 4,
              fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
            }}
          >
            Conciencia · Respeto · Amor · Justicia
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollASeccion('quienes-somos')}
            sx={{
              bgcolor: 'primary.main',
              color: '#FFFFFF',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 1,
              '&:hover': { bgcolor: '#5FA8A0' },
              '&:focus-visible': { outline: '3px solid #FFFFFF', outlineOffset: '2px' },
            }}
            aria-label="Conocer más sobre Misión Animal"
          >
            Conocer más
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
