const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alumnos:35413541@practica1.dtdfwfc.mongodb.net/onroute');

const objetobd = mongoose.connection

objetobd.on('connected', () => {console.log('Conexion correcta MongoDB')})
objetobd.on('error', () => {console.log('Error en la conexion MongoDB')})

module.exports = mongoose

//socket-io  aasasas