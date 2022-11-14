import React, { useEffect, useState ,useRef} from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../redux/features/productSlice";
import { searchProducts } from "../redux/features/productSlice";
import ProductList from "./ProductList";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const search = useRef('');
  const [searchItem, setSearchItem] = useState([]);
  const [searchvalue, setSearchValue] = useState();
  const data = useSelector((state) => state.product.items);
  //console.log("data", data.length);
  const getproducts = useSelector((state) => state.product.product);
 // console.log(getproducts);
  const cartItem = JSON.parse(localStorage.getItem("addtocart"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));

    setUser(user.user.name);
  }, []);

  
  const handleclick = (searchvalue,) => {
    const value = search.current.value;
    //console.log(value);
    const searchProduct= getproducts.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchvalue.toLowerCase()) ||
        item.category.toLowerCase().includes(searchvalue.toLowerCase())
      );
    });
    setSearchItem(searchProducts);
    dispatch(searchProducts({searchProduct,value}))
  };

  return (
    
    <header className=" w-full h-16 fixed flex flex-col max-sm:h-24 w-full bg-black ">
      {/* Top Nav */}
      <div className="flex items-center bg-black p-1 py-1 w-full  ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <img
            alt="amazonimg"
            //onClick={() => router.push("/")}
            src={require("../images/amazonlogo.png")}
            width={100}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className=" sm:flex items-center h-10 rounded-md flex-grow cursor-pointer max-sm:hidden  ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="search"
            name="search"
            ref={search}
            value={searchvalue}
            onChange={(e) => setSearchValue(e.target.value)}
            // ref={searchRef}
          />
          <button
            onClick={() => handleclick(searchvalue)}
            className="bg-orange-400 hover:bg-orange-500 top-0 right-0"
          >
            <AiOutlineSearch className="h-10 " size={30} color="black" />
          </button>
        </div>

        {/* Right */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <Link to="/login">
            <div className="link">
              <p>
                Hello SignIn,
                <br />
                {user}
              </p>
            </div>
          </Link>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <Link to="/checkout">
            <div className="relative link flex items-center">
              <span className="absolute top-0 -right-2 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {!cartItem ? 0 : cartItem.length}
              </span>

              <AiOutlineShoppingCart className="h-10" size={30} />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center mx-2 rounded-md flex-grow cursor-pointer lg:hidden md:hidden sm:hidden">
        <input
          className="p-2 h-8 w-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          type="text"
        />
        <button
          onClick={handleclick}
          className="bg-orange-400 hover:bg-orange-500 top-0 right-0"
        >
          <AiOutlineSearch className="h-8 " size={30} color="black" />
        </button>
      </div>
      
    </header>
  );
};

export default Header;
