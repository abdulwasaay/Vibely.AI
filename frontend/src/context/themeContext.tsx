"use client"
import React, { createContext, useState } from "react";

interface modeContextType {
    mode: boolean;
    setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const modeContext = createContext<modeContextType>({
    mode: false,
    setMode: () => { }
})

export default function ModeContextProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<boolean>(false);
    return (
        <modeContext.Provider value={{ mode, setMode }}>
            {children}
        </modeContext.Provider>
    )
}