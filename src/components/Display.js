import React, { Component } from "react";
import Mycarousel from "./carsousel/DisCarousel";
import { Button } from "@material-tailwind/react";

const data = [
  {
    text: "A coding platform for all",
    emojis: "👩🏽",
    link: "https://reactjs.org/",
  },
  {
    text: "Virtual reality workspaces",
    emojis: "🏗️",
    link: "https://github.com/your-username/your-project",
  },
  {
    text: "A cure for cancer in dogs",
    emojis: "🐶",
    link: "https://github.com/your-username/your-project",
  },
  {
    text: "Increasing media literacy",
    emojis: "🗞",
    link: "https://github.com/your-username/your-project",
  },
  {
    text: "A community-owned supermarket",
    emojis: "🛒",
    link: "https://github.com/your-username/your-project",
  },
];

export default class Display extends Component {
  render() {
    return (
      <>
        <div className="lg:hidden mt-20 flex flex-col justify-center items-center mb-14">
          <h5 className=" text-black ">JOIN OVER 1 MILLION INVESTORS</h5>

          <div className="  w-96 mt-8">
            <div className=" flex flex-col">
              <h6 className=" display">$250</h6>
              <p className="displayd">median investment</p>
            </div>
            <div className="mt-6 flex flex-col">
              <h6 className=" display ">3,241</h6>
              <p className="displayd">founders funded</p>
            </div>
            <div className=" mt-6 flex flex-col">
              <span className=" displayr">$69Cr</span>
              <p className="displayd">raised on VentureList</p>
            </div>
          </div>

          <div className="mt-12 mb-10 w-[97vw]">
            <div className="flex mb-4 items-center justify-center relative overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-40 before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-40 after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
              <Mycarousel children={this.cardsArray} anime={"RL"}>
                {data.map((but, index) => (
                  <a href={`${but.link}`} className="button-link">
                    <Button
                      variant="outlined"
                      className="flex justify-center items-center px-4 w-max gap-4 h-8 rounded-lg border-gray-400 ml-4 font-normal text-black tracking-wide"
                    >
                      {but.emojis} {but.text}
                    </Button>
                  </a>
                ))}
              </Mycarousel>
            </div>

            <div className="flex items-center justify-center relative overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-40 before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-40 after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
              <Mycarousel
                children={this.cardsArray}
                anime={"LR"}
                rever={"flex flex-row-reverse"}
              >
                {data.map((but, index) => (
                  <a href={`${but.link}`} className="button-link">
                    <Button
                      variant="outlined"
                      className="flex justify-center items-center px-4 w-max gap-4 h-8 rounded-lg border-gray-400 ml-4 font-normal text-black tracking-wide"
                    >
                      {but.emojis} {but.text}
                    </Button>
                  </a>
                ))}
              </Mycarousel>
            </div>
          </div>
        </div>

        <div className="hidden mt-20 lg:flex flex-col justify-center items-center mb-14">
          <h5 className=" displayhead text-black ">
            JOIN OVER 1 MILLION INVESTORS
          </h5>

          <div className=" flex items-center justify-around w-[70vw] h-auto mb-[1.5vw] mt-8">
            <div className=" ml-10 flex flex-col">
              <h6 className=" display">$250</h6>
              <p className="displayd">median investment</p>
            </div>
            <div className=" ml-10 flex flex-col">
              <h6 className=" display ">3,241</h6>
              <p className="displayd">founders funded</p>
            </div>
            <div className=" ml-10 flex flex-col">
              <span className=" displayr">$69Cr</span>
              <p className="displayd">raised on VentureList</p>
            </div>
          </div>

          <div className="mt-10 mb-10 w-[80vw]">
            <div className="flex mb-4 items-center justify-center relative overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-40 before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-40 after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
              <Mycarousel children={this.cardsArray} anime={"RL"}>
                {data.map((but, index) => (
                  <a href={`${but.link}`} className="button-link">
                    <Button
                      variant="outlined"
                      className="flex justify-center items-center px-[1.8vw] w-max gap-4 lg:h-10 h-[2.8vw] rounded-lg border-gray-400 ml-4 lg:text-[15px] text-[1.2vw] font-normal text-black tracking-wide"
                    >
                      {but.emojis} {but.text}
                    </Button>
                  </a>
                ))}
              </Mycarousel>
            </div>

            <div className="flex items-center justify-center relative overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-40 before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-40 after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
              <Mycarousel
                children={this.cardsArray}
                anime={"LR"}
                rever={"flex flex-row-reverse"}
              >
                {data.map((but, index) => (
                  <a href={`${but.link}`} className="button-link">
                    <Button
                      variant="outlined"
                      className="flex justify-center items-center px-[1.8vw] w-max gap-4 lg:h-10 h-[2.8vw] rounded-lg border-gray-400 ml-4 lg:text-[15px] text-[1.2vw] font-normal text-black tracking-wide"
                    >
                      {but.emojis} {but.text}
                    </Button>
                  </a>
                ))}
              </Mycarousel>
            </div>
          </div>
        </div>
      </>
    );
  }
}
