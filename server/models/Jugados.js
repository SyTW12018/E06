const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JugadosSchema = new Schema({
    usuario: {
        type: String
    },
    titulo: {
        type: String,
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

module.exports = Jugados = mongoose.model('jugados', JugadosSchema)