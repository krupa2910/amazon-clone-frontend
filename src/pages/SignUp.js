import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import Input from "../components/Input";
import { registerSchema } from "../components/Schema";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utlis/axiosInstance";
import { REGISTER } from "../utlis/constant";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/features/authSlice";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const inputField = [
    {
      name: "name",
      label: "Your name",
      type: "text",
      placeholder: "Enter Your Name",
    },
    {
      name: "phone",
      label: "Mobile Number",
      type: "text",
      placeholder: "Mobile Number",
    },
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
  ];

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handlesubmit = (values, { resetForm }) => {
    if (values) {
      dispatch(register({ values, navigate, toast }));
    }

    resetForm("");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="my-10 max-sm:my-5">
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
          validationSchema={registerSchema}
        >
          <Form>
            <Input values={inputField} />
            <p className="text-sm text-black max-sm:text-xs">
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Amazon.
              Message and data rates may apply.
            </p>
            <Button name="Sign Up" />
            <Link to="/login">
              <p className="text-center underline text-blue-500">
                Already have an account ?
              </p>
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
