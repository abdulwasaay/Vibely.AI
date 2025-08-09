"use client";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface UseCustomMutationProps<TInput, TResponse> {
    url: string;
    mutationFn: (url: string, data: TInput) => Promise<TResponse>; // 👈 dynamic
}

export function useMutate<TInput = any, TResponse = any>({
    url,
    mutationFn,
}: UseCustomMutationProps<TInput, TResponse>) {
    const mutation = useMutation<TResponse, AxiosError, TInput>({
        mutationFn: (data) => mutationFn(url, data),
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
