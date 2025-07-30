import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import MainProvider from "@/context";
import { ClientThemeProvider } from "@/components";

const montserrat = Montserrat({
  variable: "--font-monsterrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibely.AI",
  description: "Developed by using Next JS , MaterialUI , Redux , Node JS and AI model",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-monsterrat)" }}
      >
        <MainProvider>
          <ClientThemeProvider>
            {children}
          </ClientThemeProvider>
        </MainProvider>
      </body>
    </html>
  );
}
