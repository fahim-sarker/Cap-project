import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import pro from "../assets/project.png";
import Pro1 from "../assets/project1.png";
import Pro2 from "../assets/project2.png";

const Projects = () => {
  return (
    <div className="lg:py-24 lg:px-0 px-2">
      <div className="container mx-auto">
        <div className="bg-blue-800 lg:px-20 px-2 lg:py-20 py-5 rounded-xl relative">
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2 w-full lg:pt-20 lg:static flex lg:justify-start justify-center">
              <iframe
                width="600 "
                height="500"
                className="rounded-xl lg:h-[500px] h-[300px]"
                src="https://www.youtube.com/embed/GGf1JjSAKP4?si=uk_xCfDWiBcvOoS1"
                allowfullscreen
              ></iframe>
            </div>
            <div className="lg:w-2/5 w-full lg:pt-20 pt-3">
              <h3 className="text-white font-sans lg:text-[20px] text-[16px] font-medium flex gap-x-3 items-center">
                <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-500" />
                Make an Appointment
              </h3>
              <h2 className="text-white lg:text-[45px] text-[20px] font-sans pt-2 font-medium">
                Start New Project With Us
              </h2>
              <form action="" className="lg:mt-10 mt-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="your name"
                  className="mr-10 lg:w-[250px] w-[300px] lg:pb-0 mb-5 h-12 rounded-full outline-none border-none pl-3 text-[16px] capitalize font-sans"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="email address"
                  className="lg:w-[250px] w-[300px] h-12 rounded-full outline-none border-none pl-3 text-[16px] capitalize font-sans"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="business topic"
                  className="lg:w-[550px] w-[300px] h-12 rounded-full outline-none border-none pl-3 text-[16px] capitalize font-sans mt-5"
                />
                <textarea
                  name=""
                  placeholder="your message"
                  id=""
                  className="lg:w-[550px] w-[320px] h-40 rounded-3xl outline-none border-none pl-3 text-[16px] capitalize font-sans mt-5 py-3"
                ></textarea>
              </form>
              <button className="px-10 lg:mt-5 py-4 text-white font-sans text-[16px] bg-red-400 rounded-full">
                Send Message
              </button>
            </div>
          </div>
          <div
            className="bg-orange-500 w-[1000px] h-[150px] lg:block hidden px-5 py-5 border-8 border-white absolute
           -top-[7%] left-[20%] rounded-full"
          >
            <div className="flex justify-between items-center">
              <div className="w-[30%] flex gap-x-5 items-center">
                <div className=" w-[80px] bg-white h-[80px] rounded-full flex items-center justify-center">
                  <img src={pro} alt="" />
                </div>
                <div className="">
                  <h3 className="font-sans text-[45px] font-medium text-white">
                    1500
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-white">
                    Project Complate
                  </p>
                </div>
              </div>
              <div className="w-[30%] flex gap-x-5 items-center">
                <div className=" w-[80px] bg-white h-[80px] rounded-full flex items-center justify-center">
                  <img src={Pro1} alt="" />
                </div>
                <div className="">
                  <h3 className="font-sans text-[45px] font-medium text-white">
                    8562
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-white">
                    Satisfied Clients
                  </p>
                </div>
              </div>
              <div className="w-[30%] flex gap-x-5 items-center">
                <div className=" w-[80px] bg-white h-[80px] rounded-full flex items-center justify-center">
                  <img src={Pro2} alt="" />
                </div>
                <div className="">
                  <h3 className="font-sans text-[45px] font-medium text-white">
                    35
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-white">
                    Awards Win
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
