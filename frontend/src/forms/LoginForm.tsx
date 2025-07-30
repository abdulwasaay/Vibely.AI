"use client"
import { useCallback, useContext, useState } from "react";
import { Box, Typography, useTheme, IconButton, Button, Link as MuiLink } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import modalStyles from "@/stylesConst/ModalStyles";
import { InputTextField } from "@/components";
import FormModal from "@/components/Modal/FormModal";
import { FormContext } from "@/context/FormContext.tsx/FormContext";

const LoginForm = () => {
    const theme = useTheme();
    const { open, setOpen } = useContext(FormContext);

    const closeModal = useCallback(() => {
        setOpen(false);
    }, [open]);

    return (
        <FormModal
            open={open}
            onClose={closeModal}
        >
            <Box
                sx={{
                    ...modalStyles,
                    background: theme.palette.background.paper
                }}
            >
                <IconButton
                    onClick={closeModal}
                    sx={{ position: "absolute", top: 12, right: 12 }}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="h2" fontWeight={700} textAlign="center" mb={1}>
                    Login
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
                    Welcome back! Please sign in to continue
                </Typography>
                <Box mb={2}>
                    <InputTextField
                        placeHolder="Email id / Username"
                        type="text"
                        fullWidth
                        sx={{ padding: "5px 10px", mb: 1 }}
                    />
                    <InputTextField
                        placeHolder="Password"
                        type="password"
                        fullWidth
                        sx={{ padding: "5px 10px", mb: 1 }}
                    />
                </Box>
                <Box mb={2} display="flex" justifyContent="flex-end">
                    <MuiLink href="#" underline="none" color="primary" fontSize={14}>
                        Forgot password?
                    </MuiLink>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        py: 1.2,
                        fontSize: 16,
                        mb: 2,
                    }}
                >
                    login
                </Button>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                    Don&apos;t have an account?{" "}
                    <MuiLink href="#" underline="none" color="primary" fontWeight={500}>
                        Sign up
                    </MuiLink>
                </Typography>
            </Box>
        </FormModal>
    );
};

export default LoginForm;