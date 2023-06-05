import React from 'react'
import html from  '../assets/html.png'
import firebase from '../assets/firebase.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import cplusplus from '../assets/c++.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/Python-logo-notext.svg.png'
const Skills = () => {
  return (
    <div name = 'skills' className='bg-[#024796]  text-gray-300 h-screen w-full' >
        <div className='h-full mx-auto max-w-[1000px] p-4 justify-center flex-col w-full'>
            <div>
            <h1 className='text-4xl font-bold inline border-b-4 pb-1  border-blue-500'>Technologies</h1>  
            </div>
    

        <div className='w-full gap-4 text-center py-10 grid grid-cols-2 sm:grid-cols-4'  >
            <div className='hover:scale-110 duration-300 shadow-md shadow-slate-800 pt-2'>
                <img className='mx-auto w-20' src = {cplusplus}/>
                <p className='my-3 font-bold'>C++</p>
            </div>
            <div className='hover:scale-110 duration-300 shadow-md shadow-slate-800 pt-2'>
                <img className='mx-auto w-20' src = {html}/>
                <p className='my-3 font-bold'>HTML</p>
            </div>
            <div className='hover:scale-110 duration-300 shadow-md shadow-slate-800 pt-2'>
                <img className='mx-auto w-20' src = {github}/>
                <p className='my-3 font-bold'>GitHub</p>
            </div>
            <div className='hover:scale-110 duration-300 shadow-md shadow-slate-800'>
                <img className='mx-auto w-20' src = {javascript}/>
                <p className='my-3 font-bold'>JavaScript</p>
            </div>
            <div className='hover:scale-110 duration-300 shadow-md shadow-slate-800'>
                <img className='mx-auto w-20' src = {react}/>
                <p className='my-3 font-bold'>React</p>
            </div>
            <div className='hover:scale-110 duration-300 shadow-md shadow-slate-800'>
                <img className='mx-auto w-20' src = {tailwind}/>
                <p className='my-3 font-bold'>Tailwind CSS</p>
            </div>
            <div className='hover:scale-110 duration-300 shadow-md shadow-slate-800'>
                <img className='mx-auto w-20' src = {firebase}/>
                <p className='my-3 font-bold'>Firebase</p>
            </div>
            <div className='hover:scale-110 duration-300 shadow-md shadow-slate-800'>
                <img className='mx-auto w-20' src = {python}/>
                <p className='my-3 font-bold'>Python</p>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Skills