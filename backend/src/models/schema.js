const mongoose = require('mongoose')

const { Schema } = mongoose

const patrimonioSchema = new Schema({
  areaPatrimonio: String,
  predio: String,
  sala: String,
  tipo: String,
  _id: String, //identificador
  descricao: String,
  marca: String,
  modelo: String,
  serie: String
})

module.exports = mongoose.model('Patrimonio', patrimonioSchema)
