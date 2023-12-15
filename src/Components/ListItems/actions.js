
import axios from "axios";
import { apiUrl,headers } from "../../constants/api";

export const addToCart = async (data) =>{
    try{
        const res = await axios.post(`${apiUrl}customer/cart/add`,data,headers);
        return res;
    }
    catch(err){
        throw err;
    }
}