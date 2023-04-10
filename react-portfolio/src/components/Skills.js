import React from 'react';
import HTML from '../assets/html5-logo.png';
import CSS from '../assets/css3-logo-crop.png';
import JS from '../assets/js-logo.png';
import SQL from '../assets/mysql-logo.png';
import Mongo from '../assets/mongoDBleaf.png';
import EXP from '../assets/EXlogo.png';
import ReactLogo from '../assets/ReactLogo.png';
import NodeLogo from '../assets/NodeLogo.png';

const Skills = () => {
    return (
        <div name='skills' className='bg-[#003049] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-5xl py-4 text-white font-bold inline border-b-4 border-[#d62828]'>My Skills</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-500'>
                    <img src={HTML} className='w-20 mx-auto' alt="HTML Logo" />
                    <p className='text-white my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img src={CSS} className='w-20 mx-auto' alt="CSS Logo" />
                    <p className='text-white my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img src={JS} className='w-20 mx-auto' alt="JS Logo" />
                    <p className='text-white my-4'>JavaScript</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img src={SQL} className='w-20 mx-auto' alt="MySQL Logo" />
                    <p className='text-white my-4'>MySQL</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img src={Mongo} className='w-20 mx-auto' alt="MongoDB Logo" />
                    <p className='text-white my-4'>MongoDB</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img src={EXP} className='w-20 mx-auto' alt="ExpressJS Logo" />
                    <p className='text-white my-4'>Express</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img src={ReactLogo} className='w-20 mx-auto' alt="React Logo" />
                    <p className='text-white my-4'>React</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img src={NodeLogo} className='w-20 mx-auto' alt="NodeJS Logo" />
                    <p className='text-white my-4'>NodeJS</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;