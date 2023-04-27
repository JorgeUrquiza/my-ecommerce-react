import { useContext, useState } from "react";
import { CartContext } from "../../contexts/ItemsContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Carrito = () => {
    const { cartItems, getCartTotal } = useContext(CartContext);
    const [cart, setCart] = useState(cartItems);

    const handleRemoveFromCart = (product) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex((item) => item.id === product.id);
        if (index !== -1) {
            updatedCart.splice(index, 1);
            setCart(updatedCart);
        }
    };

    return (
        <div>
            <AddShoppingCartIcon />
            {cart.map((product) => (
                <div key={product.id}>
                    <span>{product.cantidad}</span>
                    <p>{product.marca}</p>
                    <p>${product.precio}</p>
                    <button onClick={() => handleRemoveFromCart(product)}>
                        borrar
                    </button>
                </div>
            ))}
            <span>{cartItems.length}</span>
            <p>Total: ${getCartTotal()}</p>
        </div>
    );
};

export default Carrito;
