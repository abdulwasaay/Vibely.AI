import { Input, InputProps , SxProps, Theme } from "@mui/material"

interface InputTextFieldProps {
    placeHolder?: string;
    formik?: any;
    sx?: SxProps<Theme>;
    type?: string;
}

const InputTextField = (
    {
        type = "text",
        placeHolder = "",
        formik = {},
        sx = {},
        ...props
    }: InputTextFieldProps & Omit<InputProps, keyof InputTextFieldProps> // <-- rest operator ki type (only MUI Input props)
) => {
    return (
        <Input
            type={type}
            placeholder={placeHolder}
            sx={{
                ...sx,
            }}
            {...props}
        />
    )
}

export default InputTextField;