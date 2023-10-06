import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [hidden, sethidden] = useState(true);
  return (
    <section>
      <div className="nav bg-black w-full h-20 flex items-center justify-between px-4 md:fixed">
        <a href="#hero">
          <div className="name">
            <h1 className="font-signature text-white">SHERRY</h1>
          </div>
        </a>

        <div className="bars text-white md:hidden">
          <button
            onClick={() => {
              sethidden(!hidden);
            }}
          >
            {hidden ? <FaBars /> : <ImCross />}
          </button>
        </div>
        <div className="links hidden md:flex mr-6 ">
          <ul className="flex gap-10">
            <a
              href="#hero"
              className="text-gray-500 hover:scale-125 duration-200 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#Projects"
              className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
            >
              Contacts
            </a>
          </ul>
        </div>
      </div>
      <div
        className={`${
          hidden ? "hidden" : ""
        } mnav w-screen h-screen bg-gray-200`}
      >
        <ul className="  flex flex-col gap-10 items-center justify-center pt-10 text-xl  text-gray-900">
          <button
            onClick={() => {
              sethidden(!hidden);
            }}
          >
            {" "}
            <a
              href="#hero"
              className="text-gray-500 hover:scale-125 duration-200 cursor-pointer"
            >
              Home
            </a>{" "}
          </button>

          <button
            onClick={() => {
              sethidden(!hidden);
            }}
          >
            {" "}
            <a
              href="#about"
              className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
            >
              About
            </a>{" "}
          </button>

          <button
            onClick={() => {
              sethidden(!hidden);
            }}
          >
            {" "}
            <a
              href="#skills"
              className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
            >
              Skills
            </a>{" "}
          </button>
          <button
            onClick={() => {
              sethidden(!hidden);
            }}
          >
            {" "}
            <a
              href="#Projects"
              className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
            >
              Projects
            </a>{" "}
          </button>
          <button
            onClick={() => {
              sethidden(!hidden);
            }}
          >
            {" "}
            <a
              href="#Contact"
              className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
            >
              Contacts
            </a>{" "}
          </button>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
