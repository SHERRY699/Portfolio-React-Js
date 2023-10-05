import React from "react";
import img from "../assests/images/hero.jpeg";
import { TypeAnimation } from 'react-type-animation';
import { BiSolidRightArrow } from "react-icons/bi";
import res from '../assests/images/resume.pdf'

function Hero() {
  return (
    <section id='hero'>
      <div className="hero  w-full  h-screen bg-gradient-to-b from-black via-black to-gray-800 lg:pt-[50px] ">
        <div className="di  lg:max-w-screen-lg w-screen h-screen  mx-auto px-6 md:py-6 flex flex-col md:flex-row md:items-center md:justify-center ">
          <div className="content  flex flex-col max-w-screen-lg items-center  gap-4">
            <h1 className="text-white font-bold text-2xl mt-6 md:text-7xl">
              I Am A   <TypeAnimation
      sequence={[
        
        'FrontEnd Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'BackEnd Developer',
        2000,
        'React Developer',
        2000,
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />

            </h1>
            <p className="text-gray-500 mt-2 font-bold">
            I am a Full-Stack developer based in Karachi,Pakistan. I am very passionate about improving my coding skills & developing applications & websites. Working for myself to improve my skills. Love to build Full-Stack clones.
            </p>
            <a  href={res} download='Resume' className="group text-white px-6 py-3 flex items-center lg:mr-[430px]  bg-gradient-to-r from-cyan-500 to to-blue-500">
              Resume{" "}
              <span className="text-white ml-2 group-hover:rotate-90 duration-200">
                <BiSolidRightArrow />
              </span>{" "}
            </a>
          </div>
          <div className="img ml-10 mt-2 lg:w-full">
            <img
              src={img}
              alt=""
              className="w-[300px]  h-[400px] lg:h-[500px]   lg:rounded-md"
            />
          </div>
        </div>
      </div>

     
    </section>
  );
}

export default Hero;