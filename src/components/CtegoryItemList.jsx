import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { IMG_URL } from "../utils/constants";
const CategoryItemList = (items) => {
  const {cartItem,setCartItem,handleAddToCart}=useContext(CartContext);

  return (
    <div>
      {items?.data.map((item) => (
        <div key={item?.card?.info?.id} className="menu-items">
          <div>

            <div>
              
              <span>{item?.card?.info?.name}</span>
              <br />
              <span> ₹{item?.card?.info?.price / 100 ||item?.card?.info?.defaultPrice/100}</span>
            </div>
            <p>{item?.card?.info?.description}</p>
          </div>
          <div >
          <div className="add-btn-div">
          <button className="add-btn" onClick={() => handleAddToCart(item)}>Add +</button>
          {/* <span>{item.quantity}</span> */}
          </div>
          <img
                className="item-image"
                alt="item image"
                src={IMG_URL + item?.card?.info?.imageId || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo__ix7YOzN50lbDN7pCCwU44rb0KZdmyWEQ&s"
                }
                onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo__ix7YOzN50lbDN7pCCwU44rb0KZdmyWEQ&s"} 
              />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryItemList;
