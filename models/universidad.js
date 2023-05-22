const {Schema, model} = require('mongoose')

const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    direccion: {
        type: String,
        required: [true, 'Direccion requerida']
    },
    telefono: {
        type: Number,
        required: [true, 'Telefono requerido']
    },
    fecha_Creacion: {
        type: Date,
        default: new Date()
    },
    fecha_Actualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Universidad', UniversidadSchema)