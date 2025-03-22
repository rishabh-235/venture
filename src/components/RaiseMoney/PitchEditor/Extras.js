import React, { useState } from "react";
import { updatePitchData } from "../../../redux/slice/pitchDataSlice";
import { useDispatch } from "react-redux";

function Extras() {
  const dispatch = useDispatch();
  const [extraData, setExtraData] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    
    setExtraData((prevState) => ({
      ...prevState,
      textData: {
        ...prevState.textData,
        ...{ [name]: value },
      },
    }));

    dispatch(
      updatePitchData({
        pitchName: "extra",
        data: {
          textData: {
            ...extraData.textData,
            ...{ [name]: value },
          },
        },
      })
    );
  };

  return (
    <div className=" mb-[7rem]">
      <div className=" text-left w-[47%] ml-[2.5rem] mb-[0.2rem]">
        <p className="text-[1.6rem] font-[600] text-gray-900">Extras</p>
        <p className=" w-[80%] text-[1.2rem] font-[500] text-blue-gray-800 py-1 mt-[0.1rem]">
          Investor Message
        </p>
        <p className=" w-[70%] text-[0.9rem] font-[500] text-blue-gray-500 mb-3">
          Leave a note for investors to see after they invest.
        </p>

        <div className=" relative">
          <input
            id="1"
            className=" mb-4 peer flex justify-center items-center text-[1.05rem] tracking-wider pl-3 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] focus:hover:border-blue-500 hover:border-gray-700"
            type="text"
            name="investor_massage"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className=" text-left w-[47%] ml-[2.5rem] mb-[0.2rem] mt-8">
        <p className="text-[1.6rem] font-[600] text-gray-900">Analytics</p>
        <p className=" w-[85%] text-[0.9rem] font-[500] text-blue-gray-500 mt-1 mb-3">
          If you are running ads, use your tracking pixels to see how well they
          are converting. More tips on
          <a
            className=" text-light-blue-700 hover:text-blue-gray-600"
            href="https://guides.wefunder.com/pre-launch/how-to-curate-your-highlights"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            setting up your analytics.
          </a>
        </p>

        <div>
          <p className=" w-[80%] text-[1.2rem] font-[500] text-blue-gray-800 py-1 mt-[0.1rem]">
            Tracking with Google Analytics
          </p>

          <div className=" mt-1 relative ">
            <input
              id="googleanlytics"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] focus:hover:border-blue-500 hover:border-gray-700 mb-3"
              type="text"
              name="google_anlytics"
              placeholder=""
              onChange={handleChange}
            />
            <label
              htmlFor="googleanlytics"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Google Analytics ID (G-XXXXXXXXX-Y)
            </label>
          </div>
        </div>

        <div className=" mt-8">
          <p className=" w-[80%] text-[1.2rem] font-[500] text-blue-gray-800 py-1 mt-[0.1rem]">
            Tracking with Google Tag Manager
          </p>

          <div className=" mt-1 relative ">
            <input
              id="googletagmanager"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] focus:hover:border-blue-500 hover:border-gray-700 mb-3"
              type="text"
              name="google_tag_manager"
              placeholder=""
              onChange={handleChange}
            />
            <label
              htmlFor="googletagmanager"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Google Tag Manager ID (GTM-YYYYYYY)
            </label>
          </div>
        </div>

        <div className=" mt-8">
          <p className=" w-[80%] text-[1.2rem] font-[500] text-blue-gray-800 py-1 mt-[0.1rem]">
            Tracking with Facebook
          </p>

          <div className=" mt-1 relative ">
            <input
              id="pixel"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] focus:hover:border-blue-500 hover:border-gray-700 mb-2"
              type="text"
              name="pixel_id"
              placeholder=""
              onChange={handleChange}
            />
            <label
              htmlFor="pixel"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Pixel ID
            </label>
          </div>

          <div className="  relative ">
            <input
              id="token"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] focus:hover:border-blue-500 hover:border-gray-700 mb-2"
              type="text"
              name="conversion_token"
              placeholder=""
              onChange={handleChange}
            />
            <label
              htmlFor="token"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Conversion Token
            </label>
          </div>

          <div className=" relative ">
            <input
              id="Domain"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] focus:hover:border-blue-500 hover:border-gray-700 mb-2"
              type="text"
              name="registered_Domain"
              placeholder=""
              onChange={handleChange}
            />
            <label
              htmlFor="Domain"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Registered Domain
            </label>
          </div>

          <div className=" relative ">
            <input
              id="eventcode"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] focus:hover:border-blue-500 hover:border-gray-700 mb-2"
              type="text"
              name="test_event_code"
              placeholder=""
              onChange={handleChange}
            />
            <label
              htmlFor="eventcode"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Test Event Code
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extras;
