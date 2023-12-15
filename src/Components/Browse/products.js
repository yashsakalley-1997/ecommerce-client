import axios from "axios"
import { apiUrl } from "../../constants/api"

export const getProducts = async () => {
    try{
        const res = await axios.get(apiUrl+"admin/products");
        return res;
    }
    catch(err){
        throw err;
    }
}