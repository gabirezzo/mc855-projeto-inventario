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
    //console.log(pat)
    return pat
}

async function findByPredio(predio){
    pat = await Patrimonio.find({'predio': predio})
    return pat
}

async function findBySala(sala){
    pat = await Patrimonio.find({'sala' : sala})
    return pat
}

async function changeSala(id, novaSala){
    await Patrimonio.findOneAndUpdate({'_id':id}, {'sala':novaSala})
}

async function changePredio(id, novoPredio){
    await Patrimonio.findOneAndUpdate({'_id':id}, {'sala':novoPredio})
}

//changeSala('791140', 'novasala')

//findById('791140')
pat = findById('791140')
pat.then(data => {
    console.log(data)
})
