import OrderCard from "./OrderCard";

const OrderItems = ({data,index}) =>{
    const orderAmount = data?.items?.reduce((acc,curr)=>{
        return acc+curr?.price
    },0)
    return (
        <div className="gap-6 p-5">   
            <h3 className="text-white font-semibold capitalize">Order Number {index+1}</h3>
            <h3 className="text-white font-semibold capitalize">Total Order Amount ₹ {orderAmount}</h3>
            <div className="grid grid-cols-6 gap-3">
                {data.items.map((elem)=>(
                    <div key={elem?._id} className="my-6">
                        <OrderCard data={elem}/>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default OrderItems;