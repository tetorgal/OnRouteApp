const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const schema = mongoose.Schema

const schemaentregas = new schema({
  _id: String
})

const modeloEntregas = mongoose.model('controlubicaciones', schemaentregas)
module.exports = router
const ObjectId = require('mongodb').ObjectId;
//Obtener todos las entregas
router.get('/obtenerentregas/:_id', (req, res) => {
  modeloEntregas.aggregate([
    [
      {
        $match: {
          _id: new ObjectId(req.params._id)
        }
      },
      {
        $lookup: {
          from: 'ubicaciones',
          localField: 'idUbicacion',
          foreignField: '_id',
          as: 'entregas'
        }
      }
    ]
  ])
    .then(function (docs) {
      res.send(docs)
    })
    .catch(function (err) {
      res.send(err)
    });
})

//Obtener todos las entregas
router.get('/obtenerentregasa', (req, res) => {
  modeloEntregas.aggregate([
    [
      {
        $match: {
          // idUbicacion: "1003"
        }
      },
      {
        $lookup: {
          from: 'ubicaciones',
          localField: 'idUbicacion',
          foreignField: '_id',
          as: 'entregas'
        }
      }
    ]
  ])
    .then(function (docs) {
      res.send(docs)
    })
    .catch(function (err) {
      res.send(err)
    });
})

//Obtener data de situacion por ruta
router.get('/obtenersituacion/:ruta', (req, res) => {
  modeloEntregas.find({ ruta: req.params.ruta })
    .then(function (docs) {
      res.send(docs)
    })
    .catch(function (err) {
      res.send(err)
    });
})

//Obtener data de situacion por id
router.get('/obtenerentrega/:idUbicacion', (req, res) => {
  modeloEntregas.find({ idUbicacion: req.params.idUbicacion })
    .then(function (docs) {
      res.send(docs)
    })
    .catch(function (err) {
      res.send(err)
    });
})

router.get('/entregasinfo', (req, res) => {
  res.end('Entregas')
})