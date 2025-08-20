"use client"
import { InputTextField } from "@/components"
import { Box, IconButton, InputAdornment, useTheme } from "@mui/material"
import Image from "next/image"
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react"

const ResultUI = () => {
    const theme = useTheme();
    const [prompt, setPrompt] = useState("");
    const promptHandler = (e: any) => {
        setPrompt(e.target.value)
    }
    return (
        <Box sx={{ px: 2, py: 10 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Image
                    src={"/premag.png"}
                    alt="Premag"
                    width={400}
                    height={400}
                    style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: 400,
                        borderRadius: 12,
                    }}
                    priority
                />
                <Box sx={{ width: "100%", maxWidth: 600, mx: "auto" , mt:5 }}>
                    <InputTextField
                        multiline
                        minRows={1}
                        maxRows={6}
                        placeholder="Type your message..."
                        fullWidth
                        value={prompt}
                        onChange={promptHandler}
                        endAdornment={
                            <InputAdornment position="end" sx={{ alignSelf: "flex-end" }}>
                                <IconButton
                                    sx={{
                                        bgcolor: "primary.main",
                                        color: "white",
                                        "&:hover": { bgcolor: "primary.dark" },

                                    }}
                                >
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        inputProps={{
                            maxLength: 500, // 🚀 yahan restriction lag gaya
                        }}
                    />
                </Box>

            </Box>
        </Box>
    )
}

export default ResultUI