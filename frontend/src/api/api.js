import axios from 'axios';

const url = 'http://192.168.0.162:3000/';

export const getData = () => axios.get(url + 'patrimonios');

export const findBylocalN2 = idLocalN2 =>
  axios.get(url + 'patrimonios/localN2/' + idLocalN2);

export const findById = idItem => axios.get(url + 'patrimonios/' + idItem);

export const updatePatrimonio = (idItem, itemBody) =>
  axios.put(url + 'patrimonios/' + idItem, itemBody);
// export const createItem = (item)=>axios.post(url,item);


export const uploadTabela = (pathTabela) =>{
    console.log('path', url + 'tabela/export/' + pathTabela )
     axios.post(url + 'tabela/export/', {path: pathTabela})
    };
