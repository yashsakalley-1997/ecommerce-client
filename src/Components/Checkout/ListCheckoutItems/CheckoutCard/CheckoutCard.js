
const CheckoutCard = ({data,qty})=>{
    return (
        <div className="">
            <img alt={data?.name} className="w-44 h-44 rounded-md" src={data.imageLink}></img>
            <span className="font-semibold text-white my-4 inline-block capitalize">{data?.name}</span>
            <br></br>
            <div>
                <span className="font-bold text-white">{Number(data?.price)*qty}</span>
                <span className="text-white mx-3">{"Quantity: "+qty}</span>
            </div>
        </div>
    )
}

export default CheckoutCard;