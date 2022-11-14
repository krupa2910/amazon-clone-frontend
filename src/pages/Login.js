import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import Input from "../components/Input";
import { loginSchema } from "../components/Schema";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import { login } from "../redux/features/authSlice";
import {toast} from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {error,loading} = useSelector((state)=> ({...state.auth}))
  const initialValues = {
    email: "",
    password: "",
  };
  const inputField = [
    {
        name: "email",
        label: "EMail",
        type: "email",
        placeholder: "Enter Your EMail Address...",
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter Password",
      },
  ]
  useEffect(()=>{
      error && toast.error(error)
  },[error])
  const handlesubmit = (values,{resetForm}) => {

      if(values) {
          dispatch(login({values,navigate,toast}))
      }
    
    // axiosInstance.post(LOGIN,values).then((res)=>{
    //   console.log("resdata",res);
    //   if(res.data.user.type === 'Success'){
    //      localStorage.setItem("token",res.data.user.token)
    //      navigate('/')
    //   }else{
    //     navigate('/login')
    //   }
    // }).catch((error)=>{
    //   console.log("error",error)
    // })
    resetForm('');
    
}

  return (
    <div className="flex flex-col items-center">
      <div className="my-10  max-sm:my-5">
        <img
          src={require("../images/amazon_PNG6.png")}
          alt="amazon logo"
          height={90}
          width={120}
        />
      </div>
      <div className="border rounded-lg p-8 lg:w-[45%] md:w-[45%] max-sm:w-[80%] h-[70%] sm:w-[45%] ">
        <Formik
          initialValues={initialValues}
          onSubmit={handlesubmit}
          validationSchema={loginSchema}
        >
          <Form>
            <Input values={inputField} />
            <Button name='Login'/>
            <Link to ='/signup'><p className="underline text-blue-500 text-center">Create an account</p></Link>
          </Form>
        </Formik>
        </div>
      </div>
  );
};

export default Login;
