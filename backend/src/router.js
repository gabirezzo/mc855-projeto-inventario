const express = require('express')

const router = express.Router()

const PatrimonioController = require('./controllers/PatrimonioController')

router.get('/patrimonios', PatrimonioController.index)
router.get('/patrimonios/:patrimonioId', PatrimonioController.findById)

module.exports = router
