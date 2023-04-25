// import React from "react";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// const Carrito = () => {
//     return (
//         <div>
//             <AddShoppingCartIcon/>
//             <span>0</span>
//         </div>
//     )
// }

// export default Carrito;

import React, { useContext } from "react";
import { CartContext } from "../../contexts/ItemsContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Carrito = () => {
    const { cartItems, getCartTotal, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <AddShoppingCartIcon/>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            ))}
            <p>Total: ${getCartTotal()}</p>
        </div>
    );
};

export default Carrito;