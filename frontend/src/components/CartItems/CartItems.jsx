import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../context/Shopcontext';
import remove_icon from '../../assets/cart_cross_icon.png';
const CartItems = () => {
    const {getTotalCartAmount,allproducts,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='Cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {
        allproducts.map((e)=>{
           if(cartItems[e.id]>0){
            return    <div>
            <div className="cartitems-format">
                <img src={e.image} alt="" className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantify'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} className='cartitem-remove-icon' onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
           }
           return null;
        })
       }
       <div className="cart-items-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping charges</p>
              <p>+10</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount() +10}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promocode,add it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems