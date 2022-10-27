//imports
const reader = require('xlsx');
const mongoose = require('mongoose');
//filepath
const file = reader.readFile('./tabelatest.xlsx');
//db path
const url =
  'mongodb+srv://mc855_db:grupoinventario@cluster0.9pr1cy4.mongodb.net/?retryWrites=true&w=majority';

//dbconn params
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

//read the data
const sheets = file.SheetNames;
let data = [];

for(let i = 0; i < sheets.length; i++){
   const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
   temp.forEach((res) => {
         data.push(res)
      })
}
const db = mongoose.connection;

//connect to database
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log('Connected to the database ')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`)
  })


//import model
const Patrimonio = require('./db/schema.js')

//insert items in db
for(let i = 0; i < data.length; i++){
    //criar variavel de patrimonio
    var pat = new Patrimonio({
        areaPatrimonio: data[i]['Área de Patrimônio'],
        predio:'null',
        sala: 'null',
        tipo: data[i]['Tipo'],
        _id: data[i]['Identificador'],
        descricao: data[i]['Descrição'],
        marca: data[i]['Marca'],
        modelo: data[i]['Modelo'],
        serie: data[i]['Série'],
    })

    pat.save(function (err, book) {
          if (err) return console.error(err);
          console.log('item numero ' + i  + " saved to database.");
        });

}

