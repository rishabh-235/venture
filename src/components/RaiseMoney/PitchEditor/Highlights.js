import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePitchData } from "../../../redux/slice/pitchDataSlice";

function Highlights() {
  const dispatch = useDispatch();
  const [highlightsData, setHighlightsData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    setHighlightsData((prevState) => ({
      ...prevState,
      textData: {
        ...prevState.textData,
        ...{ [name]: value },
      },
    }));

    dispatch(
      updatePitchData({
        pitchName: "highlights",
        data: {
          textData: {
            ...highlightsData.textData,
            ...{ [name]: value },
          },
        },
      })
    );
  };
  return (
    <div className=" mb-[7rem]">
      <div className="  text-left w-1/2 ml-[2.5rem] mb-[0.2rem]">
        <p className="text-[1.6rem] font-[600] text-gray-900">Highlights</p>
        <p className=" w-[70%] text-[0.9rem] font-[500] text-blue-gray-500 py-1 mt-2 mb-3">
          Tell us at least 2 facts you're proud of, like traction, team
          credentials, or other accomplishments.{" "}
          <a
            className=" text-light-blue-700 hover:text-blue-gray-600"
            href="https://guides.wefunder.com/pre-launch/how-to-curate-your-highlights"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Read tips and examples here.
          </a>
        </p>

        <div>
          <div className=" relative">
            <input
              id="1"
              className=" mb-4 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700"
              type="text"
              name="1"
              placeholder="1"
              onChange={handleChange}
            />
            <label
              htmlFor="1"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              1
            </label>
          </div>
        </div>

        <div>
          <div className=" relative">
            <input
              id="2"
              className=" mb-4 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700"
              type="text"
              name="2"
              placeholder="2"
              onChange={handleChange}
            />
            <label
              htmlFor="1"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              2
            </label>
          </div>
        </div>

        <div>
          <div className=" relative">
            <input
              id="3"
              className=" mb-4 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700"
              type="text"
              name="3"
              placeholder="3"
              onChange={handleChange}
            />
            <label
              htmlFor="3"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              3
            </label>
          </div>
        </div>

        <div>
          <div className=" relative">
            <input
              id="4"
              className=" mb-4 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700"
              type="text"
              name="4"
              placeholder="4"
              onChange={handleChange}
            />
            <label
              htmlFor="4"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              4
            </label>
          </div>
        </div>

        <div>
          <div className=" relative">
            <input
              id="5"
              className=" mb-4 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700"
              type="text"
              name="5"
              placeholder="5"
              onChange={handleChange}
            />
            <label
              htmlFor="5"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              5
            </label>
          </div>
        </div>

        <div>
          <div className=" relative">
            <input
              id="6"
              className=" mb-4 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700"
              type="text"
              name="6"
              placeholder="6"
              onChange={handleChange}
            />
            <label
              htmlFor="6"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              6
            </label>
          </div>
        </div>

        <div>
          <div className=" relative">
            <input
              id="7"
              className=" mb-4 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700"
              type="text"
              name="7"
              placeholder="7"
              onChange={handleChange}
            />
            <label
              htmlFor="7"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              7
            </label>
          </div>
        </div>

        <div>
          <div className=" relative">
            <input
              id="8"
              className=" mb-4 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700"
              type="text"
              name="8"
              placeholder="8"
              onChange={handleChange}
            />
            <label
              htmlFor="8"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              8
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
