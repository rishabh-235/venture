import React from "react";

export default function LoginSecurityPage() {
  return (
    <div className="flex flex-col justify-start items-center ml-[3.5rem] w-[47rem] mb-[20rem]">
      <div className="flex justify-start items-center w-full">
        <p className="text-[1.5rem] tracking-wide font-[500]">
          Login & Security
        </p>
      </div>
      <div className=" w-full flex justify-between mt-5 ml-2">
        <div className="flex justify-start items-center">
          <div className=" mr-5 font-[400] tracking-wide text-[0.95rem]">
            Email
          </div>
          <span className="flex justify-end items-center text-[0.7rem] text-red-600 border-[1.52px] border-red-500 rounded-[1rem] px-[0.8rem] py-[0.1rem] tracking-wide">
            <span class="text-[0.9rem] material-symbols-outlined mr-2 ">
              warning
            </span>
            Please verify
          </span>
        </div>
        <div className="flex">
          <p className="mr-2 text-[0.95rem] tracking-wider text-gray-600">
            rishabhguptalahar@gmail.com
          </p>
          <button className=" tracking-normal text-[0.9rem] text-green-400">
            Update
          </button>
        </div>
      </div>
      <div className=" w-full flex justify-between mt-8 ml-2">
        <div className=" mr-5 font-[400] tracking-wide text-[0.95rem]">
          Password
        </div>
        <div className=" tracking-normal text-[0.9rem] text-green-400">Reset</div>
      </div>
      <div className=" w-full flex justify-between mt-8 ml-2">
        <div className="flex justify-start items-center">
          <div className=" mr-5 font-[400] tracking-wide text-[0.95rem]">Phone</div>
          <span className="flex justify-end items-center text-[0.7rem] text-red-600 border-[1.52px] border-red-500 rounded-[1rem] px-[0.8rem] py-[0.1rem] tracking-wide">
            <span class="text-[0.9rem] material-symbols-outlined mr-2 ">warning</span>
            Please verify
          </span>
        </div>
        <div className="flex">
            <button className=" tracking-normal text-[0.9rem] text-green-400">Update</button>
        </div>
      </div>
      <div className=" w-full flex justify-end items-center mt-8 ml-2"><button className=" tracking-normal text-[0.9rem] text-red-500">Delete Account</button></div>
      <div className=" w-full flex justify-end items-center mt-6 ml-2"><button className=" tracking-normal text-[0.9rem] text-red-500">Log out of all devices</button></div>
    </div>
  );
}
