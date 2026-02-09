import React from "react";

const Button = ({ name }) => {
  return (
    <div className="px-3 py-1 m-2 bg-gray-800 rounded-lg font-semibold">
      <button>{name}</button>
    </div>
  );
};

export default Button;
