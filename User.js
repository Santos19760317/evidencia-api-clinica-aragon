const mongoose = require('mongoose');

// Definición del esquema para la colección de usuarios
const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { 
    timestamps: true, // Crea automáticamente createdAt y updatedAt (Minuto 68:08 del video)
    versionKey: false // Evita que aparezca el campo __v en la base de datos (Minuto 68:53 del video)
});

// Exportamos el modelo para usarlo en el servidor principal
module.exports = mongoose.model('User', userSchema);