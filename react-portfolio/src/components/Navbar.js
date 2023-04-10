import React, { useState } from 'react';
import BG from '../assets/B.png';
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#003049] text-white">
            <div>
                <img src={BG} alt="BG Logo" style={{width: '80px'}} />
            </div>
            <div>
                <ul className="hidden md:flex">
                    <li className='hover:text-[#d62828] duration-100'>
                        <Link to='home' smooth={true} duration={400}>
                            Home
                        </Link>
                    </li>
                    <li className='hover:text-[#d62828] duration-100'>
                        <Link to='about' smooth={true} duration={400}>
                            About
                        </Link>
                    </li>
                    <li className='hover:text-[#d62828] duration-100'>
                        <Link to='skills' smooth={true} duration={400}>
                            Skills
                        </Link>
                    </li>
                    <li className='hover:text-[#d62828] duration-100'>
                        <Link to='projects' smooth={true} duration={400}>
                            Projects
                        </Link>
                    </li>
                    <li className='hover:text-[#d62828] duration-100'>
                        <Link to='contact' smooth={true} duration={400}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div onClick={handleClick} className='md:hidden z-40'>
                    <FiMenu />
                </div>

                {/* Mobile Only Nav */}
                <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#003049] flex flex-col justify-center items-center"}>
                    <li className='py-5 text-4xl'>Home</li>
                    <li className='py-5 text-4xl'>About</li>
                    <li className='py-5 text-4xl'>Skills</li>
                    <li className='py-5 text-4xl'>Projects</li>
                    <li className='py-5 text-4xl'>Contact</li>
                </ul>
            </div>
        </div>
      );
}

export default Navbar;