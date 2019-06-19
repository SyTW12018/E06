const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JuegoSchema = new Schema({
    titulo: {
        type: String
    },
    categoria: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }
})

module.exports = Juego = mongoose.model('juegos', JuegoSchema)