const { Router } = require('express')
const { createProyecto, 
    getProyectos} =
 require('../controllers/proyecto')

const router = Router()

// crear
router.post('/', createProyecto)

// consultar todos
router.get('/', getProyectos)

module.exports = router;