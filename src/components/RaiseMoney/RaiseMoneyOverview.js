import React from "react";
import { ReactComponent as MySVG } from "../images/bg-svg.svg";
import { Link } from "react-router-dom";

export default function RaiseMoneyOverview() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[75%] h-[4.5rem] flex justify-center items-center mt-8 border rounded-md px-4">
          <div className=" w-full text-[1.45rem] text-start text-gray-900 font-[600]">
            Gayatri Enterprises
          </div>
          <span class="material-symbols-outlined text-[1.8rem] text-gray-500 p-2">
            <button>more_horiz</button>{" "}
          </span>
        </div>
        <div className=" w-[75%] h-[26.2rem] mt-6 border rounded-md border-l-4 border-l-[#0a76d1]">
          <MySVG className=" w-[100%] h-[100%]"  fill="blue" style={{zIndex: 5}} />
        </div>
        <div className=" gap-4 flex flex-col justify-center items-center -mt-[20rem]">
            <h1 className=" text-[1.4rem] text-gray-700 font-[600]">Complete your pitch</h1>
            <p className=" text-[0.9rem] font-[500] w-[37rem] tracking-wide">Before you can start collecting reservations, fill out at least 2 Highlights, your Pitch, and your Contract.</p>
            <Link to={"/register_startup/editpitch/basics"} className="gap-1 mb-[10rem] rounded-lg text-white text-[0.9rem] font-[800] flex justify-center items-center bg-[#16263d] py-[0.55rem] px-6">
              Complete Pitch
            </Link>
          </div>
      </div>
      <button className="gap-1 mb-[10rem] sticky rounded-lg text-white text-[0.9rem] font-[800] flex justify-center items-center bg-[#16263d] py-[0.55rem] mt-[2rem] top-0 px-7 ml-[79rem]">
        <span class="material-symbols-outlined text-[1.2rem]">help</span>
        Questions?
      </button>
    </>
  );
}
