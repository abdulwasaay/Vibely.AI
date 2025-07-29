import { ThemeOptions } from "@mui/material";

const darkThemeColors: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#0085db', // Vibrant blue from Spike Admin
            light: '#0071ba',
            contrastText: '#ffffff',
        },
        background: {
            default: '#15263a', // Very dark background
            paper: '#111C2D', // Dark cards
        },
        text: {
            primary: '#eaeff4', // Light gray for primary text
            secondary: '#7C8FAC', // Lighter gray for secondary text
        },
        success: {
            main: '#4bd08b', // Light green
            light: "#103E3D",
            contrastText: '#121212',
        },
        warning: {
            main: '#f8c076', // Golden yellow for warnings
            light: '#403937',
            contrastText: '#ffffff',
        },
        error: {
            main: '#fb977d', // Coral red for errors
            light: '#402739',
            contrastText: '#ffffff',
        },
        info: {
            main: 'rgba(0, 133, 219, 0.1)',
            light: 'rgba(70, 202, 235, 0.1)',
            contrastText: '#ffffff',
        },
        divider: '#333f55',
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.125rem',
            lineHeight: 1.2,
            color: "#eaeff4"
        },
        h2: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.3,
            color: "#eaeff4"
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.25rem',
            color: "#eaeff4"
        },
        h4: {
            fontWeight: 400,
            fontSize: '1rem',
            color: "#7C8FAC"
        },
        body1: {
            fontSize: '0.875rem',
            color:"#7C8FAC",
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

export default darkThemeColors