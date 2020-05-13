import { useState } from 'react';

export const useLocalStorage = (initialValue, key) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        return initialValue;
    });

    const setLSValue = storedValue => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
        setStoredValue(storedValue);
    };

    return [storedValue, setLSValue];
};