import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import QuizOption from "../../QuizOption/QuizOption";
import Img from "../ImageSVG.svg";

const Hero = () => {
  const quiz = useLoaderData();
  const { data } = quiz;
  return (
    <section className="bg-gray-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="md:flex md:justify-between  w-11/12 mx-auto my-24">
          <div className="md:w-5/12 md:text-left text-center ">
            <h1
              style={{ lineHeight: "60px" }}
              className="lg:text-4xl text-3xl font-extrabold mb-6 pt-16 "
            >
              Easy and <span className="text-yellow-300">intuitive</span> online
              testing<span className="text-yellow-300">.</span>
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
            <img style={{ height: "300px", width: "400px" }} src={Img} alt="" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-5 mb-40">
          {data.map((q) => (
            <QuizOption key={q.id} q={q}></QuizOption>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
