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

  async findByPredio(req, res) {
    const predio = req.params.predio
    patrimonio = await Patrimonio.find({ predio: predio })
    return res.json(patrimonio)
  },

  async findBySala(req, res) {
    const sala = req.params.sala
    patrimonio = await Patrimonio.find({ sala: sala })
    return res.json(patrimonio)
  },

  async updatePatrimonio(req, res) {
    const id = req.params.id
    const area = req.body.areaPatrimonio
    const predio = req.body.predio
    const sala = req.body.sala
    const tipo = req.body.tipo
    const descricao = req.body.descricao
    const marca = req.body.marca
    const modelo = req.body.modelo
    const serie = req.body.serie

    patrimonio = await Patrimonio.findOneAndUpdate(
      { _id: id },
      {
        areaPatrimonio: area,
        predio: predio,
        sala: sala,
        tipo: tipo,
        descricao: descricao,
        marca: marca,
        modelo: modelo,
        serie: serie
      }
    )
    return res.json(patrimonio)
  }
}
