import React from "react";

const Header=({onDarkModeClick, isDarkMode})=>{
    return(
        <header>
        <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
        </header>
    );
};
export default Header;