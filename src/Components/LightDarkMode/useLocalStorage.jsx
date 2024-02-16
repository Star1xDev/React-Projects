// useLocalStorage.jsx
import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    
    
  }, [key, value]);

  useEffect(() => {
    return () => {
        console.log("called", key)
        localStorage.clear()
    }
  }, [])

  return [value, setValue];
}
