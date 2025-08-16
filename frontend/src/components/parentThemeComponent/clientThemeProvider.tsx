"use client"
import { modeContext } from "@/context/themeContext"
import setTheme from "@/theme/theme"
import { CssBaseline, NoSsr, ThemeProvider } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { useContext } from "react"
import { Bounce, ToastContainer } from 'react-toastify';

const ClientThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { mode } = useContext(modeContext);
    const getTheme = mode ? "dark" : "light";
    const theme = setTheme(getTheme);
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000, // 5 min fresh
                gcTime: 10 * 60 * 1000, // 10 min memory me
                refetchOnWindowFocus: false,
                retry: 1,
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <NoSsr>
                    <CssBaseline />
                </NoSsr>
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