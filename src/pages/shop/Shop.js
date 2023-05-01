import React, { useContext } from "react";
import { CartContext } from "../../contexts/ItemsContext";
import "./Shop.css";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";

const Shop = () => {
    const { cartItems, getCartTotal, removeFromCart } = useContext(CartContext);

    return (
        <div className="shopContainer">
            <h1>Carrito</h1>
            <div>
                {cartItems.map((product) => (
                    <div className="cartItem" key={product.id}>
                        <img src={product.img} alt={product.marca} />
                        <span>Cantidad: {product.cantidad}</span>
                        <p>{product.marca}</p>
                        <p>${product.precio}</p>
                        <Button variant="outlined" color="error" onClick={() => removeFromCart(product, true)}> Menos Unidad </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="error"
                            onClick={() => removeFromCart(product)}
                        >
                            Eliminar                           
                        </Button>
                    </div>
                ))}
                <p className="total">Total: ${getCartTotal()}</p>
            </div>
        </div>
    );
};

export default Shop;
