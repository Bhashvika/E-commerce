import React,{useContext} from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import cart_icon from '../../assets/cart_icon.png';
import call_icon from '../../assets/call_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/Shopcontext';
const Navbar = () => {
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-left">
        <Link to="/" className='link'><h1>FASHION <br/><span>HIVE<img src={logo} alt="" width="50px"/></span></h1></Link>
        
        </div>
        <div class="search-container">
              <input type="text" placeholder="Search your product....." />
              <img src={search_icon} alt="Search Icon" class="search-icon" />
       </div>
          <div className="nav-right">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button> : <Link to='/login'><button>Login</button></Link>}
            <Link to='/contact'><img className="contact-icon" src={call_icon} alt=" " width="50px" /></Link>
           
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
          </div>
        
    </div>
  )
}

export default Navbar