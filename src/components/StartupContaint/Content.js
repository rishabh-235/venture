import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Content() {
  return (
    <>
      <div className="flex justify-start items-center w-full h-auto mt-[2.5rem] sticky top-0 z-20 bg-white">
        <div className="flex justify-center items-center w-auto h-[3.6rem]">
          <Link className="flex justify-center items-center text-[0.92rem] tracking-wide text-blue-gray-400 font-[600] h-[3.6rem] p-2 hover:text-gray-600"><p>OVERVIEW</p></Link>
          <Link className="flex justify-center items-center text-[0.92rem] tracking-wide text-blue-gray-400 ml-3 font-[600] h-[3.6rem] p-2 hover:text-gray-600"><p>DETAILS</p></Link>
          <Link className="flex justify-center items-center text-[0.92rem] tracking-wide text-blue-gray-400 ml-3 font-[600] h-[3.6rem] p-2 hover:text-gray-600"><p>UPDATES</p></Link>
          <Link className="flex justify-center items-center text-[0.92rem] tracking-wide text-blue-gray-400 ml-3 font-[600] h-[3.6rem] p-2 hover:text-gray-600"><p>WHAT PEOPLE SAY</p></Link>
          <Link className="flex justify-center items-center text-[0.92rem] tracking-wide text-blue-gray-400 ml-3 font-[600] h-[3.6rem] p-2 hover:text-gray-600"><p>ASK A QUESTION</p></Link>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
