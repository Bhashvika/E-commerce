import {React,useState} from 'react'
import './MiniNav.css';
import { Link } from 'react-router-dom';
const Mininav = () => {
  const [menu,setMenu]=useState("shop");
  return (
    <div className='Mini-nav'>
         <ul className='nav-list'>
            <li  onClick={()=>{setMenu("shop")}} ><Link to='/' className='link'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Men")}} ><Link to='/Men' className='link'>Men</Link> {menu==="Men"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Women")}} ><Link to='/Women' className='link'>Women</Link>{menu==="Women"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}} ><Link to='/Kids' className='link'>Kids</Link>{menu==="Kids"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Electronics")}} ><Link to='/Electronics' className='link'>Electronics</Link>{menu==="Electronics"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Kitchen")}} ><Link to='/Kitchen' className='link'>Kitchen</Link>{menu==="Kitchen"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Footware")}} ><Link to='/Footware' className='link'>Footware</Link>{menu==="Footware"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Cosmetics")}} ><Link to='/Cosmetics' className='link'>Cosmetics</Link>{menu==="Cosmetics"?<hr />:<></>}</li>
         </ul>
    </div>
  )
}

export default Mininav