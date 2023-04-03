import React, {useEffect} from "react";
import  { Alert }  from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 4000)
    }, [navigate])
    
    return (
    <div>
        <Alert saverity="Error"> Pagina no encontrada | 404 </Alert>
    </div>
    );
};

export default Error;
