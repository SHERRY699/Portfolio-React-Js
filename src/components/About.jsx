import React from "react";

function About() {
  return (
    <section id="about">
      <div className="w-full h-screen  flex flex-col items-center bg-gradient-to-b from-gray-800 to-black">
        <div className="about ">
          <h1 className="text-white text-5xl border-b-4 border-gray-500 font-bold">
            About Me
          </h1>
        </div>
        <div className="d mt-6 text-gray-500 lg:px-28 ">
        <h1 className="text-white text-3xl border-b-4 border-gray-500 font-bold inline-block hover:scale-105 duration-200">
           Hi I Am Shehryar Nasir
          </h1>
          <p className="pt-20 lg:text-xl">
            I am a budding web developer residing in Karachi, Pakistan.
            Currently, I'm pursuing my 5th semester of Computer Science at NED
            University. My journey in the world of web development began with a
            deep passion for creating websites that can captivate users. I've
            been eagerly learning the fundamentals of web development, including
            HTML, CSS, and JavaScript. My ultimate goal is to excel in this
            field and contribute to the digital landscape with innovative and
            user-friendly websites. NED University is providing me with a strong
            foundation, and I am determined to realize my dream of becoming a
            skilled web developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
