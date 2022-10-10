import React from "react";
import { Link } from "react-router-dom";

const QuizOption = ({ q }) => {
  const { logo, name, total } = q;
  // console.log(q);
  return (
    <div className="bg-gray-100 rounded-md">
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

          <Link to={`/quiz/${q.id}`}>
            <button className="font-semibold bg-orange-300 px-3 rounded">
              Lets Try
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizOption;
