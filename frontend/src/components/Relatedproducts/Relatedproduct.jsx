import React from 'react'
import './Relatedproducts.css';
import data_product from '../../assets/data'
import Item from '../Item/Item'
const Relatedproduct = () => {
  return (
    <div className='Relatedproduct'>
        <h1>Related Products</h1>
        <hr />
       <div className="related-product-list">
           {
            data_product.map((item,index)=>{
                return(
                    <Item key={item.index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            )
            })
           }
       </div>
     </div>
  )
}

export default Relatedproduct