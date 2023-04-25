import React from "react";
import Header from "../components/header/header";
import CardPet from "../components/Cards/CardPet";
import Greeting from "../components/Greeting/greeting";
import Footer from "../components/footer/Footer";
import "./inicio.css"

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
            <div className="descripcion">
                <h2> Nuestra mision es brindar alimento de calidad y servicios para el cuidado de tus compañeros peludos</h2>
                <br />
                <p>
                En nuestra tienda de mascotas, estamos comprometidos con el bienestar de tus compañeros peludos. Nuestra misión es ofrecer los mejores alimentos y servicios para el cuidado de mascotas, para asegurarnos de que tus amigos de cuatro patas estén sanos y felices.
                Sabemos lo importante que son tus mascotas para ti, por eso nos aseguramos de tener los mejores alimentos y productos en nuestras estanterías. Trabajamos con proveedores de renombre, que ofrecen alimentos de alta calidad y nutrición balanceada para todas las etapas de vida de tu mascota.
                </p>
                <p>
                Además, nuestra tienda cuenta con un equipo de expertos en cuidado de mascotas, quienes te brindarán consejos y recomendaciones para cuidar adecuadamente de tus compañeros peludos. Desde el aseo y la higiene, hasta la prevención de enfermedades, nuestros expertos están aquí para ayudarte en todo lo que necesites.
                También ofrecemos servicios de peluquería y cuidado, para que tu mascota luzca siempre hermosa y saludable. Nuestros estilistas caninos y felinos están altamente capacitados para brindar los mejores cuidados, respetando siempre las necesidades y preferencias de cada mascota.
                </p>
                <p>
                En nuestra tienda, queremos que te sientas en confianza al elegir los alimentos y productos para el cuidado de tus mascotas. Por eso, nos aseguramos de ofrecer una amplia gama de opciones y precios para que encuentres lo que mejor se adapte a tus necesidades y presupuesto.
                </p>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Inicio;
