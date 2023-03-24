// Importamos express js del package.json y le asignamos la variable express

import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';





// Esta contiene una función para ejecutar express y la asignamos a la variable app

const app = express();

// Conectar  la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

// Definir puerto
// process.env.PORT es una variable de entorno
const port = process.env.DB_PORT || 5527;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
// req: lo que enviamos al servidor, res: lo que el servidor nos manda,
// next, ya terminé por tanto pasamos al siguiente middleware
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    next();
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar Router
app.use('/', router);




// a la variable app le decimos que arranque el servidor con el método .listen
// le pasas el puerto sobre el cual quieres ejecutar y después tenemos un callback
// que si arranca nos dirá que el servidor funciona y el puerto
app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`);
})

