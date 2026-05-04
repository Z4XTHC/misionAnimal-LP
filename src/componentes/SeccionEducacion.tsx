/**
 * SeccionEducacion
 * Sección de educación y activismo: charlas en escuelas
 * y eventos comunitarios.
 */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SchoolIcon from "@mui/icons-material/School";
import CampaignIcon from "@mui/icons-material/Campaign";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { SeccionAnimada } from "./HookAnimacionScroll";

const ACTIVIDADES = [
  {
    icono: <SchoolIcon sx={{ fontSize: 40 }} />,
    titulo: "Sembramos conciencia",
    descripcion:
      "Charlas en escuelas y jardines para educar desde la infancia sobre el respeto y cuidado animal.",
  },
  {
    icono: <PeopleIcon sx={{ fontSize: 40 }} />,
    titulo: "Participación comunitaria",
    descripcion:
      "Talleres, ferias y eventos donde compartimos información y promovemos la tenencia responsable.",
  },
  {
    icono: <CampaignIcon sx={{ fontSize: 40 }} />,
    titulo: "Activismo en acción",
    descripcion:
      "Presencia en calles y redes sociales para visibilizar problemáticas y defender los derechos de los animales.",
  },
  {
    icono: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
    titulo: "Jornadas especiales",
    descripcion:
      "Organizamos jornadas temáticas y actividades recreativas para toda la familia, fomentando el respeto y la empatía animal.",
  },
];

export default function SeccionEducacion() {
  return (
    <Box
      id="educacion"
      component="section"
      aria-labelledby="titulo-educacion"
      sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <SeccionAnimada>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              id="titulo-educacion"
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "text.primary",
              }}
            >
              Educación y Activismo
            </Typography>
            <Divider
              sx={{
                borderColor: "secondary.main",
                width: 60,
                mx: "auto",
                mb: 3,
                borderWidth: 2,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 620,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Creemos que el cambio real comienza con la educación. Por eso
              llevamos nuestra voz a escuelas, plazas y eventos para construir
              una cultura de respeto hacia todos los seres vivos.
            </Typography>
          </Box>
        </SeccionAnimada>

        <Grid container spacing={3}>
          {ACTIVIDADES.map((act, idx) => (
            <Grid key={act.titulo} size={{ xs: 12, sm: 6 }}>
              <SeccionAnimada demora={idx * 0.1}>
                <Card
                  sx={{
                    display: "flex",
                    gap: 2,
                    p: 1,
                    height: "100%",
                    border: "1px solid",
                    borderColor: "divider",
                    "&:hover": { borderColor: "primary.main", boxShadow: 2 },
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  role="article"
                  aria-label={act.titulo}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "flex-start",
                      p: "16px !important",
                    }}
                  >
                    <Box
                      sx={{ color: "primary.main", flexShrink: 0, mt: 0.5 }}
                      aria-hidden="true"
                    >
                      {act.icono}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        color="text.primary"
                        gutterBottom
                      >
                        {act.titulo}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        lineHeight={1.7}
                      >
                        {act.descripcion}
                      </Typography>
                    </Box>
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
