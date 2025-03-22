import React from "react";

function FeaturedInvestor() {
  return (
    <div>
      <div className=" text-left w-1/2 ml-[2.5rem] mb-[0.2rem]">
        <p className="text-[1.6rem] font-[600] text-gray-900">
          Featured Investors
        </p>
        <p className=" w-[80%] text-[0.9rem] font-[500] text-blue-gray-500 py-1 mt-1 mb-3">
          Angel investors, VC firms and any other noteworthy individuals or
          institutions that have invested in your company. To be live on
          Wefunder's explore page, your first featured investor must have a
          photo and quote.
        </p>
      </div>

      <div className=" ml-[2.5rem] relative">
        <input
          id="search"
          className=" placeholder:text-blue-gray-200 placeholder:text-[0.98rem] focus:placeholder:text-transparent focus:ring-transparent focus:border-2 focus:border-black pl-9 -ml-2 flex justify-center items-center text-[1.05rem] tracking-wider pt-2 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700"
          type="text"
          name="search"
          placeholder="Who has invested in your company?"
          //   value={tagline}
        />
        <label
          htmlFor="search"
          className="flex absolute top-[1.2rem] text-gray-400  text-[0.8rem]"
        >
          <span class=" material-symbols-outlined">search</span>
        </label>
      </div>
    </div>
  );
}

export default FeaturedInvestor;
