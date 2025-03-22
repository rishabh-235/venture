import React from "react";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div className=" mb-[7rem]">
      <div className=" text-left w-1/2 ml-[2.5rem] mb-[0.2rem]">
        <p className="text-[1.6rem] font-[600] text-gray-900">Team</p>
        <p className=" w-[70%] text-[0.9rem] font-[500] text-blue-gray-500 py-1 mt-1 mb-3">
          Get investors excited about your team. Write about specific
          accomplishments that build credibility and trust. To be live on
          Wefunder, all team members must have a photo and bio.
        </p>
      </div>

      <div className=" flex items-start ml-[2.5rem]">
        <button className=" border border-1 rounded-sm border-blue-gray-500 py-[0.8rem] px-[1rem] text-[0.95rem] text-blue-gray-500 hover:opacity-50 transition-opacity duration-300">
            + {" "} <span className=" font-[700] ">Add a team member</span>
        </button>
      </div>

      <div className=" items-start ml-[2.5rem] mt-[1rem]">
        <TeamCard />
      </div>
    </div>
  );
}

export default Team;
