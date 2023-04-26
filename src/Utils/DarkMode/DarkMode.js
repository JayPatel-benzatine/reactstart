import React from "react";
import useAuthentication from "../../hooks/useAuthentication";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const { handledarkmode } = useAuthentication()
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
        handledarkmode('dark')
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
        handledarkmode('light')
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode()
        else setLightMode()
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
