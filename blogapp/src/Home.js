// Airpodes


import React, { useEffect, useState,useContext } from "react";
import Usercontext from "./Usercontext";
import boat from './boat.svg';
import axios from "axios";
import CartContext from "./CartContext";
import './Home.css'

import { NavLink } from "react-router-dom";
const Home=()=>{
  const {user}=useState(Usercontext);
  const { addToCart } = useContext(CartContext);
  const[Airpodes,setProduct]=useState([])
  useEffect(()=>{
    // Airpodes
    axios.get('http://localhost:9000/Airpodes')
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
    <h1 style={{fontSize:"300",color:"black" , textShadow: "2px 2px 5px red" ,cursor:"pointer"}}><b>Airpodes</b></h1>
  </center>
  <div className="row row-cols-1 row-cols-md-3 g-4" style={{ justifyContent: "space-evenly", gap: "10px", display: "flex", margin: "20px",height:"auto" , boxShadow:" 2px 2px 5px red"}}>
    {Airpodes.map((product) => (
      <div className="col" key={product._id} style={{ width: "300px",border:"2px solid" }}>
       
          <NavLink style={{color:"black",textDecoration:"none"}} to={`/home/${product._id}`}>
           <div className="card"></div>
          <img src={product.image} style={{width:"275px",height:"300px"}} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">
             
                <h3>{product.title}</h3>
              
            </h5>
            <h6>{product.description}</h6>
            <h1>₹{product.price}</h1>
            <p className="card-text" style={{color:"red"}}>Including all taxes</p>
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