import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

//iconos
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PetsIcon from '@mui/icons-material/Pets';
import SecurityIcon from '@mui/icons-material/Security';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <ul>
                    <Link className="Name" to="/">
                        <PetsIcon sx={{mx:4}}/>
                        <p>Pet Shop</p>                        
                    </Link>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contacto</h3>
                <p><LocationOnIcon/> Calle Laika 1957, Buenos Aires.</p>
                <p><AccessTimeIcon/> Horarios de atencion: 08:00 a 20:00hs</p>
                <p><LocalPhoneIcon/> 123-456-7890</p>
            </div>
            <div className="footer-column">
                <div className="social-links">
                    <p><PaymentIcon/> Todos los medios de pago.</p>
                    <p><LocalShippingIcon/> Envios a todo el país.</p>
                    <p><SecurityIcon/> Garantia de satisfaccion.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
