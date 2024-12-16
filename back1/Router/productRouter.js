// smart watches



const express=require('express')
const product_middlewar = require('./control/productvalidation');
const { deleteProducts, updateProducts, createProducts, getAllProducts,getmyproduct } = require('./control/Productcontroler');

const Routers= express.Router();

Routers.get('/smartwatches',getAllProducts)
Routers.get('/watchsingle',getmyproduct)

Routers.post('/create',product_middlewar,createProducts)
Routers.put('/updated',updateProducts)
Routers.delete('/deletedd',deleteProducts)
module.exports=Routers;