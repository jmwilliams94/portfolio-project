import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";

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
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-sky-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-sky-300">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="hover:text-sky-300">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-sky-300">
              <Link to="/contact">Contact</Link>
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
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-sky-300">
            <Link onClick={handleClick} to="/about">
              About
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-sky-300">
            <Link onClick={handleClick} to="/skills">
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-sky-300">
            <Link onClick={handleClick} to="/projects">
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-sky-300">
            <Link onClick={handleClick} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <Socials />
      </div>
    </>
  );
};

export default Navbar;
