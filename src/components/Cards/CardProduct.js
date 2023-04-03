import React, { useEffect, useState } from "react";

import CardProductMui from "./CardProductMui";
import "./CardListProduct.css";

import axios from "axios";


const CardProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios("https://my-json-server.typicode.com/JorgeUrquiza/ApiPets/perros").then(res =>
        setProducts(res.data))
    }, []);


    return (
        <div className="Card-List">
        {products.map((product) => {
            return(
                <div>
                    <CardProductMui key={product.id} data={product}/>
                </div>
            )
        } )}
        </div>
        );
};

export default CardProduct;
