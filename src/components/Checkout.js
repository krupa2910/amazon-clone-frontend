import React from "react";

import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="m-10 w-full max-sm:m-2">
      <h1 className="m-5 text-xl font-bold max-sm:text-sm ">
        Hello,Krupa Jivani.Here is your Order Items.
      </h1>
      <hr className="w-[60%]" />
      <div className="flex max-sm:flex-col">
        <div className="m-5 max-sm:m-2">
          <CheckoutProduct />
        </div>

        <div className="m-10 ">
          <Subtotal />
        </div>

      </div>
    </div>
  );
};

export default Checkout;
