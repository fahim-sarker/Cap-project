import React from "react";
import Ban from "../../assets/ban1.png";
import { Link } from "react-router-dom";
import Tm from "../../assets/team1.png";
import Exp from "../../assets/exp.png";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Teamdetails = () => {
  return (
    <>
      <div className="bg-Footer lg:py-28 py-3  px-2 lg:px-0 bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h2 className="lg:text-[45px] text-[20px] text-center font-sans text-white font-semibold">
            Team Details
          </h2>
          <h3 className="lg:text-[20px] text-[16px] text-center font-sans text-white font-semibold">
            <Link to="/">Home </Link>
            <span className="lg:text-[20px] text-[16px] text-center font-sans text-red-300 font-semibold">
              - Team Details
            </span>
          </h3>
          <img src={Ban} alt="" className="mx-auto mt-5" />
        </div>
      </div>
      <div className="lg:py-8 py-3 px-2 lg:px-0">
        <div className="container mx-auto bg-[#F4F4FF] py-5 px-5 rounded-lg">
          <div className="lg:flex justify-between">
            <div className="lg:w-2/5 w-full bg-[#FFF] flex justify-center py-3 rounded-lg">
              <img src={Tm} alt="" className="lg:h-[500px] h-[300px]" />
            </div>
            <div className="lg:w-1/2 w-full pt-5">
              <h3 className="font-sans text-[35px] font-semibold">
                David Phillips
              </h3>
              <p className="font-sans text-[18px] font-normal py-3">
                Senior Manager
              </p>
              <div className="">
                <div className="lg:flex gap-x-8 pt-5 items-center">
                  <h5 className="flex gap-x-4 items-center font-sans text-[18px] font-semibold">
                    <MdEmail className="text-[20px] text-blue-500" />
                    Experience:
                  </h5>
                  <p className="font-sans text-[18px] font-normal">15 Years</p>
                </div>
                <div className="lg:flex gap-x-8 pt-5 items-center my-3">
                  <h5 className="flex gap-x-4 items-center font-sans text-[18px] font-semibold">
                    <MdEmail className="text-[20px] text-blue-500" />
                    E-mail:
                  </h5>
                  <p className="font-sans text-[18px] font-normal">
                    icourtnyhenry@example.com
                  </p>
                </div>
                <div className="lg:flex gap-x-8 pt-5 items-center my-3">
                  <h5 className="flex gap-x-4 items-center font-sans text-[18px] font-semibold">
                    <FaPhone className="text-[20px] text-blue-500" />
                    Phone:
                  </h5>
                  <p className="font-sans text-[18px] font-normal">
                    +1-800-456-478-00
                  </p>
                </div>
                <div className="lg:flex gap-x-8 pt-5 items-center my-3">
                  <h5 className="flex gap-x-4 items-center font-sans text-[18px] font-semibold">
                    <FaLocationDot className="text-[20px] text-blue-500" />
                    Location:
                  </h5>
                  <p className="font-sans text-[18px] font-normal">
                    380 St Kilda Road, Melbourne VIC 3004, Australia
                  </p>
                </div>
                <div className="lg:flex gap-x-10 mt-10">
                  <h3 className="font-sans lg:text-[25px] text-[20px] font-semibold lg:text-start text-center">
                    Follow Me:
                  </h3>
                  <ul className="flex gap-x-3 ">
                    <li className="bg-[#FFF] h-[50px] w-[50px] rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-500 duration-500 ease-in-out hover:text-white">
                      <FaFacebookF className="text-[22px]" />
                    </li>
                    <li className="bg-[#FFF] h-[50px] w-[50px] rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-500 duration-500 ease-in-out hover:text-white">
                      <FaLinkedinIn className="text-[22px]" />
                    </li>
                    <li className="bg-[#FFF] h-[50px] w-[50px] rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-500 duration-500 ease-in-out hover:text-white">
                      <FaInstagram className="text-[22px]" />
                    </li>
                    <li className="bg-[#FFF] h-[50px] w-[50px] rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-500 duration-500 ease-in-out hover:text-white">
                      <FaTwitter className="text-[22px]" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-28 py-3 px-2 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2 w-full">
              <div className="flex justify-between items-center">
                <h4 className="font-sans font-medium text-[18px]">
                  Software Development
                </h4>
                <p className="font-sans font-medium text-[18px]">85%</p>
              </div>
              <div className="bg-gray-400  w-full rounded-md mt-4">
                <div className="bg-blue-600 w-[80%] py-1 rounded-lg"></div>
              </div>
              <div className="flex justify-between items-center mt-10">
                <h4 className="font-sans font-medium text-[18px]">
                  Web Development
                </h4>
                <p className="font-sans font-medium text-[18px]">95%</p>
              </div>
              <div className="bg-gray-400  w-full rounded-md mt-4">
                <div className="bg-blue-600 w-[90%] py-1 rounded-lg"></div>
              </div>
              <div className="flex justify-between items-center mt-10">
                <h4 className="font-sans font-medium text-[18px]">
                  UL / UX Design 80%
                </h4>
                <p className="font-sans font-medium text-[18px]">75%</p>
              </div>
              <div className="bg-gray-400  w-full rounded-md mt-4">
                <div className="bg-blue-600 w-[70%] py-1 rounded-lg"></div>
              </div>
              <div className="flex justify-between items-center mt-10">
                <h4 className="font-sans font-medium text-[18px]">
                  SEO Optimization
                </h4>
                <p className="font-sans font-medium text-[18px]">70%</p>
              </div>
              <div className="bg-gray-400  w-full rounded-md mt-4">
                <div className="bg-blue-600 w-[65%] py-1 rounded-lg"></div>
              </div>
              <h4 className="font-sans lg:text-[30px] text-[20px] lg:text-start text-cente4 font-semibold pt-10">
                Career Guidelines
              </h4>
              <p className="font-sans lg:text-[18px] text-[16px] font-normal py-3">
                As a web developer, you could work for a company or agency, or
                as a freelancer on projects for individual clients. Your tasks
                will vary depending on your work sit but day-to-day
                responsibilities might generally include.
              </p>
              <ul className="pl-4">
                <li className="font-sans lg:text-[18px] text-[14px] py-2 text list-disc">
                  Designing user interfaces and navigation menus
                </li>
                <li className="font-sans lg:text-[18px] text-[14px] py-2 text list-disc">
                  Writing and reviewing code for sites, typically HTML, XM
                </li>
                <li className="font-sans lg:text-[18px] text-[14px] py-2 text list-disc">
                  Troubleshooting problem with performance or user experience
                </li>
                <li className="font-sans lg:text-[18px] text-[14px] py-2 text list-disc">
                  Integrating multimedia content onto a site
                </li>
                <li className="font-sans lg:text-[18px] text-[14px] py-2 text list-disc">
                  Collaborating with designers, developers, and stakeholders
                </li>
                <li className="font-sans lg:text-[18px] text-[14px] py-2 text list-disc">
                  Testing web applications
                </li>
              </ul>
            </div>
            <div className="lg:w-2/5 w-full">
              <h3 className="font-sans lg:text-[35px] text-[18px] font-semibold lg:text-start text-center">
                Personal Experience and Skills
              </h3>
              <p className="font-sans lg:text-[18px] text-[14px] font-normal py-3 lg:text-start text-center">
                Since joining Sotcox in 2009 .Web design encompasses many
                different skills and discipli web graphic design; user interface
                design (UI design); authoring, including standardise
                optimization. Often many individuals will work in teams covering
                different aspects of the The term "web design" is normally used
                to describe the design process relating to the front-end (client
                side) design of a website including writing markup. Web design
                partiy overlaps web engineering in the broader scope of web
                development.
              </p>
              <img
                src={Exp}
                alt=""
                className="lg:pt-20 pt-5 lg:h-[500px] h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-8 py-3 px-2 lg:px-0">
        <div className="container mx-auto bg-[#F4F4FF] py-8 px-8 rounded-lg">
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2 w-full">
              <h3 className="font-sans lg:text-[35px] text-[25px] font-semibold">
                Contact Me
              </h3>
              <p className="font-sans lg:text-[18px] text-[14px] font-normal py-2">
                Your email address will not be published. Required fields are
                marked{" "}
              </p>
              <form action="" className="lg:mt-10 mt-3">
                <input
                  type="text"
                  placeholder="your name"
                  name=""
                  id=""
                  className="bg-[#FFF] px-2 py-4 pl-2 border-none outline-none rounded-r-full w-[300px] capitalize font-sans text-[18px] text-black mr-3 lg:mb-0 mb-3"
                />
                <input
                  type="text"
                  placeholder="your email address"
                  name=""
                  id=""
                  className="bg-[#FFF] px-2 py-4 pl-2 border-none outline-none rounded-r-full w-[300px] capitalize font-sans text-[18px] text-black"
                />
                <input
                  type="text"
                  placeholder="business topic"
                  name=""
                  id=""
                  className="bg-[#FFF] px-2 py-4 pl-2 border-none outline-none rounded-r-full lg:w-[610px] w-[300px] capitalize font-sans text-[18px] text-black my-4"
                />
                <textarea
                  name=""
                  id=""
                  placeholder="message"
                  className="bg-[#FFF] px-2 py-4 pl-2 border-none outline-none rounded-lg lg:w-[600px] w-[300px] lg:h-[200px] h-[100px] capitalize font-sans text-[18px] text-black my-4"
                ></textarea>
              </form>
              <button className="px-10 lg:mt-5 py-4 text-white font-sans text-[16px] bg-red-400 rounded-full">
                Send Message
              </button>
            </div>
            <div className="lg:w-2/5 w-full lg:block hidden">
              <img src={Tm} alt="" className="lg:h-[550px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamdetails;
