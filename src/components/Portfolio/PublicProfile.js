import React, { useState, useRef } from "react";
import { Collapse, Card, CardBody } from "@material-tailwind/react";
import { uploadFileToCloudinary } from "../cloudinary";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PublicProfile() {
  const userData = useSelector((state) => state.auth.userData);
  const user = React.useMemo(() => {
    return userData || {
      firstname: "Rishabh",
      middlename: "",
      lastname: "",
      address: "Bhopal",
      website:"ww.xyz.com",
    };
  }, [userData]);
  const interestsList = user?.interests || [];
  const [openSection, setOpenSection] = useState(null);
  const fileInputRef = useRef(null);
  const [fileData, setFileData] = useState({});
  const [formData, setformData] = useState({});
  const [list, setList] = useState(new Set());
  const avatar = user.avatar;

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

    const interests = [...user.interests,...Array.from(list)];

    const newData = {
      ...formData,
      interests: interests,
    };
    
    try {
      const formdata = await uploadFileToCloudinary(fileData, newData);

      const response = await axios.post(
        "http://localhost:8000/api/v1/user/editprofile",
        formdata,
        { withCredentials: true }
      );

      if (response?.data?.data) {
        // Navigate to the parent profile route
        window.location.href = "http://localhost:3000/settings/public_profile";
      }
    } catch (error) {
      console.log("Error sending data:", error);
    }
  };

  const handleEditImage = async (e) => {
    await fileInputRef.current.click();
  };

  const handlelist = (e) => {
    const value = e.target.value;

    setList((prevSelectedOptions) => {
      const updatedOptions = new Set(prevSelectedOptions);
      updatedOptions.add(value); // Add the selected option to the Set
      return updatedOptions;
    });
  };

  const handleDeleteList = (e) => {
    e.preventDefault();
    const value = e.target.getAttribute("value");

    setList((prevSelectedOptions) => {
      const updatedOptions = new Set(prevSelectedOptions);
      updatedOptions.delete(value);
      return updatedOptions;
    });

  };

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
            <CardBody className=" p-0">
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
                      {user.firstname +
                        " " +
                        user.middlename +
                        " " +
                        user.lastname}
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
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      value={formData?.firstname || ""}
                      placeholder={userData?.firstname}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Middle Name</label>
                    <input
                      type="text"
                      name="middlename"
                      value={formData?.middlename || ""}
                      placeholder={userData?.middlename}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      value={formData?.lastname || ""}
                      placeholder={userData?.lastname}
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
        <Collapse open={openSection !== "url"}>
          <Card>
            <CardBody className=" p-0">
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
                      ventureList.com/{userData?.username}
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
                    <label>What's your username?</label>
                    <input
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                      type="text"
                      name="username"
                      value={formData?.username || ""}
                      placeholder={userData?.username}
                      onChange={handleChange}
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
        <Collapse open={openSection !== "address"}>
          <Card>
            <CardBody className=" p-0">
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("address")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Address
                  </div>
                  <div className="w-[60%] flex">
                    <p className="mr-2 text-[0.95rem] text-end text-gray-600">
                      {user.address}
                    </p>
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "address"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("address")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      Address
                    </div>
                  </div>
                </button>
                <form>
                  <div className="flex justify-between items-center mt-[3.5rem] text-[0.93rem] px-2">
                    <label>Country</label>
                    <input
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                      type="text"
                      name="country"
                      value={formData?.country || ""}
                      placeholder={formData?.country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>Street</label>
                    <input
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                      type="text"
                      name="street"
                      value={formData?.street || ""}
                      placeholder={formData?.street}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>City</label>
                    <input
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                      type="text"
                      name="city"
                      value={formData?.city || ""}
                      placeholder={formData?.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>State</label>
                    <input
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                      type="text"
                      name="state"
                      value={formData?.state || ""}
                      placeholder={formData?.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-[2rem] text-[0.93rem] px-2">
                    <label>PIN Code</label>
                    <input
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                      type="text"
                      name="pincode"
                      value={formData?.pincode || ""}
                      placeholder={formData?.pincode}
                      onChange={handleChange}
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
        <Collapse open={openSection !== "bio"}>
          <Card>
            <CardBody className=" p-0">
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
                  <div className="flex flex-col justify-between items-start mt-[3.5rem] text-[0.93rem] text-start px-2 mb-8">
                    <label>
                      <p className=" mb-2">Tell founders about yourself</p>
                      <p className=" mb-6 text-[0.75rem] ">
                        Your bio is seen by founders who may decide whether to
                        give you an allocation
                      </p>
                    </label>
                    <input
                      className="border-[0.08rem] border-indigo-200 rounded-[0.5rem] font-[500] placeholder:text-gray-400 text-[0.95rem] w-[29rem] h-[3.5rem]"
                      type="text"
                      name="bio"
                      value={formData?.bio || ""}
                      placeholder="I'm an avid investor and serial entrepreneur ... "
                      onChange={handleChange}
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
        <Collapse open={openSection !== "Website"}>
          <Card>
            <CardBody className=" p-0">
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("Website")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Website
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-[0.95rem] text-gray-600">{user.website}</p>
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

                <form>
                  <div className="flex justify-between items-center mt-[2.2rem] text-[0.93rem] px-2">
                    <label>Do you have a personal website?</label>
                    <input
                      className="border border-gray-300 rounded-md w-[20rem] h-[2.3rem]"
                      type="text"
                      name="website"
                      value={formData?.website || ""}
                      placeholder={userData?.website}
                      onChange={handleChange}
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
        <Collapse open={openSection !== "About"}>
          <Card>
            <CardBody className=" p-0">
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("About")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    About
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
                  <div className="flex flex-col justify-between items-start mt-[3.5rem] text-[0.93rem] text-start px-2 mb-8">
                    <label>
                      <p className=" mb-2">Tell founders about yourself</p>
                      <p className=" mb-6 text-[0.75rem] ">
                      Your about section allows you to add more details about your journey as an investor
                      </p>
                    </label>
                    <textarea
                      className="border-[0.08rem] border-indigo-200 rounded-[0.5rem] font-[500] placeholder:text-gray-400 text-[0.95rem] w-[28rem] h-[7rem]"
                      type="text"
                      name="about"
                      value={formData?.about || ""}
                      placeholder="I'm an early investor in unacademy, zomato, oyo... "
                      onChange={handleChange}
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
        <Collapse open={openSection !== "Off"}>
          <Card>
            <CardBody className=" p-0">
              <button
                className="w-full h-[3.2rem] hover:bg-indigo-100 hover:bg-opacity-70 px-2"
                onClick={() => toggleOpen("Off")}
              >
                <div className="w-full flex justify-between">
                  <div className="mr-5 font-[400] tracking-wide text-[0.95rem]">
                    Interests
                  </div>
                </div>
              </button>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse open={openSection === "Off"} className="-mt-[1.3rem]">
          <Card className="w-full my-4 mx-auto px-2 shadow-none border-[1.7px] border-gray-200 rounded-[4px]">
            <CardBody className="w-full rounded-none">
              <div>
                <button
                  className="w-full mt-[1.5rem]"
                  onClick={() => toggleOpen("Off")}
                >
                  <div className="w-full flex justify-between">
                    <div className="mr-5 font-[400] tracking-wide text-[0.93rem] px-2">
                      Interests
                    </div>
                  </div>
                </button>
                <form>
                  <div className="flex justify-between items-center mt-[3.5rem] text-[0.93rem] px-2">
                    <label>What interests you?</label>
                    <div className=" w-[55%] h-auto">
                      <select
                        className="border border-gray-300 rounded-md text-[0.9rem] w-[24rem] h-[2.5rem] mb-3"
                        onChange={handlelist}
                      >
                        <option disabled >Choose Your Interests</option>
                        <option value="Bakeries">Bakeries</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Discounts">Discounts</option>
                        <option value="Robotics">Robotics</option>
                        <option value="Cocktails">Cocktails</option>
                        <option value="Food Trucks">Food Trucks</option>
                        <option value="R and D">R and D</option>
                        <option value="Automation">Automation</option>
                        <option value="Animals">Animals</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Compliance">Compliance</option>
                        <option value="Fundraising">Fundraising</option>
                        <option value="500 Startups">500 Startups</option>
                        <option value="Nightlife">Nightlife</option>
                        <option value="Design">Design</option>
                        <option value="Art">Art</option>
                        <option value="Legal">Legal</option>
                        <option value="Analytics">Analytics</option>
                        <option value="Api">Api</option>
                        <option value="Drones">Drones</option>
                        <option value="Farming">Farming</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Telecommunications">
                          Telecommunications
                        </option>
                        <option value="B2C">B2C</option>
                        <option value="Banking">Banking</option>
                        <option value="Leisure">Leisure</option>
                        <option value="Media">Media</option>
                        <option value="Bio Tech">Bio Tech</option>
                        <option value="Food Tech">Food Tech</option>
                        <option value="Food">Food</option>
                        <option value="Social Impact">Social Impact</option>
                        <option value="Athletes">Athletes</option>
                        <option value="Distillery">Distillery</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Science">Science</option>
                        <option value="Space">Space</option>
                        <option value="Life Science">Life Science</option>
                        <option value="Bars and Clubs">Bars and Clubs</option>
                        <option value="Brewery">Brewery</option>
                        <option value="Eating and Drinking">
                          Eating and Drinking
                        </option>
                        <option value="Alcohol">Alcohol</option>
                        <option value="Smart Cities">Smart Cities</option>
                        <option value="Clean Tech">Clean Tech</option>
                        <option value="Energy">Energy</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Minority Owned">Minority Owned</option>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Software">Software</option>
                        <option value="Techstars">Techstars</option>
                        <option value="Medical Device">Medical Device</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Health and Fitness">
                          Health and Fitness
                        </option>
                        <option value="Hardware">Hardware</option>
                        <option value="Virtual Reality">Virtual Reality</option>
                        <option value="Advertising">Advertising</option>
                        <option value="Moonshots">Moonshots</option>
                        <option value="Ecommerce">Ecommerce</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Aerospace">Aerospace</option>
                        <option value="Dating">Dating</option>
                        <option value="Marketplace">Marketplace</option>
                        <option value="Payments">Payments</option>
                        <option value="Politics">Politics</option>
                        <option value="Crowdfunding">Crowdfunding</option>
                        <option value="Fund">Fund</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Wearables">Wearables</option>
                        <option value="Family">Family</option>
                        <option value="Oil and Gas">Oil and Gas</option>
                        <option value="Sports">Sports</option>
                        <option value="Operations">Operations</option>
                        <option value="Government">Government</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Blockchains">Blockchains</option>
                        <option value="Sex">Sex</option>
                        <option value="Ag Tech">Ag Tech</option>
                        <option value="Logistics">Logistics</option>
                        <option value="Community">Community</option>
                        <option value="Construction">Construction</option>
                        <option value="Outdoors">Outdoors</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Social">Social</option>
                        <option value="Festivals">Festivals</option>
                        <option value="Travel">Travel</option>
                        <option value="Travel and Tourism">
                          Travel and Tourism
                        </option>
                        <option value="Y Combinator">Y Combinator</option>
                        <option value="Software Engineering">
                          Software Engineering
                        </option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Artificial Intelligence">
                          Artificial Intelligence
                        </option>
                        <option value="B2B">B2B</option>
                        <option value="PR">PR</option>
                        <option value="Marketing">Marketing</option>
                        <option value="3D Printing">3D Printing</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Fintech">Fintech</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Product">Product</option>
                        <option value="Events">Events</option>
                        <option value="Games">Games</option>
                      </select>

                      <div className="flex flex-row flex-wrap justify-end gap-2">
                        {[...interestsList,...list].map((item, idx) => (
                          <button onClick={handleDeleteList}>
                            <div
                              key={idx}
                              value={item}
                              className="flex items-center w-max px-4 h-[2rem] bg-gray-500 text-[0.75rem] font-[500] rounded-[0.2rem] text-white"
                            >
                              {item}
                              <span className="font-[400] text-[0.8rem] ml-3 material-symbols-outlined">
                                close
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
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

      <div className="w-full flex justify-center items-center h-[20rem] mt-7">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="font-[500] tracking-wide text-[1rem] ">
            Profile Picture
          </div>
          <button
            className="flex justify-center items-center w-full h-[12rem] outline-dashed outline-1 outline-offset-2 rounded-[0.05rem] mt-2"
            onClick={handleEditImage}
          >
            <img
              className="flex justify-center items-center w-[9rem] h-[9rem] bg-gray-100 rounded-[9rem]"
              src={avatar}
              alt="avatar"
            />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            name="avatar"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
          <div className="w-full flex justify-end">
            <button
              className="flex justify-center text-white tracking-widest mt-4 items-center w-[4.5rem] py-2 rounded-[0.2rem] bg-green-400"
              onClick={handleSubmit}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
