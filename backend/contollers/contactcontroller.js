const contactmodel=require('../models/contactmodel');
const contactData=async (req,res)=>{
    try{
        const contactdata=await new contactmodel({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
          })
          await contactdata.save();
          res.status(201).json({success:true,message:"Contact saved successfully"})

    }
    catch(error){
        res.status(500).json({message:error.message})
    }
      
}
const getallcontactdata=async (req,res)=>{
    try{
        let contactdetails=await contactmodel.find({});
        res.status(200).send({success:true,data:contactdetails,message:"here all the contact information "});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
     
}
module.exports={contactData,getallcontactdata};