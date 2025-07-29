"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Image for code splitting (optional)
const Image = dynamic(() => import("next/image"));

const AIIntro = () => {
    return (
        <Box width="100%" mt={{ xs: "60px", sm: "100px", md: "150px" }}>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <Box display="flex" flexDirection="column" alignItems="center" px={{ xs: 2, sm: 4 }}>
                    <Typography
                        variant="h1"
                        textAlign="center"
                        fontSize={{ xs: 24, sm: 28, md: 36 }}
                        fontWeight={700}
                    >
                        Create AI Images
                    </Typography>
                    <Typography
                        textAlign="center"
                        variant="body1"
                        mb={2}
                        fontSize={{ xs: 15, sm: 16 }}
                    >
                        Turn your imagination into visuals.
                    </Typography>
                    <Box
                        width="100%"
                        maxWidth={1100}
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems="center"
                        gap={4}
                        mt={2}
                        sx={{overflowX:"hidden"}}
                    >
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                width={{ xs: "100%", md: 350 }}
                                minWidth={0}
                            >
                                <Image
                                    src="/premag.png"
                                    alt="AI Image"
                                    width={400}
                                    height={400}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        maxWidth: 400,
                                        borderRadius: 12,
                                    }}
                                    priority
                                />
                            </Box>
                        </motion.div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Box flex={1} minWidth={0}>
                                <Typography
                                    variant="h2"
                                    fontSize={{ xs: 20, sm: 24, md: 30 }}
                                    fontWeight={700}
                                    mb={1}
                                    textAlign={{ xs: "center", md: "left" }}
                                >
                                    Introducing the AI-Powered Text to Image Generator
                                </Typography>
                                <Typography textAlign={{ xs: "center", md: "left" }} variant="body1" fontSize={{ xs: 14, sm: 16 }}>
                                    Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
                                </Typography>
                                <Box height={12} />
                                <Typography textAlign={{ xs: "center", md: "left" }} variant="body1" fontSize={{ xs: 14, sm: 16 }}>
                                    Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
                                </Typography>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </motion.div>
        </Box>
    );
};

export default AIIntro;