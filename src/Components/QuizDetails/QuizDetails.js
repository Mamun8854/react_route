import React from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const QuizDetails = ({ q }) => {
  const { question, correctAnswer, options } = q;

  const handleAnswer = (option, clicked) => {
    if (option === clicked) {
      Swal.fire("Great!", "Correct Answer!", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Answer!",
      });
    }
  };

  // see correct answer handler

  const seeCorrectAnswer = () => {
    Swal.fire(`${correctAnswer}`);
  };
  return (
    <div>
      <div className=" bg-white p-3 rounded-lg m-6">
        <div className="">
          <h1 className="text-base font-bold mb-6">{question}</h1>

          <div className="text-sm flex flex-col gap-5 p-6">
            {options.map((option, idx) => (
              <div key={idx}>
                <label className="form-check-label  justify-self-start items-start flex md:gap-5 gap-2 text-left">
                  <input
                    type="radio"
                    name="radio"
                    className="form-check-input flex-none  md:w-5 md:h-5"
                    onClick={() => handleAnswer(option, correctAnswer)}
                  />
                  <h1 className="flex-initial items-start md:w-96">
                    {" "}
                    {option}
                  </h1>
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={seeCorrectAnswer}
            className="bg-yellow-500 py-2 px-4 rounded font-semibold text-center"
          >
            <FontAwesomeIcon icon={faEye} />
            <span className="ml-2">See Correct Answer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
