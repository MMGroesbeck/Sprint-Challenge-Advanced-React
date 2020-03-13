import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useSearch = (initialValue) => {
    const [searchStr, setSearchStr] = useLocalStorage("srchCountry", initialValue);
    const updateSearch = (newStr) => {
        setSearchStr(newStr);
    }
    return [searchStr, updateSearch];
}