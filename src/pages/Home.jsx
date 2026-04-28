import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  Avatar
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* LEFT CONTENT */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "var(--accent)",
              fontWeight: 700,
              mb: 1
            }}
          >
            👋 {t("home.greeting")}
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 900,
              lineHeight: 1.1,
              color: "var(--text-h)"
            }}
          >
            Jenny Davila
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mt: 1,
              mb: 3,
              fontWeight: 700,
              color: "var(--text)"
            }}
          >
            {t("home.role")}
          </Typography>

          <Typography
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.9,
              maxWidth: "620px",
              color: "var(--text)",
              mb: 4
            }}
          >
            {t("home.description")}
          </Typography>

          {/* ACTION BUTTONS */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mb: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<WorkIcon />}
              onClick={scrollToProjects}
              sx={{
                backgroundColor: "var(--accent)",
                px: 4,
                py: 1.4,
                borderRadius: "14px",
                fontWeight: 700
              }}
            >
              {t("home.projects")}
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<DownloadIcon />}
              sx={{
                px: 4,
                py: 1.4,
                borderRadius: "14px",
                borderColor: "var(--accent)",
                color: "var(--accent)",
                fontWeight: 700
              }}
            >
              {t("home.download")}
            </Button>
          </Stack>

          {/* STACK */}
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
          >
            <Chip label="React" />
            <Chip label="JavaScript" />
            <Chip label="Material UI" />
            <Chip label="i18n" />
            <Chip label="REST API" />
            <Chip label="GitHub" />
          </Stack>
        </Grid>

        {/* RIGHT CONTENT */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box
              sx={{
                width: { xs: 280, md: 380 },
                height: { xs: 280, md: 380 },
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--accent), #7b2cff)",
                p: "6px",
                boxShadow: "var(--shadow)"
              }}
            >
              <Avatar
                src="/profile.jpg"
                alt="Jenny Davila"
                sx={{
                  width: "100%",
                  height: "100%"
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};