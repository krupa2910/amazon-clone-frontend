import React, { useEffect, useState } from "react";
import {
  AddtToCart,
  getAllProduct,
  getProduct,
} from "../redux/features/productSlice";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  
  const [userId, setUserId] = useState();
  const { product, user ,searchItems} = useSelector((state) => ({
    ...state.product,
    ...state.auth,
     ...state.product
  }));
  //console.log("ffj",searchItems);

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("profile"));
    //console.log("user===>",userId.user._id);
    setUserId(userId.user._id)
  }, []);
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const addtocart = (item) => {
    //console.log("e", item);
    dispatch(AddtToCart({ item, userId }));
  };
  return (
    <div>
        {
           searchItems.value ? 
           <div className="grid grid-cols-1 max-md:grid-cols-2 m-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
               {
                  searchItems.searchProduct.map((p,i)=>{
                      return(
                          <div 
                          key={i}
                          className="flex flex-col rounded overflow-hidden shadow-lg  p-8 h-full "
                          >
                             <div className="">
                                    <img
                                      src={p.image}
                                      alt=""
                                      // height={100}
                                      // width={100}
                                      className=" h-16 w-20"
                                    />
                             </div>
                            <div className="">
                              <p className="text-sm font-medium  ">{p.title}</p>
                              <p className="">{p.price}</p>
                            </div>
                           <div>
                          <button
                            onClick={() => addtocart(p)}
                            className="md :w-full h-8  text-white text-center max-sm : text-xs w-full bg-orange-500 hover:bg-orange-600 rounded "
                            type="submit"
                          >
                            Add To Cart
                          </button>
                          </div>
                          </div>
                      )
                  })
               }
           </div> :
             <div className="grid grid-cols-1 max-md:grid-cols-2 m-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
   
             {product.map((item, i) => {
               return (
                 <div
                   key={i}
                   className="flex flex-col rounded overflow-hidden shadow-lg  p-8 h-full "
                 >
                   <div className="">
                     <img
                       src={item.image}
                       alt=""
                       // height={100}
                       // width={100}
                       className=" h-16 w-20"
                     />
                   </div>
                   <div className="">
                     <p className="text-sm font-medium  ">{item.title}</p>
                     <p className="">{item.price}</p>
                   </div>
                    <div>
                     <button
                       onClick={() => addtocart(item)}
                       className="md :w-full h-8  text-white text-center max-sm : text-xs w-full bg-orange-500 hover:bg-orange-600 rounded "
                       type="submit"
                     >
                       Add To Cart
                     </button>
                   </div>
                 </div>
               );
             })}
           </div>
         }
    </div>
    
   
  );
};

export default ProductList;
