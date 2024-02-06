import React, { Component } from 'react'
import Collapse from './Collapse';
import { Button } from '@material-tailwind/react';

export default class FAQPage extends Component {
  render() {
    return (
      <div className=' flex items-center justify-center mb-[5rem] bg-[#F0F8FF]'>
        <div className=' w-[60rem]'>
            <h1 className=' text-[2.9rem] text-gray-800 mt-[5rem] tracking-widest'>Frequently Asked Questions</h1>
            <div className=' flex flex-col justify-center items-center mt-10'>
                <Collapse />
                <div className='h-[1px] bg-gray-400 w-[40rem]'></div>
                <Collapse />
                <div className='h-[0.5px] bg-gray-400 w-[40rem]'></div>
                <Collapse />
                <div className='h-[1px] bg-gray-400 w-[40rem]'></div>
                <Collapse />
            </div>

            <div className="mt-6 flex justify-center items-center">
                <Button className=" rounded-[10px] flex justify-center items-center bg-gray-800 h-12 hover:bg-black w-[310px] mb-2 text-[15px] tracking-wider">
                  More Investor FAQs
                  <span class="ml-[8px] material-symbols-outlined">arrow_right_alt</span>
                </Button>
              </div>
        </div>
      </div>
    )
  }
}
