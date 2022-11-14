import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { AddtToCart, DeleteFromCart, getCartItems, totalPrice, updatecartItem } from "../redux/features/productSlice";
import { increaseQty,decreaseQty } from "../redux/features/productSlice";

const CheckoutProduct = ({ item }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.product.items);
 // console.log("==>", cartItems);

  const items = JSON.parse(localStorage.getItem('addtocart'));
  //console.log(items);
  
  useEffect(()=>{
       
      dispatch(totalPrice(cartItems))
      
     
  })

  
   const increment = (e) => {
      // console.log("e",e);
       const user = JSON.parse(localStorage.getItem('profile'));
      // console.log("user",user);
       const userId = user.user._id;
       //console.log("userId",userId);
       const itemId = e._id;
       const type = 'Increment';
      // const Qty = e.quantity + 1;
       dispatch(updatecartItem({userId,itemId,type}))
   }
   const decrement = (e) => {
       //const itemId = e._id;
       
       const user = JSON.parse(localStorage.getItem('profile'));
       const userId = user.user._id;
       const itemId = e._id;
       const type = 'Decrement'
       //const Qty = e.quantity - 1;
       dispatch(updatecartItem({userId,itemId,type}))
   }
  
  const removefrombasket = (e) => {
     //console.log("&&&&&&&&&&&&&",e);
     const user = JSON.parse(localStorage.getItem('profile'));
     const userId = user.user._id;
     const itemId = e._id;
     
     dispatch(DeleteFromCart({userId,itemId}));
  };
  return (
    <div>
      {
         items.length ? 
          <div>
      
          {items.map((e, i) => {
            return (
              <div key={i}>
                <div className="overflow-hidden shadow-lg p-7  max-sm:p-4  flex ">
                  <img
                    src={e.image}
                    className="w-20 h-20"
                    // height={70}
                    // width={90}
                   alt=""
                  />
  
                  <div className="ml-7 max-sm:ml-7 ">
                    <p className="font-bold">{e.name}</p>
                    <p className="font-bold">{e.price}</p>
                    <div className="flex flex-row h-8 w-[40%] rounded-lg relative bg-transparent my-2">
                      <button
                        data-action="decrement"
                        onClick={() =>decrement(e)}
                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span className="m-auto text-2xl font-thin">−</span>
                      </button>
                      <p className=" w-full bg-gray-300 font-semibold text-md text-center pt-1 hover:bg-gray-400 px-2 ">{e.quantity}</p>
                      
                      <button
                        data-action="increment"
                        onClick = { ()=> increment(e)}
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                    <button
                      className=" text-sm w-full h-8 text-white text-center p-2  bg-orange-500 hover:bg-orange-600 rounded"
                      type="submit"
                      onClick={() => removefrombasket(e)}
                    >
                      Remove 
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
            
            : 
             
             <div className="overflow-hidden shadow-lg m-5 p-20 w-full">
                <h1 className="font-bold text-lg text-center align-center">Your Card Is Empty</h1>
             </div>
      }
     
    </div>
  );
};

export default CheckoutProduct;
