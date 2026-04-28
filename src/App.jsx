import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { RouterApp } from "./router/RouterApp";
import "./i18n";

export const App = () => {
  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prev => (prev === "dark" ? "light" : "dark"));
  };

  const muiTheme = useMemo(() =>
    createTheme({
      palette: {
        mode: themeMode,
      },
      shape: {
        borderRadius: 12
      }
    }),
  [themeMode]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <RouterApp
        themeMode={themeMode}
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
};