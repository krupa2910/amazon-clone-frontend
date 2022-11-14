import React, { useEffect, useState,useRef } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../redux/features/productSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch([]);
  const searchItem = useRef('');
  const [searchvalue, setSearchValue] = useState();
  const data = useSelector((state) => state.product.items);
  console.log("data", data.length);

  const handleclick = () => {};
  const logout = () => {
    localStorage.removeItem("profile");
    navigate("/login");
  };
  return (
    <nav className="bg-black w-full h-14 flex  sm:w-full md:w-full fixed">
      <div className="m-2 my-5 lg:mx-16 justify-start">
        <img
          className="w-[70px] h-[20px] "
          src={require("../images/amazonlogo.png")}
          alt="amazon logo"
        />
      </div>
      <div className="flex w-full justify-center ">
        <input
          type="search"
          value={searchvalue}
          ref={searchItem}
          className="w-full m-3 p-3 text-black "
          onChange={(e) => {
            setSearchValue(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button
          className="bottom-0 right-0 top-0 ml-[-45px] p-1 my-3   text-white bg-orange-400 text-xs "
          onClick={handleclick}
        >
          <AiOutlineSearch color="white" size={28} />
        </button>
      </div>
      <div className="flex ml-16 ">
        <ul className="text-white flex my-3 text-sm ">
          <li className="mx-3">
            <Link to="/login">Hello,SignIn</Link>
            <p>User</p>
          </li>
          <li className="mx-3">Returns<br/>&order</li>
          <li className="mx-3 flex my-1">
            <AiOutlineShoppingCart color="white" size={28} />
            <span className="text-black rounded-full px-1 bg-white h-6 w-6 -mt-2 -ml-2 text-center">
              {data ? data.length : 0}
            </span>
          </li>
          <li className="-mt-2  mr-5">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-10 my-2 px-4 border ml-10 border-gray-400 rounded shadow"
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      {/* <div className="flex mr-[100px]">
        <div className="text-white text-sm my-2 mr-[30px]">
          <Link to="/login">Hello,Signin</Link> <p>KrupaJivani</p>
        </div>
        <div className="text-white text-sm my-2 mr-[30px] ">
          Returns& Orders
        </div>

        <Link to="/checkout">
          <div className=" my-3 flex">
            <AiOutlineShoppingCart color="white" size={28} />
            <span className="text-black rounded-full px-1  bg-white h-6 w-6 -mt-2 -ml-2 text-center">
              {data ? data.length : 0}
            </span>
          </div>
        </Link>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-10 my-2 px-4 border ml-10 border-gray-400 rounded shadow"
          onClick={logout}
        >
          Logout
        </button>
      </div> */}
    </nav>
  );
};

export default Navbar;
