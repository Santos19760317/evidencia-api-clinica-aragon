const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
    medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true }
});

module.exports = mongoose.model('Cita', citaSchema);