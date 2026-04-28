import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components";
import { Home, Projects, Contact, About } from "../pages";

export const RouterApp = ({ themeMode, toggleTheme }) => {
  return (
    <BrowserRouter>
      <Header
        themeMode={themeMode}
        toggleTheme={toggleTheme}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};