import React from 'react'

export const Contact = () => {
  return (

    
    <div name='contact' className='w-full h-screen bg-[#024796] flex justify-center items-center p-4'>


<form action="https://formsubmit.co/mtelezing23@gmail.com" method="POST"  className = 'flex flex-col max-w-[600px] w-full'>
    <div className ='pb-8'>
    <h1 className= 'text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300'>Contact Me!</h1>
    </div>
    <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='bg-blue-500 hover:border-2 hover:bg-blue-700 text-white font-bold py-3 px-6 flex items-center my-2 justify-center'>Send Email
            
            </button>

</form>

</div>


  )
}
