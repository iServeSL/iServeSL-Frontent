import React from 'react';
import { ReactTyped } from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#ff7300] font-bold p-2'>
          STREAMLINING GOVERNANCE, EMPOWERING CITIZENS
        </p>
        <h1 className='md:text-6.5xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with e-Governance.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible access for
          </p>
          <ReactTyped
          className='md:text-4xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
            strings={['services', 'customer support']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Seamlessly connect with essential government services through our centralized G2C platform.</p>
        <button className='btnHoverEffect bg-[#ff7300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
