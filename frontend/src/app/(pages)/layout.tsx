import { FooterLatest, NavbarLatest } from "@/components";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <NavbarLatest />
            {children}
            <FooterLatest />
        </div>
    );
}
