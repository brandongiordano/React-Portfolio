import React, { useState } from "react";
import ME from "../assets/classPic.jpeg";

const About = () => {
    return (
        <div name="about" className="bg-[#003049] mx-auto p-4 flex px-10 flex-col justify-center w-full h-full">
            <div className="w-full md:w-1/2">
            <h1 className="text-5xl py-1 text-white font-bold inline border-b-4 border-[#d62828]" id="about-title">
              About Me
            </h1>
            <div className='w-full pt-10 grid grid-cols-2 gap-3 justify-around'>
                <img src={ME} className='rounded-lg' alt="My Jiu Jitsu class" />
                <p className="mb-8 py-8 text-[white]" id="about-content">
              I'm a Full Stack Web Developer based in Rockledge, Florida. I was originally born in Queens, NY but moved down to the sunshine state with my family in 2009. I have completed
              two college degrees such as an Associates in Arts as well as an
              Associates in Science from Eastern Florida State College. I have a
              passion for science and technolgy and would love to one day work
              on or develop products and applications that make people's lives
              easier. My prior work experience is in retail and customer service
              but I'm eager to learn and grow in tech. My favourite hobby is
              teaching and training Jiu Jitsu and MMA but I'm also a
              huge gamer and love movies.
                </p>
            </div>
            </div>
        </div>
    )
}

export default About;

