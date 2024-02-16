import React, {useEffect} from 'react';
import "./LightDarkMode.css";
import useLocalStorage from './useLocalStorage';

const LightDarkMode = () => {

    const [theme, setTheme] = useLocalStorage("theme", "dark")
    console.log(theme);

    const handleChangeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    useEffect(() => {
        return () => {
            console.log("called", theme);
            localStorage.removeItem(theme);
        }
      }, [])

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="lightdarkmode-container">
                <p>Hello World ! </p>
                <button onClick={handleChangeTheme}>Change Theme</button>
            </div>
        </div>
    );
}

export default LightDarkMode;
