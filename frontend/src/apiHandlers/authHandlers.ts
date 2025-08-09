"use client"
import { useMutate } from "@/hooks/useMutate";
import { post } from "./apis";

export const signupHandler = () => {
    return useMutate({
        url: "auth/signup",
        mutationFn: post,
        // onSuccess,
        // onError
    })
}