import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { bgImg } from "../../constants/images";
import { getProducts } from "./products";

import ListItems from "../ListItems/ListItems";
const Browse = ()=>{
    const [items,setItems] = useState([]);
    const [status,setStatus] = useState("");

    useEffect(()=>{
        setStatus("Loading the data")
        getProducts().then((res)=>{
            if(res?.data?.length === 0){
                setStatus("No data in inventory")
            }
            else{
                setStatus("")
            }
            setItems(res?.data)
        })
        .catch((err)=>{
            setStatus("Error in fetching the data")
        })
    },[])

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
            <div className="relative">
                {status?(
                    <h1 className="py-36 px-4 text-3xl text-white font-semibold">{status}</h1>
                ):(
                    <ListItems data={items}/>
                )}
            </div>
        </div>
        
    )
}

export default Browse;