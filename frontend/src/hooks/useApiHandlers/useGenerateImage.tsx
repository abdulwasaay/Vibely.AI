"use client"
import { post } from "@/config/apis";
import { useMutate } from "@/hooks/useMutate";

export const useGenerateImage = () => {
    return useMutate({
        url: "texttoimage/model",
        mutationFn: post,
    })
}