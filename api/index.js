const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

const app = express()

// Cargar variables de entorno
dotenv.config();

//Configurar
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api/producto/', require('./routes/producto.routes'));
app.use('/api/compra/', require('./routes/compra.routes'));

//Iniciar API
app.listen(app.get('port'), ()=>{
    console.log("API corriendo en el puerto ", app.get('port'));
});

