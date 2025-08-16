"use client"
import { createContext, useState } from "react";

interface UserContextType {
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const UserContext = createContext<UserContextType>({
    user: {},
    setUser: () => { }
})

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}