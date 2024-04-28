import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What we Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photo" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Students Says" />
      </div>
    </div>
  );
};

export default App;
