"use client"
import { post } from "@/config/apis";
import { useMutate } from "@/hooks/useMutate";

export const useLoginHandler = () => {
    return useMutate({
        url: "auth/login",
        mutationFn: post,
    })
}