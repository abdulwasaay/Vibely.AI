"use client"
export const addLocalStorage = (key: string, data: any) => {
    const foundData = data && data;
    localStorage.setItem(key, foundData);
}

export const getLocalStorage = (key: string) => {
    const foundKey = key && key;
    const item: any = localStorage.getItem(foundKey);
    return item
}

export const removeLocalStorage = (key: string) => {
    const foundKey = key && key;
    localStorage.removeItem(foundKey);
}