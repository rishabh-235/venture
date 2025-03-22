import React, { useState } from "react";
import img from "../../images/user_default_icon_circle.png";
import { Collapse, Card, CardBody } from "@material-tailwind/react";

function TeamCard() {
  const [openSection, setOpenSection] = useState(null);

  const toggleOpen = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };
  return (
    <div className=" border-[1px] w-[35rem] rounded-lg px-[1.5rem] pt-[1.5rem] pb-[1rem]">
      <div>
        <div className=" flex gap-3">
          <div>
            <img
              src={img}
              className=" w-[4rem] h-[4rem] outline-1 outline-dashed rounded-[4rem]"
              alt="img"
            />
          </div>
          <div>
            <p className="text-start text-[1.5rem] font-[600] text-gray-900">
              Rishabh Gupta
            </p>
            <p className=" text-start font-[500] text-gray-900">
              rishabhguptalahar@gmail.com
            </p>
          </div>
        </div>

        <div className=" mt-4">
          <div className=" relative">
            <input
              id="position"
              className=" mb-2 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px]"
              type="text"
              name="position"
              placeholder="Title at company"
              //   value={tagline}
            />
            <label
              htmlFor="position"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Title at company
            </label>
          </div>
        </div>

        <div>
          <div className=" relative">
            <input
              id="accomplishments"
              className=" mb-4 peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.8rem] rounded-xl border-gray-300 border-[1px] "
              type="text"
              name="accomplishments"
              placeholder="Most impressive accomplishments"
              //   value={tagline}
            />
            <label
              htmlFor="accomplishments"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Most impressive accomplishments
            </label>
          </div>
        </div>

        <div className=" flex justify-between">
          <label class=" inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#3b9ff3]"></div>
            <span class="ms-2 text-[0.95rem] font-medium text-gray-700 dark:text-gray-300">
              Founder
            </span>
          </label>

          <div className="w-auto flex flex-col justify-end">
            <button
              className="flex justify-center items-center text-[0.95rem] text-gray-400 font-[500] hover:text-gray-600"
              onClick={() => toggleOpen("name")}
            >
              Advanced{" "}
              {(openSection === "name" && (
                <span class="material-symbols-outlined font-[500]">
                  keyboard_arrow_up
                </span>
              )) || (openSection !== "name" && (<span class="material-symbols-outlined font-[500]">keyboard_arrow_down</span>))}
            </button>
          </div>
        </div>

        <div className=" w-[32rem]">
          <Collapse open={openSection === "name"} className="">
            <Card className="w-full my-4 mx-auto shadow-none">
              <CardBody className=" px-1 w-full">
                <div className="w-[31.7rem] relative">
                  <input
                    id="linkedin"
                    className=" focus:placeholder:text-transparent pl-9 flex justify-center items-center text-[1.05rem] tracking-wider pt-2 font-[500] w-[31.7rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] mb-3"
                    type="text"
                    name="linkedin"
                    placeholder="Linkedin"
                    //   value={tagline}
                  />
                  <label
                    htmlFor="linkedin"
                    className="flex absolute top-[1.2rem] text-gray-500 font-[500] text-[0.8rem] ml-2"
                  >
                    <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
                  </label>
                </div>
                
                <div className="w-[31.7rem] relative">
                  <input
                    id="x"
                    className=" focus:placeholder:text-transparent pl-9 flex justify-center items-center text-[1.05rem] tracking-wider pt-2 font-[500] w-[31.7rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px]"
                    type="text"
                    name="x(formerly twitter)"
                    placeholder={`X${" "}(Formerly twitter)`}
                    //   value={tagline}
                  />
                  <label
                    htmlFor="x"
                    className="flex absolute top-[1.2rem] text-gray-500 font-[500] text-[0.8rem] ml-2"
                  >
                    <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/>
                  </label>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
