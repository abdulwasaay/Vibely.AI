"use client"
import { createContext, useState } from "react";

interface FormContextType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormContext = createContext<FormContextType>({
    open: false,
    setOpen: () => {}
})

export default function FormContextProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <FormContext.Provider value={{ open, setOpen }}>
            {children}
        </FormContext.Provider>
    )
}