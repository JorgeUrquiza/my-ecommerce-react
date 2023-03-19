import React, { Component } from "react";
import "./App.css";

//Componentes
import Header from "./components/header/header";
import NavBar from "./components/NavBar/NavBar";
import CardPet from "./components/Cards/CardPet";

class App extends Component {
  render () {
    return (
    <div className="Header">
      <NavBar/> 
      <Header/>      
      <div className="Cards">
        <CardPet 
        name="Perros" 
        description="Aqui encontras todo lo que necesitas para tus amigos perrunos..."
        img="https://www.clarin.com/img/2021/07/24/kRVeytL9z_720x0__1.jpg"
        />
        <CardPet 
        name="Gatos" 
        description="Aqui encontras todo lo que necesitas para tus michis..."
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
    </div>
    )
  }
}

export default App;