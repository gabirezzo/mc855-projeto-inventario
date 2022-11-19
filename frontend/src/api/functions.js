import * as api from './api';

export const getData = async () => {
    try {
        const data = await api.getData();
        return data
    } catch (error) {
        console.log(error)
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