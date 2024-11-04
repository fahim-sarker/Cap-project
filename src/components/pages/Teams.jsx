import React from "react";
import Ban from "../../assets/ban1.png";
import { Link } from "react-router-dom";
import Team from "../Team";

const Teams = () => {
  return (
    <>
      <div className="bg-Footer lg:py-28 py-3  px-2 lg:px-0 bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <h2 className="lg:text-[45px] text-[20px] text-center font-sans text-white font-semibold">
            Team
          </h2>
          <h3 className="lg:text-[20px] text-[16px] text-center font-sans text-white font-semibold">
            <Link to="/">Home </Link>
            <span className="lg:text-[20px] text-[16px] text-center font-sans text-red-300 font-semibold">
              - Team
            </span>
          </h3>
          <img src={Ban} alt="" className="mx-auto mt-5" />
        </div>
      </div>
      <div className="">
          <Team />
      </div>
    </>
  );
};

export default Teams;
