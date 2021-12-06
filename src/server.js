const express = require('express');
const path = require('path');
//inicialiciaciones
const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.urlencoded({extended: false}));

//variables globales

//rutas
app.get('/', (req, res) => {
    res.send('hello world');
});

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;