const express = require('express')
const router = express.Router()
const PatrimonioController = require('./controllers/PatrimonioController')

// GET
router.get('/patrimonios', PatrimonioController.index)
router.get('/patrimonios/:id', PatrimonioController.findById)
router.get('/patrimonios/imovel/:imovel', PatrimonioController.findByimovel)
router.get('/patrimonios/sala/:localN1', PatrimonioController.findBylocalN1)
router.get('/patrimonios/sala/:localN2', PatrimonioController.findBylocalN2)
router.get('/patrimonios/sala/:localN3', PatrimonioController.findBylocalN3)
router.get('/patrimonios/sala/:localN4', PatrimonioController.findBylocalN4)
router.get('/patrimonios/sala/:localN5', PatrimonioController.findBylocalN5)
// PUT
router.put('/patrimonio/:id', PatrimonioController.updatePatrimonio)

// POST

// DELETE

module.exports = router
