import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { Checkout } from '../redux/features/productSlice';
import Payment from './Payment';


const Subtotal = () => {
  const items = JSON.parse(localStorage.getItem('addtocart'));
  console.log("==>",items);
  const basket = useSelector((state)=> state.product.basketTotal);
  console.log("items",basket);
  
  // }
  return (
    <div className='w-[100%] h-40 rounded border-black border-[1px] bg-white p-6 '>
        <h4 className='mb-3'>SubTotal ({!items ? 0 : items?.length}) : <strong>{basket ? basket : 0}</strong></h4>
        <small>
             <input type='checkbox'  /> This order contains a gift.
        </small>
        <Payment items={items} />
    </div>
  )
}

export default Subtotal