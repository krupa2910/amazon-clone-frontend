import React from "react";
import { ErrorMessage, Field } from "formik";

const Input = (props) => {
  return (
    <div>
      {props.values.map((value, index) => {
        return (
          <div key={index} className="my-4 max-sm:my-2">
            <label
              htmlFor={value.name}
              className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {value.label} :
            </label>
            <Field
              type={value.type}
              name={value.name}
              placeholder={value.placeholder}
              autoComplete="Off"
              className="block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            
                            "
                            
            />
            <ErrorMessage
              name={value.name}
              component="div"
              className="text-red-400"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Input;
