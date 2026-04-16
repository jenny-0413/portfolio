import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
export const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="section-container flex-center">
      
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <h1>{t("home.title")}</h1>
        <p>{t("home.subtitle")}</p>
      </div>

    </section>
  );
};