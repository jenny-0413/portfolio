import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = ({ toggleTheme, themeMode }) => {
  const { t, i18n } = useTranslation();

  const activeStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "var(--text-heading)",
    backgroundColor: isActive
      ? "var(--accent)"
      : "transparent",
    borderRadius: "12px",
    fontWeight: isActive ? 700 : 500,
    textDecoration: "none"
  });

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)"
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {/* Logo */}
        <Box
          component={NavLink}
          to="/"
          sx={{
            fontWeight: 800,
            textDecoration: "none",
            color: "var(--text-heading)"
          }}
        >
          Jenny Dev
        </Box>

        {/* Navegación */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            component={NavLink}
            to="/"
            end
            style={activeStyle}
          >
            {t("navigation.home")}
          </Button>

          <Button
            component={NavLink}
            to="/projects"
            style={activeStyle}
          >
            {t("navigation.projects")}
          </Button>

          <Button
            component={NavLink}
            to="/about"
            style={activeStyle}
          >
            {t("navigation.about")}
          </Button>

          <Button
            component={NavLink}
            to="/contact"
            style={activeStyle}
          >
            {t("navigation.contact")}
          </Button>
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button onClick={() => i18n.changeLanguage("es")}>ES</Button>
          <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>

          <IconButton onClick={toggleTheme}>
            {themeMode === "dark" ? "☀️" : "🌙"}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};