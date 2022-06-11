import React from "react";
import Photo from "../images/Photo.JPG";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#484f55] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-sky-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Jordan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about learning Front End Development to create
              solutions and work on existing applications/websites for
              individuals and clients.{" "}
            </p>
          </div>
        </div>
        <div>
          <img
            className="mt-6 rounded-full shadow-lg max-w-[350px] max-h-[350px]"
            src={Photo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
