import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return ( 
        <nav className="Navigation">
            <ul className="List-ul">
                <li className="NavLink"><a href="https://github.com/JorgeUrquiza?tab=repositories"> Inicio </a></li>
                <li className="NavLink"><a href="https://github.com/JorgeUrquiza?tab=repositories"> Producto </a></li>
                <li className="NavLink"><a href="https://github.com/JorgeUrquiza?tab=repositories"> Nosotros </a></li>
            </ul>
        </nav>
    ) 
};

export default NavBar;