import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Restropage from "./components/Restropage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CartContext } from "./utils/CartContext";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Singup";

const AppLayout = () => {
  const [cartItem, setCartItem] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItem.find(
      (i) => i.card.info.id === item.card.info.id
    );

    if (existingItem) {
      const updatedCart = cartItem.map((i) =>
        i.card.info.id === item.card.info.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
      setCartItem(updatedCart);
    } else {
      item.quantity = 1;
      setCartItem((prevItems) => [...prevItems, item]);
    }
  };

  const removeItemToCart = (item) => {
    if (item.quantity == 1) {
      setCartItem((prev) => {
        return prev.filter((cartItem) => cartItem !== item);
      });
    } else {
      const updatedCart = cartItem.map((i) =>
        i.card.info.id === item.card.info.id
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
      setCartItem(updatedCart);
    }
  };
  const clearCart = () => {
    setCartItem([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        handleAddToCart,
        removeItemToCart,
        clearCart,
      }}
    >
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartContext.Provider>

    // </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Restaurant/:resId",
        element: <Restropage />,
      },
      ,
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout/>)
