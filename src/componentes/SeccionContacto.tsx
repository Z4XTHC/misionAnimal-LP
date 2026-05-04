/**
 * SeccionContacto
 * Footer con información de contacto, redes sociales,
 * WhatsApp y logo de cierre.
 */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PetsIcon from "@mui/icons-material/Pets";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SeccionAnimada } from "./HookAnimacionScroll";

export default function SeccionContacto() {
  return (
    <Box
      id="contactanos"
      component="footer"
      aria-label="Pie de página - Contacto y redes sociales"
      sx={{ bgcolor: "#2D2D2D", color: "#FFFFFF", py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="lg">
        <SeccionAnimada>
          <Grid container spacing={5} justifyContent="space-between">
            {/* Logo y descripción */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
              >
                <Avatar
                  src="/logo.jpeg"
                  alt="Logo de Misión Animal"
                  sx={{ width: 56, height: 56, bgcolor: "#FFFFFF" }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: "#FFFFFF", lineHeight: 1.2 }}
                  >
                    Misión Animal
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#7DBFB8", letterSpacing: 1 }}
                  >
                    RESISTENCIA, CHACO, ARGENTINA
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, mb: 2 }}
              >
                Conciencia · Respeto · Amor · Justicia
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LocationOnIcon
                  sx={{ fontSize: 16, color: "#7DBFB8" }}
                  aria-hidden="true"
                />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Resistencia, Chaco, Argentina
                </Typography>
              </Box>
            </Grid>

            {/* Redes sociales */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ color: "#7DBFB8", mb: 2 }}
              >
                Seguinos
              </Typography>
              <Box
                sx={{ display: "flex", gap: 1, mb: 2 }}
                role="list"
                aria-label="Redes sociales de Misión Animal"
              >
                <IconButton
                  href="https://www.instagram.com/mision.animal.m"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a Misión Animal en Instagram (@mision.animal.m)"
                  sx={{
                    color: "#FFFFFF",
                    bgcolor: "rgba(255,255,255,0.08)",
                    "&:hover": { bgcolor: "#E1306C", color: "#FFFFFF" },
                    "&:focus-visible": {
                      outline: "3px solid #7DBFB8",
                      outlineOffset: "2px",
                    },
                  }}
                  role="listitem"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://www.facebook.com/share/1HxsQSGm39/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a Misión Animal en Facebook"
                  sx={{
                    color: "#FFFFFF",
                    bgcolor: "rgba(255,255,255,0.08)",
                    "&:hover": { bgcolor: "#1877F2", color: "#FFFFFF" },
                    "&:focus-visible": {
                      outline: "3px solid #7DBFB8",
                      outlineOffset: "2px",
                    },
                  }}
                  role="listitem"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="https://wa.me/5493624902691"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar a Misión Animal por WhatsApp"
                  sx={{
                    color: "#FFFFFF",
                    bgcolor: "rgba(255,255,255,0.08)",
                    "&:hover": { bgcolor: "#25D366", color: "#FFFFFF" },
                    "&:focus-visible": {
                      outline: "3px solid #7DBFB8",
                      outlineOffset: "2px",
                    },
                  }}
                  role="listitem"
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </Grid>

            {/* WhatsApp CTA */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ color: "#7DBFB8", mb: 2 }}
              >
                Contáctanos
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.7)", mb: 3, lineHeight: 1.7 }}
              >
                Estamos disponibles para responder tus consultas, coordinar
                turnos o recibir denuncias de maltrato animal.
              </Typography>
              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon aria-hidden="true" />}
                href="https://wa.me/5493624902691"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#25D366",
                  borderColor: "#25D366",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#25D366",
                    color: "#FFFFFF",
                    borderColor: "#25D366",
                  },
                  "&:focus-visible": {
                    outline: "3px solid #7DBFB8",
                    outlineOffset: "2px",
                  },
                }}
                aria-label="Enviar WhatsApp a Misión Animal"
              >
                Contactanos
              </Button>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 4 }} />

          {/* Copyright */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PetsIcon
              sx={{ fontSize: 16, color: "#7DBFB8" }}
              aria-hidden="true"
            />
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.5)", textAlign: "center" }}
            >
              © {new Date().getFullYear()} Misión Animal · Resistencia, Chaco,
              Argentina · Todos los derechos reservados
            </Typography>
          </Box>

          {/* Desarrollado por Mango Software */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
              mt: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.5)" }}
            >
              Desarrollado por
            </Typography>
            <Link
              href="https://mangosofts.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#7DBFB8",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": { textDecoration: "underline" },
              }}
              aria-label="Sitio web de Mango Software"
            >
              Mango Software
            </Link>
          </Box>
        </SeccionAnimada>
      </Container>
    </Box>
  );
}
