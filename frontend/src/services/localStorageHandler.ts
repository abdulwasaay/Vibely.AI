"use client"
export const addLocalStorage = (data: { key: string, value: any }) => {
    const foundData = data && data;
    localStorage.setItem(foundData?.key, foundData?.value);
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