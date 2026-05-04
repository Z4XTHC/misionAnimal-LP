/**
 * SeccionComoAyudamos
 * Grid de 4 tarjetas con los principales servicios de la ONG:
 * Hogares de tránsito, Castraciones, Adopción y Charlas educativas.
 */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolIcon from "@mui/icons-material/School";
import { SeccionAnimada } from "./HookAnimacionScroll";

const SERVICIOS = [
  {
    icono: <HomeIcon sx={{ fontSize: 48 }} />,
    titulo: "Hogares de Tránsito",
    descripcion:
      "Coordinamos una red de familias que acogen temporalmente animales rescatados mientras esperan ser adoptados.",
  },
  {
    icono: <MedicalServicesIcon sx={{ fontSize: 48 }} />,
    titulo: "Castraciones",
    descripcion:
      "Organizamos campañas de castración a bajo costo para controlar la superpoblación y mejorar la salud animal.",
  },
  {
    icono: <FavoriteIcon sx={{ fontSize: 48 }} />,
    titulo: "Adopción",
    descripcion:
      "Ayudamos a nuestros rescatados a encontrar un hogar. ¡Adoptar es salvar vidas!",
  },
  {
    icono: <SchoolIcon sx={{ fontSize: 48 }} />,
    titulo: "Charlas Educativas",
    descripcion:
      "Charlas educativas en escuelas y comunidades. Activismo y campañas de concientización. Eventos solidarios y sorteos para recaudar fondos.",
  },
];

export default function SeccionComoAyudamos() {
  return (
    <Box
      id="como-ayudamos"
      component="section"
      aria-labelledby="titulo-como-ayudamos"
      sx={{ bgcolor: "background.default", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <SeccionAnimada>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              id="titulo-como-ayudamos"
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "text.primary",
              }}
            >
              ¿Cómo Ayudamos?
            </Typography>
            <Divider
              sx={{
                borderColor: "primary.main",
                width: 60,
                mx: "auto",
                mb: 3,
                borderWidth: 2,
              }}
            />
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 560, mx: "auto" }}
            >
              Cuatro pilares de acción para un mundo más justo con los animales.
            </Typography>
          </Box>
        </SeccionAnimada>

        <Grid container spacing={3}>
          {SERVICIOS.map((servicio, idx) => (
            <Grid key={servicio.titulo} size={{ xs: 12, sm: 6, md: 3 }}>
              <SeccionAnimada demora={idx * 0.1}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 1,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                  role="article"
                  aria-label={servicio.titulo}
                >
                  <CardContent>
                    <Box
                      sx={{ color: "primary.main", mb: 2 }}
                      aria-hidden="true"
                    >
                      {servicio.icono}
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      color="text.primary"
                    >
                      {servicio.titulo}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      lineHeight={1.7}
                    >
                      {servicio.descripcion}
                    </Typography>
                  </CardContent>
                </Card>
              </SeccionAnimada>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
