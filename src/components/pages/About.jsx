import React from "react";
import { Link } from "react-router-dom";
import Aboutp from "../Aboutp";
import Chose from "../Chose";
import Team from "../Team";
import Success from "../../assets/success.png";
import Map from "../../assets/World Map.png";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Pric1 from "../../assets/price.png";
import Pric2 from "../../assets/price1.png";
import Pric3 from "../../assets/price2.png";
import Ban from "../../assets/ban1.png"

const About = () => {
  return (
    <>
      <div className="bg-Footer lg:py-28 py-3  px-2 lg:px-0 bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h2 className="lg:text-[45px] text-[20px] text-center font-sans text-white font-semibold">
            About us
          </h2>
          <h3 className="lg:text-[20px] text-[16px] text-center font-sans text-white font-semibold">
            <Link to="/">Home </Link>
            <span className="lg:text-[20px] text-[16px] text-center font-sans text-red-300 font-semibold">
              - About us
            </span>
          </h3>
          <img src={Ban} alt="" className="mx-auto mt-5"/>
        </div>
      </div>
      <div className="">
        <Aboutp />
      </div>
      <div className="">
        <Chose />
      </div>
      <div className="lg:py-28 py-2 lg:px-0 px-2">
        <div className="container mx-auto">
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2 w-full">
              <img src={Success} alt="" />
            </div>
            <div className="lg:w-1/2 w-full lg:mt-0 mt-3">
              <h3 className="text-blue-500 font-sans lg:text-[20px] text-[16px] font-medium flex gap-x-3 items-center">
                <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
                Reason of Our Success
              </h3>
              <h2 className="text-black lg:text-[60px] text-[16px] font-bold font-sans">
                Quality & Experience Best Digital Agency
              </h2>
              <div className="lg:flex gap-x-5 lg:mt-0 mt-3 text-center lg:text-start">
                <button className="px-10 lg:mt-5 py-3 text-white font-sans text-[18px] bg-[#6B6161] hover:bg-red-400 rounded-full duration-500 ease-in-out">
                  Our Mission
                </button>
                <button className="px-10 lg:mt-5 py-3 text-white font-sans text-[18px] bg-[#6B6161] hover:bg-red-400 rounded-full duration-500 ease-in-out lg:my-0 my-3">
                  Our Vission
                </button>
                <button className="px-10 lg:mt-5 py-3 text-white font-sans text-[18px] bg-[#6B6161] hover:bg-red-400 rounded-full duration-500">
                  Our History
                </button>
              </div>
              <p className="font-sans lg:text-[20px] text-[16px] py-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majori suffered alteration in some form, by injected
                humour, or randomised word whic look even sligh believable. If
                you are going to use.
              </p>
              <div className="lg:flex gap-x-10 items-center">
                <img src={Map} alt="" className="mx-auto lg:mx-0"/>
                <ul className="lg:py-0 py-5">
                  <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium">
                    <IoMdCheckmarkCircle className="text-red-400 text-[20px]" />
                    Financiall Growth System
                  </li>
                  <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                    <IoMdCheckmarkCircle className="text-red-400 lg:text-[20px] text-[18px]" />
                    Customer Oriented Program Daily
                  </li>
                  <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium ">
                    <IoMdCheckmarkCircle className="text-red-400 text-[20px]" />
                    Dedicated Team member
                  </li>
                  <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                    <IoMdCheckmarkCircle className="text-red-400 lg:text-[20px] text-[18px]" />
                    Product ux Design & Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Team />
      </div>
      <div className="lg:py-28 py-3 lg:px-0 px-2">
        <div className="container mx-auto">
          <div className="lg:flex justify-between">
            <div className="lg:w-1/5 w-full lg:my-0 my-2 bg-[#F4F4FF] px-2 py-3 rounded-xl">
              <div className="flex gap-x-8 items-center justify-center">
                <div className="bg-blue-600 h-[70px] w-[70px] rounded-full flex items-center justify-center ">
                  <img src={Pric1} alt="" className="" />
                </div>
                <div className="">
                  <h3 className="font-sans text-[40px] font-bold pb-3">
                    1500 +
                  </h3>
                  <h3 className=" font-sans text-[18px] font-medium">
                    Project Complete
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 w-full lg:my-0 my-2 bg-[#F4F4FF] px-2 py-3 rounded-xl">
              <div className="flex gap-x-8 items-center justify-center">
                <div className="bg-blue-600 h-[70px] w-[70px] rounded-full flex items-center justify-center ">
                  <img src={Pric2} alt="" className="" />
                </div>
                <div className="">
                  <h3 className="font-sans text-[40px] font-bold pb-3">
                    150 +
                  </h3>
                  <h3 className=" font-sans text-[18px] font-medium">
                    Happy Clients
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 w-full lg:my-0 my-2 bg-[#F4F4FF] px-2 py-3 rounded-xl">
              <div className="flex gap-x-8 items-center justify-center">
                <div className="bg-blue-600 h-[70px] w-[70px] rounded-full flex items-center justify-center ">
                  <img src={Pric3} alt="" className="" />
                </div>
                <div className="">
                  <h3 className="font-sans text-[40px] font-bold pb-3">
                    95 +
                  </h3>
                  <h3 className=" font-sans text-[18px] font-medium">
                  Professional Team
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 w-full lg:my-0 my-2 bg-[#F4F4FF] px-2 py-3 rounded-xl">
              <div className="flex gap-x-8 items-center justify-center">
                <div className="bg-blue-600 h-[70px] w-[70px] rounded-full flex items-center justify-center ">
                  <img src={Pric1} alt="" className="" />
                </div>
                <div className="">
                  <h3 className="font-sans text-[40px] font-bold pb-3">
                    120 +
                  </h3>
                  <h3 className=" font-sans text-[18px] font-medium">
                  Awards Win
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
