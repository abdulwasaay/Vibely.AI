"use client"
import { Button, ButtonProps as MuiButtonProps, SxProps, Theme } from "@mui/material"
import React from "react";

interface ButtonLatestProps extends Omit<MuiButtonProps, 'children' | 'onClick'> {
    title: string;
    clickHandler: () => void;
    size?: "small" | "large";
    loading?: boolean;
    type?: "button" | "submit";
    customVariant?: "contained" | "outlined"
    sx?: SxProps<Theme>;
}

const ButtonLatest: React.FC<ButtonLatestProps> = ({
    type = "button",
    title,
    clickHandler,
    size = "small",
    loading = false,
    sx = {},
    customVariant = "contained",
    ...rest
}) => {

    const typography = () => {
        if (size === "small") {
            return 14
        }
        else {
            return 16
        }
    }
    const paddingSize = () => {
        if (size === "small") {
            return "5px 25px"
        }
        else {
            return "8px 35px"
        }
    }

    return (
        <Button
            type={type}
            variant={customVariant}
            onClick={clickHandler}
            loading={loading}
            sx={{
                borderRadius: 10,
                padding: paddingSize(),
                fontSize: typography(),
                ...sx
            }}
            {...rest}
        >
            {title}
        </Button>
    )
}

export default ButtonLatest