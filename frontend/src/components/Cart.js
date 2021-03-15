import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const agregarProductos=(producto)=>{
    setProductos([]);
}

export default function Cart(){
    const [productos, setProductos] = useState([]);
    return(
        <Paper  elevation={0} className="cont-categorias">
            <h2>Cart</h2>     
            {productos.map((e,index)=>(
            <Paper key={index}>
                <h4>{e.descripcion}</h4>
                <Button>X</Button>
            </Paper>))}   
        </Paper>
    );
}