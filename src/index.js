require('dotenv').config();

const app = require('./server');
require('./database');



require('./server');

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port')) 
})