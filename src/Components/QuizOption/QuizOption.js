import React from "react";
import { Link } from "react-router-dom";

const QuizOption = ({ q }) => {
  const { logo, name, total } = q;
  // console.log(q);
  return (
    <div>
      <div className="bg-gray-100 rounded-md relative p-5">
        <img className="w-full h-full" src={logo} alt="" />
        <div className="m-4">
          <div className="flex justify-between py-8 ">
            <p className="text-base">
              Quiz Topic : <span className="font-extrabold">{name}</span>
            </p>
            <p className="text-base">
              Total Quiz :{" "}
              <span className="text-red-500 font-extrabold">{total}</span>
            </p>
          </div>
          <Link to={`/quiz/${q.id}`}>
            <div className="text-center btn border-0 hover:bg-yellow-600 px-4 py-3 bg-yellow-500 w-full rounded font-medium">
              Lets Start
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizOption;
