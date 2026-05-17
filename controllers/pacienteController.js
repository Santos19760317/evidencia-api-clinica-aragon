const Paciente = require('../models/Paciente');

// Esto sirve para guardar un paciente nuevo
exports.crearPaciente = async (req, res) => {
    try {
        const nuevoPaciente = new Paciente(req.body);
        await nuevoPaciente.save();
        res.status(201).json(nuevoPaciente);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el paciente', error });
    }
};

// Esto sirve para ver la lista de todos los pacientes
exports.obtenerPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los pacientes' });
    }
};