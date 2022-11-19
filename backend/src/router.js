const express = require('express')
const router = express.Router()
const PatrimonioController = require('./controllers/PatrimonioController')

// GET
router.get('/patrimonios', PatrimonioController.index)
router.get('/patrimonios/:id', PatrimonioController.findById)
router.get('/patrimonios/predio/:predio', PatrimonioController.findByPredio)
router.get('/patrimonios/sala/:sala', PatrimonioController.findBySala)

// PUT
router.put('/patrimonio/:id', PatrimonioController.updatePatrimonio)

// POST

// DELETE

module.exports = router
