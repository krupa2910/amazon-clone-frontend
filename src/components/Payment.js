import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkout } from "../redux/features/productSlice";

const Payment = ({ items }) => {
  console.log("items", items);
  const dispatch = useDispatch();
  //const user  = useSelector((state)=> state.auth.user);
 // console.log("user",user);
  const tokenHandler = () => {
    //const user = JSON.parsel(localStorage.getItem('profile'))

    dispatch(Checkout(items));
  };
  return (
    <button 
      className="w-full h-8 text-white text-center bg-slate-300 hover:bg-slate-600 rounded mt-4"
      onClick={()=> tokenHandler()}
      >
      Pay Now
    </button>
  );
};

export default Payment;
