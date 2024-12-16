const mongoose=require('mongoose')
let createSchema=new mongoose.Schema({
   image:{
        type:String,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:"good product"
    },
   price:{
     type:Number,
   }, 
  
})
let producted=mongoose.model("create",createSchema)

module.exports=producted;