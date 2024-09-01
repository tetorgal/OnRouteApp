const express = require('express')
const router = express.Router() 

const mongoose = require('mongoose')

const schema = mongoose.Schema

const schemaubicaciones = new schema({
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
})

const modeloUbicaciones = mongoose.model('ubicaciones', schemaubicaciones)
module.exports = router

//Obtener todas las ubicaciones
router.get('/obtenerubicaciones', (req, res) => {
    modeloUbicaciones.find({})
    .then(function(docs) {
        res.send(docs)
      })
      .catch(function(err) {
        res.send(err)
      });
})

//Obtener data de usuario/ubicacion
router.get('/obtenerubicacion/:_id', (req, res) =>{
    modeloUbicaciones.find({_id:req.params._id})
  .then(function(docs) {
    res.send(docs)
  })
  .catch(function(err) {
    res.send(err)
  });
})

//Obtener data de usuario/ubicacion
router.get('/obtenerubicacionr/:ruta', (req, res) =>{
  modeloUbicaciones.find({ruta:req.params.ruta})
.then(function(docs) {
  res.send(docs)
})
.catch(function(err) {
  res.send(err)
});
})

router.get('/ubicacionesinfo', (req, res) => {
    res.end('Ubicaciones')
})