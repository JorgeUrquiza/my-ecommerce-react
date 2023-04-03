import * as React from "react";
import {Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";


const CardProductMui = ({data}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={data.img}
                    alt={data.Marca}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.Marca}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.descripcion}                        
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                    {data.Precio}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardProductMui;