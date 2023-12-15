import { makeOrder } from "../action";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import { useNavigate } from "react-router-dom";

import { getData, setData } from "../../../utils/storeData";

const CartItems = ({data})=>{
    const navigate = useNavigate();
    let arr = [...data];
    const userId = getData("loggedInUser")?._id;
    const order = ()=>{
        makeOrder(userId).then((res)=>{
            navigate("/orders")
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="py-36 px-4">
            <button onClick={()=>order()} className="text-white py-3 bg-blue-900 px-4 rounded-md">Confirm Order</button>
            <div className="grid grid-cols-6 gap-3 my-4">
                {arr.map((elem)=>(
                    <div key={elem?._id}> 
                        <CheckoutCard data={elem?.productId} qty={elem?.quantity}/>
                    </div>
                ))}       
            </div>     
        </div>
    )
}


export default CartItems;