import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Greeting from "../../components/Greeting/greeting";
import { useNavigate } from "react-router-dom";



const Nosotros = () => {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 4000)
    }, [navigate])

    return (
        <div >
            <Header/>
            <Greeting description="Pagina en proceso, usted va a ser redirigido, disculpe las molestias..."/>
        </div>
    );
}

export default Nosotros;
