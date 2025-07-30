import FormContextProvider from "./FormContext.tsx/FormContext";
import ModeContextProvider from "./themeContext";

export default function MainProvider({ children }: { children: React.ReactNode }) {

    return (
        <FormContextProvider>
            <ModeContextProvider>
                {children}
            </ModeContextProvider>
        </FormContextProvider>
    )
}