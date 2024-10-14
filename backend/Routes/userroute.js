const express=require("express");
const {userData,addtocart,fetchUser,removefromcart,getcartdata}=require('../contollers/Usercontroller');
const userrouter=express.Router();
userrouter.post('/signup',userData);
userrouter.post('/addtocart',fetchUser,addtocart);
userrouter.post('/removefromcart',fetchUser,removefromcart)
userrouter.post('/getcartdata',fetchUser,getcartdata)
module.exports=userrouter;