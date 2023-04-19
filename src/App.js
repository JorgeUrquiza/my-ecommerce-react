import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componentes
import NavBar from "./components/NavBar/NavBar";


//pages
import Inicio from "./pages/inicio"
import Nosotros from "./pages/nosotros"
import Producto from "./pages/producto";
import Error from "./pages/error";
import ProductDetail from "./pages/ProductDetail/ProductDetail";



class App extends Component {
  render () {
    return (
    <Router>
    <div className="Header">
      <NavBar/> 
      <Routes>
        <Route path="/" element= {<Inicio/>} />
        <Route path="/nosotros" element={<Nosotros/> } />
        <Route path="/producto" element={<Producto/> } />
        <Route path="/detail/:id" element={<ProductDetail/> } />
        <Route path="*" element={<Error/> } />
      </Routes>
    </div>
    </Router>
    )
  }
}

export default App;