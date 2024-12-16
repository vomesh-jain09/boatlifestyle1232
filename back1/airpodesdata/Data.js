const mongoose=require('mongoose')
let AirSchema=new mongoose.Schema({
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
let Air=mongoose.model("Air",AirSchema)

module.exports=Air;