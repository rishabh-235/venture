import React, { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import BgImg from "../images/substack_hero_card_en_sm.webp";
import axios from "axios";

export default function StartupRegistration() {
  const [openRight, setOpenRight] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [category, setCategory] = useState(null);

  const openDrawerRight = (e) => {
    if(drawerFormData.companyname === "")
    {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    setOpenRight(true);
    document.body.classList.add("overflow-hidden");
  };
  const closeDrawerRight = () => {
    setOpenRight(false);
    document.body.classList.remove("overflow-hidden");
  };
  const [drawerFormData, setDrawerFormData] = useState({
    companyname: "",
  }); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrawerFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCategory = (e) => {
    e.preventDefault()
    setCategory(e?.currentTarget?.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newData = {
      ...drawerFormData,
      category
    };

    axios
      .post("http://localhost:8000/api/v1/startup/register",newData, { withCredentials: true })
      .then((response) => {
        if (response.data.massage === "Startup Registred Succesfully") {
          setIsVisible(true);
        }
      })
      .catch((error) => {
        console.log("Error sending data:", error);
      });


  };


  const theme = {
    drawer: {
      styles: {
        base: {
          drawer: {
            position: "fixed",
            zIndex: "z-50",
            pointerEvents: "pointer-events-auto",
            backgroundColor: "bg-white",
            boxSizing: "box-border",
            width: "w-full",
            boxShadow: "shadow-2xl shadow-blue-gray-900/10",
          },
          overlay: {
            position: "absolute",
            inset: "inset-0",
            width: "w-[100vw]",
            height: "h-[100vh]",
            pointerEvents: "pointer-events-auto",
            backgroundColor: "bg-black",
            backgroundOpacity: "bg-opacity-60",
            backdropBlur: "backdrop-blur-sm",
          },
        },
      },
    },
  };

  return (
    <React.Fragment theme={theme}>
      <div className=" flex mt-5">
        <div className=" w-[50vw] mt-[11rem]">
          <div className="flex flex-col w-auto mb-9 text-start ml-10 leading-[3.8rem]">
            <h5 className="text-[3.8rem] font-[500] tracking-wide">
              Let your{" "}
              <span className="bg-clip-text mr-3 text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-green-500">
                community
              </span>
              invest
            </h5>
          </div>

          <div className=" w-[32rem] h-[7.4rem] mt-5 ml-10 text-start text-[1.3rem] text-gray-800 font-[500] leading-[1.7rem]">
            Raise $50K to $5M+ from hundreds of customers, fans, and friends—all
            in one line on your cap table.
          </div>

          <div className={`flex justify-between w-[33vw] ml-10 rounded-lg border-2 ${isEmpty ? "border-red-500" : ""} px-2`}>
            <div className="relative overflow-hidden">
              <input
                id="companyname"
                className="w-[33vw] peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] border-none bg-transparent"
                type="text"
                name="companyname"
                value={drawerFormData.companyname}
                placeholder="Company Name"
                onChange={handleChange}
              />
              <label
                htmlFor="companyname"
                className="transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
              >
                Company Name
              </label>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                openDrawerRight();
              }}
              type="submit"
              className="items-start bg-gray-800 h-[2.8rem] rounded-lg hover:bg-black w-[11rem] text-white text-[1.1rem] font-[600] mt-[0.4rem]"
            >
              Get Started
            </button>
          </div>
          {isEmpty? <p className=" ml-12 mt-1 text-start text-[0.85rem] text-red-600" >what's Your Company Name</p>: ""}
        </div>

        <div className=" w-[50vw]">
          <div
            className="ml-8 flex justify-items-center bg-cover w-[40vw]  h-[35vw]"
            style={{ backgroundImage: `url(${BgImg})` }}
          ></div>
        </div>
      </div>

      {isVisible ? (
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4 px-[2rem] overflow-y-auto z-40"
          size={565}
        >
          <div className="mb-6 flex items-center justify-between hover:text-gray-600 ">
            <button onClick={closeDrawerRight}>
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className={`w-full mt-[5rem] flex flex-col justify-center items-center`}>
            <h3 className="w-[19rem] text-pretty text-[1.9rem] mt-[9rem] font-[500] leading-[2.3rem] tracking-wide">
            Nice to meet you,
            Rishabh LLC!
            </h3>
            <h2 className="w-[26rem] mt-6 px-5 font-[500] text-gray-700 leading-[1.5rem] tracking-wide">
            Now, you can complete your pitch and launch to your community.
            </h2>
            <button className=" mt-6 text-[0.95rem] rounded-[0.2rem] px-[0.95rem] py-[0.68rem] text-white font-[700] tracking-tight bg-[#0a76d1]">Complete my pitch</button>
          </div>
        </Drawer>
      ): (
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4 px-[2rem] overflow-y-auto"
          size={565}
        >
          <div className="mb-6 flex items-center justify-between hover:text-gray-600">
            <button onClick={closeDrawerRight}>
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className=" text-[1.9rem] text-gray-800 max-w-md mx-auto font-[500] text-center leading-[2.3rem]">
            Let's get {drawerFormData.companyname}'s community round started
          </div>

          <form action="" className=" mt-6">
            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
              >
                1. What's your company's website?
              </label>
              <input
                type="text"
                name="website"
                value={drawerFormData.website || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
                placeholder="🌎https://"
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
              >
                2. Where is your company based?
              </label>
              <input
                type="text"
                name="address"
                value={drawerFormData.address || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
                placeholder="🗺️Write your city"
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
              >
                3. How would you categorize your company?
              </label>
              <ul className=" grid grid-cols-2 md:grid-cols-3 gap-3 text-[1.1rem] font-[500]  border-gray-800 h-full tracking-wider">
                <li>
                  <button onClick={handleCategory} value="Technology" className={`w-full flex flex-col justify-center items-center px-[0.9rem] py-[1rem] gap-1 text-[0.75rem] font-[400] border rounded-lg border-gray-300 hover:border-gray-600 ${category==="Technology"?"border-gray-600 text-gray-600":"text-gray-400"} hover:text-gray-600`}>
                    <span class=" material-symbols-outlined">hub</span>
                    <span>Technology</span>
                  </button>
                </li>
                <li>
                  <button onClick={handleCategory} value="Brick & Mortar" className={`w-full flex flex-col justify-center items-center px-[0.9rem] py-[1rem] gap-1 text-[0.75rem] font-[400] border rounded-lg border-gray-300 hover:border-gray-600 ${category==="Brick & Mortar"?"border-gray-600 text-gray-600":"text-gray-400"} hover:text-gray-600`}>
                    <span class="material-symbols-outlined">storefront</span>
                    <span>Brick & Mortar</span>
                  </button>
                </li>
                <li>
                  <button onClick={handleCategory} value="Consumer & Goods" className={`w-full flex flex-col justify-center items-center px-[0.9rem] py-[1rem] gap-1 text-[0.75rem] font-[400] border rounded-lg border-gray-300 hover:border-gray-600 ${category==="Consumer & Goods"?"border-gray-600 text-gray-600":"text-gray-400"} hover:text-gray-600`}>
                    <span class="material-symbols-outlined">local_mall</span>
                    <span>Consumer & Goods</span>
                  </button>
                </li>
                <li>
                  <button onClick={handleCategory} value="Science and R&D" className={`w-full flex flex-col justify-center items-center px-[0.9rem] py-[1rem] gap-1 text-[0.75rem] font-[400] border rounded-lg border-gray-300 hover:border-gray-600 ${category==="Science and R&D"?"border-gray-600 text-gray-600":"text-gray-400"} hover:text-gray-600`}>
                    <span class="material-symbols-outlined">experiment</span>
                    <span>Science and R&D</span>
                  </button>
                </li>
                <li>
                  <button onClick={handleCategory} value="Entertainment" className={`w-full flex flex-col justify-center items-center px-[0.9rem] py-[1rem] gap-1 text-[0.75rem] font-[400] border rounded-lg border-gray-300 hover:border-gray-600 ${category==="Entertainment"?"border-gray-600 text-gray-600":"text-gray-400"} hover:text-gray-600`}>
                    <span class="material-symbols-outlined">
                      theater_comedy
                    </span>
                    <span>Entertainment</span>
                  </button>
                </li>
                <li>
                  <button onClick={handleCategory} value="Other" className={`w-full flex flex-col justify-center items-center px-[0.9rem] py-[1rem] gap-1 text-[0.75rem] font-[400] border rounded-lg border-gray-300 hover:border-gray-600 ${category==="Other"?"border-gray-600 text-gray-600":"text-gray-400"} hover:text-gray-600`}>
                    <span class="material-symbols-outlined">rocket_launch</span>
                    <span>Other</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
              >
                4. In simple words, what does your company do?
              </label>
              <input
                type="text"
                name="description"
                value={drawerFormData.description || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
                placeholder="e.g Develops and Maintains Websites"
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
              >
                5. How much have you raised previously?
              </label>
              <input
                type="number"
                name="capitalRaised"
                value={drawerFormData.capitalRaised || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
                placeholder="₹ An estimate is fine"
                onChange={handleChange}
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
            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
              >
                6. How much do you want to raise in this round?
              </label>
              <input
                type="number"
                name="funding"
                value={drawerFormData.funding || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
                placeholder="₹ An estimate is fine"
                onChange={handleChange}
                style={{
                  // Hide spin buttons in WebKit browsers (Chrome, Safari)
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                }}
              />
            </div>
            {/* <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
            >
              7. Upload your company's image.
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className=" flex py-3 px-5 text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
            >
              8. Upload your company's Videos.
            </label>
            <input
              type="file"
              name="video"
              accept="video/*"
              className=" flex py-3 px-5 text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
            >
              8. Upload your company's Legal Documents.
            </label>
            <input
              type="file"
              name="legalDocument"
              accept=".pdf, .doc, .docx"
              className=" flex py-3 px-5 text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
              onChange={handleChange}
            />
          </div> */}
            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1rem] text-start text-gray-700 font-[500] mt-2 mb-2"
              >
                7. Is there anything you'd like us to know?
              </label>
              <input
                type="text"
                name="other"
                value={drawerFormData.other || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
                placeholder="optional"
                onChange={handleChange}
              />
            </div>
            <button
              onClick={handleSubmit}
              className=" bg-light-blue-700 hover:bg-light-blue-600 w-full h-[3.2rem] rounded-lg text-white text-[1.05] font-[600] tracking-wider"
            >
              Set up my raise
            </button>
          </form>
        </Drawer>
      )}
    </React.Fragment>
  );
}
