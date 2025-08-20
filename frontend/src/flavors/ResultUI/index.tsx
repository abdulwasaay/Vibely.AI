"use client"
import { InputTextField } from "@/components"
import { Box, CircularProgress, IconButton, InputAdornment, useTheme } from "@mui/material"
import Image from "next/image"
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react"
import { useGenerateImage } from "@/hooks/useApiHandlers/useGenerateImage";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const ResultUI = () => {
    const theme = useTheme();
    const {push} = useRouter();
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState({
        url: "/premag.png",
        alts: "Ui Image"
    });
    const { setUser } = useContext(UserContext);
    const { mutate: generateImage, isPending } = useGenerateImage()
    const promptHandler = (e: any) => {
        setPrompt(e.target.value)
    }

    const generateImageHandler = () => {
        if (prompt) {
            const promptData = { prompt }
            generateImage(promptData, {
                onSuccess: (data: any) => {
                    if (data && data?.data) {
                        setResult({
                            url: data?.data?.img,
                            alts: "AI Generated Image"
                        })
                        setUser((prev: any) => ({
                            ...prev,       // purana state spread karo
                            credits: data?.data?.credits// sirf varB change hoga
                        }))
                    }
                },
                onError: (err:any) => {
                    const errorMessage:any = err.response?.data?.message;
                    if (errorMessage?.toLowerCase() === "not enough credits!"){
                        push("/pricing")
                    }
                }
            })
        }
    }
    return (
        <Box sx={{ px: 2, py: 10 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ position: "relative", borderRadius: 12, width: 400, height: 400 }}>

                    {/* Loader dikhane ka area */}
                    {isPending && (
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: "rgba(0,0,0,0.4)",
                                borderRadius: 2,
                                zIndex: 10
                            }}
                        >
                            <CircularProgress sx={{ color: "white" }} />
                        </Box>
                    )}

                    <Image
                        src={result?.url}
                        alt={result?.alts}
                        fill
                        style={{
                            objectFit: "contain",
                            borderRadius: 12,
                        }}
                        priority
                    />
                </Box>
                <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 5 }}>
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
                                    onClick={generateImageHandler}
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