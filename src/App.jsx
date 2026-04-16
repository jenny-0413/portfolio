import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./i18n";
import { Header } from "./components/Header";

// Pages
import { Home } from "./pages";

export const App = () => {
  // 🌙 Estado del tema
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme;

    // Detectar sistema la primera vez
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // 🔄 Sincronizar tema con HTML + localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  // 🔁 Toggle tema
  const toggleTheme = () => {
    setThemeMode(prev => (prev === "light" ? "dark" : "light"));
  };

  // 🎨 Tema MUI
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: themeMode,
        primary: {
          main: themeMode === "dark" ? "#c084fc" : "#aa3bff",
        },
        background: {
          default: themeMode === "dark" ? "#121212" : "#ffffff",
        },
        text: {
          primary: themeMode === "dark" ? "#ffffff" : "#000000",
        },
      },
    }),
    [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="app-container">

        <Header toggleTheme={toggleTheme} themeMode={themeMode} />

        <main>
          <Home />
        </main>
      </div>

    </ThemeProvider>
  );
};