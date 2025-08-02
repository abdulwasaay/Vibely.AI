import { Box, Input, InputProps, OutlinedInput, SxProps, Theme, Typography, useTheme } from "@mui/material";
import { FormikProps } from "formik";

interface InputTextFieldProps<T = Record<string, any>> {
    placeHolder?: string;
    formik?: Partial<FormikProps<T>>;
    sx?: SxProps<Theme>;
    type?: string;
    name?: string;
}

const InputTextField = <T extends Record<string, any> = Record<string, any>>(
    {
        type = "text",
        placeHolder = "",
        name = "",
        formik = {},
        sx = {},
        ...props
    }: InputTextFieldProps<T> & Omit<InputProps, keyof InputTextFieldProps>
) => {
    const theme = useTheme();

    const isFormik = formik && formik.handleChange && formik.values && name;
    const value = isFormik ? formik.values?.[name as keyof T] ?? "" : (props as any).value ?? "";
    const error = isFormik ? formik.errors?.[name as keyof T] : undefined;
    const touched = isFormik ? formik.touched?.[name as keyof T] : undefined;
    const showError = Boolean(error && touched);

    console.log(formik)

    return (
        <Box sx={{ mb: 1 }}>
            <OutlinedInput
                type={type}
                name={name}
                onChange={isFormik ? formik.handleChange : props.onChange}
                onBlur={isFormik ? formik.handleBlur : props.onBlur}
                placeholder={placeHolder}
                value={value}
                sx={{
                    ...sx, outline: "none",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: showError ? theme.palette.error.main : undefined,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: showError ? theme.palette.error.main : undefined,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: showError ? theme.palette.error.main : undefined,
                    },
                }}
                fullWidth
                {...props}
            />
            {showError && (
                <Typography
                    variant="body2"
                    color={theme.palette.error.main}
                    sx={{ fontSize: 12, fontWeight: 700 }}
                >
                    {error as string}
                </Typography>
            )}
        </Box>
    );
};

export default InputTextField;