import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

//Compoenntes
import Categorias from './Categorias';
import ListaProductos from './ListaProductos';
import Cart from './Cart';


export default function Home(props){
    return (
        <div className="contenedor-Home">
            <Grid container spacing={3}>
                <Grid item xs>
                    <Categorias></Categorias>
                </Grid>
                <Grid item xs={7}>
                    <Paper  elevation={0} className="cont-categorias" style={{alignItems:'flex-start'}}>
                        <ListaProductos></ListaProductos>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper  elevation={0} className="cont-categorias">
                        <Cart></Cart>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}