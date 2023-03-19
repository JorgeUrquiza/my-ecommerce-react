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
        <CardPet name="Perros" description="Aqui encontras todo lo que necesitas para tus amigos perrunos..."
        img="https://www.clarin.com/img/2021/07/24/kRVeytL9z_720x0__1.jpg" />
      </div>
    </div>
    )
  }
}

export default App;