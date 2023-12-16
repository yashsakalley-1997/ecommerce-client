import axios from "axios";
import { apiUrl } from "../../constants/api";

export const getOrders = async (userId)=>{
    try{
        const res = axios.get(apiUrl+`customer/user-orders/${userId}`);
        return res
    }
    catch(err){
        throw err
    }
}