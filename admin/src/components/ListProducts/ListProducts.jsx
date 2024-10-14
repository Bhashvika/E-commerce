import React, { useEffect ,useState } from 'react'
import './ListProducts.css';
import cross_icon from '../../assets/cross_icon.png';
const ListProducts = () => {
  const [allproducts,setAllProducts]=useState([]);
  const fetchInfo=async ()=>{
    const response= await fetch("http://localhost:4000/product/getallproducts").then((res)=>res.json())
    //.then((data)=>{setAllProducts(data.data)})
    setAllProducts(response.data)
  }

  useEffect(() => {
    fetchInfo(); 
  },[])
  const removeProduct=async (id)=>{
    await fetch("http://localhost:4000/product/deleteproduct",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        Accept:"application/json",
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }
  return (
    <div className='ListProducts'>
 <h2>All Products List</h2>
 <div className="listproduct-format-main">
  <p>products</p>
  <p>Title</p>
  <p>Old Price</p>
  <p>New Price</p>
  <p>Category</p>
  <p>Remove</p>
 </div>
 <div className="listproduct-allproducts">
  <hr />
   { allproducts.map((product,index)=>{
      return <>
      <div key={index} className="listproduct-format">
        <img src={product.image} alt="" className="listproduct-product-icon" />
        <p>{product.name}</p>
        <p>${product.old_price}</p>
        <p>${product.new_price}</p>
        <p>{product.category}</p>
        <img src={cross_icon} onClick={()=>{removeProduct(product.id)}} alt="" className="listproduct-remove-icon" />
      </div>
      <hr />
      </>
      
    })
   }
 </div>
    </div>
  )
}

export default ListProducts