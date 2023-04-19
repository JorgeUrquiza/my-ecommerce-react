import * as React from "react";
import {Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";


const CardProductMui = ({data}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={data.img}
                    alt={data.marca}
                    height="300"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" align="center" component="div">
                        {data.marca}
                    </Typography>
                    <Typography gutterBottom variant="h6" align="center" component="div">
                        {data.tipo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.descripcion}                        
                    </Typography> 
                    <Typography variant="h6" align="center" color="text.primary">
                    {"$" + data.precio}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardProductMui;