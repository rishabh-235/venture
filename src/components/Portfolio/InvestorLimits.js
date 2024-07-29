import React from "react";
import { Collapse, Card, CardBody } from "@material-tailwind/react";

export default function InvestorLimits() {
  const [openSection, setOpenSection] = React.useState(null);

  const toggleOpen = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="flex flex-col justify-start items-center ml-[3.5rem] h-[25rem] w-[47rem]">
      <div className="flex justify-start items-center w-full">
        <p className="text-[1.5rem] tracking-wide font-[500]">
          Investor Limits
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-5">
        <Collapse open={openSection !== "limit"}>
          <Card>
            <CardBody>
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
                      2,00,000/yr
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
                      Legal Investment Limits
                    </div>
                  </div>
                </button>
                <div className="flex justify-start mt-[3.5rem] text-[0.98rem] font-[500] px-2">
                  What's your full legal name?
                </div>
                <form>
                  <div className="flex justify-between items-center mt-[3.5rem] text-[0.93rem] px-2">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Middle Name</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>

                  <div className="mt-[1.5rem] mb-[1.2rem] text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                    <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                      CANCEL
                    </button>
                    <button className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400">
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
        <Collapse open={openSection !== "income"}>
          <Card>
            <CardBody>
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
                  <div className="flex justify-between items-center mt-[3.5rem] text-[0.93rem] px-2">
                    <label>Country</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Street</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>City</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>State</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>ZIP Code</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>

                  <div className="mt-[1.5rem] mb-[1.2rem] text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                    <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                      CANCEL
                    </button>
                    <button className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400">
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
            <CardBody>
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
                  <div className="flex justify-between items-center mt-[3.5rem] text-[0.93rem] px-2">
                    <label>
                      What language would you prefer to view Wefunder in?
                    </label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[14rem] h-[2.3rem]"
                    />
                  </div>

                  <div className="mt-[1.5rem] mb-[1.2rem] text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                    <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                      CANCEL
                    </button>
                    <button className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400">
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
        <Collapse open={openSection !== "status"}>
          <Card>
            <CardBody>
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

                <div className="flex justify-start mt-[3.5rem] text-[0.8rem] text-gray-600 font-[500] px-2">
                  To comply with the law, we verify your identity using your
                  birthday.
                </div>

                <form>
                  <div className="flex justify-between items-center mt-[2.2rem] text-[0.93rem] px-2">
                    <label>Date of birth</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>City of birth</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Country of birth</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>

                  <div className="mt-[1.5rem] mb-[1.2rem] text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                    <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                      CANCEL
                    </button>
                    <button className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400">
                      SAVE
                    </button>
                  </div>
                </form>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>

        <div className="w-full flex justify-center items-center h-[3.2rem] bg-red-800 bg-opacity-[0.07] px-2 mt-5">
          <div className="w-full flex justify-between">
            <div className="mr-5 font-[500] tracking-wide text-[0.9rem] text-red-800">
            Your account limit is $2,500 until your identity is verified.
            </div>
            <button className="flex">
              <p className="mr-2 text-[0.8rem] tracking-wide text-red-800 font-[700]">VERIFY</p>
            </button>
          </div>
        </div>
    </div>
  );
}
