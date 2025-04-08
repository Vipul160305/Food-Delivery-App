import { LOGO_URL } from "../utils/constants";
import { useState ,useContext} from "react";
import { Link } from "react-router";
import { CartContext } from "../utils/CartContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
   const { cartItem, setCardItem } = useContext(CartContext);
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About us</Link></li>
          <li><Link to="/Contact">contact us</Link></li>
          <li><Link to="/Cart">Cart-({cartItem.length})</Link></li>
          <button
            className="login-btn"
            onClick={() => {
                btnName==="Login"?
              setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
