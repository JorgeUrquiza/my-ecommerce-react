import React from "react";
import Header from "../../components/header/header";
import Greeting from "../../components/Greeting/greeting";
import Footer from "../../components/footer/Footer";
import "./nosotros.css";

import img from "../../assets/pexels-blue-bird-7210748.jpg";
import img2 from "../../assets/pexels-edgar-daniel-hernández-cervantes-3628100.jpg"


const Nosotros = () => {
    return (
        <div>
            <Header />
            <Greeting description="Conocenos lo que nos motiva a mejorar dia a dia..." />
            <section className="seccion">
                <div className="text-column-about">
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
            <section className="seccion">
                <div className="image-column2">
                    <img src={img2} alt="callejeros" />
                </div>
                <div className="text-column-about">
                    <h2>Comprando ayudas!!!</h2>
                    <p>
                        ¡Ayuda a los perros callejeros comprando alimento para
                        tu mascota en nuestro Petshop! Ahora, al adquirir una
                        bolsa grande de alimento, estarás contribuyendo con un
                        granito de arena para apoyar a los refugios de perros en
                        situación de calle. Nosotros donaremos el 20% del valor
                        de la bolsa que compres a distintas organizaciones que
                        se encargan de cuidar y proteger a estos animales que
                        tanto necesitan de nuestra ayuda. De esta manera, tu
                        compra no solo estará beneficiando a tu fiel compañero,
                        sino que también estarás haciendo una diferencia en la
                        vida de otros perros que no tienen hogar. En nuestro
                        Petshop encontrarás una amplia variedad de alimentos de
                        alta calidad para perros, con diferentes sabores y
                        marcas reconocidas. Además, nuestro equipo de
                        profesionales te asesorará para que puedas elegir la
                        mejor opción para tu mascota. ¡No lo pienses más y haz
                        una buena acción por los perros callejeros comprando en
                        nuestro Petshop!
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Nosotros;
