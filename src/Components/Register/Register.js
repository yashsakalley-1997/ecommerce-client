import { useState,useRef,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { bgImg } from "../../constants/images";
import validateInput from "../../utils/validate";

import { login, register } from "../../utils/auth";
import { setData,getData } from "../../utils/storeData";
import Header from "../Header/Header";

const Register = ()=>{
  const [isSignInForm,toggleForm] = useState(true);
    const [error,setError] = useState("");
    const [selectedOption, setSelectedOption] = useState('Customer');
    const [loading,setLoading] = useState(false);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const firstName = useRef(null);
    const userName = useRef(null);
    const password = useRef(null);
    const contactNumber = useRef(null);
    const address = useRef(null);

    const navigate = useNavigate();

    useEffect(()=>{
      const user = getData("loggedInUser")
      if(user){
        if(user?.role === "Manager"){
          navigate("/add-inventory")
        }
        else{
          navigate('/browse')
        }
      }
      else{
        navigate("/")
      }
    },[navigate])

    const onFormSubmit = ()=>{
        const error = validateInput(
            isSignInForm,
            firstName?.current?.value
            ,userName?.current?.value,
            password?.current?.value,
            contactNumber?.current?.value,
            address?.current?.value
            )
        setError(error)
        if(!error){
          setLoading(true)
          const payload = {"email":userName.current.value,"password":password.current.value};
          if(isSignInForm){

            // Calling the login api
            login(payload).then((res)=>{
              setData("loggedInUser",res.data.user)
              if(res?.data?.user?.role === "Manager"){
                navigate("/add-inventory")
              }
              else{
                navigate("/browse")
              }
            })
            .catch((err)=>{
              setError(`${err.response.data.error}`)
            })
            .finally(()=>{
              setLoading(false)
            })
          }
          else if(!isSignInForm){
            // Calling the register API
            register(
              {
                ...payload,"name":firstName?.current?.value,
              "address":address.current.value,
              "password":password.current.value,
              "role":selectedOption,
              "phone":contactNumber?.current?.value
              }  
            )
            .then((res)=>{
              console.log(res)
            })
            .catch((err)=>{
              setError(`${err.response.data.error}`)
            })
            .finally(()=>{
              setLoading(false)
            })
          }
        }
    }

  return (
    <div>          
      <Header/>
        <div className="absolute">
            <img
                className="h-screen object-cover w-screen"
                src={bgImg}
                alt="Ecommerce background"
            ></img>    
        </div>
        <form style={{
          width:(isSignInForm?"25%":"50%")
        }} onSubmit={(e)=>e.preventDefault()} className={`bg-slate-900 p-7 rounded-lg bg-opacity-50 absolute w-full md: my-32 mx-auto right-0 left-0 text-white`}>
            <h1 className="font-bold py-4 text-3xl">{isSignInForm?"Sign In":"Sign Up"}</h1>
            <div className={isSignInForm?"w-full":"flex gap-2"}>
              <input 
                  type="text" 
                  ref={userName}
                  placeholder="Email" 
                  className="p-4 my-4 w-full bg-gray-700 rounded-md"
              />
              <input 
                  type="password" 
                  ref={password}
                  placeholder="Password" 
                  className="p-4 my-4 w-full bg-gray-700 rounded-md"
              />
            </div>
            {
                !isSignInForm && (
                    <>
                      <div className="flex gap-2">
                        <input 
                            type="text" 
                            ref={firstName}
                            placeholder="Full Name" 
                            className="p-4 my-4 w-full bg-gray-700 rounded-md"
                        />
                         <input
                            type="text"
                            ref={contactNumber}
                            className="p-4 my-4 w-full bg-gray-700 rounded-md"
                            placeholder="Contact Number starting with +91"
                          />
                      </div>
                      <div className="flex gap-2">
                        <input 
                            type="text" 
                            ref={address}
                            placeholder="Address" 
                            className="p-4 my-4 w-1/2 bg-gray-700 rounded-md"
                        />
                        <div className="flex gap-2 my-5">
                          <span>User Type</span>
                          <label>
                            <input
                              type="radio"
                              value="Customer"
                              checked={selectedOption === 'Customer'}
                              onChange={handleOptionChange}
                            />
                            Customer
                          </label>

                          <label>
                            <input
                              type="radio"
                              value="Manager"
                              checked={selectedOption === 'Manager'}
                              onChange={handleOptionChange}
                            />
                            Manager
                          </label>
                        </div>
                    </div>
                    </>
                )
            }
            <button onClick={()=>onFormSubmit()} disabled={loading} className={`bg-blue-${loading?"400":"900"} rounded-md w-${isSignInForm?`full`:`1/2`} p-4 my-6`}>{isSignInForm?`Sign In`:`Sign Up`}</button>
            {error && <div className="text-red-500 text-lg py-4">{error}</div>}
            <p className="cursor-pointer" onClick={()=>toggleForm(!isSignInForm)}>
                {!isSignInForm?"Already Registered? Sign In Now.":"New? Sign Up Now."}
            </p>
        </form>
    </div>
)
}

export default Register;