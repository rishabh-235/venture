import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function SettingPage() {
  return (
    <div className="flex px-[1rem] mt-[2.3rem] w-[63rem] mb-[20rem]">
      <div className="flex flex-col w-[11rem] h-[15rem] z-10 sticky top-0">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            `flex justify-start items-center text-[0.95rem] font-[400] px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem] rounded-md transition-all duration-200 ${
              isActive
                ? "bg-blue-50 text-blue-700 font-[500] border-l-4 border-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          Login & Security
        </NavLink>

        <NavLink
          to="investor_information"
          className={({ isActive }) =>
            `flex justify-start items-center text-[0.95rem] font-[400] px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem] rounded-md transition-all duration-200 ${
              isActive
                ? "bg-blue-50 text-blue-700 font-[500] border-l-4 border-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          Investor Information
        </NavLink>

        <NavLink
          to="investor_limits"
          className={({ isActive }) =>
            `flex justify-start items-center text-[0.95rem] font-[400] px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem] rounded-md transition-all duration-200 ${
              isActive
                ? "bg-blue-50 text-blue-700 font-[500] border-l-4 border-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          Investor Limits
        </NavLink>

        <NavLink
          to="banks_and_cards"
          className={({ isActive }) =>
            `flex justify-start items-center text-[0.95rem] font-[400] px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem] rounded-md transition-all duration-200 ${
              isActive
                ? "bg-blue-50 text-blue-700 font-[500] border-l-4 border-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          Banks & Cards
        </NavLink>

        <NavLink
          to="public_profile"
          className={({ isActive }) =>
            `flex justify-start items-center text-[0.95rem] font-[400] px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem] rounded-md transition-all duration-200 ${
              isActive
                ? "bg-blue-50 text-blue-700 font-[500] border-l-4 border-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          Public Profile
        </NavLink>

        <NavLink
          to="vip"
          className={({ isActive }) =>
            `flex justify-start items-center text-[0.95rem] font-[400] px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem] rounded-md transition-all duration-200 ${
              isActive
                ? "bg-blue-50 text-blue-700 font-[500] border-l-4 border-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          VIP
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
