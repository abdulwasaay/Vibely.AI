"use client";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import HotelClassIcon from "@mui/icons-material/HotelClass";
import { ButtonLatest } from "@/components";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useContext } from "react";
import { FormContext } from "@/context/FormContext.tsx/FormContext";
import { formModalTypes } from "@/constants";

const demoExs = [
    { imgs: "/mag1.jpg", alts: "Demo 1" },
    { imgs: "/mag2.jpg", alts: "Demo 2" },
    { imgs: "/mag3.jpg", alts: "Demo 3" },
    { imgs: "/mag4.jpg", alts: "Demo 4" },
    { imgs: "/mag5.jpg", alts: "Demo 5" },
];

const GenerateImage = () => {
    const theme = useTheme();
    const { push } = useRouter();
    const authenticated = useAuth();
    const { setOpen, setType } = useContext(FormContext)

    const generateHandler = () => {
        if (!authenticated) {
            setOpen(true)
            setType(formModalTypes.loginModal)
        } else {
            push("/result")
        }
    }

    return (
        <Box width="100%">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
                    <Chip
                        label={
                            <>
                                Best text to Image Generator{" "}
                                <HotelClassIcon
                                    sx={{ fontSize: 20, ml: 0.5, color: theme.palette.warning.main }}
                                />
                            </>
                        }
                        variant="outlined"
                        sx={{
                            background: theme.palette.background.paper,
                            color: theme.palette.text.secondary,
                            fontWeight: 600,
                            px: 2,
                        }}
                    />
                    <Box
                        width={{ xs: "100%", sm: 400, md: 480 }}
                        mt={5}
                        mx="auto"
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: 30, md: 35, lg: 40, xl: 48 },
                                fontWeight: 600,
                                textAlign: "center",
                            }}
                        >
                            Turn text to{" "}
                            <Box component="span" sx={{ color: theme.palette.primary.main }}>
                                image
                            </Box>
                            , in seconds.
                        </Typography>
                        <Typography
                            variant="body1"
                            fontWeight={500}
                            textAlign="center"
                            mt={2}
                        >
                            Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.
                        </Typography>
                        <Box display="flex" mt={3} justifyContent="center">
                            <ButtonLatest
                                title="Generate Images"
                                clickHandler={generateHandler}
                                endIcon={
                                    <AutoAwesomeTwoToneIcon sx={{ color: theme.palette.warning.main }} />
                                }
                            />
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="center"
                            flexWrap="wrap"
                            mt={7}
                            gap={2}
                        >
                            {demoExs.map((ex, index) => (
                                <Box key={index}>
                                    <Image
                                        src={ex.imgs}
                                        alt={ex.alts || `Demo image ${index + 1}`}
                                        width={70}
                                        height={70}
                                        style={{ borderRadius: 5 }}
                                        loading="lazy"
                                    />
                                </Box>
                            ))}
                        </Box>
                        <Typography
                            variant="body1"
                            fontWeight={500}
                            textAlign="center"
                            mt={2}
                        >
                            Generate Images from Vibely.AI
                        </Typography>
                    </Box>
                </Box>
            </motion.div>
        </Box>
    );
};

export default GenerateImage;