import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const HeadComponent = () => {

const [BtnName, setBtnName] = useState(["Login"])

const onlineStatus = useOnlineStatus()


    return (
      <div className="flex bg-amber-100 justify-between h-20 items-center px-4">
        <div className="flex items-center gap-4">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="h-14 w-14 rounded-full"
          />
          <ul  className="flex text-md gap-6">
            <li className=" hover:underline decoration-2 hover:text-rose-800">Online Status : {onlineStatus ? "🟢"  : "🔴"}</li>
          <li className="  hover:underline decoration-2 hover:text-rose-800"><Link to="/">Home</Link></li> 
            <li className=" hover:underline decoration-2 hover:text-rose-800"><Link to="/contact">Contact Us</Link></li> 
           <li className=" hover:underline decoration-2 hover:text-rose-800"><Link to="/about">About</Link></li> 
           <li className=" hover:underline decoration-2 hover:text-rose-800"><Link to="/grocery">Grocery</Link></li> 
            <li className=" hover:underline decoration-2 hover:text-rose-800">Cart</li>
          </ul>
        </div>
        
        
 
  <button className="border border-black px-4 py-2 h-10  rounded-md hover:bg-purple-50" onClick={()=>{
    BtnName==="Login"?setBtnName("Logout"):setBtnName("Login")
  }}>
   {BtnName}
  </button>
  </div>
     
    );
  };
export default HeadComponent  