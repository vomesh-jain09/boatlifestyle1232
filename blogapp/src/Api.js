import React from "react";
import "./App.css"

const Api=()=>{
    const data=[
        {
            skill_name:"Html  "  ,
            duration:"1 months  ",
            cost:"2000  ",
            photo:"https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?w=2400&h=2400&rs=1&pid=ImgDetMain"
        },
        {
            skill_name:"CSS",
            duration:"1 months",
            cost:"2000",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVv_NLgONGe_Cpht4K14DOwxLEI7Yb-Qf6bw&s"
        },
        
        {
            skill_name:"Javascript",
            duration:"1 months",
            cost:"2000",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVv_NLgONGe_Cpht4K14DOwxLEI7Yb-Qf6bw&s"
        }

    ]
    return(
        <div style={{display:"flex",justifyContent:"space-evenly"}} className='skill'>
           {data.map((data,index)=>(
            <div key={index }>
            <h3>{data.skill_name}</h3>
            <h4>{data.duration}</h4>
            <h2>{data.cost}</h2>
            <img src={data.photo} height={150} width={150}></img>
            </div>
           ))
           }
        </div>
    );
};
export default Api;