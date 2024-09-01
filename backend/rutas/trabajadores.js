const express = require('express')
const router = express.Router() 
const modeloTrabajador = require('../models/Trabajadores')
const mongoose = require('mongoose')



// const schematrabajadores = new schema({
//     _id: String,
//     ruta: String,
//     nombre: String,
//     apellidos: String,
//     correo: String,
//     telefono: String,
//     password: String,
//     calle: String,
//     colonia: String,
//     ncasa: String,
//     cp: String,
//     lug_nacimiento: String,
//     estado: String,
//     estatus: String,
//     privilegio: String
// })

// const modeloTrabajador = mongoose.model('trabajadores', schematrabajadores)
module.exports = router

//Agregar usuario
router.post('/agregartrabajador', (req, res) => {
  const nuevousuario = new modeloTrabajador({
      ruta: req.body.ruta,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      correo: req.body.correo,
      password: req.body.password,
      _id: req.body._id,
      telefono: req.body.telefono,
      calle: req.body.calle,
      colonia: req.body.colonia,
      ncasa: req.body.ncasa,
      cp: req.body.cp,
      lug_nacimiento: req.body.lug_nacimiento,
      estado: req.body.estado,
      estatus: req.body.estatus,
      privilegio: req.body.privilegio,
  })
  nuevousuario.save({})
  .then(function(docs) {
    res.send(docs)
  })
  .catch(function(err) {
    res.send(err)
  });
})

//actualizar usuario
router.post('/actualizatrabajador', (req, res) => {
    
  modeloTrabajador.findOneAndUpdate({_id:req.body._id}, {
      privilegio: req.body.privilegio,
      estatus: req.body.estatus,
  })
  .then(function(docs) {
    res.send(docs)
  })
  .catch(function(err) {
    res.send(err)
  });
})

//Borrar usuario
router.post('/borrartrabajador', (req, res) => {
    
  modeloTrabajador.findOneAndDelete({_id:req.body._id})
  .then(function(docs) {
    res.send(docs)
  })
  .catch(function(err) {
    res.send(err)
  });
})

//Obtener todos los usuarios
router.get('/obtenertrabajadores', (req, res) => {
    modeloTrabajador.find({})
    .then(function(docs) {
        res.send(docs)
      })
      .catch(function(err) {
        res.send(err)
      });
})

//Obtener data de usuario
router.get('/obtenertrabajador/:ruta', (req, res) =>{
  modeloTrabajador.find({ruta:req.params.ruta})
  .then(function(docs) {
    res.send(docs)
  })
  .catch(function(err) {
    res.send(err)
  });
})

router.get('/trabajadoresinfo', (req, res) => {
    res.end('Trabajadores')
})