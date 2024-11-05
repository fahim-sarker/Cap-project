import React from "react";
import { TbTargetArrow } from "react-icons/tb";

const Chose = () => {
  return (
    <div className="lg:py-28 py-5 lg:px-0 px-2 bg-background">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2 w-full">
            <h3 className="text-blue-500 font-sans lg:text-[20px] text-[16px] font-medium flex gap-x-3 items-center">
              <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
              Why Choose Ortencey
            </h3>
            <h2 className="text-black lg:text-[60px] text-[20px] font-bold font-sans">
              Reason For Choosing Our Digital Agency
            </h2>
            <p className="text-black text-[16px] font-normal font-sans lg:w-[600px] py-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majori suffered alteration in some form, by injected
              humour, or randomised word whic look even sligh believable. If you
              are going to use.
            </p>
            <div className="flex justify-between items-center mt-10">
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
          </div>
          <div className="lg:w-2/5 w-full flex items-center justify-center bg-gray-400 py-10 rounded-xl mt-20">
            <div className="w-[500px] h-[400px] rounded-lg bg-background2 relative">
              <h3 className="absolute bottom-0 lg:left-[30%] left-[20%] font-sans text-[22px] font-medium bg-white py-1 px-3 rounded-2xl">
                <span className="font-sans text-[40px] text-red-500">25</span>
                Years Experience
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chose;
