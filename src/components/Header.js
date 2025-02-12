import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


const HeadComponent = () => {



const cartItems = useSelector((store)=>store.cart.items)

const [BtnName, setBtnName] = useState(["Login"])

const onlineStatus = useOnlineStatus()
const {loggedInUser} = useContext(UserContext)
console.log(loggedInUser)

    return (
      <div className="flex bg-[#e9f5db] justify-between h-20 items-center px-4 text-[#3a4664]  text-sm shadow-lg">
        <div className="flex items-center gap-4">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="h-14 w-14 rounded-full"
          />
          <ul  className="flex text-md gap-6">
            <li className=" hover:underline decoration-2 ">Online Status : {onlineStatus ? "🟢"  : "🔴"}</li>
          <li className="  hover:underline decoration-2 "><Link to="/">Home</Link></li> 
            <li className=" hover:underline decoration-2 "><Link to="/contact">Contact Us</Link></li> 
           <li className=" hover:underline decoration-2 "><Link to="/about">About</Link></li> 
           <li className=" hover:underline decoration-2 "><Link to="/grocery">Grocery</Link></li> 
           <li className=" hover:underline decoration-2 "><Link to="/cart">🛒Cart - {cartItems.length} Items</Link></li> 
          </ul>
        </div>
        
        
 
  <button className="border border-black px-4 py-2 h-10  rounded-md hover:bg-purple-50" onClick={()=>{
    BtnName==="Logout"?setBtnName("Login"):setBtnName("Logout")
  }}>
   {BtnName}
  </button>
  <li className=" hover:underline decoration-2 hover:text-rose-800">{loggedInUser}</li>
  </div>
     
    );
  };
export default HeadComponent  