import React from "react";
import Header from "../../components/header/header";
import Greeting from "../../components/Greeting/greeting";
import Footer from "../../components/footer/Footer";
import "./nosotros.css"

import img from "../inicio/pexels-blue-bird-7210748.jpg"


const Nosotros = () => {

    return (
        <div >
            <Header/>
            <Greeting description="Conocenos lo que nos motiva a mejorar dia a dia..."/>
            <section className="seccion">
                <div className="text-column">
                    <h2>Nuestra Mision</h2>
                    <p>
                        En nuestra tienda de mascotas, estamos comprometidos con
                        el bienestar de tus compañeros peludos. Nuestra misión
                        es ofrecer los mejores alimentos y servicios para el
                        cuidado de mascotas, para asegurarnos de que tus amigos
                        de cuatro patas estén sanos y felices. Sabemos lo
                        importante que son tus mascotas para ti, por eso nos
                        aseguramos de tener los mejores alimentos y productos en
                        nuestras estanterías. Trabajamos con proveedores de
                        renombre, que ofrecen alimentos de alta calidad y
                        nutrición balanceada para todas las etapas de vida de tu
                        mascota. Además, nuestra tienda cuenta con un equipo de
                        expertos en cuidado de mascotas, quienes te brindarán
                        consejos y recomendaciones para cuidar adecuadamente de
                        tus compañeros peludos. Desde el aseo y la higiene,
                        hasta la prevención de enfermedades, nuestros expertos
                        están aquí para ayudarte en todo lo que necesites.
                        También ofrecemos servicios de peluquería y cuidado,
                        para que tu mascota luzca siempre hermosa y saludable.
                        Nuestros estilistas caninos y felinos están altamente
                        capacitados para brindar los mejores cuidados,
                        respetando siempre las necesidades y preferencias de
                        cada mascota. En nuestra tienda, queremos que te sientas
                        en confianza al elegir los alimentos y productos para el
                        cuidado de tus mascotas. Por eso, nos aseguramos de
                        ofrecer una amplia gama de opciones y precios para que
                        encuentres lo que mejor se adapte a tus necesidades y
                        presupuesto.
                    </p>
                </div>
                <div className="image-column">
                    <img src={img} alt="happyDog" />
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Nosotros;
