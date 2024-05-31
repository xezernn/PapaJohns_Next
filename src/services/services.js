import instanceAxios, { basketAxios } from './instanceAxios';

export async function getAllProducts() {
    try {
        const response = await instanceAxios.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}


export async function getElementById(id){
    let resp = await instanceAxios.get(`/${id}`) 
    return resp.data
}

export async function postBasket (obj){
    try {
        await basketAxios.post("", {
            sifaris: obj
        }) 
    } catch (error) {
        console.error(error.message)
        throw error
    }
}