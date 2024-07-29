import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function SettingPage() {
  return (
    <div className=' flex px-[1rem] mt-[2.3rem] w-[63rem] mb-[20rem]'>
      <div className='flex flex-col w-[11rem] h-[15rem] z-10 sticky top-0'>
        <Link to="/settings/login&security" className='flex justify-start items-center text-[0.95rem] font-[400] text-gray-500 hover:text-gray-600 px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem]'>Login & Security</Link>
        <Link to="/settings/investor_information" className='flex justify-start items-center text-[0.95rem] font-[400] text-gray-500 hover:text-gray-600 px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem]'>Investor Information</Link>
        <Link to="/settings/investor_limits" className='flex justify-start items-center text-[0.95rem] font-[400] text-gray-500 hover:text-gray-600 px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem]'>Investor Limits</Link>
        <Link to="/settings/banks_and_cards" className='flex justify-start items-center text-[0.95rem] font-[400] text-gray-500 hover:text-gray-600 px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem]'>Banks & Cards</Link>
        <Link to="/settings/public_profile" className='flex justify-start items-center text-[0.95rem] font-[400] text-gray-500 hover:text-gray-600 px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem]'>Public Profile</Link>
        <Link to="/settings/vip" className='flex justify-start items-center text-[0.95rem] font-[400] text-gray-500 hover:text-gray-600 px-[0.4rem] w-[11rem] h-[2.2rem] mb-[0.3rem]'>VIP</Link>
      </div>
      <Outlet />
    </div>
  )
}
