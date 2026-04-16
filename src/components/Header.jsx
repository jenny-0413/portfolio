import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Header = ({ toggleTheme, themeMode }) => {
  const { t, i18n } = useTranslation();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        color: "var(--text-heading)"
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
        {/* Marca */}
        <Box sx={{ fontWeight: 700 }}>
          Jenny Dev
        </Box>

        {/* Navegación */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button color="inherit">{t("navigation.home")}</Button>
          <Button color="inherit">{t("navigation.projects")}</Button>
          <Button color="inherit">{t("navigation.about")}</Button>
          <Button color="inherit">{t("navigation.contact")}</Button>
        </Box>

        {/* Acciones */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </Button>

          <Button
            size="small"
            variant="outlined"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </Button>

          <IconButton onClick={toggleTheme}>
            {themeMode === "dark" ? "☀️" : "🌙"}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};