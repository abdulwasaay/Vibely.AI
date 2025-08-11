"use client"
import { post } from "@/config/apis";
import { useMutate } from "@/hooks/useMutate";

export const useLogoutHandler = () => {
    return useMutate({
        url: "auth/logout",
        mutationFn: post,
    })
}