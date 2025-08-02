import { useState } from "react";

const usePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault(); // Prevents focus change on click
    };

    return { handleClickShowPassword, handleMouseDownPassword, showPassword }
}

export default usePassword