import React, { useEffect, useState } from "react";
import'./Api.css'
const Apithen=()=>{
    const[products,update]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((data)=>{
            console.log(data);
            return data.json();
        })
        .then((completedata)=>{
            console.log(completedata);
            update(completedata) })
    },[])
    return(
        <>
        <center>
            <h1 id="head">R.S Collection</h1>
            <div className="cards">
                {products.map((item)=>{
                    return(
                        <div className="card" style={{width:'500px'} }key={item.id}>
                            <h1 className="title">{item.title}</h1>
                            <img src={item.image} width='200px'height='200px' alt={item.title}/>
                            <div>
                                <p>{item.description}</p>
                                <p>category:{item.category}</p>
                                <p className="price"> price:${item.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </center>
        </>
    )
}
export default Apithen;