"use client"
import { createContext, useState } from "react";

interface FormContextType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    typeModal: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
}

export const FormContext = createContext<FormContextType>({
    open: false,
    setOpen: () => { },
    typeModal: "",
    setType: () => { },
})

export default function FormContextProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(false);
    const [typeModal, setType] = useState<string>("");

    return (
        <FormContext.Provider value={{ open, setOpen, typeModal, setType }}>
            {children}
        </FormContext.Provider>
    )
}