import React from "react";

const Button = (props) => {
 // console.log(props);
  return (
    <div className="my-6">
      <button
        type="submit"
        
        className="w-full h-8  text-white text-center bg-yellow-500 hover:bg-yellow-600 rounded "
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
