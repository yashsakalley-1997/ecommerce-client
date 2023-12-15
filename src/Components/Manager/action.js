import axios from "axios";
import { apiUrl,headers } from "../../constants/api";

export const addProductInventory = async(data) => {
    try{
        const res = await axios.post(apiUrl+"admin/products",data,headers);
        return res;
    }
    catch(err){
        throw err;
    }
}