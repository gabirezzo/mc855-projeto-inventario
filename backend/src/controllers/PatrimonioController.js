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

  async findByimovel(req, res) {
    const imovel = req.params.imovel
    patrimonio = await Patrimonio.find({ imovel: imovel })
    return res.json(patrimonio)
  },

  async findBylocalN1(req, res) {
    const localN1 = req.params.localN1
    patrimonio = await Patrimonio.find({ localN1: localN1 })
    return res.json(patrimonio)
  },

  async findBylocalN2(req, res) {
    const localN2 = req.params.localN2
    patrimonio = await Patrimonio.find({ localN2: localN2 })
    return res.json(patrimonio)
  },

  async findBylocalN3(req, res) {
    const localN3 = req.params.localN3
    patrimonio = await Patrimonio.find({ localN3: localN3 })
    return res.json(patrimonio)
  },

  async findBylocalN4(req, res) {
     const localN4 = req.params.localN4
     patrimonio = await Patrimonio.find({ localN4: localN4 })
     return res.json(patrimonio)
  },

  async findBylocalN5(req, res) {
    const localN5 = req.params.localN5
    patrimonio = await Patrimonio.find({ localN5: localN5 })
    return res.json(patrimonio)
  },

  async changeImovel(id, novoimovel) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { imovel: novoimovel })
  },

  async changeLocalN1(id, novoN1) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN1: novoN1 })
  },

  async changeLocalN2(id, novoN2) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN2: novoN2 })
  },

  async changeLocalN3(id, novoN3) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN3: novoN3 })
  },

  async changeLocalN4(id, novoN4) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN4: novoN4 })
  },

  async changeLocalN5(id, novoN5) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN5: novoN5 })
  },


  async updatePatrimonio(req, res) {
    const id = req.params.id
    const area = req.body.areaPatrimonio
    const imovel = req.body.imovel
    const localN1 = req.body.localN1
    const localN2 = req.body.localN2
    const localN3 = req.body.localN3
    const localN4 = req.body.localN4
    const localN5 = req.body.localN5
    const tipo = req.body.tipo
    const descricao = req.body.descricao
    const marca = req.body.marca
    const modelo = req.body.modelo
    const serie = req.body.serie

    await Patrimonio.findOneAndUpdate(
      { _id: id },
      {
        areaPatrimonio: area,
        imovel: imovel,
        localN1: localN1,
        localN2: localN2,
        localN3: localN3,
        localN4: localN4,
        localN5: localN5,
        tipo: tipo,
        descricao: descricao,
        marca: marca,
        modelo: modelo,
        serie: serie
      }
    )
    patrimonio = await Patrimonio.find({ _id: id })
    return res.json(patrimonio)
  }
}
