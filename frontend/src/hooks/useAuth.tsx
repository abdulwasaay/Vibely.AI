import { getLocalStorage, removeLocalStorage } from "@/services/localStorageHandler";

const useAuth = () => {
    const getUser = JSON.parse(getLocalStorage("auth"));
    const isUserLoggedIn = getUser?.tokenJwts && getUser?.userId && getUser?.userName && getUser?.email;
    if (!isUserLoggedIn) {
        removeLocalStorage("auth")
    }
    return isUserLoggedIn
}

export default useAuth