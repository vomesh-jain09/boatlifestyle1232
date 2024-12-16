import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UsercontextProvider } from './Usercontext';
import CartReducer from './Cartslice';
import { CartContextProvider } from './CartContext';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
<CartContextProvider>
  <UsercontextProvider > 
     <BrowserRouter>
     
    <App />
    <ToastContainer/>
    
  </BrowserRouter>
  </UsercontextProvider>
  </CartContextProvider>
  ,
  document.getElementById("root")
);