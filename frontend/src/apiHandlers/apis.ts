"use client"
import api from "./axios";

export const post = async (url: string, data: any) => await api.post(url, data);
export const get = async (url: string, data: any) => await api.get(url);
export const put = async (url: string, data: any) => await api.put(url, data);
export const deletes = async (url: string, data: any) => await api.delete(url);