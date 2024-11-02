import React from "react";
import { CiUser } from "react-icons/ci";
import { FaCommentsDollar } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import Blg from "../assets/blog.png"


const Blog = () => {
  return (
    <div className="lg:py-28 py-3 lg:px-0 px-2 bg-[#F4F4FF]">
      <div className="container mx-auto">
        <h3 className="text-red-500 font-sans lg:text-[20px] text-[16px] font-medium text-center items-center">
          Our Blog
        </h3>
        <h2 className="text-black lg:text-[40px] text-center text-[20px] font-bold font-sans">
          Latest Blogs & Articles
        </h2>
        <div className="lg:flex justify-between gap-x-5 lg:mt-20 mt-3">
            <div className="lg:w-1/3 w-full bg-[#FFF] rounded-xl shadow-xl">
                <div className="bg-gray-500 rounded-xl group">
                    <img src={Blg} alt="" className="lg:h-[300px] h-[200px]"/>
                    <button className='px-10 lg:mt-5 py-3 text-white font-sans text-[18px] bg-red-400 rounded-r-full opacity-0 group-hover:opacity-100 duration-500 ease-in-out'>Digital Agency</button>
                </div>
                <div className="px-5 flex justify-between py-5">
                    <p className="flex gap-x-2 items-center font-sans text-[18px]"><CiUser className="font-sans text-[20px]"/>by Admin</p>
                    <p className="flex gap-x-2 items-center font-sans text-[18px]"><FaCommentsDollar className="font-sans text-[20px]"/>22</p>
                    <p className="flex gap-x-2 items-center font-sans text-[18px]"><GoEye className="font-sans text-[20px]"/>120 Views</p>
                </div>
                <h3 className="text-black lg:text-[20px] text-[16px] font-bold font-sans hover:text-blue-600 duration-300 ease-in-out px-5 py-2 cursor-pointer">Successful business partner have
                a meeting and discussing</h3>
            </div>
            <div className="lg:w-1/3 w-full my-5 lg:my-0 bg-[#FFF] rounded-xl shadow-xl">
                <div className="bg-gray-500 rounded-xl group">
                    <img src={Blg} alt="" className="lg:h-[300px] h-[200px]"/>
                    <button className='px-10 lg:mt-5 py-3 text-white font-sans text-[18px] bg-red-400 rounded-r-full opacity-0 group-hover:opacity-100 duration-500 ease-in-out'>Marketing Agency</button>
                </div>
                <div className="px-5 flex justify-between py-5">
                    <p className="flex gap-x-2 items-center font-sans text-[18px]"><CiUser className="font-sans text-[20px]"/>by Admin</p>
                    <p className="flex gap-x-2 items-center font-sans text-[18px]"><FaCommentsDollar className="font-sans text-[20px]"/>22</p>
                    <p className="flex gap-x-2 items-center font-sans text-[18px]"><GoEye className="font-sans text-[20px]"/>120 Views</p>
                </div>
                <h3 className="text-black lg:text-[20px] text-[16px] font-bold font-sans hover:text-blue-600 duration-300 ease-in-out px-5 py-2 cursor-pointer">Motivated colleagues celebrating
                corporate success together</h3>
            </div>
            <div className="lg:w-1/3 w-full bg-[#FFF] rounded-xl shadow-xl">
                <div className="bg-gray-500 rounded-xl group">
                    <img src={Blg} alt="" className="lg:h-[300px] h-[200px]"/>
                    <button className='px-10 lg:mt-5 py-3 text-white font-sans text-[18px] bg-red-400 rounded-r-full opacity-0 group-hover:opacity-100 duration-500 ease-in-out'>Digital Connect</button>
                </div>
                <div className="px-5 flex justify-between py-5">
                    <p className="flex gap-x-2 items-center font-sans text-[18px]"><CiUser className="font-sans text-[20px]"/>by Admin</p>
                    <p className="flex gap-x-2 items-center font-sans text-[18px]"><FaCommentsDollar className="font-sans text-[20px]"/>22</p>
                    <p className="flex gap-x-2 items-center font-sans text-[18px]"><GoEye className="font-sans text-[20px]"/>120 Views</p>
                </div>
                <h3 className="text-black lg:text-[20px] text-[16px] font-bold font-sans hover:text-blue-600 duration-300 ease-in-out px-5 py-2 cursor-pointer">Man using a tablet to a work and
                connect with others</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
