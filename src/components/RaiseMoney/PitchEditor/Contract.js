import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePitchData } from "../../../redux/slice/pitchDataSlice";

function Contract() {
  const dispatch = useDispatch();
  const [future, setFuture] = useState(false);
  const [convertible, setConvertible] = useState(false);
  const [revenue, setRevenue] = useState(false);
  const [simple, setSimple] = useState(false);
  const [stock, setStock] = useState(false);
  const [other, setOther] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [contractData, setContractData] = useState({});
  const [valuaton, setValuation] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [payback, setPayback] = useState("");
  const [investorRevenue, setInvestorRevenue] = useState("");
  const [investorBonus, setInvestorBonus] = useState("");

  const handleOptions = (e) => {
    if (e.target.value === "future") {
      setFuture(true);
      setConvertible(false);
      setSimple(false);
      setStock(false);
      setOther(false);
      setRevenue(false);
      setContractData(() => ({
        textData: {
          contractName: `future`,
          valuation_cap: valuaton,
          discount: discountPercentage,
          term_to_vip: investorBonus,
        },
      }));
    } else if (e.target.value === "convertible") {
      setFuture(true);
      setConvertible(true);
      setSimple(false);
      setStock(false);
      setOther(false);
      setRevenue(false);
      setContractData(() => ({
        textData: {
          contractName: `convertible`,
          valuation_cap: valuaton,
          discount: discountPercentage,
          term_to_vip: investorBonus,
        },
      }));
    } else if (e.target.value === "revenue") {
      setFuture(false);
      setConvertible(false);
      setSimple(false);
      setStock(false);
      setOther(false);
      setRevenue(true);
      setContractData(() => ({
        textData: {
          contractName: `revenue`,
          payback: payback,
          investor_revenue_per: investorRevenue,
          term_to_vip: investorBonus,
        },
      }));
    } else if (e.target.value === "future&revenue") {
      setConvertible(false);
      setSimple(false);
      setStock(false);
      setOther(false);
      setFuture(true);
      setRevenue(true);
      setContractData(() => ({
        textData: {
          contractName: `future&revenue`,
          valuation_cap: valuaton,
          payback: payback,
          investor_revenue_per: investorRevenue,
          term_to_vip: investorBonus,
        },
      }));
    } else if (e.target.value === "simple") {
      setConvertible(false);
      setSimple(true);
      setStock(false);
      setOther(false);
      setFuture(false);
      setRevenue(false);
      setContractData(() => ({
        textData: {
          contractName: `simple`,
          term_to_vip: investorBonus,
        },
      }));
    } else if (e.target.value === "stock") {
      setConvertible(false);
      setSimple(false);
      setStock(true);
      setOther(false);
      setFuture(false);
      setRevenue(false);
      setContractData(() => ({
        textData: {
          contractName: `stock`,
          term_to_vip: investorBonus,
        },
      }));
    } else if (e.target.value === "discount") {
      setDiscount(true);
    } else {
      setConvertible(false);
      setSimple(false);
      setStock(false);
      setOther(true);
      setFuture(false);
      setRevenue(false);
      setContractData(() => ({
        textData:{
          contractName: `other`
        }
      }));
    }

    dispatch(
      updatePitchData({
        pitchName: "contract",
        data: {
          textData: {
            ...contractData.textData,
          },
        },
      })
    );
  };

  const handleChange = (e) => {
    if (e.target.name !== "terms_to_vip") e.preventDefault();
    const { name, value } = e.target;

    if (name === "valuation_cap") setValuation(value);
    else if (name === "payback") setPayback(value);
    else if (name === "discount") setDiscountPercentage(value);
    else if (name === "terms_to_vip") setInvestorBonus(value);
    else if (name === "investor_revenue_per") setInvestorRevenue(value);

    setContractData((prevState) => ({
      ...prevState,
      textData: {
        ...prevState.textData,
        ...{ [name]: value },
      },
    }));

    dispatch(
      updatePitchData({
        pitchName: "contract",
        data: {
          textData: {
            ...contractData.textData,
            ...({ [name]: value }),
          },
        },
      })
    );
  };

  return (
    <div className=" mb-20">
      <div className=" text-left w-1/2 ml-[2.5rem] mb-[0.2rem]">
        <p className="text-[1.6rem] font-[600] text-gray-900 placeholder:text-blue-gray-200">
          Contract
        </p>
        <p className=" w-[80%] text-[1.2rem] font-[500] text-blue-gray-800 py-1 mt-[0.1rem] mb-3">
          Choose an investment contract
        </p>
      </div>

      <div className=" ml-[2.5rem] w-1/2">
        <div class=" flex items-center mb-[1.05rem]">
          <input
            id="default-radio-1"
            type="radio"
            value="future"
            name="default-radio"
            onChange={handleOptions}
            class="w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class=" flex ms-2 text-[0.93rem] font-medium text-gray-800 dark:text-gray-300"
          >
            <p className="flex items-center cursor-pointer">
              Future Equity (SAFE)
            </p>
            <p class=" peer flex cursor-pointer">
              <button type="button">
                <svg
                  class="w-4 h-4 ms-2 text-gray-400 hover:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Show information</span>
              </button>
            </p>
            <div class=" peer-hover:opacity-100 peer-hover:-translate-x-[15rem] peer-hover:duration-0 absolute inline-block text-gray-900 placeholder:text-blue-gray-200 bg-white border-2 border-gray-200 rounded-[5px] opacity-0 w-[24rem] mt-7 ml-[20rem] p-[0.05rem]">
              <div class=" p-6 space-y-2 text-start bg-[#f1f9fe]">
                <h3 class=" text-[1rem]">
                  Best for high-growth startups in SF
                </h3>
                <p className=" text-[0.75rem]">
                  A Simple Agreement for Future Equity (SAFE) is common in
                  Silicon Valley among startups that expect to raise venture
                  capital. It delays the valuation of your company until the
                  next equity financing.
                </p>
              </div>
            </div>
          </label>
        </div>

        <div class=" flex items-center mb-[1.05rem]">
          <input
            id="default-radio-2"
            type="radio"
            value="convertible"
            name="default-radio"
            onChange={handleOptions}
            class="w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class=" flex ms-2 text-[0.93rem] font-medium text-gray-800 dark:text-gray-300"
          >
            <p className="flex items-center cursor-pointer">Convertible Note</p>
            <p class="peer flex items-center cursor-pointer">
              <button type="button">
                <svg
                  class="w-4 h-4 ms-2 text-gray-400 hover:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Show information</span>
              </button>
            </p>
            <div
              data-popover
              id="popover-description-2"
              role="tooltip"
              class=" peer-hover:opacity-100 peer-hover:-translate-x-[15rem] peer-hover:duration-0 absolute inline-block text-gray-900 placeholder:text-blue-gray-200 bg-white border-2 border-gray-200 rounded-[5px] opacity-0 w-[24rem] mt-7 ml-[20rem] p-[0.05rem]"
            >
              <div class="p-6 space-y-2 text-start bg-[#f1f9fe]">
                <h3 class="text-[1rem]">
                  Best for startups in conservative areas
                </h3>
                <p className=" text-[0.75rem]">
                  A convertible note is more common outside of Silicon Valley or
                  NYC among startups that intend to raise venture capital. Like
                  a SAFE, it delays the valuation of your company until the next
                  equity financing. Unlike a SAFE, a convertible note is debt
                  (until it converts to equity at the next financing)
                </p>
              </div>
            </div>
          </label>
        </div>

        <div class=" flex items-center mb-[1.05rem]">
          <input
            id="default-radio-3"
            type="radio"
            value="revenue"
            name="default-radio"
            onChange={handleOptions}
            class="w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-3"
            class=" flex ms-2 text-[0.93rem] font-medium text-gray-800 dark:text-gray-300"
          >
            <p className="flex items-center cursor-pointer">Revenue Share</p>
            <p class="peer flex items-center cursor-pointer">
              <button type="button">
                <svg
                  class="w-4 h-4 ms-2 text-gray-400 hover:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Show information</span>
              </button>
            </p>
            <div
              data-popover
              id="popover-description-2"
              role="tooltip"
              class=" peer-hover:opacity-100 peer-hover:-translate-x-[15rem] peer-hover:duration-0 absolute inline-block text-gray-900 placeholder:text-blue-gray-200 bg-white border-2 border-gray-200 rounded-[5px] opacity-0 w-[24rem] mt-7 ml-[20rem] p-[0.05rem]"
            >
              <div class="p-6 space-y-2 text-start bg-[#f1f9fe]">
                <h3 class="text-[1rem]">Best for mainstreet companies</h3>
                <p className=" text-[0.75rem]">
                  Revenue Shares are best for cash-generating businesses that
                  don't plan to get acquired for millions of dollars. It offers
                  investors a percent of your revenues - each quarter - until
                  they earn a multiple of their money back. If you have no
                  revenue, nothing is owed. Once you pay back the multiple of
                  their investment, nothing is owed.
                </p>
              </div>
            </div>
          </label>
        </div>

        <div class=" flex items-center mb-[1.05rem]">
          <input
            id="default-radio-4"
            type="radio"
            value="future&revenue"
            name="default-radio"
            onChange={handleOptions}
            class="w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-4"
            class=" flex ms-2 text-[0.93rem] font-medium text-gray-800 dark:text-gray-300"
          >
            <p className="flex items-center cursor-pointer">
              Future Equity + Revenue Share
            </p>
            <p class="peer flex items-center cursor-pointer">
              <button type="button">
                <svg
                  class="w-4 h-4 ms-2 text-gray-400 hover:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Show information</span>
              </button>
            </p>
            <div
              data-popover
              id="popover-description-2"
              role="tooltip"
              class=" peer-hover:opacity-100 peer-hover:-translate-x-[10rem] peer-hover:duration-0 absolute inline-block text-gray-900 placeholder:text-blue-gray-200 bg-white border-2 border-gray-200 rounded-[5px] opacity-0 w-[24rem] mt-7 ml-[15rem] p-[0.05rem]"
            >
              <div class="p-6 space-y-2 text-start bg-[#f1f9fe]">
                <h3 class="text-[1rem]">Good deal for investors</h3>
                <p className=" text-[0.75rem]">
                  If you'd like to offer a good deal to your investors, combine
                  a Simple Agreement for Future Equity (SAFE) with a Revenue
                  Share. The revenue share offers investors 10% of your revenues
                  - each quarter - until they earn 2X their investment back. The
                  SAFE can eventually give your earliest investors equity in
                  your company, if you raise a priced round from a venture
                  capitalist or other major investor.
                </p>
              </div>
            </div>
          </label>
        </div>

        <div class=" flex items-center mb-[1.05rem]">
          <input
            id="default-radio-5"
            type="radio"
            value="simple"
            name="default-radio"
            onChange={handleOptions}
            class="w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-5"
            class=" flex ms-2 text-[0.93rem] font-medium text-gray-800 dark:text-gray-300"
          >
            <p className="flex items-center cursor-pointer">Simple Loan</p>
            <p class="peer flex items-center cursor-pointer">
              <button type="button">
                <svg
                  class="w-4 h-4 ms-2 text-gray-400 hover:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Show information</span>
              </button>
            </p>
            <div
              data-popover
              id="popover-description-2"
              role="tooltip"
              class=" peer-hover:opacity-100 peer-hover:-translate-x-[10rem] peer-hover:duration-0 absolute inline-block text-gray-900 placeholder:text-blue-gray-200 bg-white border-2 border-gray-200 rounded-[5px] opacity-0 w-[24rem] mt-7 ml-[15rem] p-[0.05rem]"
            >
              <div class="p-6 space-y-2 text-start bg-[#f1f9fe]">
                <h3 class="text-[1rem]">Best for grandma</h3>
                <p className=" text-[0.75rem]">
                  A 10% interest 5 year loan is the simplest investment
                  agreement. It's like your car payment. If you borrow $20,000,
                  you'll pay back $424.94 a month for 5 years. You'll start
                  paying 6 months after you receive the money. In most cases, a
                  revenue share is more exciting to investors because of higher
                  potential returns. It's also often preferred by companies, as
                  it can be less risky if revenues are less than you expect.
                </p>
              </div>
            </div>
          </label>
        </div>

        <div class=" flex items-center mb-[1.05rem]">
          <input
            id="default-radio-6"
            type="radio"
            value="stock"
            name="default-radio"
            onChange={handleOptions}
            class="w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-6"
            class=" flex ms-2 text-[0.93rem] font-medium text-gray-800 dark:text-gray-300"
          >
            <p className="flex items-center cursor-pointer">Preferred Stock</p>
            <p class="peer flex items-center cursor-pointer">
              <button type="button">
                <svg
                  class="w-4 h-4 ms-2 text-gray-400 hover:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Show information</span>
              </button>
            </p>
            <div
              data-popover
              id="popover-description-2"
              role="tooltip"
              class=" peer-hover:opacity-100 peer-hover:-translate-x-[10rem] peer-hover:duration-0 absolute inline-block text-gray-900 placeholder:text-blue-gray-200 bg-white border-2 border-gray-200 rounded-[5px] opacity-0 w-[24rem] mt-7 ml-[15rem] p-[0.05rem]"
            >
              <div class="p-6 space-y-2 text-start bg-[#f1f9fe]">
                <h3 class="text-[1rem]">Best for those with good lawyers</h3>
                <p className=" text-[0.75rem]">
                  Wefunder doesn't have an out-of-the-box stock subscription
                  agreement. However, we can work with any documents that your
                  lawyer has drafted up. They also can customize templates like
                  the Series Seed documents.
                </p>
              </div>
            </div>
          </label>
        </div>

        <div class=" flex items-center mb-[1.05rem]">
          <input
            id="default-radio-7"
            type="radio"
            value="other"
            name="default-radio"
            onChange={handleOptions}
            class="w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-7"
            class=" flex ms-2 text-[0.93rem] font-medium text-gray-800 dark:text-gray-300"
          >
            <p className="flex items-center cursor-pointer">
              Other/I don't know yet
            </p>
            <p class="peer flex items-center cursor-pointer">
              <button type="button">
                <svg
                  class="w-4 h-4 ms-2 text-gray-400 hover:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Show information</span>
              </button>
            </p>
            <div
              data-popover
              id="popover-description-2"
              role="tooltip"
              class=" peer-hover:opacity-100 peer-hover:-translate-x-[10rem] peer-hover:duration-0 absolute inline-block text-gray-900 placeholder:text-blue-gray-200 bg-white border-2 border-gray-200 rounded-[5px] opacity-0 w-[24rem] mt-7 ml-[15rem] p-[0.05rem]"
            >
              <div class="p-6 space-y-2 text-start bg-[#f1f9fe]">
                <h3 class="text-[1rem]">That's okay!</h3>
                <p className=" text-[0.75rem]">
                  You can always select your contract and set your terms later.
                  If none of the above contracts look right for you, you can set
                  up a custom contract.
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>

      {(future || convertible || revenue || simple || stock || other) && (
        <div className="ml-[2.5rem] w-1/2 text-start mt-[2.5rem] ">
          <h3 className=" text-[1.18rem] font-[500] text-gray-800">
            Set terms & valuation
          </h3>
          {future && (
            <div>
              <div className=" mb-5 mt-5">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  What is your valuation cap?
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <input
                    id="valuation_cap"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.7rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                    type="number"
                    name="valuation_cap"
                    placeholder="0"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="linkedin"
                    className="peer-focus:text-blue-gray-900 flex absolute top-[1.1rem] text-blue-gray-200 font-[600] text-[1.02rem] ml-[0.98rem]"
                  >
                    ₹ 
                  </label>
                </div>
              </div>
            </div>
          )}

          {convertible && (
            <div>
              <div className=" mb-5 mt-4">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  What is the interest rate?
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <input
                    id="interest_rate"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                    type="number"
                    name="interest_rate"
                    placeholder="6%"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}

          {(future || convertible) && !revenue && discount && (
            <div>
              <div className=" mb-5 mt-4">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  What is the discount?
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <input
                    id="discount"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                    type="number"
                    name="discount"
                    placeholder="0%"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}

          {(future || convertible) && !revenue && !discount && (
            <button
              value="discount"
              onClick={handleOptions}
              className=" underline ml-4 font-[700] text-[0.92rem] mt-[0.2rem]"
            >
              Show Advanced
            </button>
          )}

          {revenue && (
            <div>
              <div className=" mb-5 mt-5">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  What is the payback multiple?
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <input
                    id="payback"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                    type="number"
                    name="payback"
                    placeholder="1.75x"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className=" mb-5 mt-4">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  What percentage of revenues will go to investors?
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <input
                    id="investor_revenue_per"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                    type="number"
                    name="investor_revenue_per"
                    placeholder="20%"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}

          {simple && (
            <div>
              <div className=" mb-5 mt-5">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  What is the interest rate?
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <input
                    id="simple_interest_rate"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                    type="number"
                    name="simple_interest_rate"
                    placeholder="10%"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className=" mb-5 mt-5">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  How often will you make payments?
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <select
                    onChange={handleChange}
                    id="repayment"
                    name="repayment"
                    class="peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[500] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                  >
                    <option
                      className=" text-[1.02rem] font-[500] text-gray-900 placeholder:text-blue-gray-200"
                      value="annually"
                      selected
                      disabled
                    >
                      Select Payment Option
                    </option>

                    <option
                      className=" text-[1.02rem] font-[500] text-gray-900 placeholder:text-blue-gray-200"
                      value="annually"
                    >
                      Annually
                    </option>
                    <option
                      className=" text-[1.02rem] font-[500] text-gray-900 placeholder:text-blue-gray-200"
                      value="quaterly"
                    >
                      Quarterly
                    </option>
                  </select>
                </div>
              </div>

              <div className=" mb-5 mt-4">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  What is the term of the loan? (in months)
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <input
                    id="loan_term"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                    type="number"
                    name="loan_term"
                    placeholder="12"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}

          {stock && (
            <div>
              <div className=" mb-5 mt-5">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  What is the pre-money valuation?
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <input
                    id="pre_money_valuation"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.7rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                    type="number"
                    name="pre_money_valuation"
                    placeholder="0"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="linkedin"
                    className="peer-focus:text-blue-gray-900 flex absolute top-[1.1rem] text-blue-gray-200 font-[600] text-[1.02rem] ml-[0.98rem]"
                  >
                    ₹ 
                  </label>
                </div>
              </div>
            </div>
          )}

          {other && (
            <div>
              <div className=" mb-5 mt-5">
                <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
                  What should we tell investors?
                </p>
                <div className="w-[31.7rem] relative mt-3">
                  <textarea
                    id="investor_advise"
                    className=" resize-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[500] text-gray-900 placeholder:text-blue-gray-200 w-[31.7rem] h-[5.2rem] rounded-[0.4rem] border-gray-300 border-[1px] mb-3"
                    type="number"
                    name="investor_advise"
                    placeholder=""
                    maxLength="300"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {(future || convertible || revenue || simple || stock) && (
        <div className=" flex flex-col ml-[2.5rem] w-1/2 text-start mt-10 py-1 gap-1">
          <h3 className=" text-[1.18rem] font-[500] text-gray-800">
            VIP Investor Bonus
          </h3>
          <div className=" mb-5">
            <p className=" w-[30rem] text-[0.9rem] text-blue-gray-600 font-[500] leading-[1.3rem]">
              Raise more money, faster, by giving better terms to your first
              investors and Wefunder’s VIP Investors.
            </p>
          </div>
          <div class=" flex items-center mb-[1.05rem]">
            <input
              id="terms_to_vip1"
              type="radio"
              value="betters_terms"
              name="terms_to_vip"
              onChange={handleChange}
              class=" w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              for="terms_to_vip1"
              class=" flex ms-2 text-[0.93rem] font-medium text-gray-800"
            >
              <p className="flex items-center cursor-pointer">
                Give VIPs and early investors better terms
                <span className=" text-[0.83rem] font-[800] text-[#26c897] tracking-wide ml-2">
                  RECOMMENDED
                </span>
              </p>
            </label>
          </div>

          <div class=" flex items-center mb-[1.05rem]">
            <input
              id="terms_to_vip2"
              type="radio"
              value="not_better_terms"
              name="terms_to_vip"
              onChange={handleChange}
              class=" w-4 h-4 text-gray-600 cursor-pointer  bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              for="terms_to_vip2"
              class=" flex ms-2 text-[0.93rem] font-medium text-gray-800"
            >
              <p className="flex items-center cursor-pointer">
                Don't give VIPs better terms
              </p>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contract;
