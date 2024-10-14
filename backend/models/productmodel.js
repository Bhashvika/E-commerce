const mongoose=require("mongoose");
//schema for creating products 
const productSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
          type:Boolean,
          default:true
    },

});
//model for the product schema
const Product=mongoose.model("Product",productSchema);
module.exports=Product;