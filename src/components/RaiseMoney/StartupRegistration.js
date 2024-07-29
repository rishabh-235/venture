import React, { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import BgImg from "../images/substack_hero_card_en_sm.webp";
import axios from "axios";
import { useSelector } from "react-redux";
import { uploadFileToCloudinary } from "../cloudinary";
import { Navigate } from 'react-router-dom';


export default function StartupRegistration() {
  const [openRight, setOpenRight] = useState(false);
  const [fileData , setFileData] = useState({})


  const openDrawerRight = () => {
    setOpenRight(true);
    document.body.classList.add("overflow-hidden");
  };
  const closeDrawerRight = () => {
    setOpenRight(false);
    document.body.classList.remove("overflow-hidden");
  };

  const userData = useSelector((state) => state.auth.userData);
  let accessToken;
  if (userData) {
    accessToken = userData.accessToken;
  }
  const [drawerFormData, setDrawerFormData] = useState({
    companyname: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFileData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setDrawerFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newData = {
      ...drawerFormData,
      accessToken: accessToken,
    };
    closeDrawerRight();
    const formdata = await uploadFileToCloudinary(fileData,newData);
    axios
      .post("http://localhost:8000/api/v1/startup/register",formdata)
      .then((response) => {
        if (response.data.massage === "Startup Registred Succesfully") {
          <Navigate to='/profile' />;
        }
      })
      .catch((error) => {
        console.log("Error sending data:", error);
      });
    // Reset form data and close drawer
    setDrawerFormData({ companyname: "" });
  };

  const theme = {
    drawer: {
      styles: {
        base: {
          drawer: {
            position: "fixed",
            zIndex: "z-[9999]",
            pointerEvents: "pointer-events-auto",
            backgroundColor: "bg-white",
            boxSizing: "box-border",
            width: "w-full",
            boxShadow: "shadow-2xl shadow-blue-gray-900/10",
          },
          overlay: {
            position: "absolute",
            inset: "inset-0",
            width: "w-full",
            height: "h-full",
            pointerEvents: "pointer-events-auto",
            zIndex: "z-[9995]",
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

          <div className="flex justify-between w-[33vw] ml-10 rounded-lg border-2 px-2">
            <div className="relative">
              <input
                id="companyname"
                className="w-[19.5rem] peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] border-none outline-white"
                type="text"
                name="companyname"
                value={drawerFormData.companyname}
                placeholder="Company Name"
                onChange={handleChange}
              />
              <label
                htmlFor="companyname"
                className="transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
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
        </div>

        <div className=" w-[50vw]">
          <div
            className="ml-8 flex justify-items-center bg-cover w-[40vw]  h-[35vw]"
            style={{ backgroundImage: `url(${BgImg})` }}
          ></div>
        </div>
      </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 overflow-y-auto"
        size={550}
      >
        <div className="mb-6 flex items-center justify-between ">
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
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
            >
              1. What's your company's website?
            </label>
            <input
              type="text"
              name="website"
              value={drawerFormData.website || ''}
              className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
              placeholder="🌎https://"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
            >
              2. Where is your company based?
            </label>
            <input
              type="text"
              name="address"
              value={drawerFormData.address || ''}
              className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
              placeholder="🗺️Write your city"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
            >
              3. How would you categorize your company?
            </label>
            <input
              type="text"
              name="industry"
              value={drawerFormData.industry || ''}
              className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
              placeholder="🏗️Select your category"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
            >
              4. In simple words, what does your company do?
            </label>
            <input
              type="text"
              name="description"
              value={drawerFormData.description || ''}
              className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
              placeholder="e.g Develops and Maintains Websites"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
            >
              5. How much have you raised previously?
            </label>
            <input
              type="number"
              name="capitalRaised"
              value={drawerFormData.capitalRaised || ''}
              className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
              placeholder="₹ An estimate is fine"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
            >
              6. How much do you want to raise in this round?
            </label>
            <input
              type="number"
              name="funding"
              value={drawerFormData.funding || ''}
              className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[4rem] tracking-wider"
              placeholder="₹ An estimate is fine"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
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
          {/* <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
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
          </div> */}
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
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
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-3"
            >
              9. Is there anything you'd like us to know?
            </label>
            <input
              type="text"
              name="other"
              value={drawerFormData.other || ''}
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
    </React.Fragment>
  );
}
