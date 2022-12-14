import axios from 'axios';
import { ADDTOCART, GETCARTITEMS, LOGIN, PAYMENT, PRODUCTS, REGISTER, REMOVEFROMCART, UPDATECARTITEM } from '../utlis/constant';

const axiosInstance = axios.create({
    baseURL: 'https://mern-amazonclone.herokuapp.com/api',
    
  });

export const signup = (values) => axiosInstance.post(REGISTER,values);
export const login = (values) => axiosInstance.post(LOGIN,values);
export const getAllProducts = () => axiosInstance.get(PRODUCTS);
export const AddToCart = ({itemId,userId,qty}) => axiosInstance.post(ADDTOCART,{itemId,userId,qty})
export const removefromcart =({itemId,userId}) => axiosInstance.delete(REMOVEFROMCART + userId + "/" + itemId)
export const updateCartItem = ({itemId,userId,type}) => axiosInstance.put(UPDATECARTITEM,{itemId,userId,type});
export const checkout = ({items}) => axiosInstance.post(PAYMENT,{items});