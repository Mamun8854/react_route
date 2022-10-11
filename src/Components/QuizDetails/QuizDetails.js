import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React from "react";
import Swal from "sweetalert2";

const QuizDetails = ({ q }) => {
  const { question, correctAnswer, options } = q;
  const handleAnswer = (option, clicked) => {
    if (option === clicked) {
      Swal.fire("Good job!", "Correct Answer!", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Answer!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <div>
      <div className=" bg-white p-3 rounded-lg m-6">
        <div className="">
          <h1 className="text-base font-bold mb-6">{question}</h1>

          <div className="text-sm flex flex-col gap-5">
            {options.map((option) => (
              <div>
                <label className="form-check-label  justify-self-start items-center flex md:gap-5 gap-2 text-center">
                  <input
                    type="checkbox"
                    className="form-check-input flex-none  md:w-5 md:h-5"
                    onClick={() => handleAnswer(option, correctAnswer)}
                  />
                  <h1 className="flex-initial items-center md:w-96">
                    {" "}
                    {option}
                  </h1>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
