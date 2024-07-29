import React, { useState, useRef } from "react";
import axios from "axios";
import { Avatar, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { uploadFileToCloudinary } from "../cloudinary";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';



export default function ProfileForm() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [img, setImg] = useState(userData.avatar)
  let accessToken;

  if (userData) {
    accessToken = userData.accessToken;
  }

  const fileInputRef = useRef(null);
  const [formData, setformData] = useState({
    phone:""
  });
  const [fileData , setFileData] = useState({})

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFileData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setformData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newData = {
      ...formData,
      accessToken: accessToken,
    };

    try {
      const formdata = await uploadFileToCloudinary(fileData, newData);
      const response = await axios.post("http://localhost:8000/api/v1/user/editprofile", formdata, { withCredentials: true });

      if (response.data.data) {
        // Navigate to the parent profile route
        navigate(`/profile/${response.data.data?.fullname || ''}`);
      }
    } catch (error) {
      console.log("Error sending data:", error);
    }
  };

  const handleEditImage = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex justify-center items-center  mt-[2rem]">
      <Card className="w-[35rem] max-w-[24rem] mt-2 p-5">
      <CardHeader className=" h-[8rem]">
            <Avatar
              src={img || "https://img.icons8.com/pastel-glyph/64/person-male--v2.png"}
              alt="avatar"
              size="lg"
              className="w-[6rem] rounded-[15rem] relative z-0 hover:opacity-60"
            />

            <span
              onClick={handleEditImage}
              className="material-symbols-outlined flex justify-center border-[1px] border-gray-300 items-center w-[1.8rem] h-[1.8rem] rounded-[6rem] absolute top-[4.2rem] left-[13rem] bg-white   transform -translate-x-1/2 cursor-pointer z-10 "
            >
              edit
            </span>
          </CardHeader>
        <CardBody className=" mt-5">
        <form action="">
        <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-2"
            >
              Edit Your Name
            </label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname || ''}
              className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[3.5rem] tracking-wider"
              placeholder={userData.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-3 ">
            <input
              ref={fileInputRef}
              type="file"
              name="avatar"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-5">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-2"
            >
              Edit your Phone Number.
            </label>
            <input
              type="text"
              name="phone"
              value={ formData.phone}
              className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[3.5rem] tracking-wider"
              placeholder={` ${userData.phone}` }
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col mb-3">
            <label
              htmlFor=""
              className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-2"
            >
              Edit Your Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address || ''}
              className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[3.5rem] tracking-wider"
              placeholder={userData.address}
              onChange={handleChange}
            />
          </div>

          <button onClick={handleSubmit} className=" block right-[5rem] bg-light-blue-700 hover:bg-light-blue-600 w-[6rem] h-[2.8rem] rounded-lg text-white text-[1.05] font-[600] tracking-wider">Save</button>
        </form>
        </CardBody>
      </Card>
    </div>
  );
}
