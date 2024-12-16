const mongoose=require('mongoose')

let userSchema= new mongoose.Schema({
  image:{
    type:String,
  },
  name:{
    type:String,
    required:true

  },
  email:{
    type:String,
    required:true,
    unique:true

  },
   password:{
    type:String,
    minlength:8,
    required:true
  },
  role:{
  type:String,
  default:"user",
  }
  


});
let Users= mongoose.model("users",userSchema);

module.exports=Users;