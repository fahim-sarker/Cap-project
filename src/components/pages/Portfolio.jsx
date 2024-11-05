import React from "react";
import Ban from "../../assets/ban1.png";
import { Link } from "react-router-dom";
import { TbTargetArrow } from "react-icons/tb";
import Port from "../../assets/port.png";
import Port1 from "../../assets/port2.png";
import Port2 from "../../assets/port3.png";
import { FiPlus } from "react-icons/fi";

const Portfolio = () => {
  return (
    <>
      <div className="bg-Footer lg:py-28 py-3  px-2 lg:px-0 bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h2 className="lg:text-[45px] text-[20px] text-center font-sans text-white font-semibold">
            Portfolio
          </h2>
          <h3 className="lg:text-[20px] text-[16px] text-center font-sans text-white font-semibold">
            <Link to="/">Home </Link>
            <span className="lg:text-[20px] text-[16px] text-center font-sans text-red-300 font-semibold">
              - Portfolio
            </span>
          </h3>
          <img src={Ban} alt="" className="mx-auto mt-5" />
        </div>
      </div>
      <div className="lg:py-28 py-3 lg:px-0 px-2 bg-[#F4F4FF]">
        <div className="container mx-auto">
          <h3 className="text-blue-500 font-sans lg:text-[20px] text-[16px] font-medium justify-center flex gap-x-3 items-center">
            <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
            Our Portfolio
          </h3>
          <h2 className="text-black lg:text-[40px] text-center text-[20px] font-bold font-sans">
            Our Impressive Portfolio
          </h2>
          <div className="lg:flex flex-wrap gap-y-5 justify-between mt-5">
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port1}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port2}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port1}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port2}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port1}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port2}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>

              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port1}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full lg:mb-0 mb-3 relative group cursor-pointer">
              <Link to="/portfoliodetails">
                <img
                  src={Port2}
                  alt=""
                  className="h-[350px] rounded-xl w-full"
                />
              </Link>
              <div className="bg-gray-200 rounded-sm flex justify-between opacity-0 group-hover:opacity-100 duration-500 ease-in-out  w-full px-5 py-4 items-center absolute bottom-0 left-0">
                <div className="">
                  <h3 className="font-sans font-medium text-[18px]">
                    Monthly Design Magazine
                  </h3>
                  <p className="font-sans text-[16px] font-normal">
                    Print, Books
                  </p>
                </div>
                <div className="bg-red-400 h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <Link to="/portfoliodetails">
                    <FiPlus className="text-white text-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-10 lg:mt-10 py-4 text-white font-sans text-[16px] bg-red-400 rounded-full">
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
