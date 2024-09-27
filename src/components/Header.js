import { LOGO_URL } from "../utils/constants";
import { useState } from "react";



const HeadComponent = () => {

const [BtnName, setBtnName] = useState(["Login"])


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
            <li>Home</li>
            <li>Contact us</li>
            <li>About</li>
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