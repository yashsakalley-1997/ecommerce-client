import { useState } from "react";

import { addToCart } from "../actions";
import { getData } from "../../../utils/storeData";

const ListCard = ({data}) => {
    const [qty,setQty] = useState(1);
    const [loading,setLoading] = useState(false);
    const setQuantity = (val)=>{
        if(qty === 1 && val === -1){
            return
        }
        setQty(qty+val)
    }
    
    const addCart = () =>{
        setLoading(true);
        addToCart({userId:getData("loggedInUser")?._id,productId:data?._id,quantity:qty}).then((res)=>{
            window.alert("Item added into the cart")
        })
        .catch((err)=>{
            console.log(err)
            window.alert("Error ocurred pls try again later")
        })
        .finally(()=>{
            setLoading(false);
        })
    
    }
    return (
        <div className="bg-vio">
            <img alt={data?.name} className="w-44 h-44 rounded-md" src={data.imageLink}></img>
            <span className="font-semibold text-white my-4 inline-block capitalize">{data?.name}</span>
            <br></br>
            <div>
                <span className="font-bold text-white">{Number(data?.price)*qty}</span>
                <button onClick={()=>setQuantity(-1)} className="bg-slate-700 text-white py-3 px-2 mx-3 rounded-md">-</button>
                <span className="text-white">{qty}</span>
                <button onClick={()=>setQuantity(1)} className="bg-slate-700 text-white py-3 px-2 mx-3 rounded-md">+</button>
            </div>
            <button onClick={()=>addCart()} disabled={loading} className={`bg-blue-${loading?"500":"900"} text-white my-3 py-3 px-2 w-1/2 rounded-md`}>Add to Cart</button>
            .
        </div>
    )
}

export default ListCard;