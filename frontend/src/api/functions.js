import * as api from './api';

export const getData = async () => {
  try {
    const data = await api.getData();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const findBylocalN2 = async idLocalN2 => {
  try {
    const data = await api.findBylocalN2(idLocalN2);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const findById = async idItem => {
  try {
    const data = await api.findById(idItem);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePatrimonio = async (idItem, itemBody) => {
  try {
    const data = await api.updatePatrimonio(idItem, itemBody);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadTabela = async (pathTabela) => {
    try {
      const data = await api.uploadTabela(pathTabela);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

// export const sendData = async (todo) => {
//     try {
//         const {
//             data
//         } = await api.sendData(todo);

//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }
