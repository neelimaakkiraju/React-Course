import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const HeadComponent = () => {

const [BtnName, setBtnName] = useState(["Login"])

const onlineStatus = useOnlineStatus()


    return (
      <div className="flex bg-purple-50 justify-between">
        <div>
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-28"
          />
        </div>
        <div>
          <ul  className="flex m-8 text-lg">
            <li className="p-3 m-3 hover:underline decoration-2">Online Status : {onlineStatus ? "🟢"  : "🔴"}</li>
          <li className="p-3 m-3 hover:underline decoration-2"><Link to="/">Home</Link></li> 
            <li className="p-3 m-3 hover:underline decoration-2"><Link to="/contact">Contact Us</Link></li> 
           <li className="p-3 m-3 hover:underline decoration-2"><Link to="/about">About</Link></li> 
           <li className="p-3 m-3 hover:underline decoration-2"><Link to="/grocery">Grocery</Link></li> 
            <li className="p-3 m-3 hover:underline decoration-2">Cart</li>
          </ul>
        </div>
        
  <button className="login-btn" onClick={()=>{
    BtnName==="Login"?setBtnName("Logout"):setBtnName("Login")
  }}>
   {BtnName}
  </button>
      </div>
    );
  };
export default HeadComponent  