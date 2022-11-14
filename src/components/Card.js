import React from 'react'
import ProductList from './ProductList';
import products from '../productData';
import { useDispatch } from 'react-redux';

const Card = () => {
 const dispatch = useDispatch();
  return (
    <div className=''>
        <ProductList product={products} dispatch={dispatch}/>
    </div>
  )
}

export default Card