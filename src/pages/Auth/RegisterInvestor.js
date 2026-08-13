import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Registerinvestor() {
  const [formData, setformData] = useState({});
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  let accessToken;

  if (userData) {
    accessToken = userData.accessToken;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newData = {
      ...formData,
      accessToken: accessToken,
    };

    axios.post("http://localhost:8000/api/v1/investor/register", newData, {withCredentials: true })
      .then((response) => {
        if (response.data.massage === "Investor Registered Successfully") {
          navigate(`/profile/${response.data.data.user?.fullname || ''}`);
        }
      })
      .catch((error) => {
        console.log("Error sending data:", error);
      });

    setformData({});
  };

  return (
    <div className="flex justify-center items-center  mt-[2rem]">
      <Card className="w-[35rem] max-w-[24rem] mt-5 p-5">
        <CardHeader className=" h-[4rem]">
          <div className=" text-[1.5rem] font-[600]">Investor Register</div>
        </CardHeader>
        <CardBody className=" mt-5">
          <form action="">
            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-2"
              >
                Enter your aadhar Number
              </label>
              <input
                type="text"
                name="aadhar"
                value={formData.aadhar || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[3.5rem] tracking-wider"
                placeholder="Aadhar"
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col mb-5">
              <label
                htmlFor=""
                className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-2"
              >
                Edit your PanCard Number.
              </label>
              <input
                type="text"
                name="panCard"
                value={formData.panCard || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[3.5rem] tracking-wider"
                placeholder="PanCard"
                onChange={handleChange}
              />
            </div>
            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-2"
              >
                Enter your Website
              </label>
              <input
                type="text"
                name="website"
                value={formData.website || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[3.5rem] tracking-wider"
                placeholder="www.xyz.com"
                onChange={handleChange}
              />
            </div>

            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-2"
              >
                Bio
              </label>
              <input
                type="text"
                name="bio"
                value={formData.bio || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[3.5rem] tracking-wider"
                placeholder="Enter your Bio"
                onChange={handleChange}
              />
            </div>

            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-2"
              >
                About
              </label>
              <input
                type="text"
                name="about"
                value={formData.about || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[3.5rem] tracking-wider"
                placeholder=""
                onChange={handleChange}
              />
            </div>

            <div className=" flex flex-col mb-3">
              <label
                htmlFor=""
                className=" text-[1.05rem] text-start text-gray-700 font-[500] mb-2"
              >
                Experties
              </label>
              <input
                type="text"
                name="experties"
                value={formData.experties || ""}
                className=" text-[1.1rem] text-gray-900 font-[500] border-[1.5px] border-gray-800 rounded-lg h-[3.5rem] tracking-wider"
                placeholder=""
                onChange={handleChange}
              />
            </div>

            <button
              onClick={handleSubmit}
              className=" block right-[5rem] bg-light-blue-700 hover:bg-light-blue-600 w-[6rem] h-[2.8rem] rounded-lg text-white text-[1.05] font-[600] tracking-wider"
            >
              Save
            </button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
