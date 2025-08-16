"use client"
import { Box, CircularProgress, SxProps, Theme } from "@mui/material"
import React from "react"

interface LoadingProps {
    loading: boolean;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
    classes?: string;
}

const LoadingPlaceholder: React.FC<LoadingProps> = ({ loading, children, sx = {}, classes = "" }) => {
    if (loading) {
        return (
            <Box sx={sx} className={classes}>
                <CircularProgress />
            </Box>
        )
    }
    return (
        <>
            {children}
        </>
    )
}

export default LoadingPlaceholder