import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero";
import Contact from "./Contact/Contact";
import Section3 from "./Section3/Section3";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Section3></Section3>
      <Contact></Contact>
    </div>
  );
};

export default Home;
