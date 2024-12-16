import React, { useEffect, useState } from "react";
const Use=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
    
        setTimeout(()=>{
         setCount((count)=>count+1);
        },8000);
        if (count=>5){
            setCount(false)
        }
    });
    return(
        <>
        <h1>I am count {count} times!</h1>
        </>
    )
}
 export default Use;