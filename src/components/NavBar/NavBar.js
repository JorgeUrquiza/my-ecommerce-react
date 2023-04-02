import React from "react";
import "./NavBar.css";
import Carrito from "../Carrito/Carrito";

import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="Navigation">
            <ul>
                <Link className="Name">
                    <p>Pet Shop</p>
                </Link>
                <Link className="NavLink" to="/">
                    Inicio
                </Link>
                <Link className="NavLink" to="/producto">
                    Producto 
                </Link>
                <Link className="NavLink" to="/nosotros">
                    Nosotros 
                </Link>
                <li className="NavLink">
                    <Carrito/>
                </li>
            </ul>
        </nav>
    ) 
};

export default NavBar;