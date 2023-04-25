import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <ul>
                    <Link className="Name" to="/">
                        <p>Pet Shop</p>
                    </Link>
                </ul>
            </div>
            <div className="footer-column">
                <p>Dirección: 123 Calle Principal, Ciudad</p>
                <p>Teléfono: 123-456-7890</p>
            </div>
            <div className="footer-column">
                <p>Síguenos:</p>
                <div className="social-links">
                    <a href="https://www.facebook.com">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.github.com">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
