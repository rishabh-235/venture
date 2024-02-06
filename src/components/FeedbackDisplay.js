import React, { Component } from "react";
import Mycarousel from "./carsousel/DisCarousel";
import avat from "./images/feedback_avatar.jpg";

const data = [
  {
    feedback:
      `"A simple easy gardening solution for folks is a no-brainer! Access to fresh and healthy food for all is a cuase I'm super passionate about."`,
    Avatar: "",
    name: "Amy Josephine Weaver",
    company: "SeedSheet",
    investor: "1,049",
  },

  {
    feedback:
      `"I am huge Mercury Stan! All My companies use it. It is the bank built for human intuition, and y'all are just scratching the surface"`,
    Avatar: "",
    name: "Stefan Opsal",
    company: "Replit",
    investor: "2,589",
  },
];

export default class FeedbackDisplay extends Component {
  render() {
    return (
      <div className=" mt-8 mb-5 flex justify-center items-center">
        <div className="mt-12 mb-10 w-[85vw]">
          <div className="flex mb-4 items-center justify-center relative overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-40 before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-40 after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <Mycarousel children={this.cardsArray} anime={"RL"}>
              {data.map((but, index) => (
                <div className=" w-[24rem] h-[16rem] ml-5 border-[2px] rounded-xl">
                  <div className=" mt-3 h-[9rem] font-[500] tracking-wide p-5 text-start">
                    <p>{but.feedback}</p>
                  </div>
                  <div className=" flex p-5">
                    <img
                      src={avat}
                      alt="avatar"
                      className=" mr-3  w-[3.3rem] h-[3.3rem] mt-1 rounded-full"
                    />
                    <div className=" text-[0.9rem] text-start font-[500] leading-[1.2rem]">
                      <h1 className=" font-[600]">{but.name}</h1>
                      <p>
                        Invested in{" "}
                        <span className=" font-[600]">{but.company}</span>
                      </p>
                      <p>alongside <span>{but.investor}</span> investors</p>
                    </div>
                  </div>
                </div>
              ))}
            </Mycarousel>
          </div>

          <div className="flex items-center justify-center relative overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-40 before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-40 after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <Mycarousel
            className=" w-[60rem]"
              children={this.cardsArray}
              anime={"LR"}
              rever={"flex flex-row-reverse"}
            >
              {data.map((but, index) => (
                <div className=" w-[24rem] h-[16rem] ml-5 border-[2px] rounded-xl">
                  <div className=" mt-3 h-[9rem] font-[500] tracking-wide p-5 text-start">
                    <p>{but.feedback}</p>
                  </div>
                  <div className=" flex p-5">
                    <img
                      src={avat}
                      alt="avatar"
                      className=" mr-3  w-[3.3rem] h-[3.3rem] mt-1 rounded-full"
                    />
                    <div className=" text-[0.9rem] text-start font-[500] leading-[1.2rem]">
                      <h1 className=" font-[600]">{but.name}</h1>
                      <p>
                        Invested in{" "}
                        <span className=" font-[600]">{but.company}</span>
                      </p>
                      <p>alongside <span>{but.investor}</span> investors</p>
                    </div>
                  </div>
                </div>
              ))}
            </Mycarousel>
          </div>
        </div>
      </div>
    );
  }
}
