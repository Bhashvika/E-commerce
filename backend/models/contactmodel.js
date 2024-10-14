const mongoose=require('mongoose');
const contactschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
const contactmodel=mongoose.model('contact',contactschema);
module.exports=contactmodel;