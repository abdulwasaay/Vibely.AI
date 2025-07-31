"use client"
import FormModal from "@/components/Modal/FormModal";
import { formModalTypes } from "@/constants";
import { FormContext } from "@/context/FormContext.tsx/FormContext";
import modalStyles from "@/stylesConst/ModalStyles";
import { Box, useTheme } from "@mui/material";
import { useCallback, useContext } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import ForgotForm from "./forgotPassForm";

const FormsModal = () => {
    const theme = useTheme();
    const { open, setOpen, typeModal, setType } = useContext(FormContext);

    const closeModal = useCallback(() => {
        setOpen(false);
        setType("");
    }, [open]);

    const FormRenderer = () => {
        switch (typeModal) {
            case formModalTypes?.loginModal:
                return (
                    <LoginForm
                        closeModal={closeModal}
                    />
                )
            case formModalTypes?.signupModal:
                return (
                    <SignupForm
                        closeModal={closeModal}
                    />
                )
            case formModalTypes?.forgotModal:
                return (
                    <ForgotForm
                        closeModal={closeModal}
                    />
                )
            default:
                return
        }
    }

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
                {FormRenderer()}
            </Box>
        </FormModal>
    )
}

export default FormsModal