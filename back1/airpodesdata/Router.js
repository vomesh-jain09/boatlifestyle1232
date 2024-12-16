const express=require('express')
const Airpodes_middlewar = require('../airpodesdata/Validation');

const { Airproduct, Aircreate, Airupdate, Airdelete, singleproduct } = require('../airpodesdata/Controler');
const Airpodes= express.Router();
// Airpodes
Airpodes.get('/Airpodes',Airproduct)
Airpodes.get('/Airsingle',singleproduct)

Airpodes.post('/creation',Airpodes_middlewar,Aircreate)
Airpodes.put('/updation',Airupdate)
Airpodes.delete('/deletion',Airdelete)
module.exports= Airpodes;