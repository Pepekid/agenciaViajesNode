import Sequelize from "sequelize";
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales', { // testimoniales es el nombre de la tabla en la BD
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});
