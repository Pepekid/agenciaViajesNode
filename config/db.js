import Sequelize from 'sequelize';
/* 
    DEPLOYMENT: Añadiendo variables de Entorno a nuestro Proyecto
    Para proteger la URL en caso de tener publicada la página web
    1. instalamos en nuestro proyecto en la terminal 'npm i dotenv'
    Creamos la carpeta .env y creamos una variable de entorno que la llamaremos DB_HOST
 */
import dotenv from 'dotenv'

dotenv.config();


console.log(process.env.DB_HOST);

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;