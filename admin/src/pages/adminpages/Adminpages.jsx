import React from 'react'
import './admin.css';
import Sidebar from '../../components/sidebar/Sidebar';
import {Routes,Route} from 'react-router-dom';
import Addproduct from '../../components/Addproduct/Addproduct';
import Contact from '../../components/contactdetails/Contact';
import ListProducts from '../../components/ListProducts/ListProducts';
const Adminpages = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<Addproduct/>}/>
            <Route path='/getallproducts' element={<ListProducts/>}/>
            <Route path="/getcontact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default Adminpages