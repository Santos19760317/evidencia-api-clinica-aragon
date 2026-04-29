const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        // Usando la cadena de conexión detallada para evitar errores de DNS
        await mongoose.connect('mongodb://smosqueralozano_db_user:GcmLR1CayEeoEzkh@ac-qi8qec7-shard-00-00.cohrnp8.mongodb.net:27017,ac-qi8qec7-shard-00-01.cohrnp8.mongodb.net:27017,ac-qi8qec7-shard-00-02.cohrnp8.mongodb.net:27017/ProyectoGestiondeCitasMedicas?ssl=true&replicaSet=atlas-10sm5t-shard-0&authSource=admin&retryWrites=true&w=majority');
        
        console.log("Conexión exitosa a MongoDB");
    } catch (error) {
        console.error("Error de conexión:", error.message);
    }
};

module.exports = dbconnect;