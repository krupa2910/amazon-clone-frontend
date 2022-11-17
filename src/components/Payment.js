import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkout } from "../redux/features/productSlice";
import { useNavigate } from "react-router-dom";

const Payment = ({ items }) => {
  //console.log("items", items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
