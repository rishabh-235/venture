import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";

export default function LoginSecurityPage() {
  const [openEmail, setOpenEmail] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);

  const handleOpenEmail = () => {
    setOpenEmail(!openEmail);
  };

  const handleOpenPassword = () => {
    setOpenPassword(!openPassword);
  };

  const handleOpenPhone = () => {
    setOpenPhone(!openPhone);
  };

  return (
    <div className="flex flex-col justify-start items-center ml-[3.5rem] w-[47rem] mb-[20rem]">
      <div className="flex justify-start items-center w-full">
        <p className="text-[1.5rem] tracking-wide font-[500]">
          Login & Security
        </p>
      </div>
      <div>
        <Dialog
          fullscreen
          open={openEmail}
          handler={handleOpenEmail}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.8, y: -100 },
          }}
          className="w-max h-max px-8 mr-[80rem] left-[30%] rounded-[0.15rem] top-[12rem] mb-[40rem]"
        >
          <div className=" flex justify-end items-end mt-4">
            <button onClick={handleOpenEmail}>
              <span class=" text-[2rem] text-gray-600 material-symbols-outlined">
                close
              </span>
            </button>
          </div>
          <div className=" bg-white">
            <div className=" flex flex-col justify-center items-center mb-[2.5rem] mt-1 text-[1.09rem] text-gray-700 tracking-wider">
              <p className=" w-max ">
                Your email is not currently verified.
              </p>
              <p className=" w-max">Would you like to verify or update it?</p>
            </div>
            <div className=" flex justify-center items-center mb-[3rem]">
              <button className=" bg-black text-white px-[5.2rem] text-[0.95rem] hover:duration-[400ms] hover:opacity-50 font-[600] mr-[1.1rem] py-[0.64rem] rounded-[0.2rem]">
                Verify
              </button>
              <button className=" bg-black text-white px-[5.2rem] text-[0.95rem] hover:duration-[400ms] hover:opacity-50 font-[600] py-[0.64rem] rounded-[0.2rem]">
                Update
              </button>
            </div>
          </div>
        </Dialog>
      </div>

      <div>
        <Dialog
          fullscreen
          open={openPassword}
          handler={handleOpenPassword}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.8, y: -100 },
          }}
          className="w-[65rem] h-max px-[4rem] py-[1rem] mr-[80rem] left-[12%] rounded-[0.15rem] top-[12rem] mb-[40rem]"
        >
          <div className=" flex justify-end items-end mt-4">
            <button onClick={handleOpenPassword}>
              <span class=" text-[2rem] text-gray-600 material-symbols-outlined">
                close
              </span>
            </button>
          </div>
          <div className=" bg-white">
            <h4 className="mb-6 text-[1.3rem] tracking-wider text-gray-700 font-[500]" >Reset your password</h4>
            <div className=" mb-[2.5rem] mt-1 text-[1.09rem] text-gray-700 tracking-wider">
              <p className=" w-max ">
              We sent instructions to reset your password to your email address.
              </p>
            </div>
          </div>
        </Dialog>
      </div>

      <div>
        <Dialog
          fullscreen
          open={openPhone}
          handler={handleOpenPhone}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.8, y: -100 },
          }}
          className="w-max h-max px-8 mr-[80rem] left-[30%] rounded-[0.15rem] top-[12rem] mb-[40rem]"
        >
          <div className=" flex justify-end items-end mt-4">
            <button onClick={handleOpenPhone}>
              <span class=" text-[2rem] text-gray-600 material-symbols-outlined">
                close
              </span>
            </button>
          </div>
          <div className=" bg-white">
            <div className=" flex flex-col justify-center items-center mb-[2.5rem] mt-1 text-[1.09rem] text-gray-700 tracking-wider">
              <p className=" w-max ">
                Your phone number is not currently verified.
              </p>
              <p className=" w-max">Would you like to verify or update it?</p>
            </div>
            <div className=" flex justify-center items-center mb-[3rem]">
              <button className=" bg-black text-white px-[5.2rem] text-[0.95rem] hover:duration-[400ms] hover:opacity-50 font-[600] mr-[1.1rem] py-[0.64rem] rounded-[0.2rem]">
                Verify
              </button>
              <button className=" bg-black text-white px-[5.2rem] text-[0.95rem] hover:duration-[400ms] hover:opacity-50 font-[600] py-[0.64rem] rounded-[0.2rem]">
                Update
              </button>
            </div>
          </div>
        </Dialog>
      </div>
      <button
        onClick={handleOpenEmail}
        className=" w-full flex justify-center items-center h-[3.2rem] hover:bg-[#80acd1] hover:bg-opacity-10 mt-2"
      >
        <div className=" w-full flex justify-between ml-2">
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
            <div className=" tracking-normal text-[0.9rem] text-green-400">
              Update
            </div>
          </div>
        </div>
      </button>
      <button
        onClick={handleOpenPassword}
        className=" w-full flex justify-center items-center h-[3.2rem] hover:bg-[#80acd1] hover:bg-opacity-10"
      >
        <div className=" w-full flex justify-between  ml-2">
          <div className=" mr-5 font-[400] tracking-wide text-[0.95rem]">
            Password
          </div>
          <div className=" tracking-normal text-[0.9rem] text-green-400">
            Reset
          </div>
        </div>
      </button>
      <button
        onClick={handleOpenPhone}
        className=" w-full flex justify-center items-center h-[3.2rem] hover:bg-[#80acd1] hover:bg-opacity-10"
      >
        <div className=" w-full flex justify-between ml-2">
          <div className="flex justify-start items-center">
            <div className=" mr-5 font-[400] tracking-wide text-[0.95rem]">
              Phone
            </div>
            <span className="flex justify-end items-center text-[0.7rem] text-red-600 border-[1.52px] border-red-500 rounded-[1rem] px-[0.8rem] py-[0.1rem] tracking-wide">
              <span class="text-[0.9rem] material-symbols-outlined mr-2 ">
                warning
              </span>
              Please verify
            </span>
          </div>
          <div className="flex">
            <div className=" tracking-normal text-[0.9rem] text-green-400">
              Update
            </div>
          </div>
        </div>
      </button>
      <button className=" w-full flex justify-center items-center h-[3.2rem] hover:bg-[#80acd1] hover:bg-opacity-10">
        <div className=" w-full flex justify-end items-center ml-2 ">
          <div className=" tracking-normal text-[0.9rem] text-red-500">
            Delete Account
          </div>
        </div>
      </button>

      <button className=" w-full flex justify-center items-center h-[3.2rem] hover:bg-[#80acd1] hover:bg-opacity-10">
        <div className=" w-full flex justify-end items-center ml-2">
          <div className=" tracking-normal text-[0.9rem] text-red-500">
            Log out of all devices
          </div>
        </div>
      </button>
    </div>
  );
}
