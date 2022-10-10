import React from "react";

const Quiz = ({ q }) => {
  const { logo, name, total } = q;
  return (
    <div className="bg-gray-300 rounded-md">
      <img className="w-full" src={logo} alt="" />
      <div className="m-4">
        <p>
          Quiz Topic : <span className="font-extrabold">{name}</span>
        </p>
        <div className="flex justify-between">
          <p>
            Total Quiz :{" "}
            <span className="text-red-500 font-medium">{total}</span>
          </p>
          <button className="font-semibold bg-orange-300 px-3 rounded">
            Lets Try
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
