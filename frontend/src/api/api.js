import axios from 'axios';

const url = 'http://192.168.0.162:3000/';

export const getData = () => axios.get(url + 'patrimonios');

// export const createItem = (item)=>axios.post(url,item);

