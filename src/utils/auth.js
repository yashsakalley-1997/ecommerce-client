import axios from "axios"
import { apiUrl,headers } from "../constants/api"




export const register = async (data)=>{
    try{
        const res = await axios.post(`${apiUrl}auth/register`,data,headers);
        return res;
    }
    catch(err){
        throw err;
    }
}

export const login = async (data) => {
    try{
        const response = await axios.post(`${apiUrl}auth/login`,data,headers)
        return response    
    }
    catch(err){
        throw err;
    }
}