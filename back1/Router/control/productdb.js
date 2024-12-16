
// smart watches
const mongoose=require('mongoose')
let productSchema=new mongoose.Schema({
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
let products=mongoose.model("product",productSchema)

module.exports=products;