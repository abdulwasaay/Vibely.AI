import FormContextProvider from "./FormContext.tsx/FormContext";
import ModeContextProvider from "./themeContext";
import UserContextProvider from "./UserContext";

export default function MainProvider({ children }: { children: React.ReactNode }) {

    return (
        <FormContextProvider>
            <ModeContextProvider>
                <UserContextProvider>
                    {children}
                </UserContextProvider>
            </ModeContextProvider>
        </FormContextProvider>
    )
}