import React from "react";
import "./header.css";
import img from "../../assets/hueso.png"
import img2 from "../../assets/hueso2.png"

const Header = () => {
    return (
        <div className="header">
            <img className="hueso" src={img} alt="logo" />
            <h1>Huellitas Store</h1>
            <img className="hueso" src={img2} alt="logo2" />
        </div>
    );
};

export default Header;