"use client"
import { Box, Divider, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ButtonLatest from "../ButtonLatest";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext, useEffect, useState } from "react";
import { modeContext } from "@/context/themeContext";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NAVAccordion from "./navDrawer";

const NavbarLatest = () => {
    const theme = useTheme();
    const pathName = usePathname();
    const { mode, setMode } = useContext(modeContext);
    const iconColor = theme.palette.text.secondary;
    const isMobileFirst = useMediaQuery('(max-width:768px)');
    const { push } = useRouter();

    const modeIcon = !mode ? <DarkModeOutlinedIcon sx={{ color: iconColor }} /> : <LightModeOutlinedIcon sx={{ color: iconColor }} />

    const fullNav = () => {
        return (
            <Grid container px={{ lg: 14, xs: 3, md: 6 }} py={isMobileFirst ? 2 : 1} sx={{ background: theme.palette.background.default }}>
                <Box display={"flex"} width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box display={"flex"} gap={1} alignItems={"center"} onClick={() => push("/")} sx={{cursor: "pointer"}}>
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

                    <Box display={"flex"} alignItems={"center"} gap={2}>
                        <Link href="/pricing" passHref>
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    position: 'relative',
                                    textDecoration: 'none',
                                    '&:after': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        bottom: 0,
                                        width: pathName === "/pricing" ? "100%" : 0,
                                        height: '2px',
                                        backgroundColor: theme.palette.primary.dark,
                                        transition: 'width 0.3s ease-in-out',
                                    },
                                    '&:hover:after': {
                                        width: '100%',
                                    },
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: 16, fontWeight: 500 }}
                                >
                                    Pricing
                                </Typography>
                            </Box>
                        </Link>
                        <Box>
                            <ButtonLatest
                                title="LogIn"
                                clickHandler={() => console.log("s")}
                            />
                        </Box>
                        <IconButton onClick={() => setMode(!mode)}>
                            {modeIcon}
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
        )
    }

    const accordianStyle = {
        boxShadow: "none",
        backgroundColor: theme.palette.background.default
    }

    const actionSummary = (
        <Box display={"flex"} gap={1} alignItems={"center"} onClick={() => push("/")} sx={{cursor: "pointer"}}>
            <Image
                src={"/logo.png"}
                alt="Logo"
                width={40}
                height={40}
                priority

            />
            <Typography variant="h1" sx={{ fontSize: "23px" }}>
                Vibely.AI
            </Typography>
        </Box>
    )
    const accordionDetails = (
        <>
            <Divider />
            <Box display={"flex"} justifyContent={"end"} alignItems={"center"} gap={2} py={2}>
                <Link href="/pricing" passHref>
                    <Box
                        sx={{
                            display: 'inline-block',
                            position: 'relative',
                            textDecoration: 'none',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                width: pathName === "/pricing" ? "100%" : 0,
                                height: '2px',
                                backgroundColor: theme.palette.primary.dark,
                                transition: 'width 0.3s ease-in-out',
                            },
                            '&:hover:after': {
                                width: '100%',
                            },
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ fontSize: 16, fontWeight: 500 }}
                        >
                            Pricing
                        </Typography>
                    </Box>
                </Link>
                <Box>
                    <ButtonLatest
                        title="LogIn"
                        clickHandler={() => console.log("s")}
                    />
                </Box>
                <IconButton onClick={() => setMode(!mode)}>
                    {modeIcon}
                </IconButton>
            </Box>
        </>
    )
    return (
        <>
            {
                isMobileFirst ? (
                    <NAVAccordion
                        actionSummary={actionSummary}
                        accordionDetails={accordionDetails}
                        sx={accordianStyle}
                        icon={<MoreHorizIcon sx={{ color: iconColor }} />}
                    />
                ) : (
                    fullNav()
                )
            }
        </>
    )
}

export default NavbarLatest