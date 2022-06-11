import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  return (
    <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/jordan-williams-a9850b233/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/jmwilliams94"
            target="_blank"
            rel="noreferrer"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#207b67]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="mailto:jmwilliams94@icloud.com"
          >
            E-mail <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.youtube.com/watch?v=BBJa32lCaaY"
            target="_blank"
            rel="noreferrer"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
