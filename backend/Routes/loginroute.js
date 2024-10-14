const express=require('express');
const userlogindata=require('../contollers/userLogin');
const loginrouter=express.Router();
loginrouter.post('/login',userlogindata);
module.exports=loginrouter;
