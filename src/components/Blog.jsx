import React from "react";
import { CiUser } from "react-icons/ci";
import { FaCommentsDollar } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import Blg from "../assets/blog.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-[#F4F4FF] py-3 lg:py-28 px-2 lg:px-0">
      <div className="container mx-auto">
        <h3 className="text-red-500 font-sans text-center text-[16px] lg:text-[20px] font-medium">
          Our Blog
        </h3>
        <h2 className="text-black text-center text-[20px] lg:text-[40px] font-bold font-sans">
          Latest Blogs & Articles
        </h2>

        <div className="lg:flex justify-between gap-x-5 mt-3 lg:mt-20">
          {/* Blog Card 1 */}
          <div className="lg:w-1/3 w-full bg-white rounded-xl shadow-xl">
            <Link to="/portfolio">
              <div className="group bg-gray-500 rounded-xl">
                <img
                  src={Blg}
                  alt="Blog"
                  className="w-full h-[200px] lg:h-[300px] object-cover rounded-t-xl"
                />
                <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-10 py-3 text-white bg-red-400 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Digital Agency
                </button>
              </div>
              <div className="flex justify-between px-5 py-5">
                <p className="flex items-center gap-x-2 text-[18px] font-sans">
                  <CiUser className="text-[20px]" /> by Admin
                </p>
                <p className="flex items-center gap-x-2 text-[18px] font-sans">
                  <FaCommentsDollar className="text-[20px]" /> 22
                </p>
                <p className="flex items-center gap-x-2 text-[18px] font-sans">
                  <GoEye className="text-[20px]" /> 120 Views
                </p>
              </div>
              <h3 className="text-black text-[16px] lg:text-[20px] font-bold px-5 py-2 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Successful business partner have a meeting and discussing
              </h3>
            </Link>
          </div>

          {/* Blog Card 2 */}
          <div className="lg:w-1/3 w-full my-5 lg:my-0 bg-white rounded-xl shadow-xl">
            <Link to="/portfolio">
              <div className="group bg-gray-500 rounded-xl">
                <img
                  src={Blg}
                  alt="Blog"
                  className="w-full h-[200px] lg:h-[300px] object-cover rounded-t-xl"
                />
                <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-10 py-3 text-white bg-red-400 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Marketing Agency
                </button>
              </div>
              <div className="flex justify-between px-5 py-5">
                <p className="flex items-center gap-x-2 text-[18px] font-sans">
                  <CiUser className="text-[20px]" /> by Admin
                </p>
                <p className="flex items-center gap-x-2 text-[18px] font-sans">
                  <FaCommentsDollar className="text-[20px]" /> 22
                </p>
                <p className="flex items-center gap-x-2 text-[18px] font-sans">
                  <GoEye className="text-[20px]" /> 120 Views
                </p>
              </div>
              <h3 className="text-black text-[16px] lg:text-[20px] font-bold px-5 py-2 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Motivated colleagues celebrating corporate success together
              </h3>
            </Link>
          </div>

          {/* Blog Card 3 */}
          <div className="lg:w-1/3 w-full bg-white rounded-xl shadow-xl">
            <Link to="/portfolio">
              <div className="group bg-gray-500 rounded-xl">
                <img
                  src={Blg}
                  alt="Blog"
                  className="w-full h-[200px] lg:h-[300px] object-cover rounded-t-xl"
                />
                <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-10 py-3 text-white bg-red-400 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Digital Connect
                </button>
              </div>
              <div className="flex justify-between px-5 py-5">
                <p className="flex items-center gap-x-2 text-[18px] font-sans">
                  <CiUser className="text-[20px]" /> by Admin
                </p>
                <p className="flex items-center gap-x-2 text-[18px] font-sans">
                  <FaCommentsDollar className="text-[20px]" /> 22
                </p>
                <p className="flex items-center gap-x-2 text-[18px] font-sans">
                  <GoEye className="text-[20px]" /> 120 Views
                </p>
              </div>
              <h3 className="text-black text-[16px] lg:text-[20px] font-bold px-5 py-2 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Man using a tablet to work and connect with others
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
