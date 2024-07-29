import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function PortfolioNavigators() {
  return (
    <>
      <div className=" mt-[1rem] w-full flex justify-center items-center flex-col">
        {/* extra information about user */}
        <div className=" p-[1.5rem] text-[0.9rem] font-[500] flex justify-between items-center flex-row w-[64rem] h-[5rem] bg-indigo-100 rounded-md">
          <p className="">Your investor account is incomplete.</p>
          <button className="w-[12.2rem] h-[2.8rem] text-white rounded-[0.2rem] hover:opacity-65 bg-black drop-shadow-2xl">
            Complete my account
          </button>
        </div>

        {/* Navigators */}
        <div className=" mt-[1rem] flex justify-between items-center">
          <Link to="portfolio" className=" h-[3.5rem]">
            <div className=" hover:border-b-2 hover:border-black mb-[0.5rem]">
            <button className=" flex justify-center items-center w-[10rem] h-[3rem] mr-2 p-[1rem]">
            <div className=" p-[0.4rem]"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M168-192q-29 0-50.5-21.5T96-264v-432q0-29.7 21.5-50.85Q139-768 168-768h216l96 96h312q29.7 0 50.85 21.15Q864-629.7 864-600v336q0 29-21.15 50.5T792-192H168Zm0-72h624v-336H450l-96-96H168v432Zm0 0v-432 432Z"/></svg></div>
              Portfolio
            </button>
            </div>
          </Link>
          <Link to="follower" className=" h-[3.5rem]">
            <div className=" hover:border-b-2 hover:border-black mb-[0.5rem]">
            <button className=" flex justify-center items-center w-[10rem] h-[3rem] mr-2 p-[1rem]">
            <div className=" p-[0.4rem]"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M96-192v-92q0-25.78 12.5-47.39T143-366q54-32 114.5-49T384-432q66 0 126.5 17T625-366q22 13 34.5 34.61T672-284v92H96Zm648 0v-92q0-42-19.5-78T672-421q39 8 75.5 21.5T817-366q22 13 34.5 34.67Q864-309.65 864-284v92H744ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm336-144q0 60-42 102t-102 42q-8 0-15-.5t-15-2.5q25-29 39.5-64.5T600-624q0-41-14.5-76.5T546-765q8-2 15-2.5t15-.5q60 0 102 42t42 102ZM168-264h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14t-99 42q-4.95 2.83-7.98 7.91-3.02 5.09-3.02 12V-264Zm216.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21ZM384-264Zm0-360Z"/></svg></div>
              Followers
            </button>
            </div>
          </Link>
          <Link to="watch" className=" h-[3.5rem]">
            <div className=" hover:border-b-2 hover:border-black mb-[0.5rem]">
            <button className=" flex justify-center items-center w-[10rem] h-[3rem] mr-2 p-[1rem]">
            <div className=" p-[0.4rem]"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg></div>
              Watchlist
            </button>
            </div>
          </Link>
          <Link to="cash" className=" h-[3.5rem]">
            <div className=" hover:border-b-2 hover:border-black mb-[0.5rem]">
            <button className=" flex justify-center items-center w-[10rem] h-[3rem] mr-2 p-[1rem]">
            <div className=" p-[0.4rem]"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M552-432q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-288 96q-29.7 0-50.85-21.17Q192-378.33 192-408.06v-288.22Q192-726 213.15-747T264-768h576q29.7 0 50.85 21.17Q912-725.67 912-695.94v288.22Q912-378 890.85-357T840-336H264Zm72-72h432q0-30 21.15-51.12 21.15-21.11 50.85-21.11V-624q-29.7 0-50.85-21.15Q768-666.3 768-696H336q0 30-21.15 51.12-21.15 21.11-50.85 21.11V-480q29.7 0 50.85 21.15Q336-437.7 336-408Zm456 216H120q-29.7 0-50.85-21.15Q48-234.3 48-264v-408h72v408h672v72ZM264-408v-288 288Z"/></svg></div>
              Cash
            </button>
            </div>
          </Link>
          <Link to="docs" className=" h-[3.5rem]">
            <div className=" hover:border-b-2 hover:border-black mb-[0.5rem]">
            <button className=" flex justify-center items-center w-[10rem] h-[3rem] mr-2 p-[1rem]">
            <div className=" p-[0.4rem]"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M263.72-96Q234-96 213-117.15T192-168v-624q0-29.7 21.15-50.85Q234.3-864 264-864h312l192 192v504q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72ZM528-624v-168H264v624h432v-456H528ZM264-792v189-189 624-624Z"/></svg></div>
              Tax Docs
            </button>
            </div>
          </Link>
          <Link to="settings/login&security" className=" h-[3.5rem]">
            <div className=" hover:border-b-2 hover:border-black mb-[0.5rem]">
            <button className=" flex justify-center items-center w-[10rem] h-[3rem] mr-2 p-[1rem]">
            <div className=" p-[0.4rem]"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM96-192v-92q0-26 12.5-47.5T143-366q55-32 116-49t125-17q11 0 20.5.5T425-430q-7 17-10.5 35t-5.5 36l-25-1q-54 0-106 14t-99 42q-4.95 2.94-7.98 8.24Q168-290.47 168-284v20h251q4.85 18.63 12.92 36.81Q440-209 451-192H96Zm543 48-12-56q-14-5-26.5-12T577-228l-55 17-32-55 41-40q-4-14-3.5-29t3.5-29l-41-39 32-56 54 16q11-10 24-17.5t27-11.5l13-56h64l13 56q14 5 27 12t24 17l54-15 32 55-40 38q2 15 2 30.05 0 15.06-3 28.95l41 39-32 55-55-16q-11 9-23.5 16.5T717-200l-14 56h-64Zm33.21-120Q702-264 723-285.21t21-51Q744-366 722.79-387t-51-21Q642-408 621-386.79t-21 51Q600-306 621.21-285t51 21Zm-288-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21Zm-.21-72Zm35 360Z"/></svg></div>
              Account
            </button>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
