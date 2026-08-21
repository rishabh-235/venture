import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import StartupCard from "../StartupCard";

const StartupDisplay = () => {
  const [curr, setCurr] = useState(0);
  const children = [1, 2, 3, 4, 5, 6, 7, 8];

  const prev = () => {
    setCurr((prevCurr) =>
      prevCurr === 0 ? children.length - 1 : prevCurr - 1
    );
  };

  const next = () => {
    setCurr((prevCurr) =>
      prevCurr === children.length - 1 ? 0 : prevCurr + 1
    );
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className=" w-5/6 flex flex-col items-center justify-center ">
        {/* div for headings */}
        <div className="startdis mt-24">
          <h5 className=" tracking-wide font-[500] xl:font-[400] text-[3.1vw] text-gray-800">
            Explore startups raising now
          </h5>
          <h2 className="text-[2.1vw] xl:text-[1.3vw] tracking-wide font-[500] text-gray-700">
            Backed by top VCs And notable angles
          </h2>
        </div>

        {/* div for slider buttons */}
        <div className="flex mt-2 mb-3 w-full justify-end">
          <Button
            variant="outlined"
            className="flex items-center gap-3 py-2 px-3 mr-2"
            onClick={prev}
          >
            <span className="material-symbols-outlined">arrow_left_alt</span>
          </Button>

          <Button
            variant="outlined"
            className="flex items-center gap-3 py-2 px-3"
            onClick={next}
          >
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Button>
        </div>

        {/* div for diplay startups cards */}

        <div className="overflow-hidden relative flex w-[81vw] mb-12">
          {children.map((child, i) => (
            <div
              key={child}
              className=" transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              <StartupCard />
            </div>
          ))}
        </div>

        {/* div for explore startup button*/}
        <div className="mb-20">
          <Button className=" flex justify-center items-center bg-gray-800 h-12 hover:bg-black w-[320px]  mb-2 text-[15px] tracking-widest">
            Explore Startups
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartupDisplay;
