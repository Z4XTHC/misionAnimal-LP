/**
 * SeccionQuienesSomos
 * Presenta la misión y valores de la ONG con fondo verde menta,
 * logo circular y texto descriptivo.
 */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SeccionAnimada } from "./HookAnimacionScroll";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import GroupsIcon from "@mui/icons-material/Groups";

const VALORES = [
  {
    icono: <FavoriteIcon />,
    titulo: "Amor",
    descripcion:
      "Cada animal merece ser tratado con compasión y cuidado genuino.",
  },
  {
    icono: <BalanceIcon />,
    titulo: "Justicia",
    descripcion:
      "Trabajamos para que los derechos animales sean reconocidos y respetados.",
  },
  {
    icono: <GroupsIcon />,
    titulo: "Comunidad",
    descripcion:
      "Construimos redes de personas comprometidas con el bienestar animal.",
  },
];

export default function SeccionQuienesSomos() {
  return (
    <Box
      id="quienes-somos"
      component="section"
      aria-labelledby="titulo-quienes-somos"
      sx={{ bgcolor: "#7DBFB8", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <SeccionAnimada>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            {/* Logo circular */}
            <Avatar
              src="/logo.jpeg"
              alt="Logo de Misión Animal"
              sx={{
                width: { xs: 120, md: 160 },
                height: { xs: 120, md: 160 },
                mx: "auto",
                mb: 3,
                border: "4px solid #FFFFFF",
                boxShadow: 3,
                bgcolor: "#FFFFFF",
              }}
            />
            <Typography
              id="titulo-quienes-somos"
              variant="h2"
              component="h2"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.8rem" },
              }}
            >
              Quiénes Somos
            </Typography>
            <Divider
              sx={{
                borderColor: "rgba(255,255,255,0.4)",
                width: 60,
                mx: "auto",
                mb: 3,
                borderWidth: 2,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Somos una organización sin fines de lucro formada por voluntarios.
              Luchamos por los derechos de todos los animales. Nuestro fin:
              educación, respeto, empatía y castraciones masivas para erradicar
              la sobrepoblación animal.
            </Typography>
          </Box>
        </SeccionAnimada>

        {/* Valores */}
        <Grid container spacing={3} justifyContent="center">
          {VALORES.map((valor, idx) => (
            <Grid key={valor.titulo} size={{ xs: 12, sm: 4 }}>
              <SeccionAnimada demora={idx * 0.15}>
                <Box
                  sx={{
                    bgcolor: "rgba(255,255,255,0.2)",
                    borderRadius: 2,
                    p: 3,
                    textAlign: "center",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <Box
                    sx={{ color: "#FFFFFF", mb: 1, "& svg": { fontSize: 36 } }}
                    aria-hidden="true"
                  >
                    {valor.icono}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "#FFFFFF", fontWeight: 700, mb: 1 }}
                  >
                    {valor.titulo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {valor.descripcion}
                  </Typography>
                </Box>
              </SeccionAnimada>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
