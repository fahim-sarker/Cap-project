import React from "react";
import Ban from "../../assets/ban1.png";
import { Link } from "react-router-dom";
import Pricing from "../Pricing";
import { TbTargetArrow } from "react-icons/tb";
import Pric from "../../assets/pri.png";
import Pric1 from "../../assets/pri1.png";
import Pric2 from "../../assets/pri2.png";
import Pric3 from "../../assets/pri3.png";
import Pric4 from "../../assets/pri4.png";

const Pricingpage = () => {
  return (
    <>
      <div className="bg-Footer lg:py-28 py-3  px-2 lg:px-0 bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h2 className="lg:text-[45px] text-[20px] text-center font-sans text-white font-semibold">
            Pricing Page
          </h2>
          <h3 className="lg:text-[20px] text-[16px] text-center font-sans text-white font-semibold">
            <Link to="/">Home </Link>
            <span className="lg:text-[20px] text-[16px] text-center font-sans text-red-300 font-semibold">
              - Pricing Page
            </span>
          </h3>
          <img src={Ban} alt="" className="mx-auto mt-5" />
        </div>
      </div>
      <div className="">
        <Pricing />
      </div>
      <div className="lg:py-28 py-3 lg:px-0 px-0 bg-success bg-center bg-cover bg-no-repeat">
        <div className="container mx-auto">
          <div className="lg:w-[800px] w-full mx-auto">
            <h3 className="text-blue-400 font-sans lg:text-[20px] text-[16px] font-medium flex justify-center gap-x-3 items-center">
              <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
              Let’s Support
            </h3>
            <h2 className="text-white lg:text-[60px] text-[16px] font-bold font-sans text-center">
              You need our support to have any projects?
            </h2>
            <p className="font-sans ;g:text-[18px] text-[14px] text-center text-white pt-3">
              Enthusiastically architect corporate metrics via enterprise
              methodologies. Progressively extend distinctive process
              improvements rather than parallel channels.
            </p>
            <div className="lg:flex justify-center gap-x-5 text-center mt-2 lg:mt-0">
              <button className="lg:px-10 px-5 lg:mt-5 lg:py-3 py-2 text-white font-sans lg:text-[18px] text-[16px]  hover:bg-red-400 rounded-full duration-500 ease-in-out border-2 border-red-400">
                Set Free Quotes
              </button>
              <button className="lg:px-10 px-5 lg:mt-5 ml-2  lg:py-3 py-2 text-white font-sans lg:text-[18px] text-[16px] hover:bg-red-400 rounded-full duration-500 ease-in-out border-2 border-red-400">
                Contact For Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-28 py-3 lg:px-0 px-2">
        <div className="container mx-auto">
          <div className="flex justify-between gap-x-5">
            <div className="w-1/5 bg-[#F4F4FF] py-4 px-3 rounded-lg flex justify-center items-center">
              <img src={Pric} alt="" />
            </div>
            <div className="w-1/5 bg-[#F4F4FF] py-4 px-3 rounded-lg flex justify-center items-center">
              <img src={Pric1} alt="" />
            </div>
            <div className="w-1/5 bg-[#F4F4FF] py-4 px-3 rounded-lg flex justify-center items-center">
              <img src={Pric2} alt="" />
            </div>
            <div className="w-1/5 bg-[#F4F4FF] py-4 px-3 rounded-lg flex justify-center items-center">
              <img src={Pric3} alt="" />
            </div>
            <div className="w-1/5 bg-[#F4F4FF] py-4 px-3 rounded-lg flex justify-center items-center">
              <img src={Pric4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricingpage;
