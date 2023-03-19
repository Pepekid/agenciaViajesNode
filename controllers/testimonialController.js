import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {

    // Validar formulario
    const { nombre, email, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacio' });
    }
    if (email.trim() === '') {
        errores.push({ mensaje: 'El Correo está vacio' });
    }
    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje está vacio' });
    }

    if (errores.length) {

        // Consultart testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'testimoniales',
            testimoniales,
            errores,
            nombre,
            email,
            mensaje
        })
    } else {
        // Almacenarlo en la BD

        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);
        }


    }




};

export {
    guardarTestimonial
};