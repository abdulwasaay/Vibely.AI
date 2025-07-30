"use client"
import { modeContext } from "@/context/themeContext"
import setTheme from "@/theme/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import React, { useContext } from "react"

const ClientThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { mode } = useContext(modeContext);
    const getTheme = mode ? "dark" : "light";
    const theme = setTheme(getTheme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default ClientThemeProvider