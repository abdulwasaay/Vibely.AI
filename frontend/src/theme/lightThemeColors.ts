// lightThemeColors.ts
import { ThemeOptions } from "@mui/material";

const lightThemeColors: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#0085db', // Vibrant blue from Spike Admin
            light: '#0071ba',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f6f9fb', // Soft gray background
            paper: '#fff', // Pure white cards
        },
        text: {
            primary: '#111c2d', // Dark blue-gray for headings
            secondary: '#707a82', // Medium gray for secondary text
        },
        success: {
            main: '#4bd08b', // Teal green from dashboard
            light: '#dffff3',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#f8c076', // Golden yellow for warnings
            light: '#fff6ea',
            contrastText: '#ffffff',
        },
        error: {
            main: '#fb977d', // Coral red for errors
            light: '#ffede9',
            contrastText: '#ffffff',
        },
        info: {
            main: 'rgba(0, 133, 219, 0.1)',
            light: 'rgba(70, 202, 235, 0.1)',
            contrastText: '#ffffff',
        },
        divider: '#e6ecf1',
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.125rem',
            lineHeight: 1.2,
            color: "#111c2d"
        },
        h2: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.3,
            color: "#111c2d"
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.25rem',
            color: "#111c2d"
        },
        h4: {
            fontWeight: 400,
            fontSize: '1rem',
            color: "#707a82"
        },
        body1: {
            fontSize: '0.875rem',
            color: "#707a82",
            fontWeight: 500,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 8, // Modern rounded corners
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    boxShadow: '0px 2px 6px rgba(37, 83, 185, 0.1)',
                },
            },
        },
    },
};

export default lightThemeColors;