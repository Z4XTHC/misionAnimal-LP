/**
 * BarraNavegacion
 * Barra de navegación fija con scroll suave a cada sección.
 * Soporta navegación por teclado y atributos ARIA.
 */
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PetsIcon from "@mui/icons-material/Pets";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const ENLACES = [
  { etiqueta: "Inicio", href: "#inicio" },
  { etiqueta: "Quiénes Somos", href: "#quienes-somos" },
  { etiqueta: "Cómo Ayudamos", href: "#como-ayudamos" },
  { etiqueta: "Turnos", href: "#castraciones" },
  { etiqueta: "Noticias", href: "#noticias" },
  { etiqueta: "Contáctanos", href: "#contactanos" },
];

/** Realiza scroll suave hacia la sección indicada */
function scrollSuave(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function BarraNavegacion() {
  const tema = useTheme();
  const esMobil = useMediaQuery(tema.breakpoints.down("md"));
  const [drawerAbierto, setDrawerAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnlace = (href: string) => {
    setDrawerAbierto(false);
    setTimeout(() => scrollSuave(href), 100);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? "background.paper" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid" : "none",
          borderColor: "divider",
          transition: "all 0.3s ease",
        }}
        role="banner"
      >
        <Toolbar>
          {/* Logo y nombre */}
          <PetsIcon sx={{ color: "primary.main", mr: 1 }} aria-hidden="true" />
          <Typography
            variant="h6"
            component="a"
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollSuave("#inicio");
            }}
            sx={{
              fontWeight: 700,
              color: scrolled
                ? "text.primary"
                : tema.palette.mode === "dark"
                  ? "#FFFFFF"
                  : "#FFFFFF",
              textDecoration: "none",
              flexGrow: 1,
              letterSpacing: 0.5,
              "&:focus-visible": {
                outline: "3px solid",
                outlineColor: "primary.main",
                outlineOffset: "2px",
                borderRadius: 1,
              },
            }}
            aria-label="Misión Animal - Ir al inicio"
          >
            Misión Animal
          </Typography>

          {/* Navegación escritorio */}
          {!esMobil && (
            <Box component="nav" aria-label="Navegación principal">
              {ENLACES.map((enlace) => (
                <Button
                  key={enlace.href}
                  onClick={() => handleEnlace(enlace.href)}
                  sx={{
                    color: scrolled ? "text.primary" : "#FFFFFF",
                    fontWeight: 500,
                    mx: 0.5,
                    "&:hover": {
                      color: "primary.main",
                      bgcolor: "action.hover",
                    },
                    "&:focus-visible": {
                      outline: "3px solid",
                      outlineColor: "primary.main",
                      outlineOffset: "2px",
                    },
                  }}
                  aria-label={`Ir a la sección ${enlace.etiqueta}`}
                >
                  {enlace.etiqueta}
                </Button>
              ))}
            </Box>
          )}

          {/* Botón menú móvil */}
          {esMobil && (
            <IconButton
              onClick={() => setDrawerAbierto(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={drawerAbierto}
              aria-controls="menu-mobil"
              sx={{ color: scrolled ? "text.primary" : "#212121" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer
        anchor="right"
        open={drawerAbierto}
        onClose={() => setDrawerAbierto(false)}
        id="menu-mobil"
        aria-label="Menú de navegación móvil"
      >
        <Box sx={{ width: 260, pt: 2 }} role="dialog">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              mb: 1,
            }}
          >
            <Typography variant="h6" fontWeight={700} color="primary.main">
              Misión Animal
            </Typography>
            <IconButton
              onClick={() => setDrawerAbierto(false)}
              aria-label="Cerrar menú"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {ENLACES.map((enlace) => (
              <ListItem key={enlace.href} disablePadding>
                <ListItemButton
                  onClick={() => handleEnlace(enlace.href)}
                  sx={{
                    "&:focus-visible": {
                      outline: "3px solid",
                      outlineColor: "primary.main",
                      outlineOffset: "-2px",
                    },
                  }}
                  aria-label={`Ir a la sección ${enlace.etiqueta}`}
                >
                  <ListItemText primary={enlace.etiqueta} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
