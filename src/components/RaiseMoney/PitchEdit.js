import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PitchEdit() {
  const pitchData = useSelector((state) => state.pitchData);

  const pitchDataSubmission = async () => {
    console.log(pitchData);
    try {
        const response = await axios.post(`http://localhost:8000/api/v1/startup/editpitch`, pitchData, { withCredentials: true });

        console.log("Response:", response);
    } catch (error) {
        console.error("Error submitting form data:", error);
        throw error;
    }
  };

  return (
    <div className="bottomelement h-[34.4rem] overflow-hidden">
      <nav
        class="flex px-5 py-3 text-gray-700 bg-gray-50 mt-1 z-30"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a
              href="/"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Gayatri Enterprises
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="/"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Overview
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Edit campaign
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className=" overflow-hidden flex h-[35rem]">
        <div className=" flex flex-col justify-center items-center w-[23%]  gap-3 overflow-y-scroll z-10 py-[6rem]">
          <div className=" flex flex-col justify-center items-center text-start w-full mt-[5rem]  px-5">
            <h2 className=" w-full text-start text-[1.09rem] font-[700] pb-2">
              Part 1: The Pitch
            </h2>
            <Link
              to={"basics"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Basics
            </Link>
            <Link
              to={"highlights"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Highlights
            </Link>
            <Link
              to={"team"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Team
            </Link>
            <Link
              to={"pitch_editor"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Pitch
            </Link>
            <Link
              to={"featured_investor"}
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Featured Investor
            </Link>
          </div>
          <div className=" flex flex-col justify-center items-center text-start w-full px-5">
            <h2 className=" w-full text-start text-[1.09rem] font-[700] pb-2">
              Part 2: The Terms
            </h2>
            <Link
              to="contract"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Contract
            </Link>
            <Link
              to="perks"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Perks
            </Link>
          </div>
          <div className=" flex flex-col justify-center items-center text-start w-full px-5">
            <h2 className=" w-full text-start text-[1.09rem] font-[700] pb-2">
              Part 3: The Raise
            </h2>
            <Link
              to="funding_goal"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Funding Goals
            </Link>
            <Link
              to="discoverability"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Discoverability
            </Link>
            <Link
              to="extra"
              className=" w-full text-start text-[1.06rem] text-gray-500 font-[500] px-4 py-3 rounded-sm hover:bg-[#eff2f7]"
            >
              Extras
            </Link>
          </div>
        </div>
        <div className=" w-full overflow-y-scroll relative">
          <Outlet />
        </div>
      </div>

      <div className=" flex fixed w-[100%] bottom-0 h-[5rem] z-30 justify-center items-center border-2 bg-white">
        <button
          className="gap-1 rounded-lg text-white text-[0.9rem] font-[800] flex justify-center items-center bg-[#16263d] py-[0.55rem] px-6"
          onClick={pitchDataSubmission}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
