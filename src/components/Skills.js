import React from "react";
import html from "../images/html.png";
import javascript from "../images/javascript.png";
import css from "../images/css.png";
import react from "../images/react.png";
import github from "../images/github.png";
import tailwind from "../images/tailwind.png";
import node from "../images/node.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="mt-4 w-full h-screen bg-[#484f55] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-sky-400">
            Experience
          </p>
          <p className="py-4">
            // These are the technologies I've worked with...{" "}
          </p>
        </div>

        {/* Icon Container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML Icon" />
            <p className="py-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="CSS Icon" />
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="JS Icon" />
            <p className="py-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="React Icon" />
            <p className="py-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="Node Icon" />
            <p className="py-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="Tailwind Icon" />
            <p className="py-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="Github Icon" />
            <p className="py-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
