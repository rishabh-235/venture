import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment/moment";

export default function Profile() {
  const userData = useSelector((state) => state.auth.userData);

  let user = {
    fullname: "Rishabh Gupta",
    address: "Bhopal",
    updatedAt: "March 2024",
  };

  if (userData) {
    user = userData;
  }

  return (
    <>
      <div className=" flex items-center justify-center w-full h-[35rem] mb-[8rem]">
        <div className="w-[20rem]">
          <div className=" flex flex-col justify-around items-center w-full h-[15rem] border-2 rounded-xl">
            <img
              src={user.avatar || "https://img.icons8.com/pastel-glyph/64/person-male--v2.png"}
              alt="avatar"
              className=" w-[7rem] h-[7rem] rounded-[12rem]"
            />
            <div className=" text-[1.4rem] text-gray-800 font-[600]">
              {user.fullname}
            </div>
          </div>
          <div className=" flex flex-col border-2 mt-5 rounded-xl justify-center items-center p-5">
            <div className=" flex w-full items-start text-[0.9rem] font-[500]">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/marker--v1.png"
                alt="marker--v1"
                className=" mr-3"
              />
              <span>{user.address || "Not Given"}</span>
            </div>
            <div className=" w-full text-start text-[0.9rem] font-[500] text-gray-400 mt-4">
              Joined {moment(user.updatedAt).format('MMMM YYYY')}
            </div>
          </div>
          <div className=" w-full text-start mt-3 text-light-blue-700 font-[600]">
            <Link to="editprofile">Edit Profile</Link>
          </div>
          {!user.isInvestor && <div className=" w-full text-start mt-3 text-light-blue-700 font-[600]">
            <Link to="registerinvestor">Become a Investor</Link>
          </div>}
        </div>
      </div>
    </>
  );
}
