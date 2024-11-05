import React from "react";
import Ban from "../../assets/ban1.png";
import { Link } from "react-router-dom";
import Port from "../../assets/port.png";
import Port1 from "../../assets/port2.png";
import Port2 from "../../assets/port3.png";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Portfoliodetails = () => {
  return (
    <>
      <div className="bg-Footer lg:py-28 py-3  px-2 lg:px-0 bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h2 className="lg:text-[45px] text-[20px] text-center font-sans text-white font-semibold">
            Portfolio Details
          </h2>
          <h3 className="lg:text-[20px] text-[16px] text-center font-sans text-white font-semibold">
            <Link to="/">Home </Link>
            <span className="lg:text-[20px] text-[16px] text-center font-sans text-red-300 font-semibold">
              - Portfolio Details
            </span>
          </h3>
          <img src={Ban} alt="" className="mx-auto mt-5" />
        </div>
      </div>
      <div className="lg:py-28 py-3  px-2 lg:px-0">
        <div className="container mx-auto">
          <div className="">
            <img
              src={Port}
              alt=""
              className="w-full lg:h-[500px] h-[300px] rounded-lg"
            />
          </div>
          <div className="bg-[#F4F4FF] mt-10 py-10 px-5 rounded-lg">
            <div className="lg:flex justify-between items-center">
              <div className="lg:w-[30%] w-full">
                <h3 className="flex gap-x-10 items-center text-[18px] font-medium">
                  End Date :<span>15 Dec 2022</span>
                </h3>
                <h3 className="flex gap-x-10 text-[18px] font-medium my-2">
                  Start Date :<span>15 Dec 2022</span>
                </h3>
              </div>
              <div className="lg:w-[30%] w-full">
                <h3 className="flex gap-x-10 items-center text-[18px] font-medium">
                  Client :<span>Jiyatan Raw</span>
                </h3>
                <h3 className="flex gap-x-10 text-[18px] font-medium my-2">
                  Tags :<span>Digital Agency</span>
                </h3>
              </div>
              <div className="lg:w-[30%] w-full">
                <h3 className="flex gap-x-10 items-center text-[18px] font-medium">
                  Website :<span>jiyatanraw.com</span>
                </h3>
                <h3 className="flex gap-x-10 text-[18px] font-medium my-2">
                  Category :<span>Agency</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <h4 className="font-sans lg:text-[25px] text-[18px] font-medium">
              Human Figurines Using Ladder to Reach Cracked lit Lightbulb as an
              Idea
            </h4>
            <p className="font-sans lg:text-[18px] text-[16px] py-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look as even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the as Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over Latin words need to as be sure there isn't
              anything as embarrassing hidden in the middle of text. All the
              Lorem Ipsum generators on the Internet tend to repeat predefined.
            </p>
          </div>
          <div className="lg:flex justify-between mt-10">
            <div className="lg:w-[30%] w-full">
              <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[18px] text-[14px] py-3">
                <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                Research beyond the business plan
              </p>
              <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[18px] text-[14px]">
                <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                Customer Oriented Program Daily
              </p>
              <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[18px] text-[14px] py-3">
                <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                The ability to turnaround consulting
              </p>
              <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[18px] text-[14px]">
                <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                Customer engagement matters
              </p>
            </div>
            <div className="lg:w-[30%] w-full">
              <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[18px] text-[14px] py-3">
                <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                Financial Growth System
              </p>
              <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[18px] text-[14px]">
                <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                Customer Oriented Program Daily
              </p>
              <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[18px] text-[14px] py-3">
                <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                Dedicated Team member
              </p>
              <p className="flex lg:gap-x-3 gap-x-1 items-center font-sans lg:text-[18px] text-[14px]">
                <IoCheckmarkCircleSharp className="font-sans text-[20px] text-red-400" />
                Product ux Design & Development
              </p>
            </div>
            <div className="lg:w-[40%] w-full bg-[#fff] shadow-2xl py-5 px-5 lg:h-[200px] h-[300px] rounded-xl">
              <h3 className="font-sans text-[20px] font-semibold">
                Need Your Help?
              </h3>
              <div className="mt-8 lg:flex justify-between">
                <div className="">
                  <ul>
                    <li className="font-sans text-[18px] font-medium flex gap-x-5 items-center">
                      <FaPhone className="text-[20px] text-red-400" />
                      +(323) 750-1234
                    </li>
                    <li className="font-sans text-[18px] font-medium flex gap-x-5 items-center py-5">
                      <MdEmail className="text-[20px] text-red-400" />
                      infoyour@albashti.com
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul>
                    <li className="font-sans text-[18px] font-medium flex gap-x-5 items-center">
                      <FaLocationDot className="text-[20px] text-red-400" />
                      Abubokkor AK
                    </li>
                    <li className="font-sans text-[18px] font-medium flex gap-x-5 items-center py-5">
                      <FaLocationDot className="text-[20px] text-red-400" />
                      374 FA Tower, William 2721, IL, USA
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between mt-10 items-center">
            <div className="lg:w-[25%] w-full ">
              <img src={Port1} alt="" className="h-[300px] rounded-xl" />
            </div>
            <div className="lg:w-[25%] w-full mt-y lg:my-0">
              <img src={Port2} alt="" className="h-[300px] rounded-xl" />
            </div>
            <div className="lg:w-[45%] w-full ">
              <p className="font-sans text-[18px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do look as even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing.
                Hidden in the middle of text. All the as Lorem Ipsum generators
                on the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Inte rnet. It uses a
                dictionary of over Latin words need to as be sure.
              </p>
            </div>
          </div>
          <div className="pt-14">
            <div className="flex justify-between items-center">
              <div className="">
                <h2 className="font-sans lg:text-[45px] text-[20px]lg: font-se h-[30px]mlg:ibold py w-[30px]-5">
                  Our Similar Projects
                </h2>
              </div>
              <div className="flex gap-x-5 cursor-pointer">
                <div className="bg-red-400 lg:h-[50px] h-[30px] lg:w-[50px] w-[30px] rounded-full flex justify-center items-center">
                  <FaArrowLeft className="text-white lg:text-[30px] text-[15px]" />
                </div>
                <div className="bg-red-400 lg:h-[50px] h-[30px] lg:w-[50px] w-[30px] rounded-full flex justify-center items-center">
                  <FaArrowRight className="text-white lg:text-[30px] text-[15px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between mt-5">
            <div className="lg:w-[32%] w-full mb-2 lg:mb-0 ">
              <img src={Port1} alt="" className="h-[300px] rounded-xl" />
            </div>
            <div className="lg:w-[32%] w-full mb-2 lg:mb-0 ">
              <img src={Port2} alt="" className="h-[300px] rounded-xl" />
            </div>
            <div className="lg:w-[32%] w-full mb-2 lg:mb-0 ">
              <img src={Port2} alt="" className="h-[300px] rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfoliodetails;
