import React from "react";
import { useState } from "react";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [text, setText] = useState("");

  // const handleSubmit = (event) => {
  //   console.log("handleSubmit ran");
  //   event.preventDefault(); // 👈️ prevent page refresh

  //   // 👇️ clear all input values in the form
  //   setName("");
  //   setEmail("");
  //   setText("");
  // };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#484f55] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9cb7770d-50e9-4baa-af1f-0e3ab16af2ae"
        className="flex flex-col max-w-[600px] w-full"
        // onSubmit={handleSubmit}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-300 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an e-mail -{" "}
            <a
              className="text-sky-300 hover:text-white"
              href="mailto:jmwilliams94@icloud.com"
            >
              jmwilliams94@icloud.com
            </a>
          </p>
        </div>
        <input
          className="bg-gray-300 p-2 rounded hover:border-sky-400 border-2"
          type="text"
          required
          placeholder="Name"
          name="name"
          // value={name}
          // onChange={(e) => {
          //   setName(e.target.value);
          // }}
        />
        <input
          className="my-4 p-2 bg-gray-300 rounded hover:border-sky-300 border-2"
          type="email"
          required
          placeholder="E-mail"
          name="email"
          // value={email}
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
        />
        <textarea
          className="bg-gray-300 rounded p-2 hover:border-sky-300 border-2"
          name="message"
          required
          rows="10"
          placeholder="Message"
          // onChange={(e) => {
          //   setText(e.target.value);
          // }}
          // value={text}
        ></textarea>
        <button
          type="submit"
          className="text-white hover:bg-sky-300 hover:border-sky-300 border-2 px-4 py-3 my-8 mx-auto items rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
