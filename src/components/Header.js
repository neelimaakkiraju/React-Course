import { LOGO_URL } from "../utils/constants";



const HeadComponent = () => {
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
      </div>
    );
  };
export default HeadComponent  