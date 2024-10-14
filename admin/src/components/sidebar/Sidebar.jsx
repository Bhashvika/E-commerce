import React from 'react'
import './Sidebar.css';
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg';
import contact_icon from '../../assets/contact_icon.png';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>       
<Link to={'/addproduct'} style={{textDecoration:"none"}}>
<div className="sidebar-item">
    <img src={add_product_icon} alt="" />
    <p>Add Product</p>
</div>
</Link> 
<Link to={'/getallproducts'} style={{textDecoration:"none"}}>
<div className="sidebar-item">
    <img src={list_product_icon} alt="" />
    <p>Product List</p>
</div>
</Link> 
<Link to="/getcontact" style={{ textDecoration: "none" }}>
  <div className="sidebar-item">
    <img src={contact_icon} alt="" height="40px" />
    <p>Contact List</p>
  </div>
</Link>

 
</div>
  )
}

export default Sidebar