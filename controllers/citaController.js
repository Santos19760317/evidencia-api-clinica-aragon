const Cita = require('../models/Cita');

exports.crearCita = async (req, res) => {
    try {
        const nuevaCita = new Cita(req.body);
        await nuevaCita.save();
        res.status(201).json(nuevaCita);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear la cita', error });
    }
};

exports.obtenerCitas = async (req, res) => {
    try {
        // El "populate" sirve para que en la cita se vea el nombre del médico y paciente, no solo números
        const citas = await Cita.find().populate('paciente').populate('medico');
        res.json(citas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las citas' });
    }
};