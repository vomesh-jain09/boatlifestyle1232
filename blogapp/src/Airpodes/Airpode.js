import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from"../CartContext"






function Airpodes(){

    let param = useParams();
    let id = param.Id;
    const[Airs,setProduct] =useState(null)
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        // Fetch smart watches
        axios.get('http://localhost:9000/Airsingle',{headers:{Id:id}})
          .then((res) => {
           setProduct(res.data)
          })
          .catch((err) => {
            console.error(err);
          
          });
      }, []);


    return(
        Airs?
       <div  style={{ display: "flex",alignItems:"center",justifyContent:"flex-start",gap:"3px",flexDirection:"column",width:"380px",height:"270px",gap:"12px"}}>
       <img src={Airs.image}/>
       <h1>{Airs.title}</h1>  
        
        <p>{Airs.description}</p>
        <h3>₹{Airs.price}</h3>

        <div><button>Buy Now</button>
        <button onClick={() => addToCart(Airs)} style={{color:"black"}}>Add To Cart</button></div>
     </div>
     :
     <div>
     loading...
     </div>
    )
}

export default Airpodes;