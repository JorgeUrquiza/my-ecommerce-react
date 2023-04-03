import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import CardProductMui from '../../components/Cards/CardProductMui';

const ProductDetail = () => {
  const [Product, setProduct] = useState({});

  let {id} = useParams();


  useEffect(() => {
    axios(`https://my-json-server.typicode.com/JorgeUrquiza/ApiPets/Productos/${id}`).then(res =>
    setProduct(res.data))
}, [id]);


  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
      <h1>Productos detalles</h1>
      <CardProductMui data={Product}/>
    </div>
  )
}

export default ProductDetail