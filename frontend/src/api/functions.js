import * as api from './api';

export const getData = async () => {
    try {
        console.log('FUNCTIONS 1')
        const data = await api.getData();
        console.log(data)
        console.log('FUNCTIONS 2')
        return data
    } catch (error) {
        console.log('FUNCTIONS ERRO')
        console.log(error)
        console.log('FUNCTIONS ERRO')
    }
}

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