const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

router.post('/', citaController.crearCita);
router.get('/', citaController.obtenerCitas);

module.exports = router;