import React, { Component } from "react";
import BgImg from "./images/substack_hero_card_en_sm.webp";
import { Card, CardBody, Button } from "@material-tailwind/react";
import logo1 from "./images/Lcarousel_img/a16z-logo-gray.webp";
import logo2 from "./images/yc-logo.webp";

export default class InvestorDisplay extends Component {
  render() {
    return (
      <div
        className="flex justify-center item-center h-auto"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          backgroundColor: "rgb(255, 255, 255)",
          backgroundImage:
            "radial-gradient(at 0% 0%, rgb(254, 215, 170) 0, transparent 36%), radial-gradient(at 100% 0%, rgb(153, 246, 228) 0, transparent 36%)",
        }}
      >
        <div className=" w-4/5 pt-20 flex flex-col justify-center items-center">
          <div>
            <h1
              className=" px-[15vw] text-[3.2vw] tracking-wide text-gray-800 leading-[3.7vw]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Co-invest with VCs and professional angles
            </h1>
            <p
              className=" text-[1.3vw] font-[500]  tracking-wider text-gray-800 mt-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              On the same term, using the same tools
            </p>
          </div>

          <div className=" flex">
            <div
              className=" ml-8 mt-16 bg-cover w-[43vw] h-[35vw]"
              style={{ backgroundImage: `url(${BgImg})` }}
            ></div>
            <div className="  w-1/2 flex items-center justify-center">
              <Card className=" w-[30vw] h-[24.6vw] border">
                <CardBody className="flex flex-col ">
                  <p className="mt-7 ml-6 w-28 text-[18px] text-gray-500">
                    Cap Table
                  </p>
                  <div className="flex mt-5 flex-col justify-center items-center">
                    <div class="w-[25vw] flex justify-start items-center h-[5vw] transition ease-in-out delay-150  hover:-translate-y-1.5 hover:translate-x-1.5 hover:scale-110  duration-300 ... border rounded-lg">
                      <img src={logo1} alt="" className=" ml-5 h-6 mr-6" />{" "}
                      <span className="text-[18px] font-[500]">
                        Andreessen Horowitz
                      </span>
                    </div>
                    <div class="w-[25vw] h-[5vw] flex justify-start items-center mt-6 transition-all translate-y-0 translate-x-0  hover:-translate-y-1.5 hover:translate-x-1.5 hover:scale-110  duration-300 ... border rounded-lg">
                      <img src={logo2} alt="" className="ml-5 h-12 mr-6" />{" "}
                      <span className="text-[18px] font-[500]">
                        Y Combinator
                      </span>
                    </div>
                    <div class="w-[25vw] h-[5vw] flex justify-start items-center mt-6 transition ease-in-out delay-150  hover:-translate-y-1.5 hover:translate-x-1.5 hover:scale-110  duration-300 ... border rounded-lg">
                      <span className="text-[18px] font-extrabold ml-5 mr-6 ">
                        +6,688{" "}
                      </span>{" "}
                      <span className="text-[18px] font-[500]">
                        VentureList investors
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <Button className=" flex justify-center items-center bg-gray-800 h-12 hover:bg-black w-[320px] mb-2 text-[15px] tracking-widest">
              Explore Investor
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
