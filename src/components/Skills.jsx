import React from "react";
import img from "../assests/images/skills/icons8-html-96.png";
import img1 from "../assests/images/skills/TailwindCSS.png";
import img2 from "../assests/images/skills/bootstrap.png";
import img3 from "../assests/images/skills/css.png";
import img4 from "../assests/images/skills/github.png";
import img5  from "../assests/images/skills/javascript.png";
import img6 from "../assests/images/skills/python.png";
import img7 from "../assests/images/skills/sql.png";
import img8 from "../assests/images/skills/th.jpg";
import img9 from "../assests/images/skills/react.png";

const skills = [
  {
    name: "HTML",
    src: img,
    color: "shadow-orange-600",
  },
  {
    name: "BOOTSTRAP",
    src: img2,
    color: "shadow-purple-600",
  },
  {
    name: "CSS",
    src: img3,
    color: "shadow-blue-600",
  },
  {
    name: "React",
    src: img9,
    color: "shadow-blue-600",
  },
  {
    name: "DJANGO",
    src: img8,
    color: "shadow-green-600",
  },
  {
    name: "TAILWINDCSS",
    src: img1,
    color: "shadow-blue-600",
  },
  {
    name: "SQL",
    src: img7,
    color: "shadow-blue-400",
  },
  {
    name: "JAVASCRIPT",
    src: img5,
    color: "shadow-yellow-600",
  },
  {
    name: "GITHUB",
    src: img4,
    color: "shadow-white",
  },
  {
    name: "PYTHON",
    src: img6,
    color: "shadow-blue-400",
  },
];

function Skills() {
  return (
    <section id='skills'>
      <div className="d bg-gradient-to-b from-gray-800 to-black w-full h-full">
      <div className="  max-w-screen-lg  pt-10 lg:mt-0">
        <h1 className="text-white text-4xl inline-block  border-b-4 border-gray-500  lg:mt-4 lg:ml-[650px]  ml-4">
          Skills
        </h1>
        <p className="text-gray-500 text-2xl mt-1 lg:ml-[500px] px-4 lg:px-0">
          Technologies I Have Worked With
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 sm:px-2 gap-8  lg:ml-[350px] mt-20 ">
          {
            skills.map((items)=>(
              <div className={`card w-full h-full flex flex-col bg-black hover:scale-105 duration-200 mt-2  shadow-md ${items.color} rounded-lg items-center`}>
            <div className="im ">
              <img src={items.src} alt="img" className="rounded-md mt-2 w-[100px] " />
            </div>
            <div>
              <h3 className="text-white text-center font-bold">{items.name}</h3>
            </div>
          </div>
            ))
          }
        </div>
      </div>
      </div>
    </section>
  );
}

export default Skills;
