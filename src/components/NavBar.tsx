import React from 'react';
import Switch from './Switch';
import { useTheme } from '../contexts/ThemeContext';

function NavBar() {
    const { isToggled, toggleTheme } = useTheme();

    console.log("Current theme:", isToggled ? "Dark" : "Light")

    return (
        <nav className="navbar">
        <div className="navbar-left">
            DAVELLE
        </div>
        <div className="navbar-right">
            <Switch isToggled={isToggled} onToggle={toggleTheme} />
        </div>
        </nav>
    );
    }

export default NavBar;
