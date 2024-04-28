import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play_icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptates alias voluptate quisquam, ex maxime non laboriosam
          temporibus debitis deserunt culpa odit? Quam, iure quo excepturi esse
          nostrum quia laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ad
          officiis accusantium dolore cumque quae aliquam. Eos atque numquam quo
          ratione ea vitae, fugiat excepturi consequuntur, officia molestias ex
          ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sit
          dolorem nihil minima ab tempora ipsa tenetur nisi repudiandae eos quas
          eveniet architecto, asperiores, maxime laudantium nemo voluptate.
          Deserunt, unde.
        </p>
      </div>
    </div>
  );
};

export default About;
