import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg';
import {toast} from 'react-toastify';
const Addproduct = () => {
    const [image,setImage]=useState(false);
    const [productDetails,setProductDetails]=useState({
        "name":"",
        "image":"",
        "category":"",
        "new_price":"",
        "old_price":"",
    })
    const changeHandler=(e)=>{
          setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const imageHandler=(event)=>{
        setImage(event.target.files[0]);
    }
    const Add_Product=async ()=>{
           console.log(productDetails);
           let responseData;
           let product=productDetails;

           let formData=new FormData();
           formData.append('product',image);
           await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
           }).then((res)=>res.json()).then((data)=>(responseData=data));
           if(responseData.success){
            product.image=responseData.image_url;
            console.log(product);
            await fetch("http://localhost:4000/product/addproduct",{
                method:"POST",
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product),
            }).then((res)=>res.json()).then((data)=>{
                data.success?toast.success("product added successfully"):toast.error("failed to add the product")
            })
            setProductDetails({
                "name":"",
                "image":"",
                "category":"",
                "new_price":"",
                "old_price":"",
            })
            setImage(false);
           }
    }
  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Product title:</p>
            <input type="text" name='name' placeholder='Type Product name  here' value={productDetails.name} onChange={changeHandler}/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price:</p>
                <input type="text" name='old_price' placeholder='Type Price here' value={productDetails.old_price} onChange={changeHandler} />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price:</p>
                <input type="text" name='new_price' placeholder='Type Offer Price here' value={productDetails.new_price} onChange={changeHandler} />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>product category:</p>
            <select name='category' className='add-product-selector' value={productDetails.category} onChange={changeHandler}>
                <option value=''>Select Category</option>
                <option value='women'>Women</option>
                <option value='men'>Men</option>
                <option value='kid'>Kids</option>
                <option value='electronics'>Electronics</option>
                <option value='footwear'>Footwear</option>
                <option value='kitchen'>Kitchen</option>
                <option value='cosmetics'>Cosmetics</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumbnail-img'/>
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>

        </div>
         <button className='addproduct-button' onClick={()=>{Add_Product()}}>ADD</button>
    </div>
  )
}

export default Addproduct