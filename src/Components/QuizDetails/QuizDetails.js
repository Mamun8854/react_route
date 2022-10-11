import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React from "react";

const QuizDetails = ({ q }) => {
  const { name, question, correctAnswer, options } = q;

  console.log(q);
  return (
    <div className=" bg-white p-3 rounded-lg m-6">
      <div className="">
        <h1 className="text-base font-bold mb-6">{question}</h1>

        {/* <p className="mr-4">{options}</p> */}
        <div className="text-sm flex flex-col gap-5">
          {options.map((option) => (
            // <p className="font-semibold mt-2">{option}</p>
            <div>
              <label className="form-check-label  justify-self-start items-center flex md:gap-5 gap-2 text-center">
                <input
                
                  type="checkbox"
                  className="form-check-input flex-none  md:w-5 md:h-5"
                />
                <h1 className="flex-initial items-center md:w-96"> {option}</h1>
              </label>
              {/* <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                >
                  <FormControlLabel
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                </RadioGroup>
              </FormControl> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
