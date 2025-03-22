import React, { useState } from "react";
import {
  Collapse,
  Card,
  CardBody,
  ThemeProvider,
} from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import axios from "axios";

export default function InvestorLimits() {
  const [openSection, setOpenSection] = useState(null);
  const [value, setValue] = useState(0);
  const [netWorth, setNetWorth] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const theme = {
    radio: {
      styles: {
        base: {
          container: {
            position: "relative",
            display: "flex",
            alignItems: "items-center",
            cursor: "cursor-pointer",
            p: "p-1",
          },
          label: {
            color:
              "text-start text-gray-600 text-[0.9rem] tracking-wide leading-[1.2rem]",
            fontWeight: "font-[400]",
            userSelect: "select-none",
            cursor: "cursor-pointer",
            mt: "mt-px",
            ml: "ml-2",
          },
        },
      },
    },
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setSelectedOption("");
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleSliderChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleNetWorthSliderChange = (e) => {
    setNetWorth(Number(e.target.value));
  };

  const getPercentage = () => {
    const min = 0;
    const max = 10000000;
    return ((value - min) / (max - min)) * 100;
  };

  const getPercentageNetWorth = () => {
    const min = 0;
    const max = 1000;
    return ((netWorth - min) / (max - min)) * 100;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newData = {
      networth:netWorth,
      annualincome:value,
      accreditedinvestor:selectedOption
    };
    console.log(newData);

    try {
      // const response = {};
      const response = await axios.post(
        "http://localhost:8000/api/v1/investor/updateinvestor",
        newData,
        { withCredentials: true }
      );

      if (
        response?.data?.massage === "Account details update successfully" ||
        response?.data?.massage === "Investor Registred Succesfully"
      ) {
        window.location.reload();
      }
    } catch (error) {
      console.log("Error sending data:", error);
    }
  };

  const toggleOpen = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <ThemeProvider value={theme}>
      <div className="flex flex-col justify-start items-center ml-[3.5rem] h-[25rem] w-[47rem]">
        <div className="flex justify-start items-center w-full">
          <p className="text-[1.5rem] tracking-wide font-[500]">
            Investor Limits
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <Collapse open={openSection !== "limit"}>
            <Card>
              <CardBody className=" p-0">
                <button
                  className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                  onClick={() => toggleOpen("limit")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                      Legal Investment Limits
                    </div>
                    <div className="flex">
                      <p className="flex justify-center items-center mr-2 text-[0.95rem] text-gray-600">
                        <span class="material-symbols-outlined">
                          currency_rupee
                        </span>
                        200K /yr
                      </p>
                    </div>
                  </div>
                </button>
              </CardBody>
            </Card>
          </Collapse>
          <Collapse open={openSection === "limit"} className="-mt-[1.3rem]">
            <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
              <CardBody className="w-full">
                <div>
                  <button
                    className="w-full mt-[1.5rem]"
                    onClick={() => toggleOpen("limit")}
                  >
                    <div className="w-full flex justify-between">
                      <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                        Legal Investment Limit
                      </div>
                      <p className="flex justify-center items-center mr-2 text-[0.95rem] text-gray-600">
                        <span class="material-symbols-outlined">
                          currency_rupee
                        </span>
                        200K /yr
                      </p>
                    </div>
                  </button>

                  <div className=" ml-1 mt-[1.8rem] text-start text-[0.98rem] text-black font-[600] px-2">
                    Indian law sets the investing limits for Regulation
                    Crowdfunding
                    <ul className=" text-[0.78rem] text-gray-600 font-[500] ml-4 mt-1 list-disc leading-2">
                      <li className=" mb-3">
                        Every individual can invest at least ₹200K.
                      </li>
                      <li className=" mb-3">
                        If either your net worth or annual income is below ₹1
                        crore, you may legally invest a maximum of 5% of the
                        greater amount.
                      </li>
                      <li className=" mb-3">
                        If both your net worth and annual income are above ₹1
                        crore, you may legally invest a maximum of 10% of the
                        greater amount, but not more than ₹10 lakh in any
                        12-month period.
                      </li>
                      <li className=" mb-3">
                        Investment limits apply to every 12-month period. Every
                        investment in a crowdfunding offering, (including those
                        on platforms other than VenturList), counts towards this
                        annual limit.
                      </li>
                      <li className=" mb-3">
                        There is no investment limit for accredited investors as
                        defined by SEBI.
                      </li>
                    </ul>
                  </div>

                  <div className=" flex items-start">
                    <button
                      className=" bg-gray-200 px-[1.2rem] py-[0.78rem] rounded-[0.2rem] text-[0.78rem] font-[600] hover:bg-gray-300 tracking-wider ml-2 mt-[0.5rem] mb-[2rem]"
                      onClick={() => toggleOpen("limit")}
                    >
                      OK, I UNDERSTAND
                    </button>
                  </div>
                  <div></div>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-5">
          <Collapse open={openSection !== "income"}>
            <Card>
              <CardBody className=" p-0">
                <button
                  className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                  onClick={() => toggleOpen("income")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                      Annual Income
                    </div>
                    <div className="flex">
                      <p className="flex justify-center items-center mr-2 text-[0.95rem] text-gray-600">
                        <span class="material-symbols-outlined">
                          currency_rupee
                        </span>
                        0
                      </p>
                    </div>
                  </div>
                </button>
              </CardBody>
            </Card>
          </Collapse>
          <Collapse open={openSection === "income"} className="-mt-[1.3rem]">
            <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
              <CardBody className="w-full">
                <div>
                  <button
                    className="w-full mt-[1.5rem]"
                    onClick={() => toggleOpen("income")}
                  >
                    <div className="w-full flex justify-between">
                      <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                        Annual Income
                      </div>
                    </div>
                  </button>
                  <form>
                    <div className="mx-auto w-[40rem] relative mt-8 mb-12 group">
                      <input
                        id="labels-range-input"
                        type="range"
                        value={value}
                        min="0"
                        max="10000000"
                        className="h-[0.3rem] w-full cursor-pointer mb-4"
                        onChange={handleSliderChange}
                      />
                      <div className="mt-6 relative">
                        <span className="absolute left-1/4 bottom-2 text-sm text-gray-500">
                          ₹25L
                        </span>
                        <span className="absolute left-2/4 bottom-2 -translate-x-1/2 text-sm text-gray-500">
                          ₹50L
                        </span>
                        <span className="absolute left-3/4 bottom-2 -translate-x-1/2 text-sm text-gray-500">
                          ₹75L
                        </span>
                        <span className="absolute left-full bottom-2 -translate-x-full text-sm text-gray-500">
                          ₹1Cr+
                        </span>
                      </div>
                      <output
                        id="range-value"
                        className={`text-[0.8rem] font-[500] text-white absolute -top-8 transform bg-[#6c6c6c] px-1 py-1 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
                        style={{ left: `calc(${getPercentage()}% - 20px)` }}
                      >
                        ₹{value.toLocaleString()}
                      </output>
                    </div>

                    <div className="mt-[1.5rem] mb-[1.2rem] text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                      <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                        CANCEL
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400"
                      >
                        SAVE
                      </button>
                    </div>
                  </form>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-5">
          <Collapse open={openSection !== "net"}>
            <Card>
              <CardBody className=" p-0">
                <button
                  className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                  onClick={() => toggleOpen("net")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                      Net Worth
                    </div>
                    <div className="flex">
                      <p className="flex justify-center items-center mr-2 text-[0.95rem] text-gray-600">
                        <span class="material-symbols-outlined">
                          currency_rupee
                        </span>
                        0
                      </p>
                    </div>
                  </div>
                </button>
              </CardBody>
            </Card>
          </Collapse>
          <Collapse open={openSection === "net"} className="-mt-[1.3rem]">
            <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
              <CardBody className="w-full">
                <div>
                  <button
                    className="w-full mt-[1.5rem]"
                    onClick={() => toggleOpen("net")}
                  >
                    <div className="w-full flex justify-between">
                      <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                        Net Worth
                      </div>
                    </div>
                  </button>
                  <form>
                    <div className="mx-auto w-[40rem] relative mt-8 mb-12 group">
                      <input
                        id="labels-range-input"
                        type="range"
                        value={netWorth}
                        min="0"
                        max="1000"
                        className="h-[0.3rem] w-full cursor-pointer mb-4"
                        onChange={handleNetWorthSliderChange}
                      />
                      <div className="mt-6 relative">
                        <span className="absolute left-1/4 bottom-2 -translate-x-1/2 text-sm text-gray-500">
                          ₹2.5Cr
                        </span>
                        <span className="absolute left-1/2 bottom-2 -translate-x-1/2 text-sm text-gray-500">
                          ₹5Cr
                        </span>
                        <span className=" absolute left-full bottom-2 -translate-x-full text-sm text-gray-500">
                          ₹10Cr+
                        </span>
                      </div>
                      <output
                        id="range-value"
                        className={`text-[0.8rem] font-[500] text-white absolute -top-8 transform bg-[#6c6c6c] px-1 py-1 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
                        style={{
                          left: `calc(${getPercentageNetWorth()}% - 20px)`,
                        }}
                      >
                        ₹{netWorth.toLocaleString()}L
                      </output>
                    </div>

                    <div className="mt-[1.5rem] mb-[1.2rem] text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                      <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                        CANCEL
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400"
                      >
                        SAVE
                      </button>
                    </div>
                  </form>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        <div className="w-full flex flex-col justify-center items-center mb-2 mt-5">
          <Collapse open={openSection !== "status"}>
            <Card>
              <CardBody className=" p-0">
                <button
                  className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                  onClick={() => toggleOpen("status")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                      Accredited Status
                    </div>
                    <div className="flex">
                      <p className="mr-2 text-[0.95rem] text-gray-600">None</p>
                    </div>
                  </div>
                </button>
              </CardBody>
            </Card>
          </Collapse>
          <Collapse open={openSection === "status"} className="-mt-[1.3rem]">
            <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
              <CardBody className="w-full">
                <div>
                  <button
                    className="w-full mt-[1.5rem]"
                    onClick={() => toggleOpen("status")}
                  >
                    <div className="w-full flex justify-between">
                      <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                        Accredited Status
                      </div>
                    </div>
                  </button>

                  <form>
                    <div className=" flex justify-between mt-9 px-2">
                      <div className=" text-[0.95rem] text-black font-[600] py-1">
                        Are you an accredited investor?
                      </div>
                      <label className="inline-flex items-center mt-2 me-5 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          checked={isChecked}
                          onChange={handleToggle}
                        />
                        <div
                          className={`relative text-white py-[0.25rem] left-1 text-[0.8rem] font-[600] w-[4.3rem] h-6 rounded-full flex items-center justify-between px-[0.4rem] ${
                            !isChecked ? "bg-gray-400" : "bg-green-500"
                          }`}
                        >
                          {!isChecked || (
                            <span
                              className={`ml-2 transition-opacity duration-[400ms] ${
                                !isChecked ? "opacity-0" : "opacity-100"
                              }`}
                            >
                              YES
                            </span>
                          )}
                          <div
                            className={`absolute top-[0.25rem] left-[0.4rem] start-[2px] bg-white border-gray-300 border rounded-full h-4 w-4 transition-transform duration-500 ${
                              isChecked ? "translate-x-[2.5rem]" : ""
                            }`}
                          ></div>
                          <span
                            className={` ml-[1.8rem] transition-opacity duration-[400ms] ${
                              !isChecked ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            NO
                          </span>
                        </div>
                      </label>
                    </div>
                    {!isChecked || (
                      <div className=" px-2">
                        <div className=" text-start text-[0.95rem] text-black font-[600] mt-[1.2rem]">
                          How do you qualify as an accredited investor?
                        </div>
                        <div className=" mt-3 flex flex-col gap-[0.3rem]">
                          <Radio
                            name="type"
                            label="I have at least $5 million in investments"
                            className=" text-gray-600 w-4 h-4"
                            value="5MillionInvestments"
                            checked={selectedOption === "5MillionInvestments"}
                            onChange={() =>
                              handleOptionChange("5MillionInvestments")
                            }
                          />

                          <Radio
                            name="type"
                            label="I have at least $1 million in net worth"
                            className=" text-gray-600 w-4 h-4"
                            value="1MillionNetWorth"
                            checked={selectedOption === "1MillionNetWorth"}
                            onChange={() =>
                              handleOptionChange("1MillionNetWorth")
                            }
                          />

                          <Radio
                            name="type"
                            label="I have $200k+ income for the past 2 years (or $300k joint with spouse) and expect the same this year"
                            className=" text-gray-600 w-4 h-4 mr-[0.2rem]"
                            value="200kIncome"
                            checked={selectedOption === "200kIncome"}
                            onChange={() => handleOptionChange("200kIncome")}
                          />

                          <Radio
                            name="type"
                            label="I have an active Series 7, 65, or 82 that’s in good standing"
                            className=" text-gray-600 w-4 h-4"
                            value="SeriesLicense"
                            checked={selectedOption === "SeriesLicense"}
                            onChange={() => handleOptionChange("SeriesLicense")}
                          />
                        </div>
                      </div>
                    )}

                    <div className="mt-[1.9rem] mb-[1.2rem] mr-3 text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                      <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                        CANCEL
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400"
                      >
                        SAVE
                      </button>
                    </div>
                  </form>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        <div className="w-full flex justify-center items-center h-[3.2rem] bg-red-800 bg-opacity-[0.07] px-2 mt-8">
          <div className="w-full flex justify-between">
            <div className="mr-5 font-[500] tracking-wide text-[0.9rem] text-red-800">
              Your account limit is $2,500 until your identity is verified.
            </div>
            <button className="flex">
              <p className="mr-2 text-[0.8rem] tracking-wide text-red-800 font-[700]">
                VERIFY
              </p>
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
