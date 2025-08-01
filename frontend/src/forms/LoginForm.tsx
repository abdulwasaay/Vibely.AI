"use client"
import { Box, Typography, IconButton, Button, Link as MuiLink, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonLatest, InputTextField } from "@/components";
import { FormContext } from "@/context/FormContext.tsx/FormContext";
import { useContext } from "react";
import { formModalTypes } from "@/constants";
import { useFormik } from "formik";
import loginSchema from "./ValidationSchemas/LoginSchema";

interface LoginModalProps {
    closeModal: () => void;
}

const LoginForm: React.FC<LoginModalProps> = ({
    closeModal
}) => {

    const theme = useTheme();

    const { setOpen, setType } = useContext(FormContext);

    const NotHavAccountHandler = () => {
        setOpen(true);
        setType(formModalTypes?.signupModal)
    }

    const forgotPassModalHandler = () => {
        setOpen(true);
        setType(formModalTypes?.forgotModal)
    }

    const initialValues = {
        userIdorMail: "",
        password: ""
    }

    const loginFormik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        onSubmit: ((values) => {
            console.log(values)
        }),
        validationSchema: loginSchema
    })

    const submitHandler = (e: any) => {
        e.preventDefault();
        loginFormik.submitForm();
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
                Login
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
                Welcome back! Please sign in to continue
            </Typography>
            <form onSubmit={submitHandler}>
                <Box mb={1}>
                    <InputTextField
                        placeHolder="Email id / Username"
                        type="text"
                        name="userIdorMail"
                        fullWidth
                        formik={loginFormik}
                        sx={{ padding: "5px 10px", }}
                    />
                    <InputTextField
                        placeHolder="Password"
                        type="password"
                        name="password"
                        fullWidth
                        formik={loginFormik}
                        sx={{ padding: "5px 10px" }}
                    />
                </Box>
                <Box mb={2} display="flex" justifyContent="flex-end">
                    <ButtonLatest
                        title="Forgot password?"
                        clickHandler={forgotPassModalHandler}
                        disableRipple
                        sx={{
                            background: "none",
                            color: theme.palette.primary.main,
                            padding: 0
                        }}
                    />
                </Box>
                <ButtonLatest
                    type="submit"
                    title="login"
                    clickHandler={() => { }}
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
                />
            </form>
            <Typography variant="body2" color="text.secondary" textAlign="center">
                Don&apos;t have an account?{" "}
                <ButtonLatest
                    title="Sign up"
                    clickHandler={NotHavAccountHandler}
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

export default LoginForm;