import React from "react";
import Abot from "../assets/agency.png";
import Abot1 from "../assets/aboutlogo.png";
import Abot2 from "../assets/aboutlogo1.png";
import Abot3 from "../assets/aboutlogo2.png";
import Abot4 from "../assets/aboutlogo3.png";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
  return (
    <div className="lg:py-28 py-5 lg:px-0 px-2">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <img src={Abot} alt="" />
          </div>
          <div className="lg:w-1/2 pt-5">
            <h3 className="text-blue-500 font-sans lg:text-[20px] text-[16px] font-medium flex gap-x-3 items-center">
              <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
              About Our Company
            </h3>
            <h2 className="text-black lg:text-[60px] text-[20px] font-bold font-sans">
              Best Digital Marketing Agency For People
            </h2>
            <p className="text-black text-[16px] font-normal font-sans lg:w-[600px] py-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have as suffered alteration in some form, by
              injected humour, or randomised words which don't a look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything.
            </p>
            <div className="flex items-center lg:gap-x-28 gap-x-5">
              <div className="">
                <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[16px] text-[14px] py-3">
                  <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                  Digital Strategy
                </p>
                <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[16px] text-[14px]">
                  <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                  Marketing
                </p>
              </div>
              <div className="">
                <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[16px] text-[14px] py-3">
                  <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                  SEO Optimization
                </p>
                <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[16px] text-[14px]">
                  <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                  First Working Process
                </p>
              </div>
            </div>
            <button className="px-9 lg:mt-10 mt-5 lg:py-4 py-3  text-white font-sans text-[16px] bg-red-400 rounded-full">
              Read More
            </button>
          </div>
        </div>
        <div className="lg:mt-40 mt-5 lg:lg:flex justify-between px-2 lg:px-0">
          <div className="lg:w-1/4 w-full hover:bg-red-300 py-3 px-3 duration-700 ease-in-out rounded-md group">
            <div className="py-16 px-3 bg-[#F4F4FF] rounded-lg shadow-2xl">
              <div className="h-[100px] w-[100px] bg-blue-600 group-hover:bg-red-400 duration-700 ease-in-out rounded-full mx-auto flex justify-center items-center">
                <img src={Abot1} alt="" />
              </div>
              <h3 className="font-sans text-[25px] font-bold py-6 text-center">
                Graphics Design
              </h3>
              <p className="font-sans font-normal text-[16px] text-center">
                There are many variations of pass Lorem Ipsum available, but the
                a have suffered alteration.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 w-full hover:bg-red-300 py-3 px-3 duration-700 ease-in-out rounded-md group">
            <div className="py-16 px-3 bg-[#F4F4FF] rounded-lg shadow-2xl">
              <div className="h-[100px] w-[100px] bg-blue-600 group-hover:bg-red-400 duration-700 ease-in-out rounded-full mx-auto flex justify-center items-center">
                <img src={Abot2} alt="" />
              </div>
              <h3 className="font-sans text-[25px] font-bold py-6 text-center">
              Digital Marketing
              </h3>
              <p className="font-sans font-normal text-[16px] text-center">
                There are many variations of pass Lorem Ipsum available, but the
                a have suffered alteration.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 w-full hover:bg-red-300 py-3 px-3 duration-700 ease-in-out rounded-md group">
            <div className="py-16 px-3 bg-[#F4F4FF] rounded-lg shadow-2xl">
              <div className="h-[100px] w-[100px] bg-blue-600 group-hover:bg-red-400 duration-700 ease-in-out rounded-full mx-auto flex justify-center items-center">
                <img src={Abot3} alt="" />
              </div>
              <h3 className="font-sans text-[25px] font-bold py-6 text-center">
              Web Developer
              </h3>
              <p className="font-sans font-normal text-[16px] text-center">
                There are many variations of pass Lorem Ipsum available, but the
                a have suffered alteration.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 w-full hover:bg-red-300 py-3 px-3 duration-700 ease-in-out rounded-md group">
            <div className="py-16 px-3 bg-[#F4F4FF] rounded-lg shadow-2xl">
              <div className="h-[100px] w-[100px] bg-blue-600 group-hover:bg-red-400 duration-700 ease-in-out rounded-full mx-auto flex justify-center items-center">
                <img src={Abot4} alt="" />
              </div>
              <h3 className="font-sans text-[25px] font-bold py-6 text-center">
              App Design
              </h3>
              <p className="font-sans font-normal text-[16px] text-center">
                There are many variations of pass Lorem Ipsum available, but the
                a have suffered alteration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
