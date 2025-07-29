"use client";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import icons for code splitting
const RemoveRedEyeIcon = dynamic(() => import('@mui/icons-material/RemoveRedEye'));
const AutoFixHighIcon = dynamic(() => import('@mui/icons-material/AutoFixHigh'));
const FileDownloadOutlinedIcon = dynamic(() => import('@mui/icons-material/FileDownloadOutlined'));

const steps = [
  {
    icon: <RemoveRedEyeIcon />,
    title: "Describe Your Vision",
    desc: "Type a phrase, sentence, or even a paragraph to describe the image you want to create.",
  },
  {
    icon: <AutoFixHighIcon />,
    title: "AI Generates Image",
    desc: "Our AI interprets your words and creates a stunning image based on your description.",
  },
  {
    icon: <FileDownloadOutlinedIcon />,
    title: "Download & Share",
    desc: "Save your generated image or share it with friends instantly.",
  },
];

const WorkFlow = () => {
  const theme = useTheme();

  return (
    <Box width="100%" mt={{ xs: "60px", sm: "100px", md: "150px" }}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h1" textAlign={"center"} fontSize={{ xs: 28, md: 36 }} fontWeight={700}>
            How it works
          </Typography>
          <Typography textAlign={"center"} variant="body1" mb={2}>
            Transform Words Into Stunning Images
          </Typography>
          {steps.map((step, idx) => (
            <Card
              key={idx}
              sx={{
                background: theme.palette.background.paper,
                width: { xs: "100%", sm: 500, md: 700, lg: 800 },
                p: 0,
                mt: 2,
                display: "flex",
                alignItems: "center",
              }}
              elevation={2}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  "&:last-child": { pb: 2 },
                }}
              >
                <Box
                sx={{background: theme.palette.info.main, color: theme.palette.primary.main, borderRadius: "10px", p:1, display: "flex", alignItems: "center", justifyContent: "center"}}
                >{step.icon}</Box>
                <Box>
                  <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 700 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 13, fontWeight: 600 }}>
                    {step.desc}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default WorkFlow;