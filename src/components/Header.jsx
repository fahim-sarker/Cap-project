import React from "react";
import {
  FaPhoneVolume,
  FaFlagUsa,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div id="header" className="bg-[#0A0507]">
      <div className="container mx-auto bg-[#3661FC] py-2 px-2 rounded-r-full">
        <div className="flex justify-between items-center">
          <div className="w-3/5">
            <div className="lg:flex gap-x-10 items-center">
              <h3 className="font-sans text-[14px] text-white font-normal border-r-2 border-b-gray-300 pr-5">
                Welcome to Ortencey Digital Market Agency
              </h3>
              <p className="flex gap-x-3 items-center font-sans text-[14px] text-white font-normal border-r-2 border-b-gray-300 pr-5 cursor-pointer">
                <FaPhoneVolume className="font-sans text-[16px] font-normal text-red-300" />
                +88 ( 5548 ) 6548
              </p>
              <p className="flex gap-x-3 items-center font-sans text-[14px] text-white font-normal border-r-2 border-b-gray-300 pr-5 cursor-pointer">
                <HiOutlineMailOpen className="font-sans text-[16px] font-normal text-red-300" />
                infoyour@gmail.com
              </p>
            </div>
          </div>
          <div className="w-2/5">
            <div className="lg:flex gap-x-5 lg:items-center justify-end lg:pl-0 pl-5">
              <div className="flex items-center gap-x-3 cursor-pointer">
                <FaFlagUsa className="font-sans text-[14px] font-normal text-red-300" />
                <p className="flex gap-x-1 items-center font-sans text-[14px] text-white font-normal lg:border-r-2 border-b-gray-300 pr-5">
                  English
                  <IoIosArrowDown />
                </p>
              </div>
              <div className="flex gap-x-5 items-center cursor-pointer lg:pt-0 pt-5">
                <FaFacebookF className="font-sans text-[16px] font-normal hover:text-red-300 duration-500 ease-in-out text-[#95ACFF] " />
                <FaTwitter className="font-sans text-[16px] font-normal hover:text-red-300 duration-500 ease-in-out text-[#95ACFF] " />
                <FaLinkedinIn className="font-sans text-[16px] font-normal hover:text-red-300 duration-500 ease-in-out text-[#95ACFF] " />
                <FaYoutube className="font-sans text-[16px] font-normal hover:text-red-300 duration-500 ease-in-out text-[#95ACFF] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
