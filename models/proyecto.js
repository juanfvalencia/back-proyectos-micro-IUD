const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Numero requerido'],
        unique: [true, 'Proyecto creado']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },
    fecha_Iniciacion: {
        type: Date,
        default: new Date()
    },
    fecha_Entrega: {
        type: Date,
        default: new Date()
    },
    valor: {
        type: Number,
        required: [true, 'Valor requerido']
    },
    fecha_Creacion: {
        type: Date,
        default: new Date()
    },
    fecha_Actualizacion: {
        type: Date,
        default: new Date()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    }
})

module.exports = model('Proyecto', ProyectoSchema)
