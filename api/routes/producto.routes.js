const express = require('express');
const router = express.Router();
const producto = require('../controllers/producto.controller');

router.get('/lista-categorias', producto.getListaCartegorias);
router.get('/lista-productos-categoria', producto.getListaProductosCartegoria);
module.exports = router;
