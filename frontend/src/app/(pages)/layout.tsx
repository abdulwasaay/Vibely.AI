"use client"
import { FooterLatest, LoadingPlaceholder, NavbarLatest } from "@/components";
import { UserContext } from "@/context/UserContext";
import FormsModal from "@/forms/FormModal";
import useGetUser from "@/hooks/useApiHandlers/useGetUser";
import { useContext, useEffect } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { data, isLoading } = useGetUser();

    const { setUser } = useContext(UserContext)

    useEffect(() => {
        if (data) {
            setUser(data?.data)
        }
    }, [data])

    return (
        <LoadingPlaceholder loading={isLoading} classes="min-h-screen flex justify-center items-center">
            <div className="flex flex-col min-h-screen">
                <NavbarLatest />
                <main className="flex-grow">
                    {children}
                </main>
                <FooterLatest />
                <FormsModal />

            </div >
        </LoadingPlaceholder>
    );
}
