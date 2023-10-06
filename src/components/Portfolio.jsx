import React from 'react'
import img from '../assests/images/projects/Usability.png'
import img1 from '../assests/images/projects/microsoft.png.png'
import img2 from '../assests/images/projects/movie app.png'
import img4 from '../assests/images/projects/Ecommerce.png'
import img5 from '../assests/images/projects/portfolio.png'
import img6 from '../assests/images/projects/psl.png'

const proj =[
  {
    src:img1,
    demo:'https://sherry699.github.io/html-tailwind-microsoft-clone/',
    code:'https://github.com/SHERRY699/html-tailwind-microsoft-clone',
  },
  {
    src:img,
    demo:'https://sherry699.github.io/Usability-hub-clone/',
    code:'https://github.com/SHERRY699/Usability-hub-clone',
  },
  {
    src:img2,
    demo:'https://sherry690.netlify.app/',
    code:'https://github.com/SHERRY699/Movie-App-Using-React-Js',
  },
  {
    src:img6,
    demo:'https://github.com/SHERRY699/Psl-Management-System',
    code:'https://github.com/SHERRY699/Psl-Management-System',
  },  {
    src:img4,
    demo:'https://sherryecom.netlify.app/',
    code:'https://github.com/SHERRY699/React-Js-E-Commerce-App',
  },
  {
    src:img5,
    demo:'https://sherry699.github.io/Porfolio-Tailwind/',
    code:'https://github.com/SHERRY699/Porfolio-Tailwind',
  }
]

function Portfolio() {
  return (
    <section id='Projects'>
      <div className="v  w-full bg-gradient-to-b from-black via-black to-gray-800 ">
    <div className="main lg:max-w-screen-lg ">
    <h1 className='text-white text-4xl inline-block  border-b-4 border-gray-500  lg:ml-[650px] ml-4'>Portfolio</h1>
    <p className='text-gray-500 text-2xl mt-1 lg:ml-[570px] px-4'>Check Some Of My Work</p>
    </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 sm:px-2 gap-8 max-w-screen-lg lg:ml-56">
   {proj.map((item=>(
      <div className="card w-full h-full flex flex-col bg-black hover:scale-105 duration-200 mt-2 shadow-md shadow-gray-600 rounded-lg ">
      <div className="im ">
          <img src={item.src} alt="img" className='rounded-md mt-2 ' width={300}   />
      </div>
      <div className="but flex justify-evenly">
          <a href={`${item.demo}`} className='text-yellow-100 px-4 py-2 border-2  hover:scale-105 duration-200 lg:mt-2'>Demo</a>
          <a href={`${item.code}`} className='text-yellow-100 px-4 py-2  border-2  hover:scale-105 duration-200 lg:mt-2'>Code</a>
      </div>
      

      
  </div>
   )))}
   
   </div>
   
   
   
   
   </div>
    </section>
  )
}

export default Portfolio;