import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../utils/CartContext";

const Header = () => {
  const { cartItem, setCardItem } = useContext(CartContext);
  const itemcount = cartItem.reduce(
    (count, item) => (count += item.quantity),
    0
  );

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/Contact">contact us</Link>
          </li>
          <li>
            <Link to="/Cart">Cart-({itemcount})</Link>
          </li>
          <div className="userimg">
            <Link to="/Login">
              <img
                className="userlogo"
                src="https://static.vecteezy.com/system/resources/previews/008/149/271/large_2x/user-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-free-vector.jpg"
                alt="user"
              ></img>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
