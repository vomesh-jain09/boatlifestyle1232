import React, {  useContext, useEffect, useState } from "react";
import Usercontext from "./Usercontext";
import boat from './boat.svg';
import axios from "axios";
import './Home.css'
import CartContext from "./CartContext";
import Cart from "./Cart";


import { NavLink } from "react-router-dom";
const Home=()=>{
  const {user}=useState(Usercontext);
  const[product,setProduct]=useState([])
  const { addToCart } = useContext(CartContext);
  useEffect(()=>{
// neckband

    axios.get('http://localhost:9000/neckband')
    .then((res)=>{
     setProduct(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
    return(
        <>
         <div>
         
      <center>
      <img src={boat}/>
        <h1 style={{fontSize:"300",color:"black" , textShadow: "2px 2px 5px red" ,cursor:"pointer"}}><b>Neckband</b></h1>
      </center>
      
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{ justifyContent: "space-evenly", gap: "10px", display: "flex", margin: "20px",height:"300px" }}>
        {product.map((product) => (
          <div className="col" key={product._id} style={{ width: "300px",border:"3px solid" }}>
           
              <NavLink style={{color:"black",textDecoration:"none"}} to={`/Nav/${product._id}`}>
               <div className="card"></div>
              <img src={product.image} style={{width:"275px",height:"300px"}} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">
                 
                    <h3>{product.title}</h3>
                  
                </h5>
                <h6>{product.description}</h6>
                <h1>₹{product.price}</h1>
                <p className="card-text"style={{color:"red"}}>Including all taxes</p>
                </div>
                </NavLink>
                
                <button onClick={() => addToCart(product)} style={{color:"black", border:"2px solid",borderRadius:"120px",width:"150px",marginTop:"20px"}}>Add To Cart</button>
               
             
            </div>
          
        ))}
      </div>
    </div>
        </>
       
    )
}
export default  Home; 






<button className="btn btn-outline-success" type="button" style={{ width: "200px" }}>
              <NavLink to="Register/" className="text-dark text-decoration-none">Register</NavLink>
            </button>
            
           
          
           
         
           