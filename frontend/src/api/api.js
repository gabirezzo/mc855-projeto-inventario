import axios from 'axios';

const url = 'localhost:3000/';

export const getData = ()=> axios.get(url);

// export const createItem = (item)=>axios.post(url,item);

