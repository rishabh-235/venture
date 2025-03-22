import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { updatePitchData } from "../../../redux/slice/pitchDataSlice";
import { useDispatch, useSelector } from "react-redux";

function FundingGoals() {
  const dispatch = useDispatch();
  const pitchData = useSelector((state) => state.pitchData);
  const [fundingGoalData, setFundingGoalData] = useState({});
  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });
  const [checked, setChecked] = useState(true);

  const handleCheckBox = () => {
    if (checked === true) {
      setChecked(false);
    } else setChecked(true);
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFundingGoalData((prevState) => ({
      ...prevState,
      textData: {
        ...prevState.textData,
        ...{ [name]: value },
      },
    }));

    dispatch(
      updatePitchData({
        pitchName: "fundingGoals",
        data: {
          textData: {
            ...fundingGoalData.textData,
            ...{ [name]: value },
          },
        },
      })
    );

    console.log(pitchData);
  };

  return (
    <div className=" flex ">
      <div className=" text-left w-[47%] ml-[2.5rem] mb-[0.2rem]">
        <p className="text-[1.6rem] font-[600] text-gray-900">Funding Goals</p>
        <p className=" w-[80%] text-[0.9rem] font-[500] text-blue-gray-500 py-1 mt-1 mb-3">
          Showing progress toward your goals can motivate investors to act. You
          can edit your goals until your Form C is filed.
        </p>

        <div className="w-[33rem] relative mt-3">
          <h2 className=" text-[1.2rem] font-[500] text-gray-800">
            Minimum Raise
          </h2>
          <p className=" w-[80%] text-[0.9rem] font-[500] text-blue-gray-500 py-1 mb-2">
            The minimum you’d be willing to accept in this raise.
          </p>
          <input
            id="linkedin"
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.7rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[33rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
            type="number"
            name="minimum_raise"
            placeholder="50,000"
            onChange={handleChange}
          />
          <label
            htmlFor="linkedin"
            className="peer-focus:text-blue-gray-900 flex absolute top-[5.3rem] text-blue-gray-200 font-[600] text-[1.02rem] ml-[0.98rem]"
          >
            &#8377;
          </label>
        </div>

        <div className="w-[33rem] relative mt-3">
          <h2 className=" text-[1.2rem] font-[500] text-gray-800">
            Maximum Raise
          </h2>
          <p className=" w-[80%] text-[0.9rem] font-[500] text-blue-gray-500 py-1 mb-2">
            The maximum you’d be willing to accept in this raise.
          </p>
          <input
            id="linkedin"
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.7rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[33rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
            type="number"
            name="maximum_raise"
            placeholder="250,000"
            onChange={handleChange}
          />
          <label
            htmlFor="linkedin"
            className="peer-focus:text-blue-gray-900 flex absolute top-[5.3rem] text-blue-gray-200 font-[600] text-[1.02rem] ml-[0.98rem]"
          >
            &#8377;
          </label>
        </div>

        <p className=" mt-[2.2rem] text-[1.6rem] font-[600] text-gray-900">
          Countdown clock
        </p>
        <p className=" w-[82%] text-[0.9rem] font-[500] text-blue-gray-500 py-1 mt-1 mb-3">
          Turn on a Countdown Clock if you want to hide your initial numbers
          while early investors help you build momentum.
        </p>

        {!checked && (
          <div>
            <div className="flex justify-between items-center text-[0.93rem]">
              <div className=" w-[33rem]">
                <Datepicker
                  inputClassName="w-full h-[3.7rem] rounded-md focus:ring-[0.07rem] placeholder:text-blue-gray-200 focus:ring-gray-900 font-[600] text-[1.02rem] text-black border-gray-300 "
                  useRange={false}
                  asSingle={true}
                  value={value}
                  popoverDirection="up"
                  onChange={(newValue) => setValue(newValue)}
                />
              </div>
            </div>

            <div className="w-[33rem] relative mt-2">
              <select
                className=" peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[33rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-4"
                name="cars"
                id="cars"
                placeholder="Time"
              >
                <option disabled="" value="" hidden="">
                  Time
                </option>
                <option value="0">12:00 am</option>
                <option value="1">1:00 am</option>
                <option value="2">2:00 am</option>
                <option value="3">3:00 am</option>
                <option value="4">4:00 am</option>
                <option value="5">5:00 am</option>
                <option value="6">6:00 am</option>
                <option value="7">7:00 am</option>
                <option value="8">8:00 am</option>
                <option value="9">9:00 am</option>
                <option value="10">10:00 am</option>
                <option value="11">11:00 am</option>
                <option value="12">12:00 pm</option>
                <option value="13">1:00 pm</option>
                <option value="14">2:00 pm</option>
                <option value="15">3:00 pm</option>
                <option value="16">4:00 pm</option>
                <option value="17">5:00 pm</option>
                <option value="18">6:00 pm</option>
                <option value="19" selected="">
                  7:00 pm
                </option>
                <option value="20">8:00 pm</option>
                <option value="21">9:00 pm</option>
                <option value="22">10:00 pm</option>
                <option value="23">11:00 pm</option>
              </select>
            </div>
          </div>
        )}

        <div className="flex items-center mb-[7rem]">
          <input
            checked={checked}
            id="checked-checkbox"
            type="checkbox"
            value=""
            className=" mr-2 cursor-pointer w-[1.1rem] h-[1.1rem] rounded-[0.1rem] bg-gray-100  border-gray-400 focus:ring-blue-500 focus:ring-2 text-gray-900 text-[1.1rem]"
            onChange={handleCheckBox}
          />
          <label
            for="checked-checkbox"
            className=" text-[0.9rem] font-[500] text-gray-800"
          >
            I don't want a countdown
          </label>
        </div>
      </div>

      <div className=" w-[24rem] mt-[2.5rem] text-start">
        <h2 className=" text-[1.2rem] font-[500] text-gray-800">Preview</h2>
        <p className=" w-full text-[0.9rem] font-[500] text-blue-gray-500 py-1 mt-1 mb-3">
          This is what investors will see on your live campaign page.
        </p>

        {!checked && (
          <div className=" mb-4 p-4 text-white bg-[#1a1a1a]">
            <div className=" flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M52.8978 28.9481C52.422 24.1617 50.2836 19.6493 46.8764 16.242C43.9647 13.3304 40.4008 11.4593 36.6508 10.6273V7.99716C38.1824 7.61611 39.3209 6.2297 39.3209 4.58181C39.3209 2.64107 37.7421 1.06223 35.8013 1.06223H28.3481C26.4074 1.06223 24.8285 2.64107 24.8285 4.58181C24.8285 6.2296 25.967 7.61601 27.4985 7.99716V10.6347C23.76 11.4702 20.2079 13.3386 17.3045 16.2421C16.6691 16.8775 16.0832 17.544 15.5468 18.2368C15.5209 18.2348 15.4949 18.2328 15.4684 18.2328H8.09163C7.52001 18.2328 7.05646 18.6963 7.05646 19.268C7.05646 19.8397 7.52001 20.3032 8.09163 20.3032H14.1383C13.3793 21.5739 12.7673 22.9083 12.3015 24.282H1.03517C0.46355 24.282 0 24.7454 0 25.3171C0 25.8889 0.46355 26.3523 1.03517 26.3523H11.7165C11.4182 27.6619 11.2469 28.9947 11.2027 30.3312H6.6251C6.05348 30.3312 5.58993 30.7947 5.58993 31.3664C5.58993 31.9381 6.05348 32.4016 6.6251 32.4016H11.2358C11.3231 33.7415 11.5385 35.0744 11.8821 36.3804H5.17586C4.60424 36.3804 4.14069 36.8439 4.14069 37.4156C4.14069 37.9873 4.60424 38.4508 5.17586 38.4508H12.5428C13.5583 41.1372 15.1453 43.655 17.3045 45.8142C20.7149 49.2247 25.232 51.3635 30.0234 51.8369C30.7072 51.9044 31.3916 51.9378 32.075 51.9378C36.1145 51.9378 40.1026 50.7688 43.4866 48.5651C43.9656 48.2531 44.1011 47.6119 43.7891 47.1328C43.4771 46.6537 42.8358 46.5182 42.3568 46.8302C34.9494 51.6538 25.029 50.6109 18.7684 44.3502C11.4226 37.0044 11.4226 25.052 18.7684 17.7061C26.1141 10.3605 38.0665 10.3605 45.4124 17.7061C51.6647 23.9586 52.7134 33.8705 47.9057 41.2742C47.5943 41.7537 47.7307 42.3949 48.21 42.7062C48.6897 43.0176 49.3307 42.8812 49.642 42.4017C52.2107 38.4458 53.367 33.668 52.8978 28.9481ZM26.8989 4.58192C26.8989 3.78276 27.5489 3.13267 28.3481 3.13267H35.8013C36.6005 3.13267 37.2506 3.78276 37.2506 4.58192C37.2506 5.38107 36.6005 6.03116 35.8013 6.03116H35.6156H28.5337H28.3481C27.5489 6.03116 26.8989 5.38096 26.8989 4.58192ZM29.5689 10.2788V8.1015H34.5805V10.2751C32.9163 10.0771 31.2327 10.0784 29.5689 10.2788Z"
                      fill="#F9B83B"
                    />
                    <path
                      d="M46.1451 44.0465C45.8718 44.0465 45.6058 44.1573 45.4133 44.3498C45.2198 44.5424 45.1099 44.8094 45.1099 45.0817C45.1099 45.3539 45.2198 45.621 45.4133 45.8136C45.6058 46.0071 45.8719 46.1169 46.1451 46.1169C46.4173 46.1169 46.6834 46.0071 46.877 45.8136C47.0695 45.621 47.1803 45.3539 47.1803 45.0817C47.1803 44.8094 47.0696 44.5424 46.877 44.3498C46.6834 44.1573 46.4172 44.0465 46.1451 44.0465Z"
                      fill="#F9B83B"
                    />
                    <path
                      d="M32.0903 14.9694C23.2357 14.9694 16.0318 22.1732 16.0318 31.0279C16.0318 39.8827 23.2357 47.0865 32.0903 47.0865C40.945 47.0865 48.1488 39.8827 48.1488 31.0279C48.1488 22.1732 40.945 14.9694 32.0903 14.9694ZM32.0903 45.0161C24.3772 45.0161 18.1021 38.741 18.1021 31.0279C18.1021 23.3149 24.3772 17.0398 32.0903 17.0398C39.8035 17.0398 46.0785 23.3149 46.0785 31.0279C46.0785 38.741 39.8035 45.0161 32.0903 45.0161Z"
                      fill="#F9B83B"
                    />
                    <path
                      d="M38.6384 23.016L33.5112 28.1431C33.0824 27.9311 32.6002 27.8114 32.0903 27.8114C31.5804 27.8114 31.0982 27.9311 30.6695 28.1431L28.3748 25.8485C27.9705 25.4442 27.3152 25.4442 26.9108 25.8485C26.5065 26.2527 26.5065 26.9082 26.9108 27.3124L29.2054 29.6071C28.9933 30.0358 28.8736 30.5181 28.8736 31.028C28.8736 32.8016 30.3166 34.2446 32.0903 34.2446C33.8641 34.2446 35.307 32.8016 35.307 31.028C35.307 30.5181 35.1873 30.0358 34.9753 29.6071L39.952 24.6304L40.1024 24.48C40.5066 24.0757 40.5066 23.4203 40.1024 23.016C39.6981 22.6118 39.0429 22.6118 38.6384 23.016ZM32.0903 32.1744C31.4583 32.1744 30.944 31.6601 30.944 31.0281C30.944 30.396 31.4583 29.8817 32.0903 29.8817C32.7224 29.8817 33.2367 30.396 33.2367 31.0281C33.2367 31.6601 32.7224 32.1744 32.0903 32.1744Z"
                      fill="#F9B83B"
                    />
                    <path
                      d="M43.1584 30.0054H42.1993C41.6277 30.0054 41.1641 30.4688 41.1641 31.0405C41.1641 31.6122 41.6277 32.0757 42.1993 32.0757H43.1584C43.73 32.0757 44.1935 31.6122 44.1935 31.0405C44.1935 30.4688 43.73 30.0054 43.1584 30.0054Z"
                      fill="#F9B83B"
                    />
                    <path
                      d="M21.9817 29.9801H21.0227C20.4511 29.9801 19.9875 30.4436 19.9875 31.0153C19.9875 31.587 20.4511 32.0504 21.0227 32.0504H21.9817C22.5533 32.0504 23.0168 31.587 23.0168 31.0153C23.0168 30.4436 22.5533 29.9801 21.9817 29.9801Z"
                      fill="#F9B83B"
                    />
                    <path
                      d="M32.103 21.9542C32.6747 21.9542 33.1382 21.4908 33.1382 20.9191V19.9601C33.1382 19.3884 32.6747 18.9249 32.103 18.9249C31.5314 18.9249 31.0679 19.3884 31.0679 19.9601V20.9191C31.0679 21.4908 31.5314 21.9542 32.103 21.9542Z"
                      fill="#F9B83B"
                    />
                    <path
                      d="M32.0779 40.1018C31.5063 40.1018 31.0428 40.5652 31.0428 41.1369V42.0959C31.0428 42.6676 31.5063 43.1311 32.0779 43.1311C32.6496 43.1311 33.1131 42.6676 33.1131 42.0959V41.1369C33.1131 40.5652 32.6496 40.1018 32.0779 40.1018Z"
                      fill="#F9B83B"
                    />
                    <path
                      d="M1.03516 36.3801C0.76291 36.3801 0.49584 36.4908 0.303301 36.6834C0.110762 36.8759 0 37.143 0 37.4152C0 37.6885 0.110658 37.9545 0.303301 38.1471C0.495943 38.3396 0.76291 38.4504 1.03516 38.4504C1.3074 38.4504 1.57447 38.3396 1.76691 38.1471C1.95945 37.9545 2.07031 37.6875 2.07031 37.4152C2.07031 37.143 1.95955 36.8759 1.76691 36.6834C1.57447 36.4908 1.3074 36.3801 1.03516 36.3801Z"
                      fill="#F9B83B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className=" ml-4">
                <p className=" mb-2 text-[#F9B83B] font-[500]">EXCLUSIVE</p>
                <p className=" flex">
                  <p className="text-[1.02rem] font-[500] flex items-center cursor-pointer">
                    Friends Invest First
                  </p>
                  <p class="peer flex items-center cursor-pointer">
                    <button type="button">
                      <svg
                        class="w-5 h-5 ms-1 text-gray-500 hover:text-[#16263d]"
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
                    class=" peer-hover:opacity-100 z-50 peer-hover:-translate-x-[10rem] peer-hover:duration-0 absolute inline-block placeholder:text-blue-gray-200 bg-[#16263d] rounded-[5px] opacity-0 w-[21rem] top-[0.2rem] ml-[11rem] shadow-md shadow-gray-800"
                  >
                    <div class="p-4 space-y-2 text-start">
                      <p className=" text-[0.75rem] font-[600] leading-[1rem]">
                        Friends, family, and customers are allowed to invest
                        before the general public. Early investors have a better
                        shot at getting early bird perks, which can include
                        better financial terms. Investing now can also help the
                        company raise money faster. The more people that invest
                        before the public launch, the higher ranked the company
                        will later appear in Wefunder's search results.
                      </p>
                    </div>
                  </div>
                </p>
              </div>
            </div>

            <div className=" rounded-sm border p-3 mt-4">
              <div className=" text-[0.82rem] font-[500] text-center mb-3 uppercase">
                Public Launch on Nov 21 @ 7PM
              </div>
              <div className=" flex justify-between gap-6">
                <div className=" w-full">
                  <p className=" text-[#F9B83B] text-center text-[1.5rem] font-[500] opacity-100">
                    13
                  </p>
                  <p className=" text-center text-[0.7rem] text-gray-400 font-[500]">
                    DAY
                  </p>
                </div>
                <div className=" w-full">
                  <p className=" text-[#F9B83B] text-center text-[1.5rem] font-[500] opacity-100">
                    {time.getHours().toString().padStart(2, "0")}
                  </p>
                  <p className=" text-center text-[0.7rem] text-gray-400 font-[500]">
                    HOUR
                  </p>
                </div>
                <div className=" w-full">
                  <p className=" text-[#F9B83B] text-center text-[1.5rem] font-[500] opacity-100">
                    {time.getMinutes().toString().padStart(2, "0")}
                  </p>
                  <p className=" text-center text-[0.7rem] text-gray-400 font-[500]">
                    MIN
                  </p>
                </div>
                <div className=" w-full">
                  <p className=" text-[#F9B83B] text-center text-[1.5rem] font-[500] opacity-100">
                    {time.getSeconds().toString().padStart(2, "0")}
                  </p>
                  <p className=" text-center text-[0.7rem] text-gray-400 font-[500]">
                    SEC
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className=" shadow-md shadow-blue-gray-100 p-4">
          {checked && (
            <div className=" mb-[2.6rem]">
              <div className=" w-[22rem] h-[0.25rem] bg-gray-200">
                <div className=" w-[5%] h-full bg-green-400 "></div>
              </div>
              <p className="mt-4 text-[2.3rem] font-[500] text-gray-800">
                ₹2,000,000
              </p>
              <p className=" w-[80%] text-[0.9rem] font-[400] text-blue-gray-300 mt-1 mb-3">
                reserved of a ₹40,000,000 goal
              </p>
            </div>
          )}

          <div className="flex flex-col justify-start">
            <div className="flex justify-between items-center h-[4.5rem]">
              <div className="flex flex-col w-[43%]">
                <p className="font-[500] mb-[0.18rem] tracking-wide text-black text-start text-[1.05rem]">
                  INVEST
                </p>
                <p className="flex justify-start items-center text-[0.9rem] text-gray-400">
                  min{" "}
                  <span className="material-symbols-outlined -mr-[0.2rem] text-[1rem]">
                    currency_rupee
                  </span>
                  10000
                </p>
              </div>

              <div className="h-[3.6rem] w-[50%] flex justify-center items-center">
                <div className="flex justify-center items-center z-10 -mr-[1.8rem]">
                  <span className="material-symbols-outlined text-[1.3rem] text-gray-400">
                    currency_rupee
                  </span>
                </div>
                <input
                  disabled
                  className="pl-8 h-full w-[10rem] text-right text-[1.5rem] tracking-wider font-[600] text-black border-2 border-blue-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-light-blue-800 focus:rounded-sm"
                  type="number"
                  placeholder="0"
                  style={{
                    // Hide spin buttons in WebKit browsers (Chrome, Safari)
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                  }}
                />
                <style jsx>{`
                  /* Hide spin buttons in WebKit browsers */
                  input::-webkit-outer-spin-button,
                  input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }

                  /* Hide spin buttons in Firefox */
                  input[type="number"] {
                    -moz-appearance: textfield;
                  }

                  /* Remove blue outline in all browsers */
                  input:focus {
                    outline: none;
                    box-shadow: none;
                    border: 1px transparent;
                  }
                `}</style>
              </div>
            </div>

            <div>
              <button
                className="w-full h-[3.1rem] mt-2 hover:opacity-80 rounded-[3px] text-white text-[0.95rem] tracking-wider font-[600]"
                style={{ backgroundColor: "#F04E45" }}
              >
                INVEST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundingGoals;
