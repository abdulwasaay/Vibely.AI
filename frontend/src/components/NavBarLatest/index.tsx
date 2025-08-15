"use client"
import { Avatar, Box, Divider, Grid, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ButtonLatest from "../ButtonLatest";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useCallback, useContext, useState } from "react";
import { modeContext } from "@/context/themeContext";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NAVAccordion from "./navDrawer";
import { FormContext } from "@/context/FormContext.tsx/FormContext";
import { formModalTypes } from "@/constants";
import StarIcon from '@mui/icons-material/Star';
import useAuth from "@/hooks/useAuth";
import Logout from '@mui/icons-material/Logout';
import { getLocalStorage, removeLocalStorage } from "@/services/localStorageHandler";
import { useLogoutHandler } from "@/hooks/useApiHandlers/useLogoutHandler";

const NavbarLatest = () => {
    const theme = useTheme();
    const pathName = usePathname();
    const { mode, setMode } = useContext(modeContext);
    const iconColor = theme.palette.text.secondary;
    const isMobileFirst = useMediaQuery('(max-width:768px)');
    const { push } = useRouter();
    const { setOpen, setType } = useContext(FormContext);
    const isUserLoggedIn = useAuth();
    const user = getLocalStorage("auth");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { mutate: onLogout, isPending } = useLogoutHandler();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler = () => {
        onLogout({}, {
            onSuccess: () => {
                removeLocalStorage("auth");
            }
        })
        handleClose();
    }

    const modalOpener = useCallback(() => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
        setOpen(true);
        setType(formModalTypes?.loginModal)
    }, [open]);

    const modeChanger = useCallback(() => {
        setMode(!mode);
    }, [mode]);

    const profileMenu = (
        <>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            width: "200px",
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem sx={{
                    pointerEvents: "none", // Click disable
                    "&:hover": {
                        backgroundColor: "transparent", // Hover highlight remove
                    },
                    cursor: "default",
                }}>
                    <Avatar /> {user?.userName}
                </MenuItem>
                <Divider />
                <MenuItem onClick={logoutHandler}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {isPending ? "loadConfig..." : "Logout"}
                </MenuItem>
            </Menu>
        </>
    )

    const authPricing = isUserLoggedIn ? (
        <Box sx={{ background: theme.palette.info.light }} display={"flex"} gap={1} padding={"10px 15px"} borderRadius={20}>
            <Box sx={{ background: theme.palette.primary.main, borderRadius: "50%" }} width={20} height={20} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <StarIcon
                    sx={{ fontSize: 20, color: "#fff", width: 18, height: 18 }}
                />
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Credits left: 2
            </Typography>
        </Box>
    ) : (
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
    )

    const modeIcon = !mode ? <DarkModeOutlinedIcon sx={{ color: iconColor }} /> : <LightModeOutlinedIcon sx={{ color: iconColor }} />

    const fullNav = () => {
        return (
            <Grid container px={{ lg: 14, xs: 3, md: 6 }} py={isMobileFirst ? 2 : 1} sx={{ background: theme.palette.background.default }}>
                <Box display={"flex"} width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box display={"flex"} gap={1} alignItems={"center"} onClick={() => push("/")} sx={{ cursor: "pointer" }}>
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

                        {authPricing}
                        {
                            !isUserLoggedIn && (
                                <Box>
                                    <ButtonLatest
                                        title="LogIn"
                                        clickHandler={modalOpener}
                                    />
                                </Box>
                            )
                        }
                        <IconButton onClick={() => setMode(!mode)}>
                            {modeIcon}
                        </IconButton>
                        {
                            isUserLoggedIn && (
                                profileMenu
                            )
                        }
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
        <Box display={"flex"} gap={1} alignItems={"center"} onClick={() => push("/")} sx={{ cursor: "pointer" }}>
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
                {authPricing}

                {
                    !isUserLoggedIn && (
                        <Box>
                            <ButtonLatest
                                title="LogIn"
                                clickHandler={modalOpener}
                            />
                        </Box>
                    )
                }
                <IconButton onClick={modeChanger}>
                    {modeIcon}
                </IconButton>
                {
                    isUserLoggedIn && (
                        profileMenu
                    )
                }
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