const Proyecto = require('../models/proyecto')
const { request, response} = require('express')
const TipoProyecto = require('../models/tipoProyecto')
const Cliente = require('../models/cliente')
const Universidad = require('../models/universidad')
const Etapa = require('../models/etapa')

// crear
const createProyecto = async (req = request, 
    res = response) => {
    try{
        const data = req.body
        console.log(data)
        const { tipoProyecto, cliente, universidad, etapa } = data;
        //validando tipo proyecto
        const tipoProyectoDB = TipoProyecto.findOne({
            _id: tipoProyecto._id
        })
        if(!tipoProyectoDB){
            return res.status(400).json({msg: 'tipo de proyecto invalido'})
        }
        // validando cliente
        const clienteDB = Cliente.findOne({
            _id: cliente._id
        })
        if(!clienteDB){
            return res.status(400).json({msg: 'cliente invalido'})
        }

        const universidadDB =  Universidad.findOne({
            _id: universidad._id
        })
        if(!universidadDB){
            return res.status(400).json({msg: 'universidad invalida'})
        }

        const etapaDB =  Etapa.findOne({
            _id: universidad._id
        })
        if(!etapaDB){
            return res.status(400).json({msg: 'etapa invalida'})
        }

        const proyecto = new Proyecto(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)
    }catch(error){
        return res.status(500).json({
            msg: 'Error general ' + error
        })
    }
}

//listar todos
const getProyectos = async (req = request, 
    res = response) => {
        try{
            console.log('petición');
            const proyectosDB = await Proyecto.find()
                .populate({
                    path: 'tipoProyecto'
                })
                .populate({
                    path: 'cliente'
                })
                .populate({
                    path: 'etapa'
                })
                .populate({
                    path: 'universidad'
                })
            return res.json(proyectosDB)
            
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createProyecto, 
    getProyectos, 
    //updateProyectoByID 
}