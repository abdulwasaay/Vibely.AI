"use client"
import dynamic from "next/dynamic";
import ButtonLatest from "./ButtonLatest";
import { withClientOnly } from "./ClientOnlyComponent";
import ClientThemeProvider from "./parentThemeComponent/clientThemeProvider";
import { Grid } from "@mui/material";
const NavbarLatest = dynamic(() => import("./NavBarLatest"), {
    ssr: false,
    loading: () =>  <Grid container px={{ lg: 14, xs: 3, md: 6 }} py={2}>loading</Grid>
})
const FooterLatest = dynamic(() => import("./FooterLatest"), {
    ssr: false
})

export {
    NavbarLatest,
    ClientThemeProvider,
    ButtonLatest,
    FooterLatest,
    withClientOnly
}