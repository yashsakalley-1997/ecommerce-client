import { bgImg } from "../../constants/images";
import Header from "../Header/Header";

const Ordered = ()=>{
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
            <div className="py-36 relative flex justify-center">
                <h1 className="text-white font-semibold text-xl">Orders Placed Successfully</h1>
            </div>
        </div>
    )
}

export default Ordered;