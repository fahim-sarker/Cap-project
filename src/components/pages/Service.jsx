import React from "react";
import { Link } from "react-router-dom";
import Ban from "../../assets/ban1.png";
import { TbTargetArrow } from "react-icons/tb";
import Pric1 from "../../assets/price.png";
import Pric2 from "../../assets/price1.png";
import Pric3 from "../../assets/price2.png";
import Test from "../../assets/testimonial.jpg";
import Test1 from "../../assets/testimonial1.jpg";
import Testi from "../../assets/ts.png";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Service = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay : true,
    Autoplayspeed : 500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-Footer lg:py-28 py-3  px-2 lg:px-0 bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h2 className="lg:text-[45px] text-[20px] text-center font-sans text-white font-semibold">
           Service
          </h2>
          <h3 className="lg:text-[20px] text-[16px] text-center font-sans text-white font-semibold">
            <Link to="/">Home </Link>
            <span className="lg:text-[20px] text-[16px] text-center font-sans text-red-300 font-semibold">
              - Service
            </span>
          </h3>
          <img src={Ban} alt="" className="mx-auto mt-5" />
        </div>
      </div>
      <div className="lg:py-28 py-3 lg:px-0 px-2">
        <div className="container mx-auto">
          <h3 className="text-red-400 font-sans lg:text-[20px] text-[16px] font-medium flex justify-center gap-x-3 items-center">
            <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
            Our Services
          </h3>
          <h2 className="text-black lg:text-[60px] text-[16px] font-bold font-sans text-center">
            Best Quality Services
          </h2>
          <div className="lg:flex justify-between items-center bg-[#F4F4F4] py-4 px-5 rounded-xl mt-8 group lg:hover:border-2 lg:border-orange-300 duration-300 ease-in-out">
            <div className="lg:w-[25%] w-full bg-[#CCCCCC] h-[197px] rounded-2xl"></div>
            <div className="lg:w-[50%] w-full">
              <h3 className="text-black lg:text-[30px] text-[16px] lg:text-start text-center lg:mt-0 mt-3 font-bold font-sans">
                Search Engine Optimization
              </h3>
              <p className="font-sans lg:text-[18px] text-[14px] lg:text-start text-center">
                There are many variations of passages of Lorem Ipsusm available,
                but the majority our as have suffered alteration in some form,
                by injected humour, or randomised word which don't worry a look
                even sligh believable. If you are going to use a passage.
              </p>
            </div>
            <div className="lg:w-[20%] w-full flex justify-center">
              <button className="px-10 lg:mt-5 py-3 text-black group-hover:text-white font-sans text-[18px] border-2 border-red-400 group-hover:bg-orange-400 rounded-full duration-500 ease-in-out lg:my-0 my-3">
                <Link to="/servicedetails">Read More</Link>
              </button>
            </div>
          </div>
          <div className="lg:flex justify-between items-center bg-[#F4F4F4] py-4 px-5 rounded-xl mt-8 group lg:hover:border-2 lg:border-orange-300 duration-300 ease-in-out">
            <div className="lg:w-[25%] w-full bg-[#CCCCCC] h-[197px] rounded-2xl"></div>
            <div className="lg:w-[50%] w-full">
              <h3 className="text-black lg:text-[30px] text-[16px] lg:text-start text-center lg:mt-0 mt-3 font-bold font-sans">
                Web Design & Development
              </h3>
              <p className="font-sans lg:text-[18px] text-[14px] lg:text-start text-center">
                There are many variations of passages of Lorem Ipsusm available,
                but the majority our as have suffered alteration in some form,
                by injected humour, or randomised word which don't worry a look
                even sligh believable. If you are going to use a passage.
              </p>
            </div>
            <div className="lg:w-[20%] w-full flex justify-center">
              <button className="px-10 lg:mt-5 py-3 text-black group-hover:text-white font-sans text-[18px] border-2 border-red-400 group-hover:bg-orange-400 rounded-full duration-500 ease-in-out lg:my-0 my-3">
              <Link to="/servicedetails">Read More</Link>
              </button>
            </div>
          </div>
          <div className="lg:flex justify-between items-center bg-[#F4F4F4] py-4 px-5 rounded-xl mt-8 group lg:hover:border-2 lg:border-orange-300 duration-300 ease-in-out">
            <div className="lg:w-[25%] w-full bg-[#CCCCCC] h-[197px] rounded-2xl"></div>
            <div className="lg:w-[50%] w-full">
              <h3 className="text-black lg:text-[30px] text-[16px] lg:text-start text-center lg:mt-0 mt-3 font-bold font-sans">
                Email and Content Marketing
              </h3>
              <p className="font-sans lg:text-[18px] text-[14px] lg:text-start text-center">
                There are many variations of passages of Lorem Ipsusm available,
                but the majority our as have suffered alteration in some form,
                by injected humour, or randomised word which don't worry a look
                even sligh believable. If you are going to use a passage.
              </p>
            </div>
            <div className="lg:w-[20%] w-full flex justify-center">
              <button className="px-10 lg:mt-5 py-3 text-black group-hover:text-white font-sans text-[18px] border-2 border-red-400 group-hover:bg-orange-400 rounded-full duration-500 ease-in-out lg:my-0 my-3">
              <Link to="/servicedetails">Read More</Link>
              </button>
            </div>
          </div>
          <div className="lg:flex justify-between items-center bg-[#F4F4F4] py-4 px-5 rounded-xl mt-8 group lg:hover:border-2 lg:border-orange-300 duration-300 ease-in-out">
            <div className="lg:w-[25%] w-full bg-[#CCCCCC] h-[197px] rounded-2xl"></div>
            <div className="lg:w-[50%] w-full">
              <h3 className="text-black lg:text-[30px] text-[16px] lg:text-start text-center lg:mt-0 mt-3 font-bold font-sans">
                Social Media Network Marketing
              </h3>
              <p className="font-sans lg:text-[18px] text-[14px] lg:text-start text-center">
                There are many variations of passages of Lorem Ipsusm available,
                but the majority our as have suffered alteration in some form,
                by injected humour, or randomised word which don't worry a look
                even sligh believable. If you are going to use a passage.
              </p>
            </div>
            <div className="lg:w-[20%] w-full flex justify-center">
              <button className="px-10 lg:mt-5 py-3 text-black group-hover:text-white font-sans text-[18px] lg:border-2 borderlg:-red-400 group-hover:bg-orange-400 rounded-full duration-500 ease-in-out lg:my-0 my-3">
              <Link to="/servicedetails">Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-28 py-3 lg:px-0 px-2 bg-background">
        <div className="container mx-auto">
          <h3 className="text-blue-400 font-sans lg:text-[20px] text-[16px] font-medium flex justify-center gap-x-3 items-center">
            <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
            Work Prosses
          </h3>
          <h2 className="text-black lg:text-[60px] text-[16px] font-bold font-sans text-center">
            How We Work!
          </h2>
          <div className="lg:lg:flex justif text-[16px]y-between gap-x-5 mt-5">
            <div className="lg:w-1/3 w-full lg:my-0 my-2 bg-[#FFF] px-8 py-5 rounded-xl shadow-xl group">
              <div className="flex gap-x-10 items-center justify-center">
                <div className="">
                  <div className="bg-orange-400 group-hover:bg-blue-500 duration-500 ease-in-out h-[70px] w-[70px] rounded-full flex items-center justify-center mb-3">
                    <img src={Pric1} alt="" className="" />
                  </div>
                  <div className="bg-white h-[70px] w-[70px] rounded-full flex items-center justify-center">
                    <p className="font-sans text-[40px] font-medium text-gray-300">
                      01
                    </p>
                  </div>
                </div>
                <div className="">
                  <h3 className="font-sans lg:text-[30px] text-[16px] font-bold pb-3 group-hover:text-blue-500 duration-500 ease-in-out">
                    Business Planning
                  </h3>
                  <h3 className=" font-sans lg:text-[18px] text-[14px] font-medium">
                    There are many variations of pass Lorem Ipsum available, but
                    the a have suffered alteration.
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full lg:my-0 my-2 bg-[#FFF] px-8 py-5 rounded-xl shadow-xl group">
              <div className="flex gap-x-10 items-center justify-center">
                <div className="">
                  <div className="bg-orange-400 group-hover:bg-blue-500 duration-500 ease-in-out h-[70px] w-[70px] rounded-full flex items-center justify-center mb-3">
                    <img src={Pric2} alt="" className="" />
                  </div>
                  <div className="bg-white h-[70px] w-[70px] rounded-full flex items-center justify-center">
                    <p className="font-sans text-[40px] font-medium text-gray-300">
                      02
                    </p>
                  </div>
                </div>
                <div className="">
                  <h3 className="font-sans lg:text-[30px] text-[16px] font-bold pb-3 group-hover:text-blue-500 duration-500 ease-in-out">
                    Market research
                  </h3>
                  <h3 className=" font-sans lg:text-[18px] text-[14px] font-medium">
                    There are many variations of pass Lorem Ipsum available, but
                    the a have suffered alteration.
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full lg:my-0 my-2 bg-[#FFF] px-8 py-5 rounded-xl shadow-xl group">
              <div className="flex gap-x-10 items-center justify-center">
                <div className="">
                  <div className="bg-orange-400 group-hover:bg-blue-500 duration-500 ease-in-out h-[70px] w-[70px] rounded-full flex items-center justify-center mb-3">
                    <img src={Pric3} alt="" className="" />
                  </div>
                  <div className="bg-white h-[70px] w-[70px] rounded-full flex items-center justify-center">
                    <p className="font-sans text-[40px] font-medium text-gray-300">
                      03
                    </p>
                  </div>
                </div>
                <div className="">
                  <h3 className="font-sans lg:text-[30px] text-[16px] font-bold pb-3 group-hover:text-blue-500 duration-500 ease-in-out">
                    Completely Solution
                  </h3>
                  <h3 className=" font-sans lg:text-[18px] text-[14px] font-medium">
                    There are many variations of pass Lorem Ipsum available, but
                    the a have suffered alteration.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <div className="container mx-auto lg:py-28 py-3 lg:block hidden">
      <h3 className="text-blue-500 font-sans lg:text-[20px] text-[16px] font-medium flex gap-x-3 items-center justify-center">
        <TbTargetArrow className="font-sans lg:text-[25px] text-[18px] text-red-400" />
        Testimonial
      </h3>
      <h2 className="text-black lg:text-[60px] text-[16px] font-bold font-sans text-center">
        What Our Client Say
      </h2>
      <Slider {...settings}>
        <div className="">
          <div className="flex justify-between mt-10 items-center">
            <div className="w-[50%]">
              <img src={Test} alt="Testimonial" className="rounded-lg" />
            </div>
            <div className="w-[45%] mt-5">
              <div className="flex justify-between">
                <img src={Testi} alt="Client" />
                <ul className="bg-[#F4F4F4] px-3 py-2 rounded-full flex items-center gap-x-5">
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                </ul>
              </div>
              <p className="font-sans text-[20px] font-normal py-10">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form by injected
                humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything embarrassing.
              </p>
              <h2 className="font-sans text-[20px] font-semibold pb-1">Kristin Waon</h2>
              <h3 className="font-sans text-[18px]">Web Designer</h3>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between mt-10 items-center">
            <div className="w-[50%]">
              <img src={Test1} alt="Testimonial" className="rounded-lg w-full h-[500px]" />
            </div>
            <div className="w-[45%] mt-5">
              <div className="flex justify-between">
                <img src={Testi} alt="Client" />
                <ul className="bg-[#F4F4F4] px-3 py-2 rounded-full flex items-center gap-x-5">
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                </ul>
              </div>
              <p className="font-sans text-[20px] font-normal py-10">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form by injected
                humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything embarrassing.
              </p>
              <h2 className="font-sans text-[20px] font-semibold pb-1">Kristin Hanby</h2>
              <h3 className="font-sans text-[18px]">Digital Marketer</h3>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between mt-10 items-center">
            <div className="w-[50%]">
              <img src={Test} alt="Testimonial" className="rounded-lg w-full h-[500px]" />
            </div>
            <div className="w-[45%] mt-5">
              <div className="flex justify-between">
                <img src={Testi} alt="Client" />
                <ul className="bg-[#F4F4F4] px-3 py-2 rounded-full flex items-center gap-x-5">
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                </ul>
              </div>
              <p className="font-sans text-[20px] font-normal py-10">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form by injected
                humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything embarrassing.
              </p>
              <h2 className="font-sans text-[20px] font-semibold pb-1">Kristin Hanby</h2>
              <h3 className="font-sans text-[18px]">Digital Marketer</h3>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between mt-10 items-center">
            <div className="w-[50%]">
              <img src={Test1} alt="Testimonial" className="rounded-lg w-full h-[500px]" />
            </div>
            <div className="w-[45%] mt-5">
              <div className="flex justify-between">
                <img src={Testi} alt="Client" />
                <ul className="bg-[#F4F4F4] px-3 py-2 rounded-full flex items-center gap-x-5">
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                  <li className="text-orange-500 text-[25px]"><FaStar /></li>
                </ul>
              </div>
              <p className="font-sans text-[20px] font-normal py-10">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form by injected
                humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything embarrassing.
              </p>
              <h2 className="font-sans text-[20px] font-semibold pb-1">Kristin Hanby</h2>
              <h3 className="font-sans text-[18px]">Digital Marketer</h3>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </>
  );
};

export default Service;
