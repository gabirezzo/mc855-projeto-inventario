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


patrimonioSchema.methods.findById = function(id) {
   return this.find({ id });
};

module.exports = mongoose.model('Patrimonio', patrimonioSchema)
