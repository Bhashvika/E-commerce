const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
      name:{
        type:String,
        required:true,
      },
      email:{
        type:String,
        unique:true,
      },
      password:{
        type:String,
      },
      cartData:{
        type:Object,
      },
      date:{
        type:Date,
        default:Date.now,
      }
})
const Users=mongoose.model("Users",userSchema);
module.exports=Users;