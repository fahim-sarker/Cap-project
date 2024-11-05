import React from "react";
import Ban from "../../assets/ban1.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Ser from "../../assets/servi.png";
import Pric1 from "../../assets/price.png";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Servicedetails = () => {
  return (
    <>
      <div className="bg-Footer lg:py-28 py-3  px-2 lg:px-0 bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h2 className="lg:text-[45px] text-[20px] text-center font-sans text-white font-semibold">
            Service Details
          </h2>
          <h3 className="lg:text-[20px] text-[16px] text-center font-sans text-white font-semibold">
            <Link to="/">Home </Link>
            <span className="lg:text-[20px] text-[16px] text-center font-sans text-red-300 font-semibold">
              - Service Details
            </span>
          </h3>
          <img src={Ban} alt="" className="mx-auto mt-5" />
        </div>
      </div>
      <div className="lg:py-28 py-3 lg:px-2 px-2">
        <div className="container mx-auto">
          <div className="lg:flex justify-between">
            <div className="lg:w-2/4 w-full bg-[#F4F4F4] py-4 px-4 rounded-lg">
              <div className="bg-services w-full lg:h-[400px] h-[200px] rounded-lg"></div>
            </div>
            <div className="lg:w-1/3 w-full lg:mt-0 mt-4 bg-[#FFFFFF] px-4 py-4 rounded-xl shadow-2xl lg:h-[400px] h-[350px]">
              <h3 className="text-[25px] font-sans font-medium">
                Our All Service
              </h3>
              <div className="mt-8">
                <h3 className="lg:text-[25px] font-medium font-sans hover:bg-orange-500 duration-500 ease-in-out px-3 py-2 rounded-full hover:text-white bg-gray-200 text-black cursor-pointer flex gap-x-5 items-center justify-center">
                  Search Engine Optimization
                  <FaArrowRightLong />
                </h3>
                <h3 className="lg:text-[25px] font-medium font-sans hover:bg-orange-500 duration-500 ease-in-out px-3 py-2 rounded-full hover:text-white bg-gray-200 text-black cursor-pointer flex gap-x-5 items-center justify-center my-5">
                  Web Design & Development
                  <FaArrowRightLong />
                </h3>
                <h3 className="lg:text-[25px] font-medium font-sans hover:bg-orange-500 duration-500 ease-in-out px-3 py-2 rounded-full hover:text-white bg-gray-200 text-black cursor-pointer flex gap-x-5 items-center justify-center">
                  Email and Content Marketing
                  <FaArrowRightLong />
                </h3>
                <h3 className="lg:text-[25px] font-medium font-sans hover:bg-orange-500 duration-500 ease-in-out px-3 py-2 rounded-full hover:text-white bg-gray-200 text-black cursor-pointer flex gap-x-5 items-center justify-center mt-5">
                  Social Media Network Marting
                  <FaArrowRightLong />
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between mt-5">
            <div className="lg:w-3/5 w-full">
              <h3 className="text-black lg:text-[30px] text-[18px] lg:text-start text-center lg:mt-0 mt-3 font-bold font-sans">
                Search Engine Optimization
              </h3>
              <p className="font-sans lg:text-[18px] text-[16px] font-normal py-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of textss. All the Lorem Ipsum generators
                on the Internet tend to repeat
              </p>
              <div className="lg:flex w-full justify-between mt-10">
                <div className="lg:w-2/4 w-full">
                  <img src={Ser} alt="" className="w-full rounded-xl" />
                </div>
                <div className="lg:w-2/5 w-full">
                  <h3 className="text-[25px] font-sans font-medium">
                    Our Service Process
                  </h3>
                  <div className="flex gap-x-5 items-center  mt-5 bg-[#F4F4F4] py-5 px-3 rounded-lg">
                    <img
                      src={Pric1}
                      alt=""
                      className="bg-blue-500 rounded-full"
                    />
                    <div className="">
                      <h3 className="font-sans text-[20px] font-medium pb-2">
                        Creative Analysis
                      </h3>
                      <p className=" font-sans text-[16px] font-medium">
                        Creative analysis is important. It is common for
                        marketers
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-5 items-center  my-5 bg-[#F4F4F4] py-5 px-3 rounded-lg">
                    <img
                      src={Pric1}
                      alt=""
                      className="bg-blue-500 rounded-full"
                    />
                    <div className="">
                      <h3 className="font-sans text-[20px] font-medium pb-2">
                        Development & Delivery
                      </h3>
                      <p className=" font-sans text-[16px] font-medium">
                        Creative analysis is important. It is common for
                        marketers
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-5 items-center bg-[#F4F4F4] py-3 px-3 rounded-lg">
                    <img
                      src={Pric1}
                      alt=""
                      className="bg-blue-500 rounded-full"
                    />
                    <div className="">
                      <h3 className="font-sans text-[20px] font-medium pb-2">
                        Design & Scratches
                      </h3>
                      <p className=" font-sans text-[16px] font-medium">
                        Creative analysis is important. It is common for
                        marketers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="pt-10 font-sans lg:text-[25px] text-[18px] font-bold">
                We Hope You Find What You are Looking for
              </h2>
              <p className="py-2 font-sans lg:text-[18px] text-[16px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of textss. All the Lorem Ipsum generators
                on the Internet tend to repeat
              </p>
              <ul className="lg:py-0 py-5 mt-5">
                <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium">
                  <IoMdCheckmarkCircle className="text-red-400 text-[20px]" />
                  Research beyond the business plan
                </li>
                <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                  <IoMdCheckmarkCircle className="text-red-400 lg:text-[20px] text-[18px]" />
                  Customer Oriented Program Daily
                </li>
                <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium ">
                  <IoMdCheckmarkCircle className="text-red-400 text-[20px]" />
                  The ability to turnaround consulting
                </li>
                <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                  <IoMdCheckmarkCircle className="text-red-400 lg:text-[20px] text-[18px]" />
                  Customer engagement matters
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="bg-[#000] w-full opacity-80 px-5 py-4 rounded-xl shadow-2xl h-[500px]">
                <h3 className="text-[25px] font-sans font-medium text-white">
                  Get a free quote
                </h3>
                <div className="mt-8">
                  <form action="">
                    <input
                      type="text"
                      placeholder="your name"
                      className="w-full border-none outline-none px-3 py-3 bg-[#FFF] rounded-full text-[18px] capitalize font-sans"
                    />
                    <input
                      type="text"
                      placeholder="your email address"
                      className="w-full border-none outline-none px-3 py-3 bg-[#FFF] rounded-full text-[18px] capitalize font-sans my-3"
                    />
                    <textarea
                      name=""
                      id=""
                      placeholder="message"
                      className="w-full border-none outline-none px-3 py-3 bg-[#FFF] rounded-lg text-[18px] capitalize font-sans my-3 h-[150px]"
                    ></textarea>
                  </form>
                  <button className="px-10 lg:mt-5 py-4 text-white font-sans text-[18px] bg-red-400 rounded-full  lg:my-0 my-3">
                    Send Message
                  </button>
                </div>
              </div>
              <div className="w-full bg-[#FFFFFF] px-4 py-4 rounded-xl shadow-2xl h-[250px]  mt-8">
                <h3 className="text-[25px] font-sans font-medium">Download</h3>
                <div className="mt-8">
                  <h3 className="lg:text-[25px] font-medium font-sans hover:bg-orange-500 duration-500 ease-in-out px-3 py-2 rounded-full hover:text-white bg-gray-200 text-black cursor-pointer flex gap-x-5 items-center justify-center">
                    Our Brochures 2023
                    <FaArrowRightLong />
                  </h3>
                  <h3 className="lg:text-[25px] font-medium font-sans hover:bg-orange-500 duration-500 ease-in-out px-3 py-2 rounded-full hover:text-white bg-gray-200 text-black cursor-pointer flex gap-x-5 items-center justify-center my-5">
                    About Our Company
                    <FaArrowRightLong />
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

export default Servicedetails;
