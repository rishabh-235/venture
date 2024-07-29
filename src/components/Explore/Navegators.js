import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navegators() {
  return (
    <>
      <div className=" flex w-[78rem] h-[9rem]">
        <Link className=" h-[6rem]" to="founder">
          <div class="h-[5rem] flex justify-center items-center w-[17rem] rounded-md bg-gradient-to-br from-blue-700 via-purple-700 to-purple-700 mt-5 mb-14 mr-5 p-[0.1rem]">
            <div class="flex flex-col h-full w-[16.8rem] items-center justify-center bg-white rounded-md">
              <div className=" w-[15rem] text-[1rem] text-start font-[600] bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 bg-clip-text text-transparent ">
                Founder
              </div>
              <div className=" w-[15rem] text-[0.8rem] text-start text-gray-400 font-[500]">
                Find startups you believe in
              </div>
            </div>
          </div>
        </Link>

        <Link className=" h-[6rem]" to="topinvestor">
          <div class="h-[5rem] flex justify-center items-center w-[17rem] rounded-md bg-gradient-to-br from-blue-700 via-purple-700 to-purple-700 mt-5 mb-14 mr-5 p-[0.08rem]">
            <div class="flex flex-col h-full w-[16.8rem] items-center justify-center bg-white rounded-md">
              <div className=" w-[15rem] text-[1rem] text-start font-[600]">
                Top Investors
              </div>
              <div className=" w-[15rem] text-[0.8rem] text-start text-gray-400 font-[500]">
                Co-invest with those you respect
              </div>
            </div>
          </div>
        </Link>

        <Link className=" h-[6rem]">
          <div class="h-[5rem] flex justify-center items-center w-[17rem] rounded-md bg-gradient-to-br from-blue-700 via-purple-700 to-purple-700 mt-5 mb-14 mr-5 p-[0.08rem]">
            <div class="flex flex-col h-full w-[16.8rem] items-center justify-center bg-white rounded-md">
              <div className=" w-[15rem] text-[1rem] text-start font-[600]">
                Research & Reviews
              </div>
              <div className=" w-[15rem] text-[0.8rem] text-start text-gray-400 font-[500]">
                See why people are investing
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
