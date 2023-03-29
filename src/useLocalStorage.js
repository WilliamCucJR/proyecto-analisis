import { useState } from "react";

export function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState()

    const setValue = value => {

    }

    return [storedValue, setValue]
}