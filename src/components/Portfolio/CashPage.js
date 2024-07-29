import React from "react";
import logo from "../images/Group_1562wefunderCash.png";

export default function CashPage() {
  return (
    <div className="flex flex-col justify-start items-center mt-[3rem] w-[63rem] h-[35rem]">
      <div className="flex flex-col justify-center items-center mt-[2rem] w-[18rem] h-[29rem]">
        <img src={logo} alt="logo" className="w-[12rem] h-[12rem]" />
        <p className="flex px-[1rem] text-[1.6rem] font-[500] text-gray-500 leading-[2rem]">
          You don't have any Wefunder Cash yet
        </p>
        <p className="flex text-[0.9rem] mt-2 text-gray-500 px-[2rem] font-[500]">
          You can deposit from a UPI transfer or a linked account
        </p>
        <div className="mt-[1.5rem]">
          <a
            href="/topinvestor"
            data-ripple-light="true"
            class="flex justify-center items-center align-middle select-none text-center text-[0.8rem] font-[600] tracking-widest transition-all  disabled:pointer-events-none py-3.5 px-6 rounded-[0.2rem] bg-light-blue-800 text-white hover:shadow-lg hover:bg-light-blue-900 border-y border-x border-light-blue-800"
          >
            <span class="material-symbols-outlined text-[1.1rem] mr-[0.6rem]">
              account_balance
            </span>
            ADD NEW BANK ACCOUNT
          </a>
        </div>
        <div className="mt-[1rem] mb-2">
          <a
            href="/topinvestor"
            data-ripple-light="true"
            class="flex justify-center items-center align-middle select-none text-center text-[0.88rem] text-gray-600 font-[600] tracking-widest transition-all  disabled:pointer-events-none py-[0.7rem] px-[3.2rem] rounded-[0.2rem] border-[1px] hover:border-black border-gray-300"
          >
            MAKE UPI TRANSFER
          </a>
        </div>
      </div>
      <div className=" flex flex-col text-[0.8rem] text-gray-500 font-[500] w-full">
        <span>VentureList Cash only accepts UPI or Indian banks.</span>
        <span>Credit cards not accepted.</span>
      </div>
    </div>
  );
}
