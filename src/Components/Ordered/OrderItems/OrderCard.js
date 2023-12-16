import { placeholderProductImage } from "../../../constants/images";

const OrderCard = ({data}) =>{
    return (
        <div>
            <img alt="product_image" className="w-44 h-44 rounded-md" src={data?.imageLink?data?.imageLink:placeholderProductImage}/>
            <h3 className="text-white font-semibold capitalize">{data?.name}</h3>
            <h3 className="text-white font-semibold">{data?.price} for {data?.quantity} Quantities</h3>
        </div>
    )
}

export default OrderCard;