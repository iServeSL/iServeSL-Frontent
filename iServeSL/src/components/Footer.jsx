import React from 'react';
import {
  FaGithub,
  FaInstagram ,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';
import Logo from '../assets/iServeSL.png';

const Footer = () => {
  return (
    <>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <div className="flex justify-start items-center">
            <img className='w-[100px] my-4' src={ Logo } alt="Logo"/>
            <h1 className='text-3xl font-bold text-[#ff7300]'>iServeSL</h1>
          </div>
          <p className='py-4'>
            Seamlessly connect with essential government services 
            through our centralized G2C platform and experience 
            a future where accessing services is effortless, efficient, 
            and intelligent with iServeSL.
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
              <a href="https://www.facebook.com/sachinakash.katuwawala" className='hover:text-blue-500 transition-colors duration-300'><FaLinkedinIn size={30} /></a>
              <a href="https://www.instagram.com/sachinakash_/" className='hover:text-pink-500 transition-colors duration-300'><FaInstagram size={30} /></a>
              <a href="https://twitter.com/SachinAkash_" className='hover:text-blue-500 transition-colors duration-300'><FaTwitter size={30} /></a>
              <a href="https://github.com/SachinAkash01" className='hover:text-gray-700 transition-colors duration-300'><FaGithub size={30} /></a>
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-center mt-6'>
          <div className="mx-20">
              <h6 className='font-medium text-gray-400'>Services</h6>
              <ul>
                  <li className='py-2 text-sm text-white'>G2C</li>
                  <li className='py-2 text-sm text-white'>Digital Applications</li>
                  <li className='py-2 text-sm text-white'>Real-time Updates</li>
                  <li className='py-2 text-sm text-white'>Feedback</li>
                  <li className='py-2 text-sm text-white'>Security</li>
              </ul>
          </div>
          <div className="mx-20">
              <h6 className='font-medium text-gray-400'>Support</h6>
              <ul>
                  <li className='py-2 text-sm text-white'>Customer Support</li>
                  <li className='py-2 text-sm text-white'>Documentation</li>
                  <li className='py-2 text-sm text-white'>Guides</li>
              </ul>
          </div>
          <div className="mx-20">
              <h6 className='font-medium text-gray-400'>iServeSL</h6>
              <ul>
                  <li className='py-2 text-sm hoverEffect text-white'>Home</li>
                  <li className='py-2 text-sm hoverEffect text-white'>About</li>
                  <li className='py-2 text-sm hoverEffect text-white'>Register</li>
                  <li className='py-2 text-sm hoverEffect text-white'>Account</li>
              </ul>
          </div>
        </div>

      </div>
      <div className='bg-[#3B3528] max-w-[100%] mx-auto py-2 px-4 grid text-gray-300 justify-center'>
        <p>Copyright ©2024 Sachin Akash, All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
