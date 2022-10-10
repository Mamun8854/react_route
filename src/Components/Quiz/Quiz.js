import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quiz = () => {
  const { data } = useLoaderData();
  const { questions } = data;

  //   const { quizId } = useParams();
  //   const [datas, setData] = useState();
  //   useEffect(() => {
  //     fetch(`https://openapi.programming-hero.com/api/quiz/${quizId}`)
  //       .then((res) => res.json())
  //       .then((result) => setData(result));
  //   }, [quizId]);
  return (
    <div className="grid md:grid-cols-2   bg-gray-100">
      {questions.map((q) => (
        <QuizDetails key={q.id} q={q}></QuizDetails>
      ))}
    </div>
  );
};

export default Quiz;
