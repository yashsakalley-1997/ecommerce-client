import { useEffect,useState } from "react";
import { bgImg } from "../../constants/images";
import Header from "../Header/Header";
import { getData } from "../../utils/storeData";
import { getOrders } from "./action";

import OrderItems from "./OrderItems/OrderItems";

const Ordered = ()=>{
    const userId = getData("loggedInUser")?._id;
    const [status,setStatus] = useState("");
    const [orderedItems,setItems] = useState([]);

    useEffect(()=>{
        setStatus("Loading the Data")
        getOrders(userId).then((res)=>{
            if(res?.data?.length === 0){
                setStatus("No Items ordered yet  yet")
            }
            else{
                setStatus("");
            }
            setItems(res?.data)
        }).catch((err)=>{
            setStatus("Error in fetching the data")
            console.log(err)
        })
    },[userId])

    return (
        <div className="bg-[#2f2d45]">
            <Header></Header>
            <div className="absolute">
                <img
                    className="h-screen object-cover w-screen"
                    src={bgImg}
                    alt="Ecommerce background"
                ></img>    
            </div>
            <div className="py-36 relative">
            {status?(
                    <h1 className="px-4 text-3xl text-white font-semibold">{status}</h1>
                ):(
                    <div>
                        <h1 className="px-4 text-3xl text-white font-semibold">Your Orders</h1>
                        {
                            orderedItems.map((elem,index)=>(
                                <div className="flex">
                                    <OrderItems data={elem} key={elem?._id} index={index}/>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default Ordered;