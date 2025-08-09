"use client"
import { post } from "@/config/apis";
import { useMutate } from "@/hooks/useMutate";

export const useSignupHandler = () => {
    return useMutate({
        url: "auth/signup",
        mutationFn: post,
    })
}