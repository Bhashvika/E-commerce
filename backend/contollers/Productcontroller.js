const productmodel=require("../models/productmodel");
const addproduct= async (req,res)=>{
    try{
        // to automatically generate object id we use 
        let products=await productmodel.find({});
        let id;
        if(products.length>0){
            let last_product_array=products.slice(-1);
            let last_product=last_product_array[0];
            id=last_product.id+1;  //increment last product id with 1tyhen it automatically get id in database
        }
        else{
            id=1;
        }
        const product=new productmodel({
            id:id,
            name:req.body.name,
            image:req.body.image,
            category:req.body.category,
            new_price:req.body.new_price,
            old_price:req.body.old_price,
            date:req.body.date,
            available:req.body.available
        })
        console.log(product);
        await product.save();
        console.log("product saved ")
        res.json({success:true,message:"product is added sucessfully"})
}
catch(error){
    console.log(error);
    res.status(500).json({success:false,message:"Failed to add the product"})
}
}
const deleteproduct=async (req,res)=>{
    try{
        let currid=req.body.id;
        await productmodel.findOneAndDelete(currid);
        console.log("product is removed");
        res.json({
         success:true,
         name:req.body.name,
         message:"product removed successfully",
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Failed to delete the product"
        })
    }
    
}
//Api for gettting all products
const getallproducts=async (req,res)=>{
    try{
        const products=await productmodel.find({});
        res.json({
            success:true,
            data:products,
            message:"all products are here"
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Failed to get all products",
        })
    }
    
}
const newcollections=async (req,res)=>{
    let products=await productmodel.find({});
    let newcollection=products.slice(1).slice(-8);
    console.log("newcollection fetched");
    res.send(newcollection);
}
const popularinwomen=async (req,res)=>{
    let products=await productmodel.find({category:"women"});
    let popular_in_women=products.slice(0,4);
    console.log("popular in women fetched");
    res.send(popular_in_women);
}


module.exports={addproduct,deleteproduct,getallproducts,newcollections,popularinwomen,};