import React, { Component } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import img from "../images/Red Bay Coffee Is About Community.jpeg"

export default class InvestingProfile extends Component {
  render() {
    return (
      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="flex flex-col items-center justify-center mt-14">
        <div className=" flex flex-col w-[50vw]">
          <h2 className="text-[3.12rem] tracking-wide text-gray-700 leading-[60px]">From Tomorrow's unicorns to local coffee shops</h2>
          <p className="text-[1.2rem] font-[500] text-gray-900 mt-5 px-12 mb-10">invest to bring founders' dreams to life, strengthen local communities, build a portfolio of long-term angle investments, or all of the above.</p>
        </div>
        <div className=" flex  justify-center items-center ">
          <div className=" -mt-[12.2rem] w-[45%] flex flex-col ml-40 -mr-16">
            <div>
              <p className="mb-4 w-[13vw]  text-[1.2vw] text-start font-[500] text-gray-600">
                Browse by industry
              </p>
              <div className="flex flex-row items-start justify-start flex-wrap gap-4">
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Coffee
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Restaurant
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Film
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Tech
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Healthcare
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Music
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Brewery
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Biotech
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Ecommerce
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  PCBs & B-Corps
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Sustainability
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Eduacation
                </button>
              </div>
            </div>

            <div>
              <p className="mb-4 mt-6 w-[13vw]  text-[1.25vw] text-start font-[500] text-gray-600">
                Browse by founder
              </p>
              <div className="flex flex-row items-start justify-start flex-wrap gap-4">
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Minority Founder
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Female Founder
                </button>
              </div>
            </div>

            <div>
              <p className="mb-4 mt-6 w-[13vw]  text-[1.25vw] text-start font-[500] text-gray-600">
                Browse by backers
              </p>
              <div className="flex flex-row items-start justify-start flex-wrap gap-4">
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Notable VCs
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Y Combinator
                </button>
              </div>
            </div>

            <div>
              <p className="mb-4 mt-6 w-[12vw]  text-[1.25vw] text-start font-[500] text-gray-600">
                Browse by stage
              </p>
              <div className="flex flex-row items-start justify-start flex-wrap gap-4">
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Pre-Seed
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Seed
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Series A
                </button>
                <button
                  variant="outlined"
                  className=" px-[1vw] py-[0.5rem] tracking-wider border-2 rounded-lg font-[500] transition-colors hover:border-gray-400"
                >
                  Series B
                </button>
              </div>
            </div>
          </div>
          <div className=" w-1/2 h-[45rem] mr-10">
            <Card className="max-w-[32vw] overflow-hidden border-2 border-black ml-[6rem]">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 h-[32rem] rounded-none"
              >
                <img
                  src={img}
                  alt="ui/ux review check"
                />
              </CardHeader>

              <CardBody className="flex flex-col items-start">
                <a href="/" className=" text-[1.2rem] font-[600] text-black">
                  {" "}
                  Red Bay Coffee
                </a>
                <p className=" text-[1.04rem] font-[500]">
                  Beautiful coffee to the people
                </p>
                <p className=" text-[1.04rem] font-[500]">
                  213 investor invested ₹1,60,269
                </p>
              </CardBody>

              <CardFooter className=" -mt-8 flex items-center justify-between">
                <Button className=" flex justify-center items-center bg-gray-800  hover:bg-black px-5 py-2 mb-4 text-[14px] tracking-wide rounded-[3px]">
                  Explore Coffee Shops{" "}
                  <span class="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}