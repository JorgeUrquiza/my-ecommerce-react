import React, { Component } from "react";
import "./App.css";

//Componentes
import Header from "./components/header/header"
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render () {
    return (
    <div className="Header"> 
      <Header/>
      <NavBar/>
    </div>
    )
  }
}

export default App;