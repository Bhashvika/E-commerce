const usermodel=require("../models/usermodel");
const jwt=require("jsonwebtoken");
const userData=async (req,res)=>{
    let check=await usermodel.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,error:"existing user found with same email address"})
    }
    let cart={};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }
    const user=new usermodel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();
    const data={
        user:{
            id:user.id
        }
    }
    const token=jwt.sign(data,'secret_ecom');
    res.json({
        success:true,token
    })
}
//creating middleware to fetch user 
const fetchUser =async (req,res,next)=>{
    const token=req.header('auth-token');
    if(!token) return res.status(401).json({success:false,message:"Please authenticate using valid token "})
      else{
  try{
     const data=jwt.verify(token,'secret_ecom');
     req.user=data.user;
     next();
  }
  catch(error){
      console.log(error);
      res.status(401).send({errors:"please authenticate using valid token"})
  }
  }
}
//creating end point to add cart data
const addtocart=async (req,res)=>{
    console.log("added",req.body.itemId)
  let userdata=await usermodel.findOne({_id:req.user.id});
  let cart=userdata.cartData;
  cart[req.body.itemId]+=1;
  await usermodel.findOneAndUpdate({_id:req.user.id},{cartData:cart});
  res.send("added")

}
//creating end point to remove cart data
const removefromcart=async (req,res)=>{
    console.log("removed",req.body.itemId)
    let userdata=await usermodel.findOne({_id:req.user.id});
    let cart=userdata.cartData;
    if(cart[req.body.itemId]>0){
        cart[req.body.itemId]-=1;
    }
    await usermodel.findOneAndUpdate({_id:req.user.id},{cartData:cart});
    res.send("removed from cart")
}
//creating endpoint to get cartdata
const getcartdata = async (req, res) => {
    try {
        let userdata = await usermodel.findOne({ _id: req.user.id });
        let cartdata = userdata.cartData;
        res.json({ success: true, cartdata });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};
module.exports={userData,addtocart,fetchUser,removefromcart,getcartdata};