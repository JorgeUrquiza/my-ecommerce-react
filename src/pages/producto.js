import React from "react";
import Header from "../components/header/header";
import CardProduct from "../components/Cards/CardProduct";
import Greeting from "../components/Greeting/greeting";





const Producto = () => {
    return (
        <div >
            <Header/>
            <Greeting description="¿Te olvidaste? Bueno te lo recuerdo, de lunes a miércoles tienes 50% de descuento en la segunda unidad de los productos más vendidos." />
            <h1>Productos mas vendidos</h1>
            <div style={{padding:"1%"}}>
            <CardProduct/>
            </div>
            

        </div>
    );
}

export default Producto;
