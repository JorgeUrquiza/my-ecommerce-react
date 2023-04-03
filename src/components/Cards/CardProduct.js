import React, { useEffect, useState } from "react";
import CardProductMui from "./CardProductMui";
import "./CardListProduct.css";
import axios from "axios";

import { Link } from "react-router-dom";


const CardProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios("https://my-json-server.typicode.com/JorgeUrquiza/ApiPets/Productos").then(res =>
        setProducts(res.data))
    }, []);


    return (
        <div className="Card-List">
        {products.map((product) => {
            return(
                <div key={product.id}>
                    <Link to={`/detail/${product.id}`}> 
                        <CardProductMui data={product}/>
                    </Link>
                </div>
            )
        } )}
        </div>
        );
};

export default CardProduct;
