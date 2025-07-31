"use client"
import { Box, Typography, IconButton, Button, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonLatest, InputTextField } from "@/components";
import { FormContext } from "@/context/FormContext.tsx/FormContext";
import { useContext } from "react";
import { formModalTypes } from "@/constants";

interface LoginModalProps {
    closeModal: () => void;
}

const SignupForm: React.FC<LoginModalProps> = ({
    closeModal
}) => {

    const theme = useTheme();
    const { setOpen, setType } = useContext(FormContext);

    const havAccountHandler = () => {
        setOpen(true);
        setType(formModalTypes?.loginModal)
    }

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
                Signup
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
                Join us today! Create your account to get started.
            </Typography>
            <Box mb={1}>
                <InputTextField
                    placeHolder="User id"
                    type="text"
                    fullWidth
                    sx={{ padding: "5px 10px", mb: 1 }}
                />
                <InputTextField
                    placeHolder="Email id"
                    type="email"
                    fullWidth
                    sx={{ padding: "5px 10px", mb: 1 }}
                />
                <InputTextField
                    placeHolder="Password"
                    type="password"
                    fullWidth
                    sx={{ padding: "5px 10px" }}
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
                    mt: 2
                }}
            >
                Signup
            </Button>
            <Typography variant="body2" color="text.secondary" textAlign="center">
                Already have an account?{" "}
                <ButtonLatest
                    title="Log In"
                    clickHandler={havAccountHandler}
                    disableRipple
                    sx={{
                        background: "none",
                        color: theme.palette.primary.main,
                        padding: 0
                    }}
                />
            </Typography>
        </>
    );
};

export default SignupForm;