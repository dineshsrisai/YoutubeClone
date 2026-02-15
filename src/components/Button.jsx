import React from "react";

const Button = ({ name }) => {
  return (
    <div className="shrink-0">
      <button className="px-3 py-1.5 mx-1 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer">
        {name}
      </button>
    </div>
  );
};

export default Button;
