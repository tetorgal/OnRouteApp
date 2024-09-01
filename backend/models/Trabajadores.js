const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
    _id: String,
    ruta: String,
    nombre: String,
    apellidos: String,
    correo: String,
    telefono: String,
    password: String,
    calle: String,
    colonia: String,
    ncasa: String,
    cp: String,
    lug_nacimiento: String,
    estado: String,
    estatus: String,
    privilegio: String
  });

module.exports =  mongoose.model("trabajadores", LoginSchema);