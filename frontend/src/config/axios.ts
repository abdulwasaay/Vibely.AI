"use client";
import { base_url } from "@/config/env";
import { getLocalStorage } from "@/services/localStorageHandler";
import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: `${base_url}/api/`,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        const user: any = getLocalStorage("auth");
        if (user && user?.tokenJwts) {
            config.headers["Authorization"] = `Bearer ${user?.tokenJwts}`;
        }

        // // 👉 Auto remove Content-Type for FormData (let browser set boundary)
        // if (config.data instanceof FormData) {
        //     delete config.headers["Content-Type"];
        // }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => {
        if (response?.data?.message) {
            toast.success(response.data.message)
        }
        return response
    },
    (error) => {
        console.log(error)
        if (error.response) {
            if (error.response.status === 400) {
                toast.error(error.response.data.message)
            }
            if (error.response.status === 500) {
                toast.error("Something went wrong")
            }
            // if (error.response?.status === 401) {
            //     localStorage.removeItem("authToken");
            //     window.location.href = "/login";
            // }
        } else {
            if (error.code === 'ECONNABORTED') {
                toast.error("Request timed out");
            } else if (!navigator.onLine) {
                toast.error("You are offline");
            } else {
                toast.error("Network error!");
            }
        }

        return Promise.reject(error);
    }
);

export default api;