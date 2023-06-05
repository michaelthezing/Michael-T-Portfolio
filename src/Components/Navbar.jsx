import React, {useState} from 'react'
import { FaGithub, FaLink, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll'
const Navbar = () => {
const[nav, setNav] = useState(false)

 

  return (
<div className ='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#024796] text-gray-300'>
    <div>
        <ul className = "flex">
            <li>
            <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li>  <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
       

            <li>  <Link to='contact' smooth={true} duration={500}>
            Contact Me
          </Link></li>
        </ul>
    </div>

<div className = 'hidden lg:flex fixed flex-col top-[30%] left-0'>
    <ul>
        <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold' href ='https://www.linkedin.com/in/michael-telezing-786914239/'>
                Linkedin <FaLinkedin size = {25}/>
            </a>
        </li>
        <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-red-500'>
            <Link to = 'contact' smooth={true} duration={500} className='flex justify-between items-center w-full text-gray-300 font-bold'>
                
                Gmail <HiOutlineMail size = {25}/>
            </Link>
        </li>
        <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-orange-500'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold ' href ='https://media.licdn.com/dms/document/media/D562DAQE0-C_0RTT7jw/profile-treasury-document-pdf-analyzed/0/1685947253837?e=1686787200&v=beta&t=GcGk8I6ORtCL5MMVIsRe2O1qFAbVcHTrbkdShKY8v1M'>
                Resume <BsFillPersonLinesFill size = {25}/>
            </a>
        </li>
        <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-yellow-500'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold' href ='https://github.com/michaelthezing'>
                Github <FaGithub size = {25}/>
            </a>
        </li>
    </ul>
</div>


   



</div>
    
    );
}

export default Navbar