require('dotenv').config()
const reader = require('xlsx')
const mongoose = require('mongoose')

const url = process.env.ATLAS_URI
console.log('url = ' + url)
//db path
//const url =
//  'mongodb+srv://adminventario:3jWCqzXW9kNbFh3j@cluster0.xobnfc9.mongodb.net/inventario?retryWrites=true&'
//'mongodb+srv://mc855_db:grupoinventario@cluster0.9pr1cy4.mongodb.net/?retryWrites=true&w=majority';

//dbconn params
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

module.exports = {
    exportTabela(req, res) {
        const path = req.body.path
        //read the data
        const file = reader.readFile(path)
        const sheets = file.SheetNames
        let data = []

        for (let i = 0; i < sheets.length; i++) {
          const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
          temp.forEach((resp) => {
            data.push(resp)
          })
        }
        const db = mongoose.connection

        //connect to database
        mongoose
          .connect(url, connectionParams)
          .then(() => {
            console.log('Connected to the database ')
          })
          .catch((err) => {
            console.error(`Error connecting to the database. n${err}`)
          })

        //clear database before importing new table
        //mongoose.connection.dropDatabase()

        //import model
        const Patrimonio = require('./models/schema.js')

        //insert items in db
        for (let i = 0; i < data.length; i++) {
          //criar variavel de patrimonio
          var pat = new Patrimonio({
            areaPatrimonio: data[i]['Área de Patrimônio'],
            imovel: data[i]['imóvel'],
            localN1: data[i]['Local N1'],
            localN2: data[i]['Local N2'],
            localN3: data[i]['Local N3'],
            localN4: data[i]['Local N4'],
            localN5: data[i]['Local N5'],
            tipo: data[i]['Tipo'],
            _id: data[i]['Identificador'],
            descricao: data[i]['Descrição'],
            marca: data[i]['Marca'],
            modelo: data[i]['Modelo'],
            serie: data[i]['Série']
          })

          pat.save(function (err, book) {
            if (err) return console.error(err)
            console.log('item numero ' + i + ' saved to database.')
          })
        }
        //return res.json()
    }
}