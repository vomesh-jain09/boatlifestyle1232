// Nechband

const express=require('express')
const create_middlewar = require('./control/createvalidation');

const { updated, deleted, getmyProducts, created, getmyProduct } = require('./control/createcontroler');

const Routing= express.Router();
  
Routing.get('/neckband',getmyProducts)
Routing.get('/neckbandsingle',getmyProduct)

Routing.post('/creates',create_middlewar,created)
Routing.put('/updates',updated)
Routing.delete('/deletes',deleted)
module.exports=Routing;