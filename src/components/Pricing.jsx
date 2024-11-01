import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import Pric from "../assets/price.png"
import Pric1 from "../assets/price1.png"
import Pric2 from "../assets/price2.png"
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Pricing = () => {
  return (
    <div className="lg:py-28 py-5 lg:px-0 px-2">
      <div className="container mx-auto">
        <h3 className="text-blue-500 font-sans lg:text-[20px] text-[16px] font-medium justify-center flex gap-x-3 items-center">
          <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
          Our Pricing
        </h3>
        <h2 className="text-black lg:text-[40px] text-center text-[20px] font-bold font-sans">
        Our Best Pricing Plan
            </h2>
            <div className="lg:flex justify-between gap-x-10">
                <div className="lg:w-1/3 w-full bg-[#F4F4FF] py-16 px-10 mt-5 rounded-2xl group hover:bg-red-400 duration-700 ease-in-out">
                    <div className="flex justify-between border-b-2 border-b-gray-200 group-hover:text-white">
                        <div className="w-1/2">
                            <h3 className="font-sans text-[18px] font-bold">Basic Plan</h3>
                            <h3 className=" font-sans text-[18px] font-medium"><span className="font-sans text-[40px] text-blue-500 group-hover:text-white">30$</span> Per Month</h3>
                        </div>
                        <div className=" w-1/2 bg-blue-600 h-[100px] rounded-2xl flex items-center justify-center mb-5">
                            <img src={Pric} alt="" />
                        </div>
                    </div>
                    <ul className="lg:py-10 lg:px-20  group-hover:text-white">
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Free Consultations</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Business Planning</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Investment Process</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Market Research</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Online Support</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Unlimited Updates</li>
                    </ul>
                    <button className="border-2 border-gray-400 group-hover:border-white w-full py-3 rounded-full font-sans text-[18px] group-hover:text-white">Choose Plan</button>
                </div>
                <div className="lg:w-1/3 w-full bg-[#F4F4FF] py-16 px-10 mt-5 rounded-2xl group hover:bg-red-400 duration-700 ease-in-out">
                    <div className="flex justify-between border-b-2 border-b-gray-200 group-hover:text-white">
                        <div className="w-1/2">
                            <h3 className="font-sans text-[18px] font-bold">Basic Plan</h3>
                            <h3 className=" font-sans text-[18px] font-medium"><span className="font-sans text-[40px] text-blue-500 group-hover:text-white">30$</span> Per Month</h3>
                        </div>
                        <div className=" w-1/2 bg-blue-600 h-[100px] rounded-2xl flex items-center justify-center mb-5">
                            <img src={Pric1} alt="" />
                        </div>
                    </div>
                    <ul className="lg:py-10 lg:px-20  group-hover:text-white">
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Free Consultations</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Business Planning</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Investment Process</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Market Research</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Online Support</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Unlimited Updates</li>
                    </ul>
                    <button className="border-2 border-gray-400 group-hover:border-white w-full py-3 rounded-full font-sans text-[18px] group-hover:text-white">Choose Plan</button>
                </div>
                <div className="lg:w-1/3 w-full bg-[#F4F4FF] py-16 px-10 mt-5 rounded-2xl group hover:bg-red-400 duration-700 ease-in-out">
                    <div className="flex justify-between border-b-2 border-b-gray-200 group-hover:text-white">
                        <div className="w-1/2">
                            <h3 className="font-sans text-[18px] font-bold">Basic Plan</h3>
                            <h3 className=" font-sans text-[18px] font-medium"><span className="font-sans text-[40px] text-blue-500 group-hover:text-white">30$</span> Per Month</h3>
                        </div>
                        <div className=" w-1/2 bg-blue-600 h-[100px] rounded-2xl flex items-center justify-center mb-5">
                            <img src={Pric2} alt="" />
                        </div>
                    </div>
                    <ul className="lg:py-10 lg:px-20  group-hover:text-white">
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Free Consultations</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Business Planning</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Investment Process</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Market Research</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Online Support</li>
                        <li className="flex lg:gap-x-5 gap-x-1 items-center font-sans lg:text-[18px] font-semibold text-[14px] py-2"><IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400 group-hover:text-white" />Unlimited Updates</li>
                    </ul>
                    <button className="border-2 border-gray-400 group-hover:border-white w-full py-3 rounded-full font-sans text-[18px] group-hover:text-white">Choose Plan</button>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Pricing;
