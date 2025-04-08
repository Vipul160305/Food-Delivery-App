import { useContext, useState } from "react";
import { CartContext } from "../utils/CartContext";

const Cart = () => {
  const { cartItem, setCartItem,handleAddToCart,clearCart ,removeItemToCart} = useContext(CartContext);
  console.log(cartItem);

  let totalAmount = cartItem.reduce((sum, item) => {
    const price = item.card?.info?.price*item.quantity || item.card?.info?.defaultPrice*item.quantity ;
    return sum + price / 100;
  }, 0);
  // console.log( totalAmount/100);

  
  
  

  if (cartItem.length == 0) {
    return <h1>Empty cart ! please add item</h1>;
  }
  return (
    <div className="cart">
      <h1>cart</h1>
      {cartItem.map((Item) => {
        {/* {console.log(Item.quantity)} */}
        return (
          <div className="cart-item">
            <p> {Item.card.info.name}</p>
            <div>
              <div className="item-btn">
                <button onClick={()=>{handleAddToCart(Item)}} >+</button> <span>{Item.quantity}</span> <button onClick={()=>{removeItemToCart(Item)}} >-</button>
              </div>
              
              <p> ₹{Item.card.info.price / 100 || Item?.card?.info?.defaultPrice/100}</p>
            </div>
          </div>
        );
      })}
      <h2>
        Total Amount <span> ₹{totalAmount}</span>
      </h2>

      <div>
        <button className="pay-btn">pay now</button>
        <button className="clear-cart-btn" onClick={()=>clearCart()}>Clear Cart</button>
      </div>
    </div>
  );
};
export default Cart;
