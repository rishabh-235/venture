import React from "react";

export default function BankCard() {
  return (
    <div className="flex flex-col justify-start items-center ml-[3.5rem] h-[40rem] w-[47rem]">
      <div className="flex justify-start items-center w-full">
        <p className="text-[1.5rem] tracking-wide font-[500]">Banks & Cards</p>
      </div>
      <div className="flex flex-col justify-start items-center w-full h-[30rem]">
        <div className="flex flex-col justify-center items-center mt-[4rem] w-[18rem] h-[20rem]">
          <div className=" flex justify-between items-center w-[11rem] mb-[2rem]">
            <span class="material-symbols-outlined text-[4.3rem] text-gray-400">
              account_balance
            </span>
            <span class="material-symbols-outlined text-[1.8rem] text-gray-400">favorite</span>
            <span class="material-symbols-outlined text-[4.3rem] text-gray-400">credit_card</span>
          </div>
          <p className="flex px-[1rem] text-[1.6rem] font-[500] text-gray-500 leading-[2rem]">
            Add your first payment method
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
    </div>
  );
}
