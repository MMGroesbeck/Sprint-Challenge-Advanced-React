import { useState } from "react";

export const useLocalStorage = (key,initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            if (localStorage.getItem(key) == {}){
                console.log("Returning empty string");
                return "";
            } else {
                console.log("Returning non-empty: ");
                console.log(JSON.parse(localStorage.getItem(key)));
                return JSON.parse(localStorage.getItem(key));
            }
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}