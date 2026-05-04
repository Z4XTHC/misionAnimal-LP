/**
 * SeccionMaltrato
 * Sección de alerta con instrucciones claras sobre cómo denunciar
 * casos de maltrato animal en comisaría o fiscalía.
 */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import GavelIcon from "@mui/icons-material/Gavel";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SeccionAnimada } from "./HookAnimacionScroll";

const PASOS_DENUNCIA = [
  {
    titulo: "Documentar",
    descripcion:
      "Tomá fotos o videos del maltrato si es seguro hacerlo. Anotá la fecha, hora y lugar del hecho.",
  },
  {
    titulo: "Llamar al 911",
    descripcion:
      "En caso de maltrato flagrante, llamá al 911 para que la policía intervenga de inmediato.",
  },
  {
    titulo: "Ir a la Comisaría",
    descripcion:
      "Presentate en la comisaría más cercana y realizá la denuncia formal. En Argentina, el maltrato animal es delito (Ley 14.346).",
  },
  {
    titulo: "Fiscalía",
    descripcion:
      "Si la comisaría no actúa, podés radicar la denuncia directamente en la Fiscalía de turno.",
  },
  {
    titulo: "Contactar a Misión Animal",
    descripcion:
      "Avisanos por WhatsApp para que podamos acompañarte en el proceso y coordinar asistencia al animal.",
  },
];

export default function SeccionMaltrato() {
  return (
    <Box
      id="maltrato"
      component="section"
      aria-labelledby="titulo-maltrato"
      sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <SeccionAnimada>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <WarningAmberIcon
                sx={{ fontSize: 48, color: "warning.main" }}
                aria-hidden="true"
              />
            </Box>
            <Typography
              id="titulo-maltrato"
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "text.primary",
              }}
            >
              Maltrato Animal
            </Typography>
            <Divider
              sx={{
                borderColor: "warning.main",
                width: 60,
                mx: "auto",
                mb: 3,
                borderWidth: 2,
              }}
            />
          </Box>
        </SeccionAnimada>

        <Grid container spacing={4}>
          {/* Alerta legal */}
          <Grid size={{ xs: 12 }}>
            <SeccionAnimada>
              <Alert
                severity="warning"
                icon={<GavelIcon aria-hidden="true" />}
                sx={{ mb: 3, borderRadius: 2 }}
                role="note"
                aria-live="polite"
              >
                <Typography variant="body1" fontWeight={600}>
                  En Argentina, el maltrato animal es un delito penal según la
                  Ley 14.346.
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  Quienes maltraten o abandonen animales pueden enfrentar penas
                  de prisión de hasta 2 años.
                </Typography>
              </Alert>
            </SeccionAnimada>
          </Grid>

          {/* Pasos */}
          <Grid size={{ xs: 12, md: 7 }}>
            <SeccionAnimada demora={0.1}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="text.primary"
                  gutterBottom
                >
                  ¿Cómo hacer una denuncia?
                </Typography>
                <Stepper
                  orientation="vertical"
                  nonLinear
                  aria-label="Pasos para denunciar maltrato animal"
                >
                  {PASOS_DENUNCIA.map((paso, idx) => (
                    <Step key={paso.titulo} active completed={false}>
                      <StepLabel
                        StepIconProps={{
                          sx: {
                            color: "primary.main",
                            "&.Mui-active": { color: "primary.main" },
                          },
                        }}
                        aria-label={`Paso ${idx + 1}: ${paso.titulo}`}
                      >
                        <Typography fontWeight={600} color="text.primary">
                          {paso.titulo}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ pb: 1 }}
                        >
                          {paso.descripcion}
                        </Typography>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </Paper>
            </SeccionAnimada>
          </Grid>

          {/* CTA lateral */}
          <Grid size={{ xs: 12, md: 5 }}>
            <SeccionAnimada demora={0.2}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: "#7DBFB8",
                  borderRadius: 2,
                  textAlign: "center",
                  mb: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                }}
                role="complementary"
                aria-label="Contacto de emergencia"
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ color: "#FFFFFF" }}
                >
                  ¿Presenciás un caso ahora?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Contactanos inmediatamente. Podemos asesorarte y ayudarte a
                  actuar.
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
                    "&:hover": { bgcolor: "#1DA851" },
                    "&:focus-visible": {
                      outline: "3px solid #FFFFFF",
                      outlineOffset: "2px",
                    },
                  }}
                  aria-label="Reportar maltrato animal por WhatsApp al 3624-902691"
                >
                  Reportar ahora
                </Button>
              </Paper>
            </SeccionAnimada>
            <SeccionAnimada demora={0.3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: "secondary.main",
                  borderRadius: 2,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                }}
                role="complementary"
                aria-label="Ofrecer hogar de tránsito"
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ color: "#FFFFFF", mb: 1 }}
                >
                  🏠 ¡Sumate como hogar de tránsito!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.95)" }}
                >
                  Ofrecé tu casa para dar refugio temporal a animales
                  rescatados. ¡Tu ayuda salva vidas!
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
                    "&:hover": { bgcolor: "#1DA851" },
                    "&:focus-visible": {
                      outline: "3px solid #FFFFFF",
                      outlineOffset: "2px",
                    },
                  }}
                  aria-label="Ofrecer hogar de tránsito por WhatsApp al 3624-902691"
                >
                  Quiero ayudar
                </Button>
              </Paper>
            </SeccionAnimada>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
