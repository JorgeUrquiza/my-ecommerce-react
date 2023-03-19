import React from "react";
import "./NavBar.css";
import Carrito from "../Carrito/Carrito";

const NavBar = () => {
    return ( 
        <nav className="Navigation">
            <ul>
                <li className="Name">
                    <p>Pet Shop</p>
                </li>
                <li className="NavLink">
                    <a href="https://github.com/JorgeUrquiza?tab=repositories" target="_blank" rel="noopener noreferrer"> Inicio </a>
                </li>
                <li className="NavLink">
                    <a href="https://github.com/JorgeUrquiza?tab=repositories" target="_blank" rel="noopener noreferrer"> Producto </a>
                </li>
                <li className="NavLink">
                    <a href="https://github.com/JorgeUrquiza?tab=repositories" target="_blank" rel="noopener noreferrer"> Nosotros </a>
                </li>
                <li className="NavLink">
                    <Carrito/>
                </li>
            </ul>
        </nav>
    ) 
};

export default NavBar;