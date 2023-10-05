import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
function Socials() {
  return (
    <div className="hidden flex-col top-[35%] left-[0] lg:flex fixed gap-3 ">
  
       <a  href="https://www.linkedin.com/in/shehryar123/" className="linkedin text-white bg-gray-500 text-xl flex  h-14 w-34 px-4  justify-between  ml-[-100px] hover:ml-[-10px] mb-1">
          {" "}
          LinkedIn <AiFillLinkedin size={30} />

        </a>
       <a   href='https://github.com/SHERRY699' className="github   text-white bg-gray-500 text-xl  flex p-2  justify-between h-14 w-40 px-4  ml-[-100px] hover:ml-[-10px] mb-1 ">
          {" "}
          Github <AiFillGithub size={30} />               

        </a>
       <a href="https://www.facebook.com/Sherry031/" className="facebook  text-white bg-gray-500  p-2 flex  justify-between h-14 w-40 px-4  ml-[-100px] hover:ml-[-10px] mb-1">
          {" "}
          Facebook <AiFillFacebook size={30} />

        </a>
       
  
    </div>
  );
}

export default Socials;
