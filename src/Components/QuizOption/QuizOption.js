import React, { createContext } from "react";
import { Link } from "react-router-dom";

const QuizOption = ({ q }) => {
  const { logo, name, total } = q;
  // console.log(q);
  return (
    <div>
      <div className="bg-gray-100 rounded-md relative">
        <img className="w-full h-full" src={logo} alt="" />
        <div className="m-4">
          <div className="flex justify-between py-10 ">
            <p className="text-base">
              Quiz Topic : <span className="font-extrabold">{name}</span>
            </p>
            <p className="text-base">
              Total Quiz :{" "}
              <span className="text-red-500 font-extrabold">{total}</span>
            </p>
          </div>
          <div className="text-center px-4 py-3 bg-yellow-500 w-full rounded font-medium">
            <Link to={`/quiz/${q.id}`}>
              <button>Lets Try</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizOption;
