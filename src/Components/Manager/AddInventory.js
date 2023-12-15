import { useState,useRef } from "react";
import { bgImg } from "../../constants/images";
import Header from "../Header/Header";
import { validateProducts } from "../../utils/validate";
import { addProductInventory } from "./action";

const AddInventory = () =>{
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);

    const productName = useRef(null);
    const productPrice = useRef(null);
    const imageLink = useRef(null);

    const onFormSubmit = ()=>{
        setLoading(true)
        let error = validateProducts(productName.current.value,productPrice.current.value,imageLink.current.value)
        if(!error){
            addProductInventory({
                name:productName.current.value,price:productPrice.current.value,imageLink:imageLink.current.value
            }).then((res)=>{
                window.alert("Product added")
            }).catch((err)=>{
                setError(`${err.response.data.error}`)
            }).finally(()=>{
                setLoading(false)
            })
        }
    }   

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
            <form onSubmit={(e)=>e.preventDefault()} className={`bg-slate-900 p-7 rounded-lg bg-opacity-50 absolute w-full md:w-1/4 my-32 mx-auto right-0 left-0 text-white`}>
            <h1 className="font-bold py-4 text-3xl">Add Product</h1>
            <div className="w-full">
              <input 
                  type="text" 
                  ref={productName}
                  placeholder="Product Name" 
                  className="p-4 my-4 w-full bg-gray-700 rounded-md"
              />
              <input 
                  type="text"
                  ref={productPrice}
                  placeholder="Price" 
                  className="p-4 my-4 w-full bg-gray-700 rounded-md"
              />
              <input 
                  type="text" 
                  ref={imageLink}
                  placeholder="Image Link" 
                  className="p-4 my-4 w-full bg-gray-700 rounded-md"
              />
              
              </div>
              <button onClick={()=>onFormSubmit()} disabled={loading} className={`bg-red-${loading?"400":"900"} rounded-md w-full} p-4 my-6`}>Add Product</button>
            {error && <div className="text-red-500 text-lg py-4">{error}</div>}
              </form>
        </div>
    )
}


export default AddInventory;