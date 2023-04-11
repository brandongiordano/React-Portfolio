import React from 'react';
import {
     FaGithub,
     FaLinkedin,
     FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="flex py-4">
        <div className="container mx-auto flex justify-center">
          <div className="col-12 text-center">
            <ul className="list-inline social-media flex">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/brandon-giordano-0795b3255/"><FaLinkedin size={60} /></a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/brandongiordano"><FaGithub size={60} /></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/brandon.giordano.jitz/"><FaInstagram size={60} /></a>
              </li>
            </ul>
            <p className="mt-2">Copyright &copy; 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;