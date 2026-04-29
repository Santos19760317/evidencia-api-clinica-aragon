const dbconnect = require('./config');
const express = require('express');
const User = require('./User'); // Importamos el modelo User.js
const app = express();

// Middleware para que el servidor entienda archivos JSON
app.use(express.json());

// --- RUTA 1: REGISTRAR USUARIO (Método POST) ---
app.post('/registrar', async (req, res) => {
    try {
        const nuevoUsuario = new User(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        // Respondemos con los datos del usuario creado y código 201 (creado)
        res.status(201).json(usuarioGuardado);
    } catch (error) {
        res.status(400).send("Error al registrar: " + error.message);
    }
});

// --- RUTA 2: LOGIN / AUTENTICACIÓN (Método POST) ---
// Esta es la ruta principal que pide el instructor para esta evidencia
app.post('/login', async (req, res) => {
    try {
        const { nombre, password } = req.body;
        // Buscamos si existe un usuario con ese nombre en Atlas
        const usuarioEncontrado = await User.findOne({ nombre: nombre });

        if (!usuarioEncontrado) {
            // Si no existe, enviamos error 401 (No autorizado)
            return res.status(401).send("Error: El usuario no existe en la base de datos");
        }

        // Validamos si la contraseña coincide
        if (usuarioEncontrado.password === password) {
            // Si todo es correcto, enviamos mensaje de éxito y código 200 (OK)
            res.status(200).send("Autenticación satisfactoria. ¡Bienvenido!");
        } else {
            res.status(401).send("Error: Contraseña incorrecta");
        }
    } catch (error) {
        res.status(500).send("Error en el servidor: " + error.message);
    }
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor de Clínica Aragón corriendo en http://localhost:3000");
});

// Llamamos a la conexión de la base de datos (Atlas)
dbconnect();