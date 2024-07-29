import React from "react";
import SlickSlider from "./SlickSlider";
import Startupview from "./Startupview";
import CardPlacehoderSkeleton from "./CardPlacehoderSkeleton.js";

export default function Founders() {
  let cards = Array.from(Array(8).keys()).map((x) => x + 1);

  return (
    <>
      <div>
        <h1 className=" w-[78rem] text-[1.82rem] text-gray-900 text-start font-[600] tracking-wide">
          Invest in founders{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            building the future
          </span>
        </h1>
        <p className=" flex justify-start items-center text-[1.2rem] text-gray-400 font-[600] text-start tracking-wider mt-2">
          Invest as little as{"   "}
          <span class="material-symbols-outlined ml-[0.5rem]">
            currency_rupee
          </span>{" "}
          10000
        </p>
      </div>
      <SlickSlider />
      <Startupview />
      <div className="grid grid-cols-4 gap-6 ml-3">
        {cards.map((card, index) => (
          <div key={index} className="">
            <CardPlacehoderSkeleton />
          </div>
        ))}
      </div>
    </>
  );
}
