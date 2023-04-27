import React from "react";
import Header from "../components/header/header";
import CardProduct from "../components/Cards/CardProduct";
import Greeting from "../components/Greeting/greeting";
import Footer from "../components/footer/Footer";
import "./producto.css"



const Producto = () => {


    return (
        <div className="padre" >
            <Header/>
            <Greeting description="¿Te olvidaste? Bueno te lo recuerdo, de lunes a miércoles tienes 50% de descuento en la segunda unidad de los productos más vendidos." />
            <h1>Productos mas vendidos</h1>
            <div className="cards">
            <CardProduct/>            
            </div> 
            <Footer />            
        </div>
    );
}

export default Producto;
