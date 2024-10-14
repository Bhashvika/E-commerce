const express= require("express");
const port=4000;
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const connectDB=require('./config/db');
const { error } = require("console");
const productrouter=require('./Routes/productroute');
const userrouter=require('./Routes/userroute');
const loginrouter=require('./Routes/loginroute');
const contactrouter=require('./Routes/contactroute');
//database connection
connectDB();
//Api Creation
app.get('/',(req,res)=>{
    res.send("Express App is running");
})
//image storage engine
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage})
app.use('/images',express.static('upload/images'))
//api for image upload
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})
//adding routes in index.js
app.use('/product',productrouter);
app.use('/product',userrouter);
app.use('/product',loginrouter);
app.use('/product',contactrouter);
app.listen(port,(error)=>{
    if(!error){
    console.log(`server is running on port ${port}`)
    }
    else{
        console.log("error:"+error);
    }
})