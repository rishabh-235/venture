import React from "react";
import { TestimonialCard } from "./FeaturedInvestor";
import profilelogo from "../images/IMG-20240329-WA0013.jpg";

export default function Overview() {
  return (
    <div className=" mt-[3rem]">
      <div className=" w-[43rem] flex flex-col justify-center items-start">
        <h2 className=" text-[1.9rem] text-gray-900 font-[500] tracking-tight w-full text-start">
          Highlights
        </h2>
        <div className=" flex justify-start items-center mt-8">
          <div className="flex justify-center items-center font-[500] rounded-[40px] h-[2.5rem] w-[2.5rem] mr-[0.8rem] border-[1px] border-black">
            1
          </div>
          <p className=" text-[0.95rem] text-gray-900 text-start tracking-wide font-[500]">
            The Curtiss 1, our launch product, is scheduled for production in
            Q4.
          </p>
        </div>

        <div className=" flex justify-start items-center mt-8">
          <div className="flex justify-center items-center font-[500] rounded-[40px] h-[2.5rem] w-[2.5rem] mr-[0.8rem] border-[1px] border-black">
            2
          </div>{" "}
          <p className=" text-[0.95rem] text-gray-900 text-start tracking-wide font-[500]">
            The first year of production is pre-sold.
          </p>
        </div>

        <div className=" flex justify-start items-center mt-8">
          <div className="flex justify-center items-center font-[500] rounded-[40px] h-[2.5rem] w-[2.5rem] mr-[0.8rem] border-[1px] border-black">
            3
          </div>{" "}
          <p className=" text-[0.95rem] text-gray-900 text-start tracking-wide font-[500]">
            Curtiss has 130 proprietary sets of long lead time components
            in-house.
          </p>
        </div>

        <div className=" flex justify-start items-center mt-8">
          <div className="flex justify-center items-center font-[500] rounded-[40px] h-[2.5rem] w-[2.5rem] mr-[0.8rem] border-[1px] border-black">
            4
          </div>{" "}
          <p className=" text-[0.95rem] text-gray-900 text-start tracking-wide font-[500]">
            These 130 Curtiss 1 motorcycles are scheduled for delivery over the
            next 36 months.
          </p>
        </div>

        <div className=" flex justify-start items-center mt-8">
          <div className="flex justify-center items-center font-[500] rounded-[40px] h-[2.5rem] w-[2.5rem] mr-[0.8rem] border-[1px] border-black">
            5
          </div>{" "}
          <p className=" text-[0.95rem] text-gray-900 text-start tracking-wide font-[500]">
            We project earning over $9M of gross profit from these 130 initial
            deliveries.
          </p>
        </div>

        <div className=" flex justify-start items-center mt-8">
          <div className="flex justify-center items-center font-[500] rounded-[40px] h-[2.5rem] w-[2.9rem] mr-[0.8rem] border-[1px] border-black">
            6
          </div>{" "}
          <p className=" text-[0.95rem] text-gray-900 text-start tracking-wide font-[500]">
            We project our total operating costs (including R&D and Sales) to be
            $5.25M for these 3 years.
          </p>
        </div>

        <div className=" flex justify-start items-center mt-8">
          <div className="flex justify-center items-center font-[500] rounded-[40px] h-[2.5rem] w-[2.9rem] mr-[0.8rem] border-[1px] border-black">
            7
          </div>{" "}
          <p className=" text-[0.95rem] text-gray-900 text-start tracking-wide font-[500]">
            This will make Curtiss the first and only electric motorcycle
            company to achieve net profitability.
          </p>
        </div>

        <div className=" flex justify-start items-center mt-8">
          <div className="flex justify-center items-center font-[500] rounded-[40px] h-[2.5rem] w-[2.5rem] mr-[0.8rem] border-[1px] border-black">
            8
          </div>{" "}
          <p className=" text-[0.95rem] text-gray-900 text-start tracking-wide font-[500]">
            Our dream: To design and handcraft the finest motorcycles of all.
          </p>
        </div>
      </div>

      <div className=" mt-[4rem] w-[43rem] flex flex-col justify-center items-start ">
        <h2 className="text-[2rem] text-gray-900 font-[600]  w-full text-start">
          Featured Investors
        </h2>
        <TestimonialCard />
        <div className="flex justify-start items-center mt-7 text-[0.9rem] text-black font-[500] tracking-wide">
          <span class="material-symbols-outlined mr-3 text-gray-400 text-[1.2rem]">
            account_circle
          </span>
          Other investors include{" "}
          <a href="/" className="underline decoration">
            Whoopi Goldberg
          </a>{" "}
          & 747 more
        </div>
      </div>

      <div className=" mt-[5.8rem] w-[43rem] flex flex-col justify-center items-start ">
        <h2 className="text-[1.9rem] text-gray-900 font-[600]  w-full text-start">
          Founder
        </h2>
        <div className="flex justify-between items-start mt-8">
          <div className="flex flex-col justify-start items-start w-[6rem]">
            <img
              src={profilelogo}
              alt=""
              className=" w-[6rem] h-[6rem] rounded-[40rem]"
            />
          </div>
          <div className=" flex flex-col w-[35rem] ml-8">
            <div className=" flex justify-between items-center">
              <h2 className="text-[1.2rem] tracking-wide font-[600]">Rishabh Gupta</h2>
              <p className=" tracking-wide font-[600] text-gray-400 mr-2">Co-founder, CEO & Chairman of the Board</p>
            </div>
            <div className=" mt-5 text-[0.9rem] text-gray-600 text-start leading-[1.3rem] font-[500]">
              Matt began his journey in this industry circa 1991 and created
              some of the world’s most iconic and novel v-twin designs over a
              25+ year span. Circa June 2016, Matt re-formed Curtiss,
              envisioning luxury motoring on two-wheels in a better way.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
