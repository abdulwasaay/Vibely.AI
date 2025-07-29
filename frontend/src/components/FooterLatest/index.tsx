"use client"
import React from "react";
import { Box, Typography, IconButton, Container, useMediaQuery, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { withClientOnly } from "../ClientOnlyComponent";

const FooterLatest = () => {
    const isMobileFirst = useMediaQuery('(max-width:768px)');
    const isMobileSecond = useMediaQuery('(max-width:655px)');
    const theme = useTheme()

    return (
        <Box sx={{ py: 2, borderTop: `1px solid ${theme.palette.divider}` }} mt={{ xs: "60px", sm: "100px", md: "150px" }}>
            <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: isMobileSecond ? "column" : "row", gap: isMobileSecond ? 3 : 0 }}>
                {/* Logo and Brand */}
                <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Image
                        src={"/logo.png"}
                        alt="Logo"
                        width={isMobileFirst ? 40 : 60}
                        height={isMobileFirst ? 40 : 60}
                        priority

                    />
                    <Typography variant="h1" sx={{ fontSize: isMobileFirst ? "23px" : "auto" }}>
                        Vibely.AI
                    </Typography>
                </Box>
                {/* Copyright */}
                <Typography variant="body1" color="text.secondary" textAlign={"center"}>
                    All rights reserved. Copyright &copy; Vibely.AI
                </Typography>
                {/* Social Icons */}
                <Box>
                    <IconButton size="small" color="inherit">
                        <FacebookIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="inherit">
                        <TwitterIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="inherit">
                        <InstagramIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};

export default withClientOnly(FooterLatest);