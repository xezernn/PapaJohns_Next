import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: "https://papaapi.yetim.me/food",
});

export default instanceAxios;


export const basketAxios = axios.create({
    baseURL:"https://663b83f2fee6744a6ea1ebf9.mockapi.io/sebet"
}) 