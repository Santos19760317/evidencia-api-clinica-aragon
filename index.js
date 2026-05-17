const dbconnect = require('./config');
const express = require('express');
const User = require('./User'); // Importamos el modelo User.js para el Login
const cors = require('cors'); // Agregamos CORS para que no haya bloqueos de conexión

const app = express();

// Middleware para que el servidor entienda archivos JSON
app.use(express.json());
app.use(cors()); // Habilitamos CORS

// --- RUTA 1: REGISTRAR USUARIO (Método POST) ---
app.post('/registrar', async (req, res) => {
    try {
        const nuevoUsuario = new User(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    } catch (error) {
        res.status(400).send("Error al registrar: " + error.message);
    }
});

// --- RUTA 2: LOGIN / AUTENTICACIÓN (Método POST) ---
app.post('/login', async (req, res) => {
    try {
        const { nombre, password } = req.body;
        // Buscamos si existe un usuario con ese nombre en Atlas
        const usuarioEncontrado = await User.findOne({ nombre: nombre });

        if (!usuarioEncontrado) {
            return res.status(401).send("Error: El usuario no existe en la base de datos");
        }

        // Validamos si la contraseña coincide
        if (usuarioEncontrado.password === password) {
            res.status(200).send("Autenticación satisfactoria. ¡Bienvenido!");
        } else {
            res.status(401).send("Error: Contraseña incorrecta");
        }
    } catch (error) {
        res.status(500).send("Error en el servidor: " + error.message);
    }
});

// --- NUEVAS RUTAS PARA LA CLÍNICA ARAGÓN ---
// Estas líneas conectan las carpetas que creamos (controllers, models, routes)
app.use('/api/pacientes', require('./routes/pacienteRoutes'));
app.use('/api/medicos', require('./routes/medicoRoutes'));
app.use('/api/citas', require('./routes/citaRoutes'));

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor de Clínica Aragón corriendo en http://localhost:3000");
});

// Llamamos a la conexión de la base de datos (Atlas)
dbconnect();