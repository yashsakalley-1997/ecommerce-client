import axios from "axios"
import { apiUrl,headers } from "../../constants/api";

export const getCartData = async (id) =>{
    try{
        const res = axios.get(`${apiUrl}customer/cart/${id}`);
        return res;
    }
    catch(err){
        throw err;
    }
}


export const makeOrder = async (id) => {
    try{
        const res = axios.post(`${apiUrl}customer/cart/place-order`,{
            userId:id
        },headers)
        return res;
    }
    catch(err){

    }
}