"use client"
import dynamic from "next/dynamic";
import ButtonLatest from "./ButtonLatest";
import { withClientOnly } from "./ClientOnlyComponent";
import ClientThemeProvider from "./parentThemeComponent/clientThemeProvider";
import Plan from "./Plans";
const NavbarLatest = dynamic(() => import("./NavBarLatest"), {
    ssr: false,
})
const FooterLatest = dynamic(() => import("./FooterLatest"), {
    ssr: false
})

export {
    NavbarLatest,
    ClientThemeProvider,
    ButtonLatest,
    FooterLatest,
    withClientOnly,
    Plan
}