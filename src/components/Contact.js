import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className="bg-[#003049] mx-auto p-10 flex flex-col justify-center w-full h-screen">
            <div className='flex flex-col p-4 justify-center'>
                <div className='pb-8'>
                    <p className='text-5xl py-1 text-white font-bold inline border-b-4 border-[#d62828]'>Contact Me</p>
                </div>
                <div className='flex justify-center items-center my-2'>
                    <form method='POST' action='https://getform.io/f/764c5151-de8a-4770-a5ca-5f2d09bf5195' className='flex flex-col w-full md:w-1/2'>
                        <input 
                        type="text" 
                        className="p2 rounded-sm focus:outline-none my-2" 
                        name="name" 
                        placeholder='Enter your name'
                        required
                        />
                        <input 
                        type="text" 
                        className="p2 rounded-sm focus:outline-none my-2" 
                        name="email" 
                        placeholder='Enter your email'
                        required
                        />
                        <textarea name="message" placeholder="Leave a message" className='p-2 rounded-sm focus:outline-none my-2' rows="10" required/>
                        <button className="shadow-md shadow-black rounded-md text-white font-bold py-2 px-4 hover:scale-110 duration-100 mx-auto">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;