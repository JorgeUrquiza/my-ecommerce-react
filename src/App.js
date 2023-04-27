import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componentes
import NavBar from "./components/NavBar/NavBar";

//Context
import { CartProvider } from "./contexts/ItemsContext";

//Pages
import Inicio from "./pages/inicio/inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Producto from "./pages/producto";
import Error from "./pages/error";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

class App extends Component {
    render() {
        return (
            <Router>
                <CartProvider>
                    <div className="Header">
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Inicio />} />
                            <Route path="/nosotros" element={<Nosotros />} />
                            <Route path="/producto" element={<Producto />} />
                            <Route
                                path="/detail/:id"
                                element={<ProductDetail />}
                            />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </CartProvider>
            </Router>
        );
    }
}

export default App;
