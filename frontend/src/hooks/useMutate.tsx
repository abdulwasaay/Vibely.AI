// hooks/useCustomMutation.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface UseCustomMutationProps<TInput, TResponse> {
    url: string;
    mutationFn: (url: string, data: TInput) => Promise<TResponse>; // 👈 dynamic
    // onSuccess?: (data: TResponse) => void;
    // onError?: (error: string) => void;
    // onSettled?: () => void;
}

export function useMutate<TInput = any, TResponse = any>({
    url,
    mutationFn,
    // onSuccess,
    // onError,
    // onSettled,
}: UseCustomMutationProps<TInput, TResponse>) {
    const mutation = useMutation<TResponse, AxiosError, TInput>({
        mutationFn: (data) => mutationFn(url, data),
        // onSuccess: (data) => {
        //     onSuccess?.(data);
        // },
        // onError: (error) => {
        //     const message = error.message;
        //     onError?.(message);
        // },
        // onSettled: () => {
        //     onSettled?.();
        // },
    });

    return {
        mutate: mutation.mutate,
        isPending: mutation.isPending,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error,
        reset: mutation.reset,
    };
}
