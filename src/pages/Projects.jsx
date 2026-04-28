import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Box,
  Button
} from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";

export const Projects = () => {
  const { t, i18n } = useTranslation();

  const projects = useMemo(
    () => [
      {
        title: t("projects.items.healthcare.title"),
        category: t("projects.items.healthcare.category"),
        description: t("projects.items.healthcare.description"),
        tech: ["React", "JavaScript", "Material UI", "REST API"],
        confidential: true
      },
      {
        title: t("projects.items.education.title"),
        category: t("projects.items.education.category"),
        description: t("projects.items.education.description"),
        tech: ["React", "i18n", "JavaScript"],
        confidential: false
      },
      {
        title: t("projects.items.filters.title"),
        category: t("projects.items.filters.category"),
        description: t("projects.items.filters.description"),
        tech: ["Spark AR", "Effect House", "Design"],
        confidential: false
      },
      {
        title: t("projects.items.roblox.title"),
        category: t("projects.items.roblox.category"),
        description: t("projects.items.roblox.description"),
        tech: ["Lua", "Roblox Studio", "Game Logic"],
        confidential: false
      }
    ],
    [i18n.language, t]
  );

  return (
    <Box
      sx={{
        py: 10,
        minHeight: "100vh",
        background: "var(--bg)"
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="overline"
          sx={{
            color: "var(--accent)",
            fontWeight: 700,
            letterSpacing: 1.5
          }}
        >
          {t("projects.label")}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            color: "var(--text-heading)"
          }}
        >
          {t("projects.title")}
        </Typography>

        <Typography
          sx={{
            mb: 6,
            maxWidth: "700px",
            color: "var(--text)"
          }}
        >
          {t("projects.description")}
        </Typography>

        {/* Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                width: "420px",
                borderRadius: "20px",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
                background: "var(--bg)",
                transition: "all .3s ease",
                "&:hover": {
                  transform: "translateY(-8px)"
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "var(--accent)",
                    fontWeight: 700,
                    mb: 1
                  }}
                >
                  {project.category}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "var(--text-heading)"
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  sx={{
                    lineHeight: 1.8,
                    color: "var(--text)",
                    mb: 3
                  }}
                >
                  {project.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  mb={3}
                >
                  {project.tech.map((item, i) => (
                    <Chip key={i} label={item} size="small" />
                  ))}
                </Stack>

                {project.confidential ? (
                  <Typography variant="caption">
                    {t("projects.confidential")}
                  </Typography>
                ) : (
                  <Button
                    size="small"
                    endIcon={<LaunchIcon />}
                  >
                    {t("projects.preview")}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};