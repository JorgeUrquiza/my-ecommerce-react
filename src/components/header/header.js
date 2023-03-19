import React from "react";
import "./header.css";
import img from "./hueso.png"

const Header = () => {
    return (
        <div className="header">
            <img src={img} alt="logo" />
            <h1>Urquiza Pet Shop</h1>
        </div>
    );
};

export default Header;