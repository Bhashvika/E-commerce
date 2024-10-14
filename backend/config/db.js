const mongoose=require("mongoose");
const connectDB=async ()=>{
     await mongoose.connect("mongodb+srv://vishnu1321:9618084079@cluster1.up5ut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1/Ecommerce")
    .then(()=>{
        console.log("db connected");})
    .catch((err) => {
        console.error("Error connecting to the database", err);
    });
}
module.exports=connectDB;