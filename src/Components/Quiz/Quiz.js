import React from "react";

const Quiz = ({ q }) => {
  const { logo, name, total } = q;
  return (
    <div className="bg-gray-300 rounded-md">
      <img className="w-full" src={logo} alt="" />
      <div className="flex justify-between mx-3 my-3">
        <p>{name}</p>
        <p>{total}</p>
        <button>Lets Try</button>
      </div>
    </div>
  );
};

export default Quiz;
