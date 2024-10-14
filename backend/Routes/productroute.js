const express=require("express");
const { addproduct, deleteproduct ,getallproducts,newcollections,popularinwomen} = require("../contollers/Productcontroller"); 
const productrouter=express.Router();
productrouter.post('/addproduct',addproduct);
productrouter.post('/deleteproduct',deleteproduct);
productrouter.get('/getallproducts',getallproducts);
productrouter.get('/newcollections',newcollections);
productrouter.get('/popular',popularinwomen);
module.exports=productrouter;