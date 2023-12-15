import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Register from "./Register/Register";
import Browse from "./Browse/Browse";
import Checkout from "./Checkout/Checkout";
import Ordered from "./Ordered/Ordered";
import AddInventory from "./Manager/AddInventory";

const Router = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Register/>
        }
        ,
        {
            path:"/browse",
            element:<Browse/>
        }
        ,
        {
            path:"/checkout",
            element:<Checkout/>
        }
        ,
        {
            path:"/orders",
            element:<Ordered/>
        }
        ,
        {
            path:"/add-inventory",
            element:<AddInventory/>
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Router;