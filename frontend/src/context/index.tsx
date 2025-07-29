import ModeContextProvider from "./themeContext";

export default function MainProvider({ children }: { children: React.ReactNode }) {

    return (
        <ModeContextProvider>
            {children}
        </ModeContextProvider>
    )
}