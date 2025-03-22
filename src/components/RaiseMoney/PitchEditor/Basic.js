import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePitchData } from "../../../redux/slice/pitchDataSlice";

function Basic() {
  const dispatch = useDispatch();
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const logoInputRef = useRef(null);
  const otherInputRef = useRef(null);
  const [BasicData, setBasicData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, type, value } = e.target;

    setBasicData((prevState) => ({
        ...prevState,
        textData: {
            ...prevState.textData,
            ...(type !== "file" && { [name]: value })
        },
    }));


    dispatch(
        updatePitchData({
            pitchName: "basic",
            data: {
                textData: {
                    ...BasicData.textData,
                    ...(type !== "file" && { [name]: value })
                },
            }
        })
    );
};


  const handleEditImage = async (e) => {
    e.preventDefault();
    await imageInputRef.current.click();
  };

  const handleEditVideo = async (e) => {
    e.preventDefault();
    await videoInputRef.current.click();
    console.log(e);
  };

  const handleEditLogo = async (e) => {
    e.preventDefault();
    await logoInputRef.current.click();
    console.log(e);
  };

  const handleEditOther = async (e) => {
    e.preventDefault();
    await otherInputRef.current.click();
    console.log(e);
  };

  return (
    <div className=" mb-[7rem]">
      <div className=" text-[1.6rem] font-[600] text-gray-900 text-left w-1/2 ml-[2.5rem] mb-[0.2rem]">
        Basics
      </div>
      <form className="flex flex-col ml-[2.5rem] w-[58rem] items-start">
        <div className=" relative ">
          <input
            id="Companyname"
            className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
            type="text"
            name="companyname"
            placeholder="Company Name"
            onChange={handleChange}
            value={BasicData.companyname}
          />
          <label
            htmlFor="Companyname"
            className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
          >
            Company Name
          </label>
        </div>

        <div className=" relative ">
          <input
            id="Tagline"
            className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
            type="text"
            name="tagline"
            placeholder="Tagline"
            onChange={handleChange}
            value={BasicData.tagline}
          />
          <label
            htmlFor="Tagline"
            className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
          >
            Tagline
          </label>
        </div>

        <div className="w-[32rem] flex justify-center items-center h-[20rem] mt-[4rem]">
          <div className="w-full flex flex-col justify-start items-start">
            <div className="text-start font-[500] tracking-wide text-[1rem]">
              <p className=" text-[1.2rem] text-gray-600">Main Image</p>
              <p className=" text-[0.9rem] text-gray-500 py-1">
                We recommend showing off your product with your users or
                founders. Read our{" "}
                <a
                  className=" text-light-blue-700 hover:text-blue-gray-600"
                  href="https://guides.wefunder.com/pre-launch/how-to-choose-your-cover-image"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  main image tips
                </a>
                .
              </p>
            </div>
            <button
              className="flex flex-col justify-center items-center w-full h-[20rem] outline-dashed outline-1 outline-offset-2 rounded-[0.05rem] mt-2"
              onClick={handleEditImage}
            >
              <div>
                <p className=" text-[1.02rem] font-[600] text-gray-800 tracking-wide">
                  Upload a cover photo
                </p>
                <p className=" text-gray-400 text-[0.82rem] font-[600] py-1 tracking-wide">
                  1200 x 675 (suggested)
                </p>
              </div>
              <div className=" text-[0.95rem] font-[500] underline">
                Browse Files
              </div>
            </button>
            <input
              ref={imageInputRef}
              type="file"
              name="coverphoto"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-[32rem] flex justify-center items-center h-[20rem] mt-[7.2rem] mb-[5.2rem]">
          <div className="w-full flex flex-col justify-start items-start">
            <div className="text-start font-[500] tracking-wide text-[1rem]">
              <p className=" text-[1.2rem] text-gray-600">Video</p>
              <p className=" text-[0.9rem] text-gray-500 py-1">
                Build a human connection with investors, like you’re pitching
                them live. Read more{" "}
                <a
                  className=" text-light-blue-700 hover:text-blue-gray-600"
                  href="https://guides.wefunder.com/pre-launch/how-to-produce-your-video"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  video tips.
                </a>
                .
              </p>
            </div>
            <button
              className="flex flex-col justify-center items-center w-full h-[20rem] outline-dashed outline-1 outline-offset-2 rounded-[0.05rem] mt-2"
              onClick={handleEditVideo}
            >
              <div>
                <p className=" text-[1.02rem] font-[600] text-gray-800 tracking-wide">
                  Upload a video
                </p>
                <p className=" text-gray-400 text-[0.82rem] font-[600] py-1 tracking-wide">
                  .mp4 - Max size 300MB
                </p>
              </div>
              <div className=" text-[0.95rem] font-[500] underline">
                Browse Files
              </div>
            </button>
            <input
              ref={videoInputRef}
              type="file"
              name="video"
              accept="video/*"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div className="text-start font-[500] tracking-wide text-[1rem] mb-2">
            <p className=" text-[1.2rem] text-gray-600">Company HQ</p>
          </div>
          <div className=" relative">
            <input
              id="city"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              type="text"
              name="city"
              placeholder="Select your city"
              onChange={handleChange}
              value={BasicData.city}
            />
            <label
              htmlFor="city"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Select your city
            </label>
          </div>
        </div>

        <div className=" mt-[1.5rem]">
          <div className="text-start font-[500] tracking-wide text-[1rem] mb-2">
            <p className=" text-[1.2rem] text-gray-600">Links</p>
          </div>
          <div className=" relative">
            <input
              id="website"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              type="text"
              name="website"
              placeholder="Website"
              onChange={handleChange}
              value={BasicData.website}
            />
            <label
              htmlFor="website"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Website
            </label>
          </div>
          <div className=" relative">
            <input
              id="x"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              type="text"
              name="twitter"
              placeholder={`X${" "}(Formerly twitter)`}
              value={BasicData.twitter}
            />
            <label
              htmlFor="x"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              X (Formerly twitter)
            </label>
          </div>
          <div className=" relative">
            <input
              id="linkedin"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              type="text"
              name="linkedin"
              placeholder="Linkedin"
              onChange={handleChange}
              value={BasicData.linkedin}
            />
            <label
              htmlFor="linkedin"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Linkedin
            </label>
          </div>
          <div className=" relative">
            <input
              id="instagram"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              type="text"
              name="instagram"
              placeholder="Instagram"
              onChange={handleChange}
              value={BasicData.instagram}
            />
            <label
              htmlFor="instagram"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Instagram
            </label>
          </div>
          <div className=" relative">
            <input
              id="youtube"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              type="text"
              name="youtube"
              placeholder="Youtube"
              onChange={handleChange}
              value={BasicData.youtube}
            />
            <label
              htmlFor="youtube"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Youtube
            </label>
          </div>
          <div className=" relative">
            <input
              id="facebook"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              type="text"
              name="facebook"
              placeholder="Facebook"
              onChange={handleChange}
              value={BasicData.facebook}
            />
            <label
              htmlFor="facebook"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Facebook
            </label>
          </div>
          <div className=" relative">
            <input
              id="blog"
              className="peer placeholder-transparent flex justify-center items-center text-[1.05rem] tracking-wider pt-6 font-[500] w-[32rem] h-[3.9rem] rounded-xl border-gray-300 border-[1px] hover:border-gray-700 mb-3"
              type="text"
              name="blog"
              placeholder="Blog"
              onChange={handleChange}
              value={BasicData.blog}
            />
            <label
              htmlFor="blog"
              className=" transition-all peer-placeholder-shown:text-[1.05rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-gray-500 peer-focus:text-[0.8rem] absolute left-3 top-2 text-gray-500 font-[500] text-[0.8rem]"
            >
              Blog
            </label>
          </div>
        </div>

        <div className="w-[18rem] flex justify-center items-center h-[18rem] mt-[2.5rem]">
          <div className="w-full flex flex-col justify-start items-start">
            <div className="text-start font-[500] tracking-wide text-[1rem]">
              <p className=" text-[1.2rem] text-gray-600">Logo</p>
            </div>
            <button
              className="flex flex-col justify-center items-center w-full h-[18rem] outline-dashed outline-1 outline-offset-2 rounded-[0.05rem] mt-2"
              onClick={handleEditLogo}
            >
              <div>
                <p className=" text-[1.02rem] font-[600] text-gray-800 tracking-wide">
                  Upload a logo
                </p>
              </div>
              <div className=" text-[0.95rem] font-[500] underline">
                Browse Files
              </div>
            </button>
            <input
              ref={logoInputRef}
              type="file"
              name="logo"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-auto flex justify-center items-center h-[2.5rem] mt-[3.8rem]">
          <div className="w-full flex flex-row justify-center items-center">
            <div className="text-start font-[500] text-[1rem] mr-[1rem]">
              <p className=" text-[1.2rem] text-gray-600">Attachments</p>
            </div>
            <button
              className="flex justify-center items-center px-[1rem] text-gray-500 w-full h-[2.5rem] outline outline-1 outline-offset-2 rounded-[0.05rem] mt-2 hover:text-gray-400"
              onClick={handleEditOther}
            >
              <div>
                <p>
                  +{" "}
                  <span className=" text-[0.9rem] font-[700]">Upload File</span>
                </p>
              </div>
            </button>
            <input
              ref={otherInputRef}
              type="file"
              name="documents"
              accept="application/pdf"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Basic;
