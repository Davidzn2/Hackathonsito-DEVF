const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
const usuarios = require('Objeto_Usuario.js');
const PORT = 8000


//Configuración para poder recibir el body
app.use(bodyParser.json());


app.use('/static', express.static(__dirname + '/static'));

app.listen(PORT, () =>{
    console.log(`Tu servidor esta corriendo en el puerto ${PORT}`);
});



console.log(david)
