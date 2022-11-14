import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../utlis/axiosInstance";
import { PRODUCTS, REMOVEFROMCART } from "../../utlis/constant";
import * as api from "../api";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const res = await api.getAllProducts();
      //console.log("res",res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const AddtToCart = createAsyncThunk(
  "product/addtocart",
  async ({ item, userId, qty },{rejectWithValue}) => {
    try {
     // console.log("userhufh", item);
      const itemId = item._id;
     // console.log(itemId);

      const res = await api.AddToCart({ itemId, userId, qty });
      return res.data.items;
    } catch (error) {
      return rejectWithValue(error)
     
    }
  }
);
export const Checkout = createAsyncThunk(
  "product/checkout",
  async ({ user, items },{rejectWithValue}) => {
    const orderItem = items.items;
    const total = items.basketTotal;
    try {
      const res = await api.checkout({ user, orderItem, total });
      //console.log(res);
      if (res.data.Url) {
        window.location.href = res.data.Url;
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);
export const DeleteFromCart = createAsyncThunk(
  "product/deletetocart",
  async ({ userId, itemId },{rejectWithValue}) => {
    try {
     // console.log("itemid", itemId, userId);
      const res = await api.removefromcart({ itemId, userId });
      //console.log("==+++>", res);
      return res.data.items;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);
export const updatecartItem = createAsyncThunk(
  "product/updateItem",
  async ({ userId, itemId, type },{rejectWithValue}) => {
    try {
     // console.log("====>jkdjoi", type, userId, itemId);
      const res = await api.updateCartItem({ userId, itemId, type });
     // console.log("res", res);
      return res.data.items;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);
const initialState = {
  product: [],
  error: "",
  loading: false,
  items: [],
  basketTotal: 0,
  message: "",
  searchItems : [],

  //cartItems : [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    totalPrice: (state, action) => {
     // console.log("action", action.payload);
      if(action.payload){
        let price = action.payload.map((p) => {
          return p.price * p.quantity;
        });
      //  console.log(price);
        if (price.length > 0) {
          state.basketTotal = price.reduce((total, amount) => {
            return total + amount;
          });
        }
      }
  
    },
      searchProducts : (state,action) => {
          //console.log(action.payload);
           
           state.searchItems = action.payload;

          // console.log("==>",state.searchItems);
      }
  },
  extraReducers: {
    [getAllProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.product = action.payload;
    },
    [getAllProduct.rejected]: (state, action) => {
      state.loading = true;
      state.product = [];
      state.error = "Not able to get Products";
    },
    [AddtToCart.pending]: (state, action) => {
      state.loading = true;
    },

    [AddtToCart.fulfilled]: (state, action) => {
     // console.log("++++++++++++++++", action.payload);
      state.loading = false;
      state.error = "";
      localStorage.setItem("addtocart", JSON.stringify(action.payload));
      state.items = action.payload;
      // console.log("state",state.items);
    },
    [AddtToCart.rejected]: (state, action) => {
      state.loading = true;
      state.items = [];
      state.error = "Not able to add Products to the cart";
    },

    [updatecartItem.pending]: (state, action) => {
      state.loading = true;
    },
    [updatecartItem.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      localStorage.setItem("addtocart", JSON.stringify(action.payload));
      state.error = "";
    },
    [updatecartItem.rejected]: (state, action) => {
      state.loading = true;
      state.items = [];
      state.error = "Unable to update item";
    },
    [DeleteFromCart.pending]: (state, action) => {
      state.loading = true;
    },
    [DeleteFromCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.items = action.payload;
      localStorage.setItem("addtocart", JSON.stringify(action.payload));
    },
    [DeleteFromCart.rejected]: (state, action) => {
      state.loading = true;
      state.items = [];
      state.error = "Not able to remove item from the cart";
    },
    [Checkout.pending]: (state, action) => {
      state.loading = true;
    },
    [Checkout.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = "";
    },
    [Checkout.rejected]: (state, action) => {
      state.loading = true;
      state.message = "";
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { totalPrice,searchProducts } = productSlice.actions;
