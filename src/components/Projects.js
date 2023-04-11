import React from 'react';
import { data } from "../data/projects.js";
import WMC from "../assets/WMCpic.png"

const Projects = () => {

    const projects = data;

    return (
        <div name="projects" className="bg-[#003049] flex flex-col items-center p-4 w-full md:h-screen">
            <div className="mb-2 mt-12 text-center">
               <h1 className='text-5xl py-1 text-white font-bold inline border-b-4 border-[#d62828]'>Projects</h1>
               <p className='text-lg text-white py-6'>
                Take a look at my projects
               </p>
            </div>
            {/* Project Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px0">
                {projects.map((item, index) => (
                <div className="shadow-md shadow-black rounded-lg">
                    <img src={item.img} alt="My Projects" className="rounded-lg hover:scale-110 duration-500"/>
                    <div className="flex items-center justify-center">
                        <a href={item.live}> 
                        <button className="w1/2 px-6 py-3 m-4 hover:scale-110 duration-500 text-white border-b-2 border-[#d62828]">Live</button>
                        </a>
                        <a href={item.github}>
                        <button className="w1/2 px-6 py-3 m-4 hover:scale-110 duration-500 text-white border-b-2 border-[#d62828]">GitLink</button>
                        </a>
                    </div>
                </div>
                ))}
            </div>

        </div>
    )
}

export default Projects;