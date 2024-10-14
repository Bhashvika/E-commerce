import React from 'react'
import './Shop.css'
import Popular from '../../components/Popular/Popular'
import Offers from '../../components/offers/offers'
import Newcollections from '../../components/NewCollections/Newcollections'
import Newsletter from '../../components/NewsLetter/Newsletter'
const Shop = () => {
  return (
    <div>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newsletter/>
    
    </div>
  )
}

export default Shop