import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import contact from './Contact'
import CartContext from './CartContext';

const SingleProductpage = () => {

   const{addtocart} =useContext(CartContext);

   let param =  useParams();


   const[Airpodes,setProduct]=useState(null)

 let id = param.Id;
 

 useEffect(()=>{
    fetch("https://dummyjson.com/products/"+id)
    .then((res)=>res.json())
    .then((res)=>setProduct(res))
    .catch((err)=>console.log(err))
   
 },[])






  return (
    <div className='m-4 flex flex-col gap-3'>
       
        {
            Airpodes ?<div>
                 <div className='flex gap-5'>
            <img src={Airpodes.thumbnail} alt="" />
            <div>
                <p className='text-2xl'>title {Airpodes.title}</p>
                <p className='text-xl font-bold'>price {Airpodes.price}</p>
            
            </div>
         </div>
         <div>
            <p>{Airpodes.description}</p>
         </div>
            
            </div>:
            <div> loading..</div>

        }
        <button onClick={()=>addtocart(Airpodes)}   className='bg-red-500 px-4 py-2 '>add to cart</button>

        <Link to={'/'}>back</Link>
        
   
    </div>
  )
}

export default SingleProductpage