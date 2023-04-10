import React from 'react';
import BG from '../assets/B.png'

const Navbar = () => {
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#003049] text-white">
            <div>
                <img src={BG} alt="BG Logo" style={{width: '80px'}} />
            </div>
            <div>
                <ul className="flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
      );
}

export default Navbar;