import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quiz = () => {
  const { data } = useLoaderData();
  const { questions, name } = data;

  return (
    <div>
      <div className=" bg-gray-200 mx-auto py-4 text-center">
        <h1 className="text-3xl font-bold">
          Quiz Of : <span className="text-yellow-600">{name}</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2   bg-gray-100">
        {questions.map((q) => (
          <QuizDetails key={q.id} q={q}></QuizDetails>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
