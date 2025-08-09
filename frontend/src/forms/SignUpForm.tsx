"use client"
import { Box, Typography, IconButton, useTheme, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonLatest, InputTextField } from "@/components";
import { FormContext } from "@/context/FormContext.tsx/FormContext";
import { useContext } from "react";
import { formModalTypes } from "@/constants";
import { useFormik } from "formik";
import signupSchema from "./ValidationSchemas/SignupSchema";
import usePassword from "@/hooks/usePassword";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSignupHandler } from "@/hooks/useApiHandlers/useSignupHandler";

interface LoginModalProps {
    closeModal: () => void;
}

const SignupForm: React.FC<LoginModalProps> = ({
    closeModal
}) => {

    const theme = useTheme();
    const { setOpen, setType } = useContext(FormContext);
    const {
        handleClickShowPassword,
        handleMouseDownPassword,
        showPassword
    } = usePassword();
    const { mutate: onSignup, isPending } = useSignupHandler();

    const havAccountHandler = () => {
        setOpen(true);
        setType(formModalTypes?.loginModal)
    }

    const initialValues = {
        userId: "",
        emailId: "",
        password: ""
    }

    const signupFormik = useFormik({
        initialValues: initialValues,
        onSubmit: (async (values) => {
            const reqObj = {
                userName: values?.userId,
                email: values?.emailId,
                password: values?.password
            }
            const config = {
                onSuccess: () => {
                    signupFormik.resetForm();
                    closeModal();
                }
            }
            onSignup(reqObj, config)
        }),
        validationSchema: signupSchema
    })

    const submitHandler = (e: any) => {
        e.preventDefault();
        signupFormik.submitForm();
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
            <form onSubmit={submitHandler}>
                <Box mb={1}>
                    <InputTextField
                        placeHolder="User id"
                        name="userId"
                        formik={signupFormik}
                        type="text"
                        fullWidth
                    />
                    <InputTextField
                        placeHolder="Email id"
                        type="email"
                        name="emailId"
                        formik={signupFormik}
                        fullWidth
                    />
                    <InputTextField
                        placeHolder="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        formik={signupFormik}
                        fullWidth
                        tabIndex={3}
                        endAdornment={
                            <InputAdornment position="end" sx={{ mr: 0.5 }}>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Box>
                <ButtonLatest
                    type="submit"
                    title="Signup"
                    loading={isPending}
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
                        mt: 2
                    }}
                />
            </form>
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