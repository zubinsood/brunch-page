import React, { useState } from 'react';
import Switch from './Switch';

function NavBar() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                DAVELLE
            </div>
            <div className="navbar-right">
                <Switch isToggled={isToggled} onToggle={() => {
                    setIsToggled(!isToggled)
                    console.log('This is firing')
                }} />
            </div>
        </nav>
    )
}

export default NavBar;