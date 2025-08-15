"use client";

import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface UseCustomFetchProps<TResponse> {
  url: string;
  queryKey: (string | number)[];
  fetchFn: (url: string) => Promise<TResponse>;
  enabled?: boolean;
  select?: (data: TResponse) => any; // optional data transformation
}

export function useFetch<TResponse = any>({
  url,
  queryKey,
  fetchFn,
  enabled = true,
  select,
}: UseCustomFetchProps<TResponse>) {
  const query = useQuery<TResponse, AxiosError>({
    queryKey,
    queryFn: () => fetchFn(url),
    enabled,
    select,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}
