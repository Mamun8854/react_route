import React, { createContext } from "react";
import { Link } from "react-router-dom";

const QuizOption = ({ q }) => {
  const { logo, name, total } = q;
  // console.log(q);
  return (
    <div>
      <div className="bg-gray-100 rounded-md relative">
        <img className="w-full" src={logo} alt="" />
        <div className="m-4">
          <div className="flex justify-between mb-20 ">
            <p>
              Quiz Topic : <span className="font-extrabold">{name}</span>
            </p>
            <p>
              Total Quiz :{" "}
              <span className="text-red-500 font-medium">{total}</span>
            </p>
          </div>
          <div className="absolute bottom-0 right-0 mt-4 w-full bg-slate-400 text-center font-semibold py-2 rounded">
            <Link to={`/quiz/${q.id}`}>
              <button className="">Lets Try</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizOption;
