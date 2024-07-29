import React from "react";
import logo from "../images/documents.svg";

export default function TaxDocPage() {
  return (
    <div className="flex justify-center items-start w-[63rem] h-[30rem]">
      <div className="flex flex-col justify-center items-center mt-[3.5rem] w-[20rem] h-[18rem]">
        <img
          src={logo}
          alt="logo"
          className=" mb-[2rem] w-[6rem] h-[6rem]"
        />
        <p className="flex px-[1rem] text-[1.5rem] font-[500] text-gray-500 leading-[2rem]">
          You currently have no tax events.
        </p>
      </div>
    </div>
  );
}
