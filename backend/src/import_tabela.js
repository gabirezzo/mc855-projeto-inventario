const reader = require('xlsx');

const file = reader.readFile('./tabelatest.xlsx');

const sheets = file.SheetNames;
let data = [];

for(let i = 0; i < sheets.length; i++){
   const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
   temp.forEach((res) => {
         data.push(res)
      })
}

console.log('data 0 ai:\n');
 //area do patrimonio
 //predio nao tem na tabela
 //sala nao tem na tabela
console.log(data[0]['Tipo']);  //tipo
console.log(data[0]['Identificador']);  //identificador
console.log(data[0]['Descrição']);  //descricao
console.log(data[0]['Marca']);  //marca
console.log(data[0]['Modelo']);  //modelo
console.log(data[0]['Série']);  //serie


