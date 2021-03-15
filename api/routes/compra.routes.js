const express = require('express');
const router = express.Router();
const compra = require('../controllers/compra.controller');

router.post('/registrar-compra', compra.guardarCompra);
module.exports = router;
