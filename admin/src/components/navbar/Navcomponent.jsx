import React from 'react'
import './navbar.css'
import navlogo from '../../assets/nav-logo.PNG';
import navprofile from '../../assets/nav-profile.svg';
const Navcomponent = () => {
 return(
    <div className='Navbar'>
          <img src={navlogo} alt="" className="nav-logo" />
          <img src={navprofile} alt=""  className='nav-profile'/>
    </div>
 )
}
export default Navcomponent;