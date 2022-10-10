import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quiz = useLoaderData();
  const { data } = quiz;
  //   console.log(data);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto mt-5">
        {data.map((q) => (
          <Quiz key={q.id} q={q}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
