import React, {useState} from 'react'
import {FaFacebook, FaGithub, FaLink, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Navbar = () => {
    const[nav, setNav] = useState(false)

 

  return (
<div className ='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#024796] text-gray-300'>
    <div>
        <ul className = "flex">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact Me</li>
        </ul>
    </div>

<div className = 'flex fixed flex-col top-[30%] left-0'>
    <ul>
        <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href ='https://www.linkedin.com/in/michael-telezing-786914239/'>
                Linkedin <FaLinkedin size = {25}/>
            </a>
        </li>
        <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-red-500'>
            <a className='flex justify-between items-center w-full text-gray-300' href =''>
                Gmail <HiOutlineMail size = {25}/>
            </a>
        </li>
        <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-orange-500'>
            <a className='flex justify-between items-center w-full text-gray-300' href =''>
                Resume <BsFillPersonLinesFill size = {25}/>
            </a>
        </li>
    </ul>
</div>


   



</div>
    
    );
}

export default Navbar