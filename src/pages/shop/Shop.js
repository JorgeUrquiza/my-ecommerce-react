import React, { useContext } from "react";
import { CartContext } from "../../contexts/ItemsContext";
import "./Shop.css"

const Shop = () => {
    const { cartItems, getCartTotal, removeFromCart } = useContext(CartContext);

    return (
        <div className="shopContainer"> 
            <h1>Carrito</h1>
            {cartItems.map((product) => (
                <div key={product.id}>
                    <span>{product.cantidad}</span>
                    <p>{product.marca}</p>
                    <p>${product.precio * product.cantidad}</p>
                    <button onClick={() => removeFromCart(product)}>Remove</button>
                    <button onClick={() => removeFromCart(product, true)}>Remove One</button>
                </div>
            ))}
            <p>Total: ${getCartTotal()}</p>
        </div>
    );
};

export default Shop;

