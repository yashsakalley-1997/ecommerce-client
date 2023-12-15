import { useNavigate,useLocation } from "react-router-dom";
import { logoImg } from "../../constants/images";
import { getData, removeData } from "../../utils/storeData";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentRoute = location.pathname;
    const user = getData('loggedInUser');
    return (
        <div className="flex justify-between z-10 absolute px-20 py-1 bg-gradient-to-b from-black w-full
        flex-col md:flex-row
        ">
            <div>
                <img 
                    className="w-24 rounded-lg my-3 mx-auto md:mx-0"
                    src={logoImg}
                    alt="NetFlix Logo"
                />
            </div>
            {
                (
                    <div className="p-4 flex gap-3 mx-auto md:mx-0">
                        {
                            user && user?.role === "Customer" && (
                                <>
                                    <button 
                                        onClick={()=>{
                                            if(currentRoute === "/checkout" || currentRoute === "/orders"){
                                                navigate("/browse")
                                            }
                                            else{
                                                console.log('heyyy',currentRoute)
                                                navigate("/checkout")
                                            }
                                        }}
                                        className="bg-blue-900 p-2 rounded-sm text-white">
                                        {currentRoute === "/checkout" || currentRoute === "/orders"?"Browse More Products":"Proceed to Checkout"}
                                    </button>
                                    <button className="text-white font-semibold">My Orders</button>
                                </>
                            )
                        }
                        {
                            user && (
                                <button onClick={()=>{
                                    removeData("loggedInUser");
                                    navigate("/")
                                }} className="text-white font-semibold">Sign Out</button>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Header;