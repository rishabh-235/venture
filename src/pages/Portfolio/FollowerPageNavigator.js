import React from 'react'
import { useSelector } from "react-redux";
import { Link, Outlet} from "react-router-dom";

export default function FollowerPageNavigator() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <>
        <div className='flex justify-start items-start text-[1.05rem] text-gray-800 mt-[3rem] mb-[3rem] w-[63rem] font-[500] tracking-wider'>
        <Link className='ml-[1rem] mr-[2rem]' to="/follower">Followers ({userData?.follower?.length})</Link>
        <Link to="following">Following ({userData?.following?.length})</Link>
        </div>

        <Outlet/>
    </>
  )
}
