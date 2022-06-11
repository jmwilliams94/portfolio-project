import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Socials from "../components/Socials";

// import Logo from "../src/images/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
        <div>
          <p className="text-sky-300 text-2xl">JW</p>
        </div>
        {/* Navbar Menu */}
        <div className="hidden md:flex">
          <ul className="md:flex">
            <li className="hover:text-sky-300">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-sky-300">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-sky-300">
              <a href="/skills">Skills</a>
            </li>
            <li className="hover:text-sky-300">
              <a href="/projects">Projects</a>
            </li>
            <li className="hover:text-sky-300">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl hover:text-sky-300">
            <a href="/">Home</a>
          </li>
          <li className="py-6 text-4xl hover:text-sky-300">
            <a href="/about">About</a>
          </li>
          <li className="py-6 text-4xl hover:text-sky-300">
            <a href="/skills">Skills</a>
          </li>
          <li className="py-6 text-4xl hover:text-sky-300">
            <a href="/projects">Projects</a>
          </li>
          <li className="py-6 text-4xl hover:text-sky-300">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <Socials />
      </div>
    </>
  );
};

export default Navbar;
