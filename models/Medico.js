const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    especialidad: { type: String, required: true },
    licencia: { type: String, required: true, unique: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Medico', medicoSchema);