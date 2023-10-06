import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook} from "react-icons/ai";
function Contact() {
  return (
    <section
      id="Contact"
      className="w-full h-full bg-gradient-to-b from-black via black to-gray-800 pt-10 md:mt-0 md:pt-20"
    >
      <div className="main flex flex-col max-w-screen-lg ">
        <div className="p">
          <h1 className="text-white text-4xl inline-block  border-b-4 border-gray-500  lg:ml-[650px] ml-4">
            Contact
          </h1>
          <p className="text-gray-500 text-xl mt-1 lg:ml-[570px] px-4 lg:px-0 ">
            Submit The Form To Get in Touch with me
          </p>
        </div>
        <div className="f  flex flex-col items-center justify-center w-full">
          <form action="https://getform.io/f/a4b27860-4a31-4213-beec-6bba38a57b37" method="POST" className="flex flex-col   lg:ml-[480px]">
            <input
              type="text"
              className="p-2 my-4 bg-transparent border-2 rounded-md
                text-white focus:outline-none"
                placeholder="Enter Your Name"
                name="name"
            />
            <input
              type="email"
              className="p-2 my-4 bg-transparent border-2 rounded-md
                text-white focus:outline-none"
                placeholder="Enter Your Email"
                name="email"
            />
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              className="p-2 my-4 bg-transparent border-2 rounded-md
                text-white focus:outline-none"
                placeholder="Enter Your Message"
                
            />
            <div className="b">
            <button className="group text-white px-6 py-3 flex items-center   bg-gradient-to-r from-cyan-500 to to-blue-500">
              Let's Talk
              <span className="text-white ml-2 group-hover:rotate-90 duration-200">
                <BiSolidRightArrow />
              </span>{" "}
            </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mlinks w-full bg-gradient-to-b from-gray-800 to-black sm:hidden flex items-center justify-center gap-10 pt-6 ">
      <a  href="https://www.linkedin.com/in/shehryar123/"  className="text-white">
          {" "}
         <AiFillLinkedin size={30} />

        </a>
       <a   href='https://github.com/SHERRY699' className="text-white" >
          {" "}
          <AiFillGithub size={30} />               

        </a>
       <a href="https://www.facebook.com/Sherry031/"  className="text-white" >
         <AiFillFacebook size={30} />

        </a>
        
     

      </div>
    </section>
  );
}

export default Contact;
