import React, { useEffect } from 'react';
import SignUp from './pages/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Checkout from './components/Checkout';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/features/authSlice';
import CheckoutSuccess from './components/CheckoutSuccess';


function App() {

     
      
      return (
        <Router>
          <ToastContainer/>
           <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/signup' element={<SignUp/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/checkout' element={<Checkout/>}/>
              <Route path='/checkout-success' element={<CheckoutSuccess/>} />
              
           </Routes>
        </Router>
        
      )
}

export default App;
