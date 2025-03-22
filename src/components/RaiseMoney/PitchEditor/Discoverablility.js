import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePitchData } from "../../../redux/slice/pitchDataSlice";

function Discoverablility() {
  const [discoverData, setDiscoverData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name !== "access") e.preventDefault();
    const { name, value } = e.target;

    setDiscoverData((prevState) => ({
      ...prevState,
      textData: {
        ...prevState.textData,
        ...{ [name]: value },
      },
    }));

    dispatch(
      updatePitchData({
        pitchName: "discoverability",
        data: {
          textData: {
            ...discoverData.textData,
            ...{ [name]: value },
          },
        },
      })
    );
  };

  return (
    <div>
      <div className=" text-left w-[47%] ml-[2.5rem] mb-[0.2rem]">
        <p className="text-[1.6rem] font-[600] text-gray-900">
          Discoverability
        </p>
        <p className=" w-[80%] text-[1.2rem] font-[500] text-blue-gray-800 py-1 mt-[0.1rem] mb-3">
          Who should be able to see your campaign?
        </p>
      </div>

      <div className=" ml-[2.5rem] w-1/2">
        <div class=" flex items-center mb-[1.05rem]">
          <input
            id="default-radio-1"
            type="radio"
            value="public"
            name="access"
            onChange={handleChange}
            class="w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class=" flex ms-2 text-[0.93rem] font-medium text-gray-800 dark:text-gray-300"
          >
            <p className="flex items-center cursor-pointer">
              As public as possible
            </p>
            <p class=" peer flex cursor-pointer">
              <button type="button">
                <svg
                  class="w-4 h-4 ms-2 text-gray-400 hover:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Show information</span>
              </button>
            </p>
            <div
              data-popover
              id="popover-description-2"
              role="tooltip"
              class=" peer-hover:opacity-100 z-50 peer-hover:-translate-x-[10rem] peer-hover:duration-0 absolute inline-block placeholder:text-blue-gray-200 bg-[#16263d] rounded-[5px] opacity-0 w-[19rem] top-[5rem] ml-[21.5rem] shadow-md shadow-gray-800"
            >
              <div class="p-4 space-y-2 text-start">
                <p className=" text-[0.75rem] text-white font-[600] leading-[1rem]">
                  After raising $50k and with approval from our team, you'll
                  appear on Wefunder's Explore page. After raising $50k, you'll
                  appear in Wefunder's marketing emails. You direct Wefunder to
                  send out communications about your fundraise to the maximum
                  extent possible, using the language on your profile.
                </p>
              </div>
            </div>
          </label>
        </div>

        <div class=" flex items-center mb-[1.05rem]">
          <input
            id="default-radio-1"
            type="radio"
            value="private"
            name="access"
            onChange={handleChange}
            class="w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class=" flex ms-2 text-[0.93rem] font-medium text-gray-800 dark:text-gray-300"
          >
            <p className="flex items-center cursor-pointer">
              As private as possible
            </p>
            <p class=" peer flex cursor-pointer">
              <button type="button">
                <svg
                  class="w-4 h-4 ms-2 text-gray-400 hover:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Show information</span>
              </button>
            </p>
            <div
              data-popover
              id="popover-description-2"
              role="tooltip"
              class=" peer-hover:opacity-100 z-50 peer-hover:-translate-x-[10rem] peer-hover:duration-0 absolute inline-block placeholder:text-blue-gray-200 bg-[#16263d] rounded-[5px] opacity-0 w-[19rem] top-[7.5rem] ml-[21.7rem] shadow-md shadow-gray-800"
            >
              <div class="p-4 space-y-2 text-start">
                <p className=" text-[0.75rem] text-white font-[600] leading-[1rem]">
                  After filing your Form C, your company will only appear in the
                  'All Raises' section of Wefunder's Explore page. You will not
                  appear in Wefunder's marketing emails.
                </p>
              </div>
            </div>
          </label>
        </div>

        <div className=" mt-[3rem] relative ">
          <input
            id="venturelistURL"
            className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 pl-5 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] focus:hover:border-blue-500 hover:border-gray-700 mb-3"
            type="text"
            name="ventrelistURL"
            placeholder=""
            onChange={handleChange}
          />
          <p className=" transition-all peer-focus:top-2 peer-focus:text-[1.2rem] peer-focus:left-4 peer-focus:text-gray-500 text-gray-400 font-[500] absolute top-4 left-3 material-symbols-outlined">
            link
          </p>
          <label
            htmlFor="venturelistURL"
            className="flex transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-9 top-2 text-gray-500 font-[500] text-[0.8rem]"
          >
            VentureList URL
          </label>
        </div>
      </div>
    </div>
  );
}

export default Discoverablility;
