const express=require('express');
const {contactData,getallcontactdata}=require('../contollers/contactcontroller');
const contactrouter=express.Router();
contactrouter.post('/contact',contactData);
contactrouter.get('/getcontact',getallcontactdata)
module.exports=contactrouter;