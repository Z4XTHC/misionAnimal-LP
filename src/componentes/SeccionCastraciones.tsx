/**
 * SeccionCastraciones
 * Información sobre el servicio de castraciones, número de WhatsApp
 * para sacar turnos y horarios de atención.
 */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoIcon from "@mui/icons-material/Info";
import { SeccionAnimada } from "./HookAnimacionScroll";

const HORARIOS = [{ dia: "Todos los días", hora: "8:00 - 19:00" }];

export default function SeccionCastraciones() {
  return (
    <Box
      id="castraciones"
      component="section"
      aria-labelledby="titulo-castraciones"
      sx={{ bgcolor: "background.default", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <SeccionAnimada>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              id="titulo-castraciones"
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "text.primary",
              }}
            >
              Castraciones - Esterilizaciones
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
              sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
            >
              Castrar es un acto de amor: previene enfermedades, mejora la
              calidad de vida y evita miles de nacimientos condenados al
              abandono.
            </Typography>
          </Box>
        </SeccionAnimada>

        <Grid container spacing={4} alignItems="stretch">
          {/* Imagen de gatos */}
          <Grid size={{ xs: 12, md: 5 }}>
            <SeccionAnimada>
              <Box
                component="img"
                src="/gatos-castracion.webp"
                alt="Gatos rescatados que se benefician del programa de castración"
                sx={{
                  width: "100%",
                  height: { xs: 260, md: "100%" },
                  minHeight: 300,
                  objectFit: "cover",
                  borderRadius: 2,
                  display: "block",
                }}
              />
            </SeccionAnimada>
          </Grid>

          {/* Info turno */}
          <Grid size={{ xs: 12, md: 7 }}>
            <SeccionAnimada demora={0.1}>
              {/* Tarjeta WhatsApp para turnos */}
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#7DBFB8",
                  p: 3,
                  borderRadius: 2,
                  mb: 3,
                  border: "1px solid",
                  borderColor: "primary.main",
                }}
                role="region"
                aria-label="Información para sacar turno de castración"
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <EventAvailableIcon
                    sx={{ color: "#FFFFFF" }}
                    aria-hidden="true"
                  />
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: "#FFFFFF" }}
                  >
                    Sacar Turno
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#FFFFFF", mb: 2, lineHeight: 1.7 }}
                >
                  Reservá tu turno de castración directamente por WhatsApp. El
                  servicio tiene un costo accesible y se realiza en
                  instalaciones veterinarias habilitadas.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon aria-hidden="true" />}
                  href="https://wa.me/5493624902691"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "#25D366",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "1rem",
                    "&:hover": { bgcolor: "#1DA851" },
                    "&:focus-visible": {
                      outline: "3px solid #FFFFFF",
                      outlineOffset: "2px",
                    },
                  }}
                  aria-label="Llamar al 3624-902691 para sacar turno de castración"
                >
                  Contactanos
                </Button>
              </Paper>

              {/* Horarios */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                }}
                role="region"
                aria-label="Horarios de atención"
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <AccessTimeIcon
                    sx={{ color: "primary.main" }}
                    aria-hidden="true"
                  />
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                  >
                    Horarios de Atención
                  </Typography>
                </Box>
                {HORARIOS.map((h) => (
                  <Box
                    key={h.dia}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 1,
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      color="text.primary"
                    >
                      {h.dia}
                    </Typography>
                    <Chip
                      label={h.hora}
                      size="small"
                      sx={{
                        bgcolor: "primary.main",
                        color: "#FFFFFF",
                        fontWeight: 500,
                      }}
                      aria-label={`${h.dia}: ${h.hora}`}
                    />
                  </Box>
                ))}

                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    gap: 1,
                    alignItems: "flex-start",
                  }}
                >
                  <InfoIcon
                    sx={{
                      color: "secondary.main",
                      fontSize: 18,
                      mt: 0.3,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <Typography variant="body2" color="text.secondary">
                    Los turnos son limitados. Se recomienda reservar con
                    anticipación.
                    <br />
                    <strong>
                      Horario comercial: 8:00 a 19:00. No se aceptan llamadas,
                      solo mensajes.
                    </strong>
                  </Typography>
                </Box>
              </Paper>
            </SeccionAnimada>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
