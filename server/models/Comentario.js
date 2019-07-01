const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
    autor: {
        type: String
    },
    titulo: {
        type: String,
    },
    contenido: {
        type: String,
        required: true
    },
    puntuacion: {
        type: String,
        required: true
    },
    creado: {
        type: String,
        required: true

    }
})

module.exports = Comentarios = mongoose.model('comentarios', ComentarioSchema)