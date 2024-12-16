import React from "react"
import { NavLink } from "react-router-dom";
import boat from './boat.svg';
import UserContext from './Usercontext';
import sounddata from './Sounddata'

import Cart from "./Cart";
import './Navvl.css'

import { useContext } from "react";
const Navlink =()=>{
    const { user } = useContext(UserContext);
    return(
       <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" id="Navbar" >
  <div className="container-fluid">
  <NavLink><img  className="image"src={boat} style={{marginRight:"20px"}}/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Home" style={{marginRight:"20px"}}>Airpodes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Nav"style={{marginRight:"20px"}}>Neckband</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact"style={{marginRight:"20px"}}>Smart Watches</NavLink>
        </li>
      </ul>
      
      {user && (
        <>
          <button className="btn btn-outline-secondary" type="button" style={{ width: "100px",marginRight:"5px" }}>
            <NavLink to="Productcreate/" className="text-dark text-decoration-none">Watch Product</NavLink>
          </button>
          <button className="btn btn-outline-secondary" type="button" style={{ width: "100px",marginRight:"5px" }}>
            <NavLink to="AirpodesData/" className="text-dark text-decoration-none">Add Airdopes</NavLink>
          </button>
          <button className="btn btn-outline-secondary" type="button" style={{ width: "100px" ,marginRight:"5px" }}>
            <NavLink to="sounddata/" className="text-dark text-decoration-none">Neckband Product</NavLink>
          </button>
        </>
      )}
      <button className="btn" type="button" >
        <NavLink to="Register/" style={{textDecoration:"none",color:"black"}}>Register</NavLink>
      </button>

      <button className="btn" type="button" >
        <NavLink to="Login/" className="text-dark text-decoration-none">Login</NavLink>
      </button>

      <button className="btn" type="button"  >
        <NavLink to="Cart/" className="text-dark text-decoration-none">Cart</NavLink>
      </button>
    </div>
  </div>
</nav>

       </>
      )}
      export default Navlink;