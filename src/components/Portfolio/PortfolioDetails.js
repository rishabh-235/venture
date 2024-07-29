import React from "react";
import { PopoverWithDescription } from "./CustomPopover";
import log from "../images/portfolio_empty_icon.svg";
import CollapseDefault from "./CancleInvestment.js";

export default function PortfolioDetails() {
  return (
    <div>
      <div className=" flex flex-col justify-center items-start mt-[3.7rem] w-[63rem] mb-[3.5rem]">
        <p className="w-[13.5rem] flex justify-between items-center text-[1.3rem] font-[500] text-gray-500 tracking-wide">
          Estimated Value
          <PopoverWithDescription />
        </p>
        <div className="flex justify-end items-center">
          <p className="flex justify-center items-center text-[3.2rem] ">
            <span class="text-[2.8rem] material-symbols-outlined font-[400]">
              currency_rupee
            </span>
            0
          </p>
          <p className=" text-gray-400 text-[1.2rem] font-[900] ml-5 mt-[1rem]">
            1x
          </p>
        </div>

        <div className="flex mt-[2rem] ml-2">
          <p className="flex justify-center items-center text-[1.7rem] font-[500]">
            <span class="material-symbols-outlined font-[400]">
              currency_rupee
            </span>
            0
            <p className=" ml-3 text-[1rem] text-gray-500 font-[500]">
              Invested
            </p>
          </p>

          <p className="flex justify-center items-center text-[1.7rem] font-[500] ml-8">
            <span class="material-symbols-outlined mr-1">add</span>
            <span class="material-symbols-outlined font-[400]">
              currency_rupee
            </span>
            0
            <p className=" ml-3 text-[1rem] text-gray-500 font-[500]">
              Unrealized
            </p>
          </p>

          <p className="flex justify-center items-center text-[1.7rem] font-[500] ml-8 mr-2">
            <span class="material-symbols-outlined mr-1">add</span>
            <span class="material-symbols-outlined font-[400]">
              currency_rupee
            </span>
            0
            <p className=" ml-3 text-[1rem] text-gray-500 font-[500]">
              Realized
            </p>
          </p>

          <PopoverWithDescription />
        </div>
      </div>
      <div className="flex flex-col justify-start items-center mt-[10rem] h-[44rem]">
        <div className="flex flex-col justify-center items-center w-[18rem]">
          <img src={log} alt="" className=" h-[10rem] w-[10rem]  mt-[3rem]" />
          <p className=" text-[1.5rem] font-[500] text-gray-500">
            Build your portfolio and start investing!
          </p>
          <div className="mt-[2rem]">
            <a
              href="/founder"
              data-ripple-light="true"
              class=" align-middle select-none text-center text-[0.7rem] font-[600] tracking-widest transition-all  disabled:pointer-events-none py-3.5 px-5 rounded-[0.2rem] bg-light-blue-800 text-white hover:shadow-lg hover:bg-light-blue-900 border-y border-x border-light-blue-800"
            >
              EXPLORE COMPANIES
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start mt-[5rem] mb-[4rem]"><CollapseDefault/></div>
    </div>
  );
}
