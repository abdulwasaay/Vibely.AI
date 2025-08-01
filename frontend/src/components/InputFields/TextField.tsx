import { Box, Input, InputProps, SxProps, Theme, Typography, useTheme } from "@mui/material";
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
            <Input
                type={type}
                name={name}
                onChange={isFormik ? formik.handleChange : props.onChange}
                onBlur={isFormik ? formik.handleBlur : props.onBlur} // <-- add this line
                placeholder={placeHolder}
                value={value}
                sx={{
                    ...sx, outline: "none",
                    "&:before": {
                        borderBottom: showError ? `2px solid ${theme.palette.error.main}` : "", // default underline color
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: showError ? `2px solid ${theme.palette.error.main}` : "", // hover underline color
                    },
                    "&:after": {
                        borderBottom: showError ? `2px solid ${theme.palette.error.main}` : "", // active/focus underline color
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