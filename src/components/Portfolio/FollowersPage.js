import React, { useState, useEffect } from "react";
import logo from "../images/Group_74318.png";
import axios from "axios";
import FollowerCard from "./followerCard";

export default function FollowersPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/user/getfollowers", {
        withCredentials: true,
      })
      .then((response) => {
        setCards(response.data.data || []);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="flex justify-center items-start w-[63rem] h-[60rem]">
      {cards.length>0 ? (
        <div>
          {cards.map((follower) => (
            <FollowerCard key={follower.id} data={follower} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-[2rem] w-[20rem] h-[22rem]">
          <img
            src={logo}
            alt="logo"
            className="mt-[2.5rem] mb-[2rem] w-[10rem] h-[7rem]"
          />
          <p className="flex px-[1rem] text-[1.6rem] font-[500] text-gray-500 leading-[2rem]">
            Find investors to coinvest with
          </p>
          <div className="mt-[2rem]">
            <a
              href="/topinvestor"
              data-ripple-light="true"
              class=" align-middle select-none text-center text-[0.9rem] font-[600] tracking-widest transition-all  disabled:pointer-events-none py-3.5 px-10 rounded-[0.2rem] bg-light-blue-800 text-white hover:shadow-lg hover:bg-light-blue-900 border-y border-x border-light-blue-800"
            >
              EXPLORE TOP INVESTORS
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
