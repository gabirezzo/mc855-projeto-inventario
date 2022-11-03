const mongoose = require('mongoose');
const Patrimonio = require('./schema.js')

const url =
  'mongodb+srv://adminventario:3jWCqzXW9kNbFh3j@cluster0.xobnfc9.mongodb.net/?retryWrites=true&w=majority';

//db connection
const db = mongoose.connection;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
//connect to database
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log('Connected to the database ')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`)
  })

async function findById(id){
    pat = await Patrimonio.find({'_id' : id})
    console.log(pat)
}

async function findByPredio(predio){
    let pat = await Patrimonio.find({'predio': predio})

}

async function findBySala(sala){
    pat = await Patrimonio.find({'sala' : sala})
}

var predios =await findByPredio('null')

console.log(predios)
