"use client";
import { Box, Card, Typography, Avatar, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// Custom Swiper pagination styles
const swiperPaginationStyles = `
.swiper-pagination-bullet {
  background: #bbb;
  opacity: 1;
  transition: background 0.3s;
}
.swiper-pagination-bullet-active {
  background: #ff9800;
  width: 18px;
  border-radius: 8px;
}
`;

const testimonials = [
    {
        name: "Donald Jackman",
        role: "Graphic Designer",
        text: "I've been using Vibely.AI for nearly two years to generate visual content ideas and design references for my projects. Its intuitive interface and smart AI suggestions make the creative process much faster and smoother. As a graphic designer, it's become one of my go-to tools for inspiration and quick mockups.",
        avatar: "/clients/client1.png",
        rating: 5,
    },
    {
        name: "Richard Nelson",
        role: "Content Creator",
        text: "As a content creator, I constantly need fresh, eye-catching visuals — and this AI tool delivers every time. Whether it’s for YouTube thumbnails, Instagram posts, or blog headers, I get stunning results in seconds. It’s honestly become part of my daily creative routine",
        avatar: "/clients/client2.png",
        rating: 5,
    },
    {
        name: "James Washington",
        role: "Co-Founder",
        text: "We were spending way too much time and money on design tasks until we integrated this AI image generator into our workflow. Now, we generate campaign-ready visuals in minutes. It's fast, intuitive, and gives our startup a design edge without needing a full-time designer.",
        avatar: "/clients/client3.png",
        rating: 5,
    },
];

const CustomerTestimonials = () => {
    const theme = useTheme();

    // Inject custom Swiper pagination styles
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = swiperPaginationStyles;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <Box width="100%" maxWidth={1200} mx="auto" mt={{ xs: "60px", sm: "100px", md: "150px" }}>
            <Typography variant="h1" textAlign={"center"} fontSize={{ xs: 28, md: 36 }} fontWeight={700}>
                Customer testimonials
            </Typography>
            <Typography textAlign={"center"} variant="body1" mb={2}>
                What Our Users Are Saying
            </Typography>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    600: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6500, disableOnInteraction: false }}
                loop
                style={{ paddingBottom: 32 }}
            >
                {testimonials.map((t, idx) => (
                    <SwiperSlide key={idx}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                            style={{ height: "100%" }}
                        >
                            <Card
                                elevation={2}
                                sx={{
                                    p: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    minHeight: 320,
                                    maxHeight: 320,
                                    maxWidth: 350,
                                    mx: "auto",
                                    borderRadius: 3,
                                    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)",
                                    background: theme.palette.background.paper,
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                    }
                                }}
                            >
                                <Avatar src={t.avatar} alt={t.name} sx={{ width: 56, height: 56, mb: 2 }} />
                                <Typography variant="subtitle1" fontWeight={700} textAlign="center">
                                    {t.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={1} textAlign="center">
                                    {t.role}
                                </Typography>
                                <Box display="flex" alignItems="center" mb={1}>
                                    {[...Array(5)].map((_, i) =>
                                        i < t.rating ? (
                                            <StarIcon key={i} sx={{ color: "#ff9800", fontSize: 20 }} />
                                        ) : (
                                            <StarBorderIcon key={i} sx={{ color: "#ff9800", fontSize: 20 }} />
                                        )
                                    )}
                                </Box>
                                <Box
                                    sx={{
                                        width: "100%",
                                        flex: 1,
                                        overflowY: "auto",
                                        pr: 1,
                                        scrollbarWidth: "thin",
                                        scrollbarColor: `${theme.palette.text.disabled}`,
                                        transition: "box-shadow 0.3s",
                                        "&::-webkit-scrollbar": {
                                            width: 6,
                                        },
                                        "&::-webkit-scrollbar-thumb": {
                                            background: theme.palette.text.primary,
                                            borderRadius: 20,
                                        },
                                    }}
                                >
                                    <Typography variant="body1" textAlign="center" color="text.primary">
                                        {t.text}
                                    </Typography>
                                </Box>
                            </Card>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default CustomerTestimonials;