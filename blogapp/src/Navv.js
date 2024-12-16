import React, { useContext } from "react";
import './index.css';
import Login from "./Login";
import Navvl from './Navvl'

import './Navbar.css';
import boat from './boat.svg';
import Productcreate from './Productcreate';
import { NavLink } from "react-router-dom";
import UserContext from './Usercontext';
import Images121 from './images121.jpg';
import Images122 from './images122.webp';
import Images123 from './images123.jpg';
import gur1 from './gur1.svg';
import gur2 from './gur2.svg';
import gur3 from './gur3.svg';
import gur4 from './gur4.svg';
import boat4 from './bopat1.4.webp';
import boat8 from './boat9.webp';
import bar3 from './bar3.webp';
import Neck8 from './Neck8.webp';
import lif1 from './lif1.webp';
import lif2 from './lif2.webp';
import lif3 from './lif3.webp';
import lif4 from './lif4.webp';

const Navbar = () => {


  return (
    <>
      <Navvl/>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active"><NavLink>
            <img src={Images121} className="d-block w-100" alt="Carousel Image 1" />
            </NavLink>
          </div>
          <div className="carousel-item">
          <NavLink> <img src={Images122} className="d-block w-100" alt="Carousel Image 2" /></NavLink>
          </div>
          <div className="carousel-item">
          <NavLink><img src={Images123} className="d-block w-100" alt="Carousel Image 3" /></NavLink>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="gurranty" style={{ alignItems: "left", display: "flex", justifyContent: "space-around", gap: "80px", textAlign: "center", marginLeft: "20px" }}>
        {[{ img: gur1, text: "1 year gurranty" }, { img: gur2, text: "7 Days Replacement" }, { img: gur3, text: "Free Express Delivery" }, { img: gur4, text: "GST Billing" }].map((item, index) => (
          <div key={index}>
            <NavLink style={{ color: "black", textDecoration: "none" }}>
              <img src={item.img} width="60px" alt={item.text} />
              <h5>{item.text}</h5>
            </NavLink>
          </div>
        ))}
      </div>

      <h3 style={{cursor:"pointer",fontWeight:"900"}}>Explorer <b style={{textShadow: "2px 2px 5px red"}}>Best Seller</b></h3>

      <div className="card-group" style={{ justifyContent: "center",flexWrap:"", gap: "80px", margin: "5%"}}>
        {[{ img: boat4, title: "Smart Watches", link: "/Contact" }, { img: boat8, title: "Airdopes", link: "/Home" }, { img: Neck8, title: "Neckbands", link: "/Nav" }].map((item, index) => (
          <div className="card" key={index} style={{  boxShadow: "2px 2px 5px red"}}>
            <img src={item.img}style={{width:"380px"}} className="card-img-top" alt={item.title} />
            
            <div className="card-body">
              <NavLink to={item.link} style={{ color: "black", textDecoration: "none" }}>
                <h5 className="card-title">{item.title}</h5>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
       
      <h2  style={{cursor:"pointer",fontWeight:"900"}}>Shop by <b style={{textShadow: "2px 2px 5px red"}}>Lifestyle</b></h2>
      
      <div style={{ gap: "50px", display: "flex", marginLeft: "4%" }} className="lifestyle">
        {[lif1, lif2, lif3, lif4].map((img, index) => (
          <img src={img} key={index} style={{ width: "300px" }} alt={`Lifestyle ${index + 1}`} />
        ))}
      </div>

      <footer style={{ borderTop: "3px solid red", textAlign: "center" }}>
        <div>
          <img src={boat} alt="Boat Logo" />
          <h2>Subscribe to our email alerts!</h2>
          <div style={{gap:"18px"}}>
          <input type="email" placeholder="Enter your email"  style={{width:"300px"}}/>
          <button style={{color:"black", border:"2px solid",width:"180px"}}>Subscribe</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
