import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Producto from './Producto';

const productos = [
    {
        id:1,
        categoria:'frutas',
        imagen:'img/platanos.jpg',
        precio:2,
        descripcion: "Plantanos",
        stock:5
    },
    {
        id:2,
        categoria:'frutas',
        imagen:'img/manzanas.jpg',
        precio:2,
        descripcion: "Manzanas",
        stock:5
    },
    {
        id:3,
        categoria:'frutas',
        imagen:'img/naranjas.jpg',
        precio:2,
        descripcion: "Naranjas",
        stock:5
    }

];

export default function ListaProductos(){
    return(
        <Paper  elevation={0} className="cont-categorias">
            <h2>Productos</h2>                  
            <div className="cont-lista-prod">
                {
                    productos.map((p,index)=>(
                        <Producto key={p.id} producto={p}></Producto>
                    ))
                }

            </div>
           
        </Paper>
    );
}