const cors = require('cors');
const express = require('express')
const app = express()

//Importar conexion MongoDB
const archivoBD = require('./conexion');
const port = process.env.PORT || "8080";
//Importacion del archivo de rutas y modelo usuario
const rutatrabajadores = require('./rutas/trabajadores')
const rutasituaciones = require('./rutas/situaciones')
const rutaubicaciones = require('./rutas/ubicaciones')
const rutaentregas = require('./rutas/entregas')
const loginRoutes = require("./rutas/login");

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use(cors());

app.use('/onroute/api/trabajadores', rutatrabajadores)
app.use('/onroute/api/situaciones', rutasituaciones)
app.use('/onroute/api/ubicaciones', rutaubicaciones)
app.use('/onroute/api/entregas', rutaentregas)
app.use('/api/login', loginRoutes);

app.get('/', (req, res) => {
    res.end('Bienvenido')
})

// 
app.listen(port, function(){
    console.log(`Conectado al puerto ${port}`)
})
