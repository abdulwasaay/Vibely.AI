"use client"
import { Box, Typography, IconButton, Button, Link as MuiLink, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonLatest, InputTextField } from "@/components";
import { FormContext } from "@/context/FormContext.tsx/FormContext";
import { useContext } from "react";
import { formModalTypes } from "@/constants";

interface LoginModalProps {
    closeModal: () => void;
}

const ForgotForm: React.FC<LoginModalProps> = ({
    closeModal
}) => {

    const theme = useTheme();

    return (
        <>
            <IconButton
                onClick={closeModal}
                sx={{ position: "absolute", top: 12, right: 12 }}
                aria-label="close"
            >
                <CloseIcon />
            </IconButton>
            <Typography variant="h2" fontWeight={700} textAlign="center" mb={1}>
                Forgot Password
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
                "No problem! Enter your email to recover your account."
            </Typography>
            <Box mb={1}>
                <InputTextField
                    placeHolder="Email id"
                    type="email"
                    fullWidth
                    sx={{ padding: "5px 10px", mb: 1 }}
                />
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
                    mt:2
                }}
            >
                Send
            </Button>
        </>
    );
};

export default ForgotForm;