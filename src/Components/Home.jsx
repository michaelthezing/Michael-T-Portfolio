import React from 'react'
import  {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name = 'home' className = "w-full h-screen bg-[#024796] ">
        

        <div className='max-w-[1000px]  mx-auto px-8 pr-3 flex flex-col justify-center h-full '>
            <p className=' text-[#ffffff] text-7xl font-bold pb-2'> Michael Telezing</p>
            <h1 className='text-7xl font-bold text-[#ffffff]'>Full Stack Developer</h1>
            <p className='text-[#c2d0ff] py-4 max-w-[800px]'>As a dedicated student at UCLA majoring in computer science, I have honed my skills as a versatile full-stack developer. With expertise in technologies such as React.js, Firebase, C++, Tailwind CSS, JavaScript, and Python, I thrive in creating robust and efficient web applications. My passion for coding, combined with my ability to adapt and learn quickly, drives me to deliver innovative solutions and contribute to the ever-evolving world of software development.</p>
            <div>
            <button class="group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500   text-white">
                <a href = "https://github.com/michaelthezing">
                View Github 
                </a>
                
            </button>
            </div>
           
        </div>
      
        
    </div>
  ) 
}

export default Home