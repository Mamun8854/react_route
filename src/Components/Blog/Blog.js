import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-100 p-12 grid md:grid-cols-3 gap-6  mb-12">
      <div className=" bg-white rounded flex flex-col float-left p-6 gap-4 h-80">
        <h1 className="text-xl font-bold">
          What is the <span className="text-yellow-500">purpose of React</span>{" "}
          ?
        </h1>
        <p className="text-sm text-gray-600">
          React is a JavaScript library developed by Facebook which, among other
          things, was used to build Instagram.com. Its aim is to allow
          developers to easily create fast user interfaces for websites and
          applications alike. The main concept of React. js is virtual DOM.
        </p>
        <button className="bg-yellow-400 font-semibold rounded-md py-2 px-5 ">
          Read More
        </button>
      </div>
      <div className=" bg-white rounded flex flex-col float-left p-6 gap-4">
        <h1 className="text-2xl font-bold">
          what is <span className="font-bold text-yellow-500">useRef</span> in
          react?
        </h1>
        <p className="text-sm text-gray-600">
          Essentially, useRef is like a "box" that can hold a mutable value in
          its .current property. If you pass a ref object React will set its
          .current property to the corresponding DOM node whenever that node
          changes.
        </p>
        <button className="bg-yellow-400 font-semibold rounded-md py-2 px-5 ">
          Read More
        </button>
      </div>
      <div className=" bg-white rounded flex flex-col float-left p-6 gap-4">
        <h1 className="text-2xl font-bold">
          How does <span className="text-yellow-500">Context API works</span> ?
        </h1>
        <p className="text-sm text-gray-600">
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.This is the
          alternative to "prop drilling" or moving props from grandparent to
          child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux.
        </p>
        <button className="bg-yellow-400 font-semibold rounded-md py-2 px-5 ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
