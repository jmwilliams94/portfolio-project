import React from "react";
import Portrait from "../images/Portrait.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#484f55] p-8">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-1 flex flex-col justify-center h-full">
        <p className="text-sky-300">Hi, my name is</p>
        <div className="md:grid md:grid-cols-2">
          <div>
            <h1 className="text-4xl sm:text-7xl font-bold text-white">
              Jordan Williams
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bolt text-sky-300 mx-auto">
              Front End Developer
            </h2>
          </div>
          <div>
            <img
              className="rounded-full shadow-lg max-w-[300px] max-h-[300px] m-auto mb-8 mt-8"
              src={Portrait}
              alt="..."
            />
          </div>
        </div>

        <p className="text-sky-300 py-4 max-w-[700px]">
          I am a Front End Developer seeking a front-end role using Javascript
          technologies. I have recently completed a boot camp through Academy
          Xi.
        </p>
      </div>
    </div>
  );
};

export default Home;
