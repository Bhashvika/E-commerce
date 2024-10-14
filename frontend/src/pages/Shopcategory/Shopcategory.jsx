import React, { useContext } from 'react';
import './Shopcategory.css';
import { ShopContext } from '../../context/Shopcontext';
import drop_down from '../../assets/dropdown_icon.png';
import Item from '../../components/Item/Item';

const Shopcategory = (props) => {
  const { allproducts } = useContext(ShopContext);

  // Check if allproducts is an array before using .map()
  if (!Array.isArray(allproducts)) {
    console.error('allproducts is not an array:', allproducts);
    return <div>Error: Products data is not available.</div>;
  }

  return (
    <div className='shop-category'>
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shop-category-indexsort">
        <p>
          <span>Showing 1-12</span> Out of {allproducts.length}
        </p>
        <div className="shop-category-sort">
          Sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-more">
        Explore More!
      </div>
    </div>
  );
};

export default Shopcategory;
