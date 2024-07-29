import React from "react";
import { Collapse, Card, CardBody } from "@material-tailwind/react";

export default function PublicProfile() {
  const [openSection, setOpenSection] = React.useState(null);

  const toggleOpen = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="flex flex-col justify-start items-center ml-[3.5rem] w-[47rem] h-[48rem]">
      <div className="flex justify-start items-center w-full">
        <p className="text-[1.5rem] tracking-wide font-[500]">Public Profile</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-5">
        <Collapse open={openSection !== "name"}>
          <Card>
            <CardBody>
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("name")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Display Name
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">
                      Rishabh Gupta
                    </p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "name"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("name")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      Display Name
                    </div>
                  </div>
                </button>
                <div className="flex justify-start mt-[3.5rem] text-[0.98rem] font-[500] px-2">
                  What's your full name?
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
        <Collapse open={openSection !== "url"}>
          <Card>
            <CardBody>
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("url")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    VentureList URL
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">
                      ventureList.com/rishabh235_
                    </p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "url"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("url")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      VentureList URL
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
        <Collapse open={openSection !== "bio"}>
          <Card>
            <CardBody>
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("bio")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Bio
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600"></p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "bio"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("bio")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      Bio
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
        <Collapse open={openSection !== "Website"}>
          <Card>
            <CardBody>
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("Website")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Website
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600"></p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "Website"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("Website")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      Website
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

      <div className="w-full flex flex-col justify-center items-center mt-5">
        <Collapse open={openSection !== "About"}>
          <Card>
            <CardBody>
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("About")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    About
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">India</p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "About"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("About")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      About
                    </div>
                  </div>
                </button>
                <form>
                  <div className="flex justify-between items-center mt-[3.5rem] text-[0.93rem] px-2">
                    <label>Country of nationality</label>
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
        <Collapse open={openSection !== "Off"}>
          <Card>
            <CardBody>
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("Off")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Off Platform Investments
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">
                      BTUPG4662E
                    </p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "Off"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("Off")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      Off Platform Investments
                    </div>
                  </div>
                </button>
                <form>
                  <div className="flex justify-between items-center mt-[3.5rem] text-[0.93rem] px-2">
                    <label>PAN Number</label>
                    <input
                      type="text"
                      className="border-[0.149rem] border-indigo-200 rounded-[0.17rem] w-[20rem] h-[2.3rem]"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Aadhar Number</label>
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

      <div className="w-full flex justify-center items-center h-[15rem] mt-8">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="font-[500] tracking-wide text-[1rem] ">
            Profile Picture
          </div>
          <button className="flex justify-center items-center w-full h-[12rem] outline-dashed outline-1 outline-offset-2 rounded-[0.05rem] mt-2">
            <div className="flex justify-center items-center w-[9rem] h-[9rem] bg-gray-100 rounded-[9rem]">
              <span class="material-symbols-outlined text-[4.3rem] text-gray-500 ">
                person
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
