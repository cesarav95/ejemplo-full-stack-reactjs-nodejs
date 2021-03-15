import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';



export default function Producto(props){
    let url= process.env.PUBLIC_URL + '/img/platanos.jpg';
    return(
        <Card  className="cont-item-producto">
            <img className="img-producto" src={process.env.PUBLIC_URL + '/'+props.producto.imagen} alt="Prodcuto imagen" />
            <CardContent>
                <h3 style={{margin:0, padding:0}}>{props.producto.descripcion}</h3>
                <p>Disponibles: {props.producto.stock}</p>
            </CardContent>
            <CardActions>
                <h3>S/ {props.producto.precio}</h3>
                <Button size="small">Agregar</Button>
            </CardActions>
        </Card>
    );
}