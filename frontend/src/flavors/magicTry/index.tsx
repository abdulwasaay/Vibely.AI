"use client"
import { ButtonLatest } from "@/components";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import { Box, Typography, useTheme } from "@mui/material";

const MagicTry = () => {
    const theme = useTheme();

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
                    clickHandler={() => console.log("he")}
                    endIcon={
                        <AutoAwesomeTwoToneIcon sx={{ color: theme.palette.warning.main }} />
                    }
                />
            </Box>
        </Box>
    )
}

export default MagicTry;