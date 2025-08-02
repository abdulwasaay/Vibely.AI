"use client"
import { Box, Typography, IconButton, Button, Link as MuiLink, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonLatest, InputTextField } from "@/components";
import { FormContext } from "@/context/FormContext.tsx/FormContext";
import { useContext } from "react";
import { formModalTypes } from "@/constants";
import { useFormik } from "formik";
import forgotSchema from "./ValidationSchemas/forgotPassSchema";

interface LoginModalProps {
    closeModal: () => void;
}

const ForgotForm: React.FC<LoginModalProps> = ({
    closeModal
}) => {

    const theme = useTheme();

    const initialValues = {
        emailId: "",
    }

    const forgotFormik = useFormik({
        initialValues: initialValues,
        onSubmit: ((values) => {
            console.log(values)
        }),
        validationSchema: forgotSchema
    })

    const submitHandler = (e: any) => {
        e.preventDefault();
        forgotFormik.submitForm();
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
                Forgot Password
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
                &quot;No problem! Enter your email to recover your account.&quot;
            </Typography>
            <form onSubmit={submitHandler}>
                <Box mb={1}>
                    <InputTextField
                        placeHolder="Email id"
                        type="email"
                        name="emailId"
                        formik={forgotFormik}
                        fullWidth
                    />
                </Box>
                <ButtonLatest
                    title="Send"
                    type="submit"
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
                    clickHandler={() => console.log("sa")}
                />
            </form>
        </>
    );
};

export default ForgotForm;