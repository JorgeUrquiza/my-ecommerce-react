import React, { useContext } from "react";
import { CartContext } from "../../contexts/ItemsContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Carrito = () => {
    const { cartItems, getCartTotal, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <AddShoppingCartIcon/>
            {cartItems.map((product) => (
                <div key={product.id}>
                    <p>{product.marca}</p>
                    <p>${product.precio}</p>
                    <button onClick={() => removeFromCart(product)}>Remove</button>
                </div>
            ))}
            <p>Total: ${getCartTotal()}</p>
        </div>
    );
};

export default Carrito;