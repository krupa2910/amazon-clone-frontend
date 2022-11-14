import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { Checkout } from '../redux/features/productSlice';
import Payment from './Payment';


const Subtotal = () => {
  const items = useSelector((state)=> state.product);
 // console.log("items",items);
  const dispatch = useDispatch();
  const checkout = (items) => {
     // console.log("jffj",items);
      const user = JSON.parse(localStorage.getItem('profile'));
      const userId = user.user._id;
      let total = items.basketTotal;
      dispatch(Checkout({total,user}))
  }
  return (
    <div className='w-[100%] h-40 rounded border-black border-[1px] bg-white p-6 '>
        <h4 className='mb-3'>SubTotal ({!items ? 0 : items.items.length}) : <strong>{!items.items.length ? 0 : items.basketTotal }</strong></h4>
        <small>
             <input type='checkbox'  /> This order contains a gift.
        </small>
        <Payment items={items} />
    </div>
  )
}

export default Subtotal