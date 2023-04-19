import React, { useEffect, useState } from "react";
import CardProductMui from "./CardProductMui";
import "./CardListProduct.css";
import { Link } from "react-router-dom";

// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const CardProduct = () => {

    const [products, setProducts] = useState([]);

    const q = query(collection(db, "products"));

    useEffect(() => {
        const getProducts = async () => {
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.data())
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
        };
        getProducts();
    }, []);

    return (
        <div className="Card-List">
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <Link to={`/detail/${product.id}`}>
                            <CardProductMui data={product} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default CardProduct;
