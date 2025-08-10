"use client"
import { modeContext } from "@/context/themeContext"
import setTheme from "@/theme/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { useContext } from "react"
import { Bounce, ToastContainer } from 'react-toastify';

const ClientThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { mode } = useContext(modeContext);
    const getTheme = mode ? "dark" : "light";
    const theme = setTheme(getTheme);
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                <ToastContainer
                    position="top-right"
                    theme={getTheme}
                    autoClose={5000}
                />
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default ClientThemeProvider