const Medico = require('../models/Medico');

exports.crearMedico = async (req, res) => {
    try {
        const nuevoMedico = new Medico(req.body);
        await nuevoMedico.save();
        res.status(201).json(nuevoMedico);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el médico', error });
    }
};

exports.obtenerMedicos = async (req, res) => {
    try {
        const medicos = await Medico.find();
        res.json(medicos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los médicos' });
    }
};