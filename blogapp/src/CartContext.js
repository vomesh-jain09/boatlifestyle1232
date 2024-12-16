import React, { useState, createContext } from "react";
import { toast } from "react-toastify";

const CartContext = React.createContext();

export default CartContext;

function CartContextProvider({ children }) {
    const [cartitems, setCartitems] = useState([]);
    function addToCart(data) {
        setCartitems([...cartitems, data])

        toast.info("item added", {
            position: "top-center",
            autoClose: 1000,
          
        })
    }



    return (
        <CartContext.Provider value={{ cartitems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
export { CartContextProvider }
