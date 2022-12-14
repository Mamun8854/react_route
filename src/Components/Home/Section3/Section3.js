import React from "react";
import Lottie from "lottie-react";
import Image from "./coding.json";
import { FaReact, FaJsSquare, FaCss3, FaGitSquare } from "react-icons/fa";
const Section3 = () => {
  return (
    <section className="bg-gray-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h2 className="text-4xl text-center font-bold text-yellow-400 pb-20">
          Learn About Quiz Topics
        </h2>
        <div className=" dark:text-gray-100 rounded-xl">
          <div className="container flex flex-col-reverse justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left gap-y-4 font-semibold text-gray-500">
              <div className="flex items-center justify-center gap-x-6">
                <FaReact className="h-[120px] w-[120px]  text-yellow-400"></FaReact>
                <p>
                  React is a free and open-source front-end JavaScript library
                  for building user interfaces based on UI components.
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-6">
                <FaJsSquare className="h-[120px] w-[120px] text-yellow-400"></FaJsSquare>
                <p>
                  JavaScript, often abbreviated as JS, is a programming language
                  that is one of the core technologies of the World Wide Web,
                  alongside HTML and CSS.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <Lottie
                style={{ height: "500px", width: "500px" }}
                animationData={Image}
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
