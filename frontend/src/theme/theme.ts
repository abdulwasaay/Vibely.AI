
import { createTheme } from "@mui/material";
import darkThemeColors from "./darkThemeColors";
import lightThemeColors from "./lightThemeColors";

const darkTheme = darkThemeColors;
const lightTheme = lightThemeColors;
export default function setTheme(mode: string) {
    const currentTheme = mode === "dark" ? darkTheme : lightTheme;
    const theme = createTheme(currentTheme);
    return theme
}