const {Schema, model} = require('mongoose')

const EtapaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
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

module.exports = model('Etapa', EtapaSchema)