import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const HeadComponent = () => {

const [BtnName, setBtnName] = useState(["Login"])

const onlineStatus = useOnlineStatus()


    return (
      <div className="head-container">
        <div>
          <img
            src={LOGO_URL}
            alt="Logo"
            className="logo"
          />
        </div>
        <div className="nav-container">
          <ul>
            <li>Online Status : {onlineStatus ? "🟢"  : "🔴"}</li>
          <li><Link to="/">Home</Link></li> 
            <li><Link to="/contact">Contact Us</Link></li> 
           <li><Link to="/about">About</Link></li> 
           <li><Link to="/grocery">Grocery</Link></li> 
            <li>Cart</li>
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