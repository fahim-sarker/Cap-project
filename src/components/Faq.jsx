import React, { useState } from "react";
import Fq from "../assets/faq.png";
import Fq1 from "../assets/faq1.png";
import Fq2 from "../assets/faq2.png";
import Fq3 from "../assets/faq3.png";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Faq = () => {
  let [show, setshow] = useState(true);
  let [showone, setshowone] = useState(false);
  let [showtwo, setshowtwo] = useState(false);
  let [showthree, setshowthree] = useState(false);

  return (
    <div className="lg:py-28 py-5 lg:px-0 px-2">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2 w-full">
            <h3 className="text-red-500 font-sans lg:text-[20px] text-[16px] font-medium">
              Common Questions
            </h3>
            <h2 className="text-black lg:text-[60px] text-[20px] font-bold font-sans">
              Frequently Asked Questions
            </h2>
            <div className="lg:flex justify-between mt-10">
              <div className="">
                <div className="flex gap-x-5 items-center bg-gray-300 rounded-full lg:px-5 px-2 lg:py-3 py-1 cursor-pointer">
                  <img src={Fq1} alt="" />
                  <h4 className="font-sans text-[22px] font-medium">
                    General Questions
                  </h4>
                </div>
                <div className="flex gap-x-5 items-center bg-gray-300 rounded-full lg:px-5 px-2 lg:py-3 py-1 cursor-pointer my-8">
                  <img src={Fq2} alt="" />
                  <h4 className="font-sans text-[22px] font-medium">
                    Community
                  </h4>
                </div>
                <div className="flex gap-x-5 items-center bg-gray-300 rounded-full lg:px-5 px-2 lg:py-3 py-1 cursor-pointer">
                  <img src={Fq3} alt="" />
                  <h4 className="font-sans text-[22px] font-medium">Support</h4>
                </div>
              </div>
              <div className="lg:mt-0 mt-3">
                <img src={Fq} alt="" />
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-full lg:mt-0 mt-5">
            <div className="">
              <div
                onClick={() => setshow(!show)}
                className="flex justify-between items-center cursor-pointer py-6 bg-gray-100 px-10 rounded-xl shadow-xl"
              >
                <p className="lg:text-[20px] text-[16px] font-sans font-bold">
                  Is it Full Digital Marketing Agency?
                </p>
                {show == true ? (
                  <RxCross2 className="text-blue-600 text-[25px]" />
                ) : (
                  <FaPlus className="text-blue-600 text-[25px]" />
                )}
              </div>
              {show && (
                <p className="lg:text-[20px] text-[16px] font-sans font-normal py-2 bg-gray-100 px-10 shadow-xl border-t-2 border-b-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  vitae sequi officia magni aliquid unde id exercitationem.
                  Omnis, vel dolore! sho setshow onClick.
                </p>
              )}
            </div>
            <div className=" my-8">
              <div
                onClick={() => setshowone(!showone)}
                className="flex justify-between items-center cursor-pointer py-6 bg-gray-100 px-10 rounded-xl shadow-xl"
              >
                <p className="lg:text-[20px] text-[16px] font-sans font-bold">
                  How to Create my Project in Agency?
                </p>
                {showone == true ? (
                  <RxCross2 className="text-blue-600 text-[25px]" />
                ) : (
                  <FaPlus className="text-blue-600 text-[25px]" />
                )}
              </div>
              {showone && (
                <p className="lg:text-[20px] text-[16px] font-sans font-normal py-2 bg-gray-100 px-10 shadow-xl border-t-2 border-b-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  vitae sequi officia magni aliquid unde id exercitationem.
                  Omnis, vel dolore! sho setshow onClick.
                </p>
              )}
            </div>
            <div className="">
              <div
                onClick={() => setshowtwo(!showtwo)}
                className="flex justify-between items-center cursor-pointer py-6 bg-gray-100 px-10 rounded-xl shadow-xl"
              >
                <p className="lg:text-[20px] text-[16px] font-sans font-bold">
                  How to Work in Process of Digital Agency?
                </p>
                {showtwo == true ? (
                  <RxCross2 className="text-blue-600 text-[25px]" />
                ) : (
                  <FaPlus className="text-blue-600 text-[25px]" />
                )}
              </div>
              {showtwo && (
                <p className="lg:text-[20px] text-[16px] font-sans font-normal py-2 bg-gray-100 px-10 shadow-xl border-t-2 border-b-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  vitae sequi officia magni aliquid unde id exercitationem.
                  Omnis, vel dolore! sho setshow onClick.
                </p>
              )}
            </div>
            <div className="my-8">
              <div
                onClick={() => setshowthree(!showthree)}
                className="flex justify-between items-center cursor-pointer py-6 bg-gray-100 px-10 rounded-xl shadow-xl"
              >
                <p className="lg:text-[20px] text-[16px] font-sans font-bold">
                  How to join your referral program?
                </p>
                {showthree == true ? (
                  <RxCross2 className="text-blue-600 text-[25px]" />
                ) : (
                  <FaPlus className="text-blue-600 text-[25px]" />
                )}
              </div>
              {showthree && (
                <p className="lg:text-[20px] text-[16px] font-sans font-normal py-2 bg-gray-100 px-10 shadow-xl border-t-2 border-b-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  vitae sequi officia magni aliquid unde id exercitationem.
                  Omnis, vel dolore! sho setshow onClick.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
