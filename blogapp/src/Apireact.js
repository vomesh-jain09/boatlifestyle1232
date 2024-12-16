import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
 const Apireact=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((result)=>{
        result.json().then((res)=>{
            setData(res)
        })
 })
 },[])
 console.log(data)
 return(
    <>
    <h1 className="api">Call Get Method In Api</h1>
    <table className="border W-100">
        <tr>
            <td className="border-end pl-2 border-bottom text-center py-3">price</td>
            <td className="border-end border-bottom text-center">id</td>
            <td className="border-bottom ps-3">title</td>
            <td className="border-bottom ps-4">image</td>
        </tr>
       {
        data.map((item)=>
            <tr>
        <td className="border-end border-bottom text-center py-1">{item.price}</td>
        <td className="border-end border-bottom text-center">{item.id}</td>
        <td className="border-bottom ps-5" >{item.title}</td>\
        <td className="border-bottom ps-6" >{item.image}</td>
            </tr>
        )
    }
    </table>
    </>
 )
 }
 export default Apireact;