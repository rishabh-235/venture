import {React, useState} from "react";
import { Card, CardBody, Collapse } from "@material-tailwind/react";
import kiwilogo from "../images/icons8-kiwi-bird-30.png";
import axios from "axios";
// import { errors } from "playwright";



export default function OrderBar() {

  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState();

  const toggleOpen = () => setOpen((cur) => !cur);

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  }

  const checkoutHandler = async (amount) => {
    const {data:{ key }} = await axios.get("http://localhost:8000/api/v1/payment/getkey")

    var order;

    
  
    var options = {
      key,
      amount: order.amount, 
      currency: "INR",
      name: "VentureList",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, 
      callback_url: "http://localhost:8000/api/v1/payment/paymentverification",
      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          "color": "#2DB6FB"
      }
  };

  const razor = new window.Razorpay(options);
  razor.open();
  }

  return (

    <div className="w-[20.8rem] shadow-lg border-x-[1.3px] rounded-md sticky top-0">
      <div className="px-4 pt-4 pb-2">
        <Card className="shadow-none">
          <CardBody>
            <div className="mb-3 flex flex-col jus">
              <div className="flex justify-start items-center text-orange-500">
                <img
                  src={kiwilogo}
                  className="h-[1rem] w-[1rem] mr-2"
                  alt=""
                />
                <p className="text-[0.78rem] font-[600] tracking-wide mr-1">
                  EARLY BIRD TERMS: $30,426 LEFT
                </p>
                <span className="material-symbols-outlined text-[1.2rem]">
                  help
                </span>
              </div>
              <div className="mt-[0.5rem] w-full">
                <div className="h-[0.28rem] w-[12rem] bg-orange-500"></div>
              </div>
              <div className="flex justify-start items-center mt-[0.6rem] text-[2.4rem] text-black font-[500]">
                <span className="material-symbols-outlined -ml-2 -p-1 text-[2.4rem]">
                  currency_rupee
                </span>
                58,14,076.54
              </div>
              <p className="text-[0.9rem] text-gray-400 text-start tracking-wider">
                raised from 55 investors
              </p>

              <div className="flex flex-col justify-start mt-[2.6rem]">
                <div className="flex justify-between items-center h-[4.5rem]">
                  <div className="flex flex-col w-[43%]">
                    <p className="font-[500] mb-[0.18rem] tracking-wide text-black text-start text-[1.05rem]">
                      INVEST
                    </p>
                    <p className="flex justify-start items-center text-[0.9rem] text-gray-400">
                      min{" "}
                      <span className="material-symbols-outlined -mr-[0.2rem] text-[1rem]">
                        currency_rupee
                      </span>
                      10000
                    </p>
                  </div>

                  <div className="h-[3.6rem] w-[50%] flex justify-center items-center">
                    <div className="flex justify-center items-center z-10 -mr-[1.8rem]">
                      <span className="material-symbols-outlined text-[1.3rem] text-gray-400">
                        currency_rupee
                      </span>
                    </div>
                    <input
                      className="pl-8 h-full w-[10rem] text-right text-[1.5rem] tracking-wider font-[600] text-black border-2 border-blue-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-light-blue-800 focus:rounded-sm"
                      type="number"
                      placeholder="0"
                      value={amount}
                      onChange={handleInputChange}
                      style={{
                        // Hide spin buttons in WebKit browsers (Chrome, Safari)
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                      }}
                    />
                    <style jsx>{`
                      /* Hide spin buttons in WebKit browsers */
                      input::-webkit-outer-spin-button,
                      input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                      }

                      /* Hide spin buttons in Firefox */
                      input[type="number"] {
                        -moz-appearance: textfield;
                      }

                      /* Remove blue outline in all browsers */
                      input:focus {
                        outline: none;
                        box-shadow: none;
                        border: 1px transparent;
                      }
                    `}</style>
                  </div>
                </div>

                <div>
                  <button
                    className="w-full h-[3.1rem] mt-2 hover:opacity-80 rounded-[3px] text-white text-[0.95rem] tracking-wider font-[600]"
                    style={{ backgroundColor: "#F04E45" }}
                    onClick={() => checkoutHandler(amount)}
                  >
                    INVEST
                  </button>
                  <button className="flex justify-center items-center w-full h-[3rem] mt-[0.5rem] rounded-[3px] border-[1.2px] border-light-blue-700 hover:border-light-blue-900 hover:text-light-blue-900 tracking-wider text-[0.9rem] font-[600] text-light-blue-800">
                    <span className="material-symbols-outlined mr-[0.2rem] text-[1.3rem] text-light-blue-800 hover:text-light-blue-900">
                      favorite
                    </span>
                    WATCH FOR UPDATES
                  </button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="p-4 border-t-[2px] border-gray-200">
        <button className="w-full h-full" onClick={toggleOpen}>
          <p className="flex justify-between items-center text-[0.75rem] font-[600] text-gray-400 tracking-wider text-start">
            INVESTMENT TERMS
            <span className="material-symbols-outlined text-[1rem] text-gray-500">
              keyboard_arrow_down
            </span>
          </p>

          <div className="mt-4">
            <p className="text-start text-[0.75rem] font-[600] text-black tracking-wide">
              Future Equity
            </p>
            <p className="flex justify-start items-center">
              <span className="flex justify-center items-center tracking-wider text-[0.8rem] font-[500] line-through decoration-orange-600">
                ₹62.6Cr
              </span>
              <span className="flex justify-center items-center ml-2 text-[0.8rem] font-[600] tracking-wider mr-2">
                <span className="material-symbols-outlined text-[0.8rem]">
                  currency_rupee
                </span>{" "}
                48.0Cr
              </span>
              <span className="text-[0.8rem] text-gray-400 font-[400]">
                valuation cap
              </span>
            </p>

            <p className="text-start text-[0.78rem] text-gray-400 font-[400] tracking-wide mt-3">
              <span className="font-[600] text-black">Early Bird Bonus:</span>
              &nbsp;&nbsp; The first ₹83.5L of investments will be in a SAFE
              with a ₹4312.5L valuation cap and 20% discount
            </p>

            <p className="flex justify-center items-center text-start text-gray-400 font-[400] tracking-wide mt-3">
              <span className="material-symbols-outlined text-[0.8rem] mr-[0.18rem] text-black">
                redeem
              </span>
              <span className="font-[600] text-black text-[0.78rem] w-[9.8rem]">Investor Perks:</span>
              <span className="text-[0.7rem]">₹18.8K, ₹37.5K, ₹75L Cr, ₹750L Cr, ₹1875L Cr</span>
            </p>
          </div>
        </button>
        <Collapse open={open}>
          <div className="flex flex-col justify-start items-start mt-5 mb-2">
            <p className="text-start text-[0.76rem] text-gray-400 font-[400] leading-[1.3rem]">
              A Future Equity Agreement (SAFE) gives you the right to future
              shares in the company. If you invest, you're betting the company
              will be worth more than ₹48.0Cr eventually.
            </p>
            <a href="/" className="text-[0.83rem] text-gray-700 font-[500] tracking-wide mt-4 underline hover:text-light-blue-800">
              Learn more about SAFEs
            </a>
          </div>
        </Collapse>
      </div>
    </div>
  );
}