

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navv from './Navv'
import Home from './Home';

import Contact from './Contact';
import Login from './Login';
import Sounddata from './Sounddata'
import Register from './Register';
import AirpodesData from './AirpodesData'
import Cart from './Cart'
import Nav from './Nav';
import Navvl from './Navvl'
import Productcreate from './Productcreate'
import SingleProduct from './Singleproduct';
import Watch from './singlepages/Watch';
import Airpodes from './Airpodes/Airpode';
import Neckband from './Nechband/Neckband'
function App() {

  
    return (
        <>
          
            <Routes>
                <Route path="/" element={<Navv />} ></Route>
                {/* Airpodes */}
                <Route path="/Home" element={<Home />} />
                <Route path="/Home/:Id" element={<Airpodes />} />
                {/* Smart watches */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/:Id" element={<Watch/>} />
                {/* login */}
                <Route path="/login" element={<Login />} />
                {/* register */}
                <Route path="/register" element={<Register />} />
                {/* create a page */}
                <Route path="/Productcreate" element={<Productcreate/>} />
                <Route path='/Sounddata' element={<Sounddata/>}/>
                <Route path='/AirpodesData' element={<AirpodesData/>}/>
                {/* cart */}
               <Route path='/Cart' element={<Cart/> }/>
               {/* neckband */}
                <Route path="/nav" element={<Nav />} />
                <Route path="/nav/:Id" element={<Neckband/>} />
                
            </Routes>
        </>
    );
}

export default App;
