import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';



export default function Categorias(){
    let categorias = ['Verduras', 'Frutas']
    return(
        <Paper  elevation={0} className="cont-categorias">
            <h2>Categorías</h2>           
            {categorias.map((e,index)=>(<Button key={index}>{e}</Button>))}      
        </Paper>
    );
}