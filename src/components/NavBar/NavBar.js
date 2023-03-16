import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return ( 
        <nav className="Navigation">
            <ul className="List-ul">
                <li className="NavLink">Home</li>
                <li className="NavLink">Product</li>
                <li className="NavLink">About Us</li>
            </ul>
        </nav>
    ) 
};

export default NavBar;