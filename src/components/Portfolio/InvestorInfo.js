import React, { useState } from "react";
import { Collapse, Card, CardBody } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useCountries } from "use-react-countries";
import Datepicker from "react-tailwindcss-datepicker";

export default function InvestorInfo() {
  let user = {
    legalfirstname: "",
    legallastname: "",
    legalmiddlename: "",
    dob: "",
    birthcity: "",
    birthcountry: "",
    nationality: "",
    panCard: "",
    aadhaar: "",
  };

  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });

  const { countries } = useCountries();

  const [openSection, setOpenSection] = React.useState(null);
  const userData = useSelector((state) => state.auth.userData);
  const [formData, setformData] = useState({});

  if (userData) {
    user = userData;
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    if(!name)name = e.target.selectedOptions[0].getAttribute('name');
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newData = {
      ...formData,
      dob: value.startDate
    }

    try {
      // const response = {};
      const response = await axios.post(
        "http://localhost:8000/api/v1/investor/updateinvestor",
        newData,
        { withCredentials: true }
      );
      
      if (response?.data?.massage === "Account details update successfully" || response?.data?.massage === "Investor Registred Succesfully") {
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
    <div className="flex flex-col justify-start items-center ml-[3.5rem] w-[47rem] h-[30rem]">
      <div className="flex justify-start items-center w-full">
        <p className="text-[1.5rem] tracking-wide font-[500]">
          Investor Information
        </p>
      </div>
      <div className="flex justify-start items-center font-[500] w-full mt-6 ml-2">
        <p>Personal Information</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-5">
        <Collapse open={openSection !== "name"}>
          <Card>
            <CardBody className=" p-0">
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("name")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Legal Name
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">
                      {(user.legalfirstname ||
                        "" )+ " " + (user.legalmiddlename ||
                        "" )+ " " + (user.legallastname || "")}
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
                      Legal Name
                    </div>
                  </div>
                </button>
                <div className="flex justify-start mt-[3.5rem] text-[0.98rem] font-[500] px-2">
                  What's your full name?
                </div>
                <form>
                  <div className="flex justify-between items-center mt-[3.5rem] text-[0.93rem] px-2">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="legalfirstname"
                      value={formData?.legalfirstname || ""}
                      placeholder={userData?.flegalirstname}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Middle Name</label>
                    <input
                      type="text"
                      name="legalmiddlename"
                      value={formData?.legalmiddlename || ""}
                      placeholder={userData?.legalmiddlename}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="legallastname"
                      value={formData?.legallastname || ""}
                      placeholder={userData?.legallastname}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="mt-[1.5rem] mb-[1.2rem] text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                    <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                      CANCEL
                    </button>
                    <button
                      className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400"
                      onClick={handleSubmit}
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
        <Collapse open={openSection !== "birth"}>
          <Card>
            <CardBody className=" p-0">
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("birth")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Birthday
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">
                      2001-06-06
                    </p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "birth"} className="-mt-[1.3rem]">
          <Card className="w-full h-[35rem] my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full p-0">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("birth")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      Birthday
                    </div>
                  </div>
                </button>

                <div className="flex justify-start mt-[2rem] text-[0.8rem] text-gray-600 font-[500] px-2">
                  To comply with the law, we verify your identity using your
                  birthday.
                </div>

                <form>
                  <div className="flex justify-between items-center mt-[2.2rem] text-[0.93rem] px-2">
                    <label>Date of birth</label>
                    <div className=" h-[2.3rem] w-[22rem] ">
                      <Datepicker
                        useRange={false}
                        asSingle={true}
                        value={value}
                        popoverDirection="down"
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>City of birth</label>
                    <input
                      type="text"
                      name="birthcity"
                      value={formData?.birthcity || ""}
                      placeholder={userData?.birthcity}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md w-[22rem] h-[2.4rem]"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Country of birth</label>
                    <input
                      type="text"
                      name="birthcountry"
                      value={formData?.birthcountry || ""}
                      placeholder={userData?.birthcountry}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md w-[22rem] h-[2.4rem]"
                    />
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
        <Collapse open={openSection !== "nationality"}>
          <Card>
            <CardBody className=" p-0">
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("nationality")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Nationality
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">
                      {user?.nationality || ""}
                    </p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "nationality"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("nationality")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      Nationality
                    </div>
                  </div>
                </button>
                <form>
                  <div className="flex justify-end items-end mt-[3.5rem] text-[0.93rem] px-2">
                    <select
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md  w-[22rem] h-[2.5rem] mb-3"
                    >
                      {countries.map(({ name },index) => (
                        <option
                          key = {index}
                          name="nationality"
                          value={name}
                          className="flex items-center"
                        >
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-[1.5rem] mb-[1.2rem] text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                    <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                      CANCEL
                    </button>
                    <button
                      className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400"
                      onClick={handleSubmit}
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
        <Collapse open={openSection !== "tex"}>
          <Card>
            <CardBody className=" p-0">
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("tex")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Tax ID
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">
                      {user.panCard || ""}
                    </p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "tex"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("tex")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      Tax ID
                    </div>
                  </div>
                </button>
                <form>
                  <div className="flex justify-between items-center mt-[3.5rem] text-[0.93rem] px-2">
                    <label>PAN Number</label>
                    <input
                      type="text"
                      name="panCard"
                      value={formData?.panCard || ""}
                      placeholder={userData?.panCard}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Aadhaar Number</label>
                    <input
                      type="text"
                      name="aadhaar"
                      value={formData?.aadhaar || ""}
                      placeholder={userData?.aadhaar}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                    />
                  </div>

                  <div className="mt-[1.5rem] mb-[1.2rem] text-[0.75rem] text-gray-600 font-[600] flex justify-end items-center">
                    <button className="flex justify-center tracking-widest items-center w-[5.5rem] py-2">
                      CANCEL
                    </button>
                    <button onClick={handleSubmit} className="flex justify-center text-white tracking-widest items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400">
                      SAVE
                    </button>
                  </div>
                </form>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </div>
  );
}
