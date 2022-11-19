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

  async findByimovel(imovel) {
    pat = await Patrimonio.find({ imovel: imovel })
    return pat
  },

  async findBylocalN1(localN1) {
    pat = await Patrimonio.find({ localN1: localN1 })
    return pat
  },

  async findBylocalN2(localN2) {
    pat = await Patrimonio.find({ localN2: localN2 })
    return pat
  },

  async findBylocalN3(localN3) {
    pat = await Patrimonio.find({ localN3: localN3 })
    return pat
  },

  async findBylocalN4(localN4) {
    pat = await Patrimonio.find({ localN4: localN4 })
    return pat
  },

  async findBylocalN5(localN5) {
      pat = await Patrimonio.find({ localN5: localN5 })
      return pat
  },


  async changeImovel(id, novoimovel) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { imovel: novoimovel })
  },

  async changeLocalN1(id, novoN1) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN1: novoN1 })
  }

  async changeLocalN2(id, novoN2) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN2: novoN2 })
  }

  async changeLocalN3(id, novoN3) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN3: novoN3 })
  }

  async changeLocalN4(id, novoN4) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN4: novoN4 })
  }

  async changeLocalN5(id, novoN5) {
    await Patrimonio.findOneAndUpdate({ _id: id }, { localN5: novoN5 })

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

    await Patrimonio.findOneAndUpdate(
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
    patrimonio = await Patrimonio.find({ _id: id })
    return res.json(patrimonio)
  }
}
