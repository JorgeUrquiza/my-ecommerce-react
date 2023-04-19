import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import CardProductMui from "../../components/Cards/CardProductMui";

// Firebase
import { db } from "../../firebase/firebaseConfig";
import {
    collection,
    query,
    getDocs,
    where,
    documentId,
} from "firebase/firestore";

const ProductDetail = () => {

    let { id } = useParams(); //listo

    const [productData, setProductData] = useState([]); //listo

    console.log(productData);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(
                collection(db, "products"),
                where(documentId(), "==", id)
            );
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProductData(docs);
        };
        getProducts();
    }, []);

    return (
        <div>
            <h1>Producto seleccionado</h1>
            {productData.map((product) => {
                return <CardProductMui data={product} />;
            })}
        </div>
    );
};

export default ProductDetail;
