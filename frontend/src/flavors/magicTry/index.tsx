"use client"
import { ButtonLatest } from "@/components";
import { formModalTypes } from "@/constants";
import { FormContext } from "@/context/FormContext.tsx/FormContext";
import useAuth from "@/hooks/useAuth";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import { Box, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const MagicTry = () => {
    const theme = useTheme();
    const { push } = useRouter();
    const authenticated = useAuth();
    const { setOpen, setType } = useContext(FormContext)

    const generateHandler = () => {
        if (!authenticated) {
            setOpen(true)
            setType(formModalTypes.loginModal)
        } else {
            push("/result")
        }
    }

    return (
        <Box width="100%" display={"flex"} flexDirection={"column"} alignItems={"center"} mt={{ xs: "60px", sm: "100px", md: "150px" }}>
            <Typography
                variant="h1"
                textAlign="center"
                fontSize={{ xs: 24, sm: 28, md: 36 }}
                fontWeight={700}
            >
                See the magic. Try now
            </Typography>
            <Box mt={5}>
                <ButtonLatest
                    title="Generate Images"
                    clickHandler={generateHandler}
                    endIcon={
                        <AutoAwesomeTwoToneIcon sx={{ color: theme.palette.warning.main }} />
                    }
                />
            </Box>
        </Box>
    )
}

export default MagicTry;