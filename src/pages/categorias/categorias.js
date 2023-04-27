import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./categorias.css"

import CardProductMui from "../../components/Cards/CardProductMui"

import { db } from "../../firebase/firebaseConfig";
import {
    collection,
    query,
    getDocs,
    where
} from "firebase/firestore";

const Categorias = () => {
    const [productData, setProductData] = useState([]); 

    let { categoria } = useParams();

    console.log(categoria);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(
                collection(db, "products"),
                where("categoria", "==", categoria)
            );
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProductData(docs);
        };
        getProducts();
    }, [categoria]);

    return (
        <div >
            <h1>Categorias</h1>
            <div className="cardCategory">
            {productData.map((product) => {
                return <CardProductMui data={product} key={product.id} />;
            })}
            </div>
        </div>
    );
};

export default Categorias;