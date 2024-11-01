import React from 'react';
import Banr from "../assets/ban1.png";


const Banner = () => {
  return (
    <div className='bg-[#000000] opacity-80 lg:py-20 py-3 px-2 lg:px-0'>
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2 lg:pt-10 fade-in">
            <h3 className='text-red-300 font-sans text-[16px] font-medium'>Your Trusted Agency</h3>
            <h2 className='text-white lg:text-[60px] text-[20px] font-bold font-sans'>Our Digital Agency With Excellence Services</h2>
            <p className='text-white text-[16px] font-normal font-sans lg:w-[400px] py-5'>The 3 golden rules professional Digital Marketing Agency don’t want you to know about.</p>
            <button className='px-10 lg:mt-5 py-3 text-white font-sans text-[16px] bg-red-400 rounded-full'>Discover More</button>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:mt-0 mt-5">
            <div className="lg:w-[550px] lg:h-[550px] w-[250px] h-[250px] rounded-full bg-gray-300 flex items-center justify-center zoom-in">
              <img src={Banr} alt="" className='lg:w-[400px] lg:h-[400px] h-[150px] w-[150px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
