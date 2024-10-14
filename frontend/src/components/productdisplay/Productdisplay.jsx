import React, { useContext } from 'react'
import './Productdisplay.css';
import start_icon from '../../assets/star_icon.png';
import start_dull_icon from '../../assets/star_dull_icon.png';
import { ShopContext } from '../../context/Shopcontext';
const Productdisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
            <img className="productdisplay-img-main" src={product.image} alt="" /> 
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-star">
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_dull_icon} alt="" />
            </div>
            <p>(132)</p>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">${product.old_price}</div>
                <div className="productdisplay-right-prices-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Upgrade your footwear collection with our exclusive range of women’s flats, now on sale on Amazon. These flats are the epitome of comfort and style, designed to cater to the modern woman’s needs. Whether you’re heading to the office, a casual outing, or a special event, these flats offer a versatile option that complements any outfit.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size-list">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category:</span>Women,T shirt,Crop Top</p>
                <p className="productdisplay-right-category"><span> Tags:</span>Modern,Latest</p>


            </div>
        </div>
    </div>
  )
}

export default Productdisplay