import mongoose from 'mongoose';

const { Schema } = mongoose;

const patrimonioSchema = new Schema({
  areaPatrimonio:  String,
  predio: String,
  sala: String,
  tipo: String,
  identificador:   String,
  descricao: String,
  marca: String,
  modelo: String,
  serie: String,
});

module.exports = mongoose.model("Patrimonio", patrimonioSchema);

patrimonioSchema.methods.findByArea = function(cb) {
    return mongoose.model('Patrimonio').find({areaPatrimonio: this.areaPatrimonio}, cb);
};

patrimonioSchema.methods.findByPredio = function(cb) {
    return mongoose.model('Patrimonio').find({predio: this.predio}, cb);
};

patrimonioSchema.methods.findBySala = function(cb) {
    return mongoose.model('Patrimonio').find({sala: this.sala}, cb);
};

patrimonioSchema.methods.findByTipo = function(cb) {
    return mongoose.model('Patrimonio').find({tipo: this.tipo}, cb);
};


