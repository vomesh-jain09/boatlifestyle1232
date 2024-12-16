import React, { useContext } from "react";
import CartContext from './CartContext';
import { NavLink } from "react-router-dom";
import boat from './boat.svg';
import UserContext from './Usercontext';
import './Cart.css'


const Cart = () => {
    const { cartitems } = useContext(CartContext);
    const { user } = useContext(UserContext);
    let total = 0;
    for(let i=0;i<cartitems.length;i++){
        total += cartitems[i].price;
    }

    return (
        <>
            <div>
              <center>
                <img src={boat}/>
            <marquee><h1 style={{fontSize:"900",color:"greenyellow" , textShadow: "7px 5px 5px red" ,cursor:"pointer"}}>Add to Cart</h1></marquee>

              </center>

                {
                cartitems.map((item) => {
                    return(
                    <div key={item.id} style={{ display: "flex",alignItems:"center",justifyContent:"flex-start",border:"2px solid ",width:"380px",height:"170px",gap:"12px",flex:"inline"}}>
                        <img src={item.image} alt={item.title} className="cart-image" style={{ width: "180px", height: "165px" ,textAlign:"center"}} />
                        <div className="cart-title">{item.title}</div>
                       
                        <span>
                        <div className="cart-price">₹{item.price}</div>
                        </span>
                    </div>
                    )
                    })
                }
                
                <div className="cart-name" >
                <div className="cart-total">Total Amount : ₹ {total}  </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
