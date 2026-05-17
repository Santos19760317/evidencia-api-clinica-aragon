const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cedula: { type: String, required: true, unique: true },
    edad: { type: Number, required: true },
    telefono: { type: String, required: true }
});

module.exports = mongoose.model('Paciente', pacienteSchema);