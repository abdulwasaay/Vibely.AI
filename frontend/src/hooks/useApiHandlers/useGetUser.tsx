"use client"
import { get } from "@/config/apis"
import { useFetch } from "../useFetch"

const useGetUser = () => {
    return useFetch({
        url: "/summary/data",
        queryKey: ["summary"],
        fetchFn: get
    })
}

export default useGetUser