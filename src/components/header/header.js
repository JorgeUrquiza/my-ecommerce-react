import React from "react";
import "./header.css";
import img from "./hueso.png"
import img2 from "./hueso2.png"

const Header = () => {
    return (
        <div className="header">
            <img className="hueso" src={img} alt="logo" />
            <h1>Urquiza Pet Shop</h1>
            <img className="hueso" src={img2} alt="logo2" />
        </div>
    );
};

export default Header;