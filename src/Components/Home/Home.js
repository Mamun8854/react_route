import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import QuizOption from "../QuizOption/QuizOption";
import img from "./ImageSVG.svg";
import "./Home.css";

const Home = () => {
  const quiz = useLoaderData();
  const { data } = quiz;
  //   console.log(data);
  return (
    <div>
      <section className="md:flex md:justify-between  w-11/12 mx-auto my-24">
        <div className="md:w-5/12 md:text-left text-center ">
          <h1
            style={{ lineHeight: "60px" }}
            className="text-5xl font-extrabold mb-6 pt-16 "
          >
            Easy and <span className="text-yellow-400">intuitive</span> online
            testing<span className="text-yellow-400">.</span>
          </h1>
          <p className="text-xl text-gray-500">
            This is a cloud-testing platform that supports online creation and
            delivery of feature-rich tests.
          </p>
          <Link>
            <button className="bg-yellow-400 px-12 text-base font-bold py-4 rounded-full mt-20 ">
              Start Practice
            </button>
          </Link>
        </div>
        <div className="mt-10 md:mt-0">
          <img style={{ height: "400", width: "400" }} src={img} alt="" />
        </div>
      </section>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-5 mb-40">
        {data.map((q) => (
          <QuizOption key={q.id} q={q}></QuizOption>
        ))}
      </div>
    </div>
  );
};

export default Home;
