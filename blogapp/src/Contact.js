import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import boat from './boat.svg';
import Usercontext from "./Usercontext";
import CartContext from "./CartContext";
import './Contact.css'

const Contact = () => {
  const { user } = useContext(Usercontext);
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch smart watches
    axios.get('http://localhost:9000/smartwatches')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch products.");
        setLoading(false);
      });
  }, []);



  return(
    <>
     <div>
     
  <center>
  <img src={boat}/>
    <h1 style={{fontSize:"300",color:"white" , textShadow: "7px 5px 5px red" ,cursor:"pointer"}}><b>Smart watches</b></h1>
  </center>
  <div className="row" style={{ justifyContent: "space-evenly", gap: "10px", display: "flex", margin: "20px",height:"300px" }}>
    {products.map((product) => (
      <div className="col" key={product._id} >

       
          <NavLink style={{color:"black",textDecoration:"none"}} to={`/contact/${product._id}`}>
          
          <img src={product.image} style={{width:"325px",height:"300px"}} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">
             
                <h3>{product.title}</h3>
              
            </h5>
            <h6 className="card-description">{product.description}</h6>
            <h1>₹{product.price}</h1>
            <p className="card-text"style={{color:"red"}}>Including all taxes</p>
            
            </div>
            </NavLink>
            
            
            <button class="btn btn-dark p-3" onClick={() =>
              addToCart(product) }style={{color:"black", border:"2px solid",borderRadius:"120px",width:"150px",marginTop:"20px"}}>Add To Cart</button>
           
           
        </div>
      
    ))}
  </div>
</div>
    </>
   
)
}
   

export default Contact;
