import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/ItemsContext";
import "./Shop.css";
import { Button, TextField } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";

//nuevo
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import ShippingSuccess from "../../components/ShippingSuccess/ShippingSuccess";

const initialState = {
    name: "",
    lastName: "",
    city: "",
};

const Shop = () => {
    const { cartItems, getCartTotal, removeFromCart } = useContext(CartContext);

    // nuevo
    const [values, setValues] = useState(initialState);
    
    const [enviosId, setEnviosId] = useState("");

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "envios"), {
            values,
        });
        setEnviosId(docRef.id)
        setValues(initialState);
    };

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
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => removeFromCart(product, true)}
                        >
                            {" "}
                            Menos Unidad{" "}
                        </Button>
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

            {/* nuevo */}
            <form className="FormContainer" onSubmit={onSubmit}>
                <TextField
                    placeholder="Name"
                    style={{ margin: 10, width: 400 }}
                    name="name"
                    value={values.name}
                    onChange={onChange}
                />
                <TextField
                    placeholder="Last Name"
                    style={{ margin: 10, width: 400 }}
                    name="lastName"
                    value={values.lastName}
                    onChange={onChange}
                />
                <TextField
                    placeholder="City"
                    style={{ margin: 10, width: 400 }}
                    name="city"
                    value={values.city}
                    onChange={onChange}
                />
                <button className="btnASendAction" type="submit">
                    Finalizar Compra
                </button>
            </form>
            {enviosId.length ? <ShippingSuccess enviosId={enviosId}/> : null}            
        </div>
    );
};

export default Shop;
