"use client"
import { FooterLatest, NavbarLatest } from "@/components";
import FormsModal from "@/forms/FormModal";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex flex-col min-h-screen">
            <NavbarLatest />
            <main className="flex-grow">
                {children}
            </main>
            <FooterLatest />
            <FormsModal />
        </div>
    );
}
