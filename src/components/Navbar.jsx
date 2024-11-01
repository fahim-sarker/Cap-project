import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaLongArrowAltRight, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#000000] opacity-80">
      <div className="container mx-auto">
        <div className="bg-[#fff] lg:py-5 px-2 py-2 rounded-l-full flex justify-between items-center">
          <div className="lg:w-1/5 w-2/5">
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-3/5 lg:flex hidden">
            <ul className="flex gap-x-10 items-center cursor-pointer relative">
              <li className="text-white flex justify-between items-center">
                Menu <RxCross2 className="mr-[20px]" />
              </li>
              {["home", "about", "service", "pages", "team", "news", "contact"].map((item) => (
                <li
                  key={item}
                  onClick={closeMenu}
                  className="relative group flex items-center text-[#000] font-sans capitalize font-medium hover:text-red-400 duration-300 ease-in-out"
                >
                  {item}
                  {["service", "pages", "team", "news"].includes(item) && (
                    <IoIosArrowDown className="ml-1" />
                  )}
                  <div className="absolute left-0 -bottom-[30px] w-full h-[3px] bg-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? <RxCross2 size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className="lg:block hidden w-1/5">
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 rounded-full border-2 border-[#3661FC] flex items-center justify-center font-sans hover:bg-[#3661FC] duration-300 ease-in-out hover:text-white cursor-pointer">
                <CiSearch className="font-sans text-[20px]" />
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-[#3661FC] flex items-center justify-center font-sans hover:bg-[#3661FC] duration-300 ease-in-out hover:text-white cursor-pointer">
                <IoBagOutline className="font-sans text-[20px]" />
              </div>
              <button className="flex gap-x-5 items-center py-3 px-10 bg-[#3661FC] rounded-full text-white font-sans text-[16px]">
                Free Quote
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`bg-black lg:hidden flex flex-col items-center py-5 h-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col gap-y-2 cursor-pointer">
            {["home", "about", "service", "pages", "team", "news", "contact"].map((item) => (
              <li key={item} onClick={closeMenu} className="text-[#fff] font-sans capitalize font-medium hover:text-red-300 duration-300 ease-in-out">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
