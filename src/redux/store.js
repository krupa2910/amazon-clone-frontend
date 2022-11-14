import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import productSlice from "./features/productSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig,productSlice)

  export const store = configureStore({
     reducer : {
         auth : authSlice,
         product : productSlice
     }
   

});

export const persistor = persistStore(store)