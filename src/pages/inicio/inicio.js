import React from "react";
import Header from "../../components/header/header";
import CardPet from "../../components/Cards/CardPet";
import Greeting from "../../components/Greeting/greeting";
import Footer from "../../components/footer/Footer";
import "./inicio.css";

import img from "../../assets/mascotaJuguete.jpg";

const Inicio = () => {
    return (
        <div>
            <Header />
            <Greeting description="Hola, ¿como estas? gracias por visitar nuestro Pet Shop, en tu primer compra tendras un 30% de descuento. En compras mayores a $10.000 siempre tendras envios gratis." />
            <h1>
                Amamos a tus mascotas, por eso contamos con gran variedad de
                productos y servicios:
            </h1>
            <div className="Cards">
                <CardPet
                    name="Perros"
                    description="Mi perro me rompio el sillon!!! El mio la mesa!!!, ¿no necesitara un juguete?. Aqui encontras todo lo que necesitas para tus amigos perrunos..."
                    img="https://www.clarin.com/img/2021/07/24/kRVeytL9z_720x0__1.jpg"
                />
                <CardPet
                    name="Gatos"
                    description="Tenes un muichi? Entonces necesitas un baño, cepillos para el pelo y juguetes. Aqui encontras todo lo que necesitas para tus michis..."
                    img="https://www.foyel.com/archivos/2/6/pediatria_felina_web.jpg"
                />
                <CardPet
                    name="Peces"
                    description="Peceras, alimento, accesorios y decoracion. Algo mas? aqui tenes todo para que tus peces se sientan en un oceano..."
                    img="https://images.hola.com/imagenes/mascotas/20220322206704/asi-duermen-peces-curiosidades-dn/1-65-799/como-duermen-peces-ojos-abiertos-t.jpg"
                />
                <CardPet
                    name="Veterinarios"
                    description="La salud de nuestras mascotas es lo mas importante, devolveles el amor que ellos te dan con la mejor atención..."
                    img="https://www.prensalibre.com/wp-content/uploads/2019/01/Nota-cuidados-1.jpg?quality=52"
                />
            </div>
            <section className="seccion">
                <div className="text-column">
                    <h2>Todos los miercoles 2x1 en juguetes</h2>
                    <p>
                        ¡Bienvenidos a nuestro Petshop! ¡Tenemos una gran
                        noticia para todos los amantes de las mascotas! A partir
                        de hoy, todos los miércoles tendrás la oportunidad de
                        conseguir 2 x 1 en juguetes para tus peludos amigos.
                        Sabemos que tu mascota es parte de tu familia y que
                        quieres lo mejor para ella. Es por eso que ofrecemos una
                        gran variedad de juguetes de alta calidad y durabilidad
                        que garantizan horas de diversión para tu compañero
                        peludo. Además, ahora es el momento perfecto para
                        consentir a tu mascota sin preocuparte por el
                        presupuesto. Con nuestra promoción 2 x 1 en juguetes
                        para mascotas, podrás llevarte dos juguetes por el
                        precio de uno. ¡Así que no esperes más y ven a
                        visitarnos!
                    </p>
                </div>
                <div className="image-column">
                    <img src={img} alt="happyDog" />
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Inicio;
