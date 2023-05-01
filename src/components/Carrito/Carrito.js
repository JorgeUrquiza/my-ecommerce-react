import { useContext } from "react";
import { CartContext } from "../../contexts/ItemsContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Carrito = () => {
    const { cartItems } = useContext(CartContext);



    return (
        <div>
            <AddShoppingCartIcon />
            <span>{cartItems.reduce((total, item) => total + item.cantidad, 0)}</span>
        </div>
    );
};

export default Carrito;

