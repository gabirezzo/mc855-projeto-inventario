const mongoose = require('mongoose')

const { Schema } = mongoose

const patrimonioSchema = new Schema({
  areaPatrimonio: String,
  imovel: String,
  localN1: String,
  localN2: String,
  localN3: String,
  localN4: String,
  localN5: String,
  tipo: String,
  _id: String, //identificador
  descricao: String,
  marca: String,
  modelo: String,
  serie: String
})

module.exports = mongoose.model('Patrimonio', patrimonioSchema)
