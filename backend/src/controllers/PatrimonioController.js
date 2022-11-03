const Patrimonio = require('../models/schema.js')

module.exports = {
  async index(req, res) {
    const patrimonios = await Patrimonio.find({})
    return res.json(patrimonios)
  },

  async findById(req, res) {
    const patrimonioId = req.params.patrimonioId
    patrimonio = await Patrimonio.find({ _id: patrimonioId })
    return res.json(patrimonio)
  },

  async findByPredio(predio) {
    pat = await Patrimonio.find({ predio: predio })
    return pat
  },

  async findBySala(sala) {
    pat = await Patrimonio.find({ sala: sala })
    return pat
  },

  async changeSala(id, novaSala) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { sala: novaSala })
  },

  async changePredio(id, novoPredio) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { sala: novoPredio })
  }
}
