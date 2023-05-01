import React, { useContext } from "react";
import { CartContext } from "../../contexts/ItemsContext";
import "./Shop.css";

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
                        <button onClick={() => removeFromCart(product, true)}>
                            Eliminar unidad
                        </button>
                        <button onClick={() => removeFromCart(product)}>
                            Eliminar Producto
                        </button>
                    </div>
                ))}
                <p>Total: ${getCartTotal()}</p>
            </div>
        </div>
    );
};

export default Shop;
