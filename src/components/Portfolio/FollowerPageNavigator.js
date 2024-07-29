import React from 'react'
import { Link, Outlet} from "react-router-dom";

export default function FollowerPageNavigator() {
  return (
    <>
        <div className='flex justify-start items-start text-[1.05rem] text-gray-800 mt-[3rem] mb-[3rem] w-[63rem] font-[500] tracking-wider'>
        <Link className='ml-[1rem] mr-[2rem]' to="/follower">Followers (0)</Link>
        <Link to="following">Following (0)</Link>
        </div>

        <Outlet/>
    </>
  )
}
