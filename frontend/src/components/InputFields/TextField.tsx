import { Input, InputProps } from "@mui/material"

interface InputTextFieldProps {
    placeHolder?: string;
    formik?: any;
    sx?: any;
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