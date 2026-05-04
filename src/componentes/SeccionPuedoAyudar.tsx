/**
 * SeccionPuedoAyudar
 * Layout de dos columnas: imagen de perros a la izquierda,
 * lista de formas de ayudar con checkboxes a la derecha.
 */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SeccionAnimada } from "./HookAnimacionScroll";

const FORMAS_AYUDAR = [
  {
    titulo: "Donaciones",
    descripcion: "Contribuí con dinero, alimentos o insumos veterinarios.",
  },
  {
    titulo: "Amadrinar",
    descripcion: "Amadrinando / apadrinando castraciones.",
  },
  {
    titulo: "Difusión",
    descripcion: "Difundiendo en redes sociales y entre tus contactos.",
  },
  {
    titulo: "Colaborador",
    descripcion: "Colaborando en eventos, traslados y organización.",
  },
  { titulo: "Voluntarios", descripcion: "Sumándote como voluntario/a." },
  {
    titulo: "Hogar de Transito",
    descripcion: "Ofreciendo tránsito a animales rescatados.",
  },
  { titulo: "Sponsor", descripcion: "Siendo sponsor de nuestros proyectos." },
];

export default function SeccionPuedoAyudar() {
  return (
    <Box
      id="puedo-ayudar"
      component="section"
      aria-labelledby="titulo-puedo-ayudar"
      sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <SeccionAnimada>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              id="titulo-puedo-ayudar"
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "text.primary",
              }}
            >
              ¿Cómo Podés Ayudar?
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
          </Box>
        </SeccionAnimada>

        <Grid container spacing={5} alignItems="center">
          {/* Imagen izquierda */}
          <Grid size={{ xs: 12, md: 5 }}>
            <SeccionAnimada>
              <Box
                component="img"
                src="/perros-adopcion.webp"
                alt="Perros rescatados esperando un hogar"
                sx={{
                  width: "100%",
                  height: { xs: 280, md: 420 },
                  objectFit: "cover",
                  borderRadius: 2,
                  display: "block",
                }}
              />
            </SeccionAnimada>
          </Grid>

          {/* Lista derecha */}
          <Grid size={{ xs: 12, md: 7 }}>
            <SeccionAnimada demora={0.1}>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Hay muchas formas de sumarse a la causa. Cada acción, grande o
                pequeña, hace una diferencia real en la vida de los animales.
              </Typography>
              <List
                disablePadding
                aria-label="Formas de ayudar a Misión Animal"
              >
                {FORMAS_AYUDAR.map((forma) => (
                  <ListItem
                    key={forma.titulo}
                    alignItems="flex-start"
                    disableGutters
                    sx={{ mb: 1 }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                      <CheckCircleIcon
                        sx={{ color: "primary.main" }}
                        aria-hidden="true"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          color="text.primary"
                        >
                          {forma.titulo}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          {forma.descripcion}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon aria-hidden="true" />}
                href="https://wa.me/5493624902691"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 3,
                  bgcolor: "#25D366",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#1DA851" },
                  "&:focus-visible": {
                    outline: "3px solid",
                    outlineColor: "primary.main",
                    outlineOffset: "2px",
                  },
                }}
                aria-label="Contactar a Misión Animal por WhatsApp"
              >
                Escribinos por WhatsApp
              </Button>
            </SeccionAnimada>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
