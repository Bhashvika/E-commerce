import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import './Products.css';
import { useParams } from 'react-router-dom';
import Breadcrum from '../../components/Breadcrum/Breadcrum';
import Productdisplay from '../../components/productdisplay/Productdisplay';
import Descriptionbox from '../../components/DescriptionBox/Descriptionbox';
import Relatedproduct from '../../components/Relatedproducts/Relatedproduct';

const Products = () => {
  const { allproducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allproducts.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='products'>
      <Breadcrum product={product} />
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproduct/>
    </div>
  );
}

export default Products;
