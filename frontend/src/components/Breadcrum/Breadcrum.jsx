import React from 'react'
import arrow_icon from '../../assets/arrow.png';
import './Breadcrum.css'
const Breadcrum = (props) => {
    const { product } = props;

    if (!product) {
        return <div className="Breadcrum">Home<img src={arrow_icon} alt="" />Shop</div>;
    }

    return (
        <div className="Breadcrum">
            HOME<img src={arrow_icon} alt="" width="13px"/> SHOP<img src={arrow_icon} alt="" width="13px"/>{product.category}<img src={arrow_icon} alt="" width="13px"/>{product.name}
        </div>
    );
}

export default Breadcrum;
