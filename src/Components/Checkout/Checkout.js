import Header from "../Header/Header";
import { bgImg } from "../../constants/images";
import { useEffect, useState } from "react";
import { getCartData } from "./action";
import { getData } from "../../utils/storeData";
import CartItems from "./ListCheckoutItems/CheckoutItems";
const Checkout = () => {
    const userId = getData("loggedInUser")?._id;
    const [cartItems,setCardItems] = useState([]);
    const [status,setStatus] = useState("");

    useEffect(()=>{
        setStatus("Loading the data")
        getCartData(userId).then((res)=>{
            if(res?.data?.items.length === 0){
                setStatus("No Items in the cart yet")
            }
            else{
                setStatus("");
            }
            setCardItems(res?.data?.items)
        }).catch((err)=>{
            setStatus("Error in fetching the data")
            console.log(err)
        })
    },[userId])
    return (
        <div className="bg-[#2f2d45]">
            <Header/>
            <div className="absolute">
                <img
                    className="h-screen object-cover w-screen"
                    src={bgImg}
                    alt="Ecommerce background"
                ></img>    
            </div>
            <div className="relative">
            {status?(
                    <h1 className="py-36 px-4 text-3xl text-white font-semibold">{status}</h1>
                ):(
                    <CartItems data={cartItems}/>
                )}
            </div>
        </div>
        
    )
}

export default Checkout;