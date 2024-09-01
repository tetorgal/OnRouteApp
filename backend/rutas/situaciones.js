const express = require('express')
const router = express.Router() 

const mongoose = require('mongoose')

const schema = mongoose.Schema

const schemasituaciones = new schema({
    _id: String,
    ruta: String,
    situacione: String,
    fecha: String,
    descripcion: String,
    matricula: String
})

const modeloSituacion = mongoose.model('situaciones', schemasituaciones)
module.exports = router

//Obtener todos las situaciones
router.get('/obtenersituaciones', (req, res) => {
    modeloSituacion.find({})
    .then(function(docs) {
        res.send(docs)
      })
      .catch(function(err) {
        res.send(err)
      });
})

//Obtener data de situacion por ruta
router.get('/obtenersituacion/:ruta', (req, res) =>{
    modeloSituacion.find({ruta:req.params.ruta})
  .then(function(docs) {
    res.send(docs)
  })
  .catch(function(err) {
    res.send(err)
  });
})

//Obtener data de situacion por id
router.get('/obtenersituacionid/:_id', (req, res) =>{
  modeloSituacion.find({_id:req.params._id})
.then(function(docs) {
  res.send(docs)
})
.catch(function(err) {
  res.send(err)
});
})

router.get('/situacionesinfo', (req, res) => {
    res.end('Situaciones')
})