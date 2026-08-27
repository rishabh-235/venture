import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../components/images/Group_74318.png";
import FollowerCard from "../../components/Portfolio/FollowerCard";
import { fetchFollowers } from "../../redux/slice/userSlice";

export default function FollowersPage() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.user.followers);

  useEffect(() => {
    dispatch(fetchFollowers());
  }, [dispatch]);

  return (
    <div className="flex justify-center items-start w-[63rem] h-[60rem]">
      {cards.length > 0 ? (
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
            width="160"
            height="112"
            loading="lazy"
            className="mt-[2.5rem] mb-[2rem] w-[10rem] h-[7rem]"
          />
          <p className="flex px-[1rem] text-[1.6rem] font-[500] text-gray-500 leading-[2rem]">
            Find investors to coinvest with
          </p>
          <div className="mt-[2rem]">
            <a
              href="/topinvestor"
              data-ripple-light="true"
              className=" align-middle select-none text-center text-[0.9rem] font-[600] tracking-widest transition-all  disabled:pointer-events-none py-3.5 px-10 rounded-[0.2rem] bg-light-blue-800 text-white hover:shadow-lg hover:bg-light-blue-900 border-y border-x border-light-blue-800"
            >
              EXPLORE TOP INVESTORS
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
