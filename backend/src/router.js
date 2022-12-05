const express = require('express')
const router = express.Router()
const PatrimonioController = require('./controllers/PatrimonioController')
const import_tabela = require('./import_tabela.js')
// GET
router.get('/patrimonios', PatrimonioController.index)
router.get('/patrimonios/:id', PatrimonioController.findById)
router.get('/patrimonios/imovel/:imovel', PatrimonioController.findByimovel)
router.get('/patrimonios/localN1/:localN1', PatrimonioController.findBylocalN1)
router.get('/patrimonios/localN2/:localN2', PatrimonioController.findBylocalN2)
router.get('/patrimonios/localN3/:localN3', PatrimonioController.findBylocalN3)
router.get('/patrimonios/localN4/:localN4', PatrimonioController.findBylocalN4)
router.get('/patrimonios/localN5/:localN5', PatrimonioController.findBylocalN5)
router.get('/tabela/export/:path', import_tabela.exportTabela)
// PUT


router.put('/patrimonio/:id', PatrimonioController.updatePatrimonio)

module.exports = router
