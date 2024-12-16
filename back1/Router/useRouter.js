
const express=require('express');
const { getAlluser, registeruser, updateUser, deleteUser,loginUser,singleuser, sendEmail, } = require('./control/userControler');
const Router= express.Router();

const validation_middleware=require('../validation')
// localhost:9000
// register/login
Router.get('/',getAlluser);
Router.get('/single',singleuser)
Router.post('/register',validation_middleware,registeruser);
Router.post('/sendemail',sendEmail)
Router.post('/Login',loginUser)
Router.delete('/delete',deleteUser)
Router.put('/update',updateUser)

module.exports=Router;