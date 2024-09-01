const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require('./secret/config')
const Login = require('../models/Trabajadores');

//EN LUGAR DE DEFINIR EL SCHEMA DIRECTAMENTE DESDE AQUI, SE CREO UNA CARPETA MODELS QUE CONTIENE EL MODELO DE LOGIN
//ESTE MODELO SE TANTO EN LOGIN.JS Y TRABAJADORES.JS, ESTO PORQUE NO ES POSIBLE DEFINIR EL MISMO SCHEMA DOS VECES

// const LoginSchema = new mongoose.Schema({
//   ruta: String,
//   password: String,
//   privilegio: String,
//   nombre: String,
// });

// const Login = mongoose.model("logins", LoginSchema);

router.post("/userLogin", async (req, res) => {
  const { ruta, password } = req.body;

  const userLogin = await Login.findOne({ ruta, password });

  if (userLogin) {

    //GENERAMOS UN TOKEN CON JWT, Y HACEMOS QUE EL TOKEN CONTENGA UN JSON CON TODA LA INFORMACION DEL USUARIO
    const token = jwt.sign({ 
      userId: userLogin._id, 
      ruta: userLogin.ruta, 
      nombre: userLogin.nombre, 
      apellidos: userLogin.apellidos, 
      correo: userLogin.correo, 
      telefono: userLogin.telefono, 
      password: userLogin.password, 
      calle: userLogin.calle, 
      colonia: userLogin.colonia, 
      ncasa: userLogin.ncasa, 
      cp: userLogin.cp, 
      lug_nacimiento: userLogin.lug_nacimiento, 
      estado: userLogin.estado, 
      estatus: userLogin.estatus, 
      role: userLogin.privilegio, 

    },
      //CONFIGURAMOS NUESTRA CLAVE PARA PODER DECODIFICAR EL TOKEN 
      config.secret, 
    {
      //HACEMOS QUE EL TOKEN EXPIRE DENTRO DE UNA HORA
      expiresIn: 60 * 60 * 24
    });

    //DECODIFICAMOS EL TOKEN
    const decoded = jwt.verify(token, config.secret);

    //MANDAMOS COMO RESPUESTA UN JSON CON EL TOKEN Y CON LA INFORMACION DEL USUARIO QUE CONTIENE EL TOKEN
    res.json({token, decoded})
} else {
    //SI NO SON VALIDAS LAS CREDENCIALES SE MUESTRA ESTE MENSAJE
    res.status(400).send("Credenciales invalidas");
}

});

module.exports = router;
