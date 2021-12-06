const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const methodOverride = require('method-override');
const session = require('express-session');
//iniciallizacion
const app = express();

// conficguracion
app.set('port', process.env.PORT || 3000);
//sirve para decirle a node que la  carpeta views esta dentro de SRC
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set ('view engine', '.hbs');

// middlewares
app.use(express.urlencoded({extended: false}));
//sirve para que los formularios puedan enviar otros metodos no solo post y get si no tambien put y delete
app.use(methodOverride('_method'));
app.use(session({
secret: 'mysecretapp',
resave: true,
saveUninitialized: true
}));


// global variables

// routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// static files

// servr is listenning 
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get ('port'));
});