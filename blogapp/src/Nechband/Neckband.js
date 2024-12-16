import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from"../CartContext"





function Neckband(){

    let param = useParams();
    let id = param.Id;
    const[product,setProduct] =useState(null)
    const { addToCart } = useContext(CartContext);
    useEffect(() => {
        // Fetch smart watches
        axios.get('http://localhost:9000/neckbandsingle',{headers:{Id:id}})
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
      <img src={product.image}/>
      <h1>{product.title}</h1>  
       
       <p>{product.description}</p>
       <h3>₹{product.price}</h3>

       <div><button>Buy Now</button>
       <button onClick={() => addToCart(product)} style={{color:"black"}}>Add To Cart</button></div>
    </div>
     :
     <div>
     loading...
     </div>
    )
}

export default Neckband;