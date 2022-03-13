import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { createContext } from "react";
import "../styles/Theme.css"


const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const lightTheme={
        body:'#fff',
        fontColor:'#000'
    }
     const DarkTheme={
        body:'#000',
        fontColor:'#fff'
    }
    return (
        <DarkModeToggle
            className="theme"
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
        />
    );
};
export default Theme