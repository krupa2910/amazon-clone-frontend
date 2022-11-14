import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";


export const register = createAsyncThunk(
  "auth/register",
  async ({ values, navigate ,toast},{rejectWithValue}) => {
    
    try {

       const response = await api.signup(values);
      // console.log("response",response);
       toast.success('Registration Successfully!!!')
       navigate('/login')
       return response.data
      
    } catch (error) {
       return rejectWithValue(error.response.data)
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
   async({values,navigate,toast},{rejectWithValue})=>{
    //console.log("====>", values);
       try {

        const response = await api.login(values);
       // console.log("response",response);
        toast.success(response.data.message)
        navigate('/')
        return response.data
       
        
       } catch (error) {
           return rejectWithValue(error.response.data)
       }
  }
  
)
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:[],
    error: "",
    loading: false,
  },
  reducers : {
      setUser : (state,action) => {
           state.user = action.payload
      }
  },
  extraReducers: {
    
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      //console.log("action", action);
      state.loading = false;
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action.payload })
      );
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = "user does not register successfully!!!!";
    },
    [login.pending] : (state,action) => {
       state.loading =true;
    },
    [login.fulfilled] : (state,action) => {
          
          state.loading = false;
          localStorage.setItem("profile",JSON.stringify({...action.payload}));
          state.user = action.payload;
    }, 
    [login.rejected]  : (state,action) => {
       state.loading = false;
       state.error = action.payload.message
    }
  },
});
export const {setUser} = authSlice.actions;
export default authSlice.reducer;
