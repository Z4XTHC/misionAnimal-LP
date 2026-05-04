/**
 * SeccionNoticias
 * Lista de efemérides y fechas importantes relacionadas
 * con los derechos y bienestar animal.
 */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PetsIcon from '@mui/icons-material/Pets';
import { SeccionAnimada } from './HookAnimacionScroll';

const EFEMERIDES = [
  { fecha: '29 de Enero', nombre: 'Día Mundial del Gato Doméstico', categoria: 'Gatos' },
  { fecha: '20 de Febrero', nombre: 'Día del Gato', categoria: 'Gatos' },
  { fecha: '23 de Marzo', nombre: 'Día Mundial del Meteorito (y de las Mascotas Exóticas)', categoria: 'General' },
  { fecha: '28 de Abril', nombre: 'Día Mundial de la Seguridad de las Mascotas', categoria: 'General' },
  { fecha: '29 de Abril', nombre: 'Día Internacional del Perro', categoria: 'Perros' },
  { fecha: '4 de Octubre', nombre: 'Día Mundial de los Animales', categoria: 'Global' },
  { fecha: '29 de Octubre', nombre: 'Día del Gato Negro', categoria: 'Gatos' },
  { fecha: '10 de Diciembre', nombre: 'Día Internacional de los Derechos Animales', categoria: 'Derechos' },
  { fecha: '2 de Noviembre', nombre: 'Día del Perro de Raza', categoria: 'Perros' },
  { fecha: '11 de Noviembre', nombre: 'Día Nacional del Animal (Argentina)', categoria: 'Argentina' },
];

const COLORES_CATEGORIA: Record<string, string> = {
  Gatos: '#7DBFB8',
  Perros: '#8D735B',
  General: '#78909C',
  Global: '#4CAF50',
  Derechos: '#E53935',
  Argentina: '#1976D2',
};

export default function SeccionNoticias() {
  return (
    <Box
      id="noticias"
      component="section"
      aria-labelledby="titulo-noticias"
      sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <SeccionAnimada>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              id="titulo-noticias"
              variant="h2"
              component="h2"
              sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' }, color: 'text.primary' }}
            >
              Noticias y Efemérides
            </Typography>
            <Divider sx={{ borderColor: 'primary.main', width: 60, mx: 'auto', mb: 3, borderWidth: 2 }} />
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
              Fechas importantes para recordar y celebrar los derechos de los animales a lo largo del año.
            </Typography>
          </Box>
        </SeccionAnimada>

        <Grid container spacing={2}>
          {EFEMERIDES.map((efemeride, idx) => (
            <Grid key={efemeride.nombre} size={{ xs: 12, sm: 6, md: 4 }}>
              <SeccionAnimada demora={idx * 0.05}>
                <ListItem
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    mb: 0,
                    transition: 'box-shadow 0.2s',
                    '&:hover': { boxShadow: 2 },
                  }}
                  component="article"
                  aria-label={`${efemeride.fecha}: ${efemeride.nombre}`}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <PetsIcon sx={{ color: COLORES_CATEGORIA[efemeride.categoria] || 'primary.main' }} aria-hidden="true" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CalendarMonthIcon sx={{ fontSize: 14 }} aria-hidden="true" />
                          {efemeride.fecha}
                        </Typography>
                        <Chip
                          label={efemeride.categoria}
                          size="small"
                          sx={{
                            bgcolor: COLORES_CATEGORIA[efemeride.categoria] || '#7DBFB8',
                            color: '#FFFFFF',
                            fontSize: '0.65rem',
                            height: 18,
                          }}
                          aria-label={`Categoría: ${efemeride.categoria}`}
                        />
                      </Box>
                    }
                    secondary={
                      <Typography variant="body2" fontWeight={500} color="text.primary">
                        {efemeride.nombre}
                      </Typography>
                    }
                  />
                </ListItem>
              </SeccionAnimada>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
