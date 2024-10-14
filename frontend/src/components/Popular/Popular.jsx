import React, { useEffect } from 'react'
import './Popular.css'
import data_product from "../../assets/data";
import Item from '../Item/Item'
import { useState } from 'react';
const Popular = () => {
  const [data_product,setData_product]=useState([]);
  const fetchpopularlist=async (req,res)=>{
    const response = await fetch('http://localhost:4000/product/popular');
    const data=await response.json();
    setData_product(data);
  }
  useEffect(()=>{
       fetchpopularlist();
  },[])
  return (
    <div className='popular'>
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular