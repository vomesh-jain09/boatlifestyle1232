import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from"../CartContext"






function Watch(){

    let param = useParams();
    let id = param.Id;
    const[product,setProduct] =useState(null)
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        // Fetch smart watches
        axios.get('http://localhost:9000/watchsingle',{headers:{Id:id}})
          .then((res) => {
           setProduct(res.data)
          })
          .catch((err) => {
            console.error(err);
          
          });
      }, []);


    return(
       product?
       <div  style={{ display: "flex",alignItems:"center",justifyContent:"flex-start",gap:"3px",flexDirection:"column",width:"380px",height:"270px",gap:"12px"}}>
       <img src={product.image} style={{alignItems:"center",display:"flex",justifyContent:"center"}}/>
       <h1 style={{alignContent:"center",alignItems:"center",display:"flex"}}>{product.title}</h1>  
        
        <p style={{alignContent:"center",alignItems:"center",display:"flex"}}>{product.description}</p>
        <h3 style={{alignContent:"center",alignItems:"center",display:"flex"}}>₹{product.price}</h3>

        <button style={{alignContent:"center",alignItems:"center",display:"flex"}}>Buy Now</button>
        <button style={{alignContent:"center",alignItems:"center",display:"flex"}} onClick={() => addToCart(product)}>Add To Cart</button>
     </div>
     :
     <div>
     loading...
     </div>
    )
}

export default Watch;